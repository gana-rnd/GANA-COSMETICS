/* ── Product detail page  /products/:id ──────────────────────────────────── */
import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { C, getProduct, getRelated, type Product } from "@/data/products";
import { useT } from "@/i18n/LanguageContext";
import { fmt, ingredientBlurb } from "@/i18n/translations";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

const serif = "'Playfair Display',serif";
const sans  = "'DM Sans',sans-serif";
const mono  = "'DM Mono',monospace";

function FlaskPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke={C.border} strokeWidth="1">
        <path d="M9 3h6M9 3v7l-4 8a1 1 0 0 0 .9 1.5h12.2A1 1 0 0 0 19 18l-4-8V3" />
      </svg>
    </div>
  );
}

function Header() {
  const t = useT();
  return (
    <header style={{ background: C.white, borderBottom: `1px solid ${C.borderL}` }}>
      <div className="container flex items-center justify-between" style={{ height: "68px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <img src="/images/logo-full.png" alt="GANA Cosmetics" style={{ height: "52px", width: "auto", display: "block" }}/>
        </Link>
        <div className="flex items-center" style={{ gap: "1.25rem" }}>
          <Link href="/#products" style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase", color: C.gold, textDecoration: "none" }}>
            {t.detail.allProducts}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

function RelatedCard({ p }: { p: Product }) {
  const t = useT();
  return (
    <Link href={`/products/${p.id}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{ background: C.white, border: `1px solid ${C.borderL}`, transition: "transform .18s ease" }}
        className="product-card">
        <div style={{ height: "150px", background: p.img ? C.white : C.light, overflow: "hidden" }}>
          {p.img
            ? <img src={p.img} alt={p.name} className="w-full h-full object-contain p-5" />
            : <FlaskPlaceholder />}
        </div>
        <div className="p-4">
          <p style={{ fontFamily: sans, fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: C.gold, marginBottom: "0.2rem" }}>{t.cats[p.cat] ?? p.cat}</p>
          <h4 style={{ fontFamily: serif, fontWeight: 700, fontSize: "1rem", color: C.ink }}>{p.name}</h4>
          <p style={{ fontFamily: mono, fontSize: "0.7rem", color: C.ink45, marginTop: "0.35rem" }}>
            {p.price ? `USD ${p.price}` : t.detail.inquiryPrice}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* small section eyebrow */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em",
      textTransform: "uppercase", color: C.gold, marginBottom: "1.1rem" }}>{children}</p>
  );
}

export default function ProductDetail() {
  const t = useT();
  const [, params] = useRoute("/products/:id");
  const product = getProduct(params?.id);

  useEffect(() => { window.scrollTo(0, 0); }, [params?.id]);

  if (!product) {
    return (
      <div style={{ background: C.off, minHeight: "100vh" }}>
        <Header />
        <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
          <h1 style={{ fontFamily: serif, fontSize: "2rem", color: C.ink, marginBottom: "1rem" }}>{t.detail.notFound}</h1>
          <Link href="/#products" style={{ fontFamily: sans, color: C.gold, textDecoration: "none" }}>
            {t.detail.backToCatalogue}
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelated(product);
  const copy = t.prod[product.id] ?? { tag: product.tag, desc: product.desc, usage: "" };
  const catLabel = t.cats[product.cat] ?? product.cat;
  const badgeLabel = t.badges[product.badge] ?? product.badge;
  const inquireHref = `/?product=${encodeURIComponent(product.name)}#contact`;

  /* certification pill labels */
  const certPill = (c: string) => (c === "EU CPNP" ? "CPNP" : c);

  return (
    <div style={{ background: C.off, minHeight: "100vh" }}>
      <Header />

      <main className="container" style={{ paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        {/* Breadcrumb */}
        <nav style={{ fontFamily: mono, fontSize: "0.7rem", color: C.ink45, marginBottom: "2.5rem" }}>
          <Link href="/" style={{ color: C.ink45, textDecoration: "none" }}>{t.detail.home}</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <Link href="/#products" style={{ color: C.ink45, textDecoration: "none" }}>{t.detail.productsCrumb}</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <span style={{ color: C.ink }}>{product.name}</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3.5rem", alignItems: "start" }}>
          {/* Image */}
          <div style={{ background: product.img ? C.white : C.light, border: `1px solid ${C.borderL}`, height: "440px", position: "relative" }}>
            {product.img
              ? <img src={product.img} alt={product.name} className="w-full h-full object-contain p-12" />
              : <FlaskPlaceholder />}
            <div style={{ position: "absolute", top: "1rem", right: "1rem", fontFamily: sans, fontSize: "0.6rem",
              fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.7rem",
              background: C.gold, color: C.white }}>{badgeLabel}</div>
          </div>

          {/* Info */}
          <div>
            <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: C.gold, marginBottom: "0.6rem" }}>{catLabel}</p>
            <h1 style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(2rem,4vw,2.9rem)", color: C.ink,
              lineHeight: 1.1, marginBottom: "0.5rem" }}>{product.name}</h1>
            <p style={{ fontFamily: sans, fontSize: "1.05rem", fontWeight: 500, color: C.ink70,
              marginBottom: "1rem" }}>{copy.tag}</p>

            {/* (2) Indication chips */}
            {product.indications.length > 0 && (
              <div className="flex flex-wrap" style={{ gap: "0.4rem", marginBottom: "1.4rem" }}>
                {product.indications.map((key) => (
                  <span key={key} style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 500, color: C.ink70,
                    border: `1px solid ${C.border}`, borderRadius: "999px", padding: "0.22rem 0.7rem" }}>
                    {t.indicationLabels[key] ?? key}
                  </span>
                ))}
              </div>
            )}

            <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.ink70, lineHeight: 1.7,
              marginBottom: "1.75rem" }}>{copy.desc}</p>

            {/* Price + volume */}
            <div className="flex items-end" style={{ gap: "1rem", paddingBottom: "1.5rem",
              borderBottom: `1px solid ${C.borderL}`, marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: mono, fontSize: "1.9rem", fontWeight: 500, color: C.ink }}>
                {product.price ? `USD ${product.price}` : t.detail.inquiryPrice}
              </span>
              <span style={{ fontFamily: mono, fontSize: "0.8rem", color: C.ink45, marginBottom: "0.35rem" }}>
                / {product.vol}
              </span>
            </div>

            {/* (4) Certification badges */}
            {product.certs && product.certs.length > 0 && (
              <div className="flex flex-wrap items-center" style={{ gap: "0.5rem", marginBottom: "1.25rem" }}>
                {product.certs.map((c) => (
                  <span key={c} className="flex items-center" style={{ gap: "0.35rem",
                    background: "rgba(168,144,90,0.1)", border: `1px solid ${C.gold}`, borderRadius: "6px",
                    padding: "0.28rem 0.6rem" }}>
                    <span style={{ fontFamily: mono, fontSize: "0.7rem", fontWeight: 700, color: C.gold, letterSpacing: "0.04em" }}>✓ {certPill(c)}</span>
                  </span>
                ))}
              </div>
            )}

            <p style={{ fontFamily: sans, fontSize: "0.78rem", color: C.ink45, marginBottom: "1.75rem" }}>
              {t.detail.retailNote}
            </p>

            {/* (6) Inquiry CTA */}
            <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
              <a href={inquireHref} className="btn-gold" style={{ textDecoration: "none" }}>{t.detail.inquireBtn}</a>
            </div>
          </div>
        </div>

        {/* (1) Key Actives as ingredient cards  +  Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3.5rem", marginTop: "4.5rem" }}>
          <div>
            <Eyebrow>{t.detail.keyActives}</Eyebrow>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.75rem" }}>
              {product.ings.map((ing) => {
                const blurb = ingredientBlurb(t.ingredientInfo, ing);
                return (
                  <div key={ing} style={{ background: C.white, border: `1px solid ${C.borderL}`, borderTop: `2px solid ${C.gold}`,
                    padding: "0.85rem 0.95rem" }}>
                    <div style={{ fontFamily: mono, fontSize: "0.82rem", fontWeight: 500, color: C.ink, lineHeight: 1.3 }}>{ing}</div>
                    {blurb && <div style={{ fontFamily: sans, fontSize: "0.72rem", color: C.ink45, lineHeight: 1.45, marginTop: "0.3rem" }}>{blurb}</div>}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <Eyebrow>{t.detail.specifications}</Eyebrow>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: sans }}>
              <tbody>
                {[[t.detail.specCategory, catLabel], [t.detail.specVolume, product.vol],
                  [t.detail.specRetail, product.price || t.detail.inquiryPrice], [t.detail.specLabel, badgeLabel]].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: `1px solid ${C.borderL}` }}>
                    <td style={{ padding: "0.7rem 0", fontSize: "0.82rem", color: C.ink45, width: "45%" }}>{k}</td>
                    <td style={{ padding: "0.7rem 0", fontSize: "0.88rem", color: C.ink, fontWeight: 500 }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: sans, fontSize: "0.78rem", color: C.ink45, lineHeight: 1.6, marginTop: "1.25rem" }}>
              {t.detail.specNote}
            </p>
          </div>
        </div>

        {/* (3) How to Use */}
        {copy.usage && (
          <div style={{ marginTop: "4rem", maxWidth: "760px" }}>
            <Eyebrow>{t.detail.protocolTitle}</Eyebrow>
            <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.ink70, lineHeight: 1.75 }}>{copy.usage}</p>
          </div>
        )}

        {/* (5) Catalogue page — laid directly onto the page */}
        <div style={{ marginTop: "4rem" }}>
          <Eyebrow>{t.detail.cataloguePage}</Eyebrow>
          <img src={`/products/pages/${product.id}.jpg`} alt={`${product.name} catalogue`}
            loading="lazy"
            style={{ width: "100%", maxWidth: "820px", display: "block", background: C.white,
              border: `1px solid ${C.borderL}`, boxShadow: "0 6px 28px rgba(19,38,46,0.08)" }}
            onError={(e) => { const el = e.currentTarget.parentElement as HTMLElement | null; if (el) el.style.display = "none"; }} />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: "5rem" }}>
            <h2 style={{ fontFamily: serif, fontWeight: 700, fontSize: "1.6rem", color: C.ink, marginBottom: "1.75rem" }}>
              {fmt(t.detail.relatedIn, { cat: catLabel })}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: "1.25rem" }}>
              {related.map((p) => <RelatedCard key={p.id} p={p} />)}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ background: C.deep, padding: "2.5rem 0" }}>
        <div className="container flex flex-col md:flex-row items-center justify-between" style={{ gap: "1rem" }}>
          <span style={{ fontFamily: serif, fontWeight: 700, fontSize: "1.25rem", color: "#fff", letterSpacing: "0.08em" }}>
            GANA Cosmetic
          </span>
          <span style={{ fontFamily: sans, fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
            © 2026 GANA Cosmetic Co., Ltd.
          </span>
        </div>
      </footer>
    </div>
  );
}
