/* ── Post-build prerender (browser 없음) ─────────────────────────────────────
 * vite build 후 실행. dist/public/index.html 을 템플릿으로:
 *   1. 홈(#root)에 정적 SEO 본문 주입 — 봇이 JS 없이 브랜드/제품 텍스트를 읽음
 *   2. 제품 라우트별 dist/public/products/<id>/index.html 생성
 *      (라우트별 title·description·canonical·og + 제품 본문)
 *   3. sitemap.xml 재생성 (제품 목록 = 단일 소스 products.ts)
 * React 는 createRoot().render() 로 마운트 시 주입 본문을 통째로 교체하므로
 * 사용자 경험은 기존과 동일 (첫 페인트에 텍스트가 잠깐 보이는 것뿐).
 * ------------------------------------------------------------------------- */
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");
const ORIGIN = "https://www.gana-cosmetics.com";

/* products.ts (TS) → 임시 mjs 로 변환해 import */
const tmp = path.join(root, "dist", "_products-data.mjs");
await build({
  entryPoints: [path.join(root, "client", "src", "data", "products.ts")],
  outfile: tmp, bundle: true, format: "esm", platform: "neutral",
});
const { PRODUCTS } = await import(pathToFileURL(tmp).href);

const template = readFileSync(path.join(outDir, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* 주입 블록 공통 스타일 — React 마운트 전 잠깐 보이므로 사이트 톤과 맞춤 */
const wrap = (inner) =>
  `<div style="max-width:760px;margin:0 auto;padding:48px 24px;font-family:'DM Sans',sans-serif;color:#16222C;background:#fff">${inner}</div>`;

function setHead(html, { title, desc, url }) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[\s\S]*?(" \/>)/, `$1${esc(desc)}$2`)
    .replace(/(<meta property="og:title" content=")[\s\S]*?(" \/>)/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[\s\S]*?(" \/>)/, `$1${esc(desc)}$2`)
    .replace(/(<meta name="twitter:title" content=")[\s\S]*?(" \/>)/, `$1${esc(title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[\s\S]*?(" \/>)/, `$1${esc(desc)}$2`)
    .replace(/(<meta property="og:url" content=")[\s\S]*?(" \/>)/, `$1${url}$2`)
    .replace("</head>", `  <link rel="canonical" href="${url}" />\n  </head>`);
}
const setBody = (html, inner) =>
  html.replace('<div id="root"></div>', `<div id="root">${wrap(inner)}</div>`);

/* ── 1. 홈 ── */
const productLinks = PRODUCTS.map(
  (p) => `<li><a href="/products/${p.id}">${esc(p.name)} — ${esc(p.tag)}</a></li>`
).join("\n");

const homeBody = `
  <h1>GANA Cosmetics 가나 코스메틱</h1>
  <p><strong>Cosmeceutical Solutions for Professionals.</strong>
  A U.S. FDA-registered manufacturer with EU CPNP-notified formulations —
  GANA Cosmetic Co., Ltd. supplies PDRN, PLLA, and HA cosmeceuticals
  to distributors and aesthetic clinics worldwide.</p>
  <p>가나 코스메틱은 스킨부스터, 메조테라피, 화학적 필링, 펩타이드 등
  클리닉과 유통사를 위한 코스메슈티컬을 제조하는 한국 기업입니다.
  미국 FDA 등록, EU CPNP 인증 완료. 전 제품 가격은 문의 시 안내드립니다.</p>
  <h2>Products</h2>
  <ul>${productLinks}</ul>
  <p>Contact: contact@gana-cosmetics.com · jsm4885@ganarnd.co.kr</p>`;

let home = setHead(template, {
  title: "GANA Cosmetics 가나 코스메틱 — Cosmeceutical Solutions for Professionals",
  desc: template.match(/<meta name="description" content="([\s\S]*?)" \/>/)[1],
  url: `${ORIGIN}/`,
});
home = setBody(home, homeBody);
writeFileSync(path.join(outDir, "index.html"), home);

/* ── 2. 제품 페이지 ── */
for (const p of PRODUCTS) {
  const title = `${p.name} — GANA Cosmetics`;
  const desc = `${p.tag}. ${p.desc}`.slice(0, 300);
  const url = `${ORIGIN}/products/${p.id}`;
  const body = `
    <p><a href="/">← GANA Cosmetics 가나 코스메틱</a></p>
    <h1>${esc(p.name)}</h1>
    <p><strong>${esc(p.tag)}</strong></p>
    <p>${esc(p.desc)}</p>
    <ul>
      <li>Key actives: ${p.ings.map(esc).join(", ")}</li>
      <li>Volume / packaging: ${esc(p.vol)}</li>
      <li>Price: inquiry (dealer &amp; volume pricing available)</li>
      ${p.certs?.length ? `<li>Certifications: ${p.certs.map(esc).join(", ")}</li>` : ""}
    </ul>
    <p>Inquiry: contact@gana-cosmetics.com</p>`;
  let page = setHead(template, { title, desc, url });
  page = setBody(page, body);
  const dir = path.join(outDir, "products", p.id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), page);
}

/* ── 3. sitemap ── */
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${ORIGIN}/`, pri: "1.0" },
  ...PRODUCTS.map((p) => ({ loc: `${ORIGIN}/products/${p.id}`, pri: "0.8" })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.pri}</priority>\n  </url>`).join("\n")}
</urlset>\n`;
writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);

console.log(`[prerender] home + ${PRODUCTS.length} product pages + sitemap done`);
