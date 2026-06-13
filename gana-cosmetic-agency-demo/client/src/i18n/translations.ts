/* ── i18n dictionaries ───────────────────────────────────────────────────────
 * EN (default) / ZH (Simplified) / TH / VI.
 * Brand names + INCI/actives/acronyms stay in English across all markets.
 * Placeholders: "{n}" (count), "{product}" (prefill), "{cat}" (related).
 * ⚠ Medical/regulatory lines are machine-translated — native review before live.
 * ------------------------------------------------------------------------- */

export type Lang = "en" | "zh" | "th" | "vi";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English",     short: "EN" },
  { code: "zh", label: "中文",         short: "中文" },
  { code: "th", label: "ไทย",         short: "ไทย" },
  { code: "vi", label: "Tiếng Việt",  short: "VI" },
];

export const DEFAULT_LANG: Lang = "en";

type ProductCopy = { tag: string; desc: string; usage: string };

export interface Dict {
  hero: {
    eyebrow: string; title1: string; titleEm: string; body: string;
    ctaScience: string; ctaInquiry: string; badges: [string, string, string];
  };
  features: { title: string; text: string }[];
  stats: {
    eyebrow: string; heading: string;
    certs: { title: string; body: string }[];
    noticeLabel: string; notice: string;
  };
  products: {
    label: string; allLabel: string; items: string;
    ctaEyebrow: string; ctaTitle1: string; ctaTitleEm: string; ctaButton: string;
  };
  contact: {
    eyebrow: string; h2pre: string; h2em: string; body: string;
    list: [string, string, string, string];
    thankTitle: string; thankBody: string;
    labels: { name: string; company: string; email: string; phone: string; country: string; type: string; message: string };
    selectPlaceholder: string;
    typeOptions: { distributor: string; clinic: string; odm: string; general: string };
    messagePlaceholder: string; error: string; submit: string; submitting: string;
    prefill: string;
  };
  group: {
    eyebrow: string; h2pre: string; h2em: string; body: string;
    brands: { tag: string; desc: string }[];
  };
  footer: {
    tagline: string; contactHeading: string; companyHeading: string;
    labelAddress: string; labelTel: string; labelEmail: string;
    labelManufacturer: string; labelFdaNo: string; labelGroup: string; labelHours: string;
    hoursValue: string; disclaimer: string;
  };
  detail: {
    allProducts: string; home: string; productsCrumb: string;
    notFound: string; backToCatalogue: string;
    retailNote: string; inquireBtn: string; inquiryPrice: string;
    keyActives: string; specifications: string;
    specCategory: string; specVolume: string; specRetail: string; specLabel: string;
    specNote: string; relatedIn: string;
    indicationsTitle: string; protocolTitle: string;
    downloadsTitle: string; downloadInci: string; downloadCoa: string; downloadCatalogue: string; requestNote: string; cataloguePage: string;
  };
  cats: Record<string, string>;
  badges: Record<string, string>;
  indicationLabels: Record<string, string>;
  ingredientInfo: Record<string, string>;
  prod: Record<string, ProductCopy>;
}

/* shared usage strings reused across the 9 peptides */
const PEP_USE_EN = "Cleanse with alcohol, apply with a 0.2mm dermaroller/stamp. 2-week intervals, 2–3 sessions. Can be cocktailed with other peptides.";
const PEP_USE_ZH = "用酒精清洁后，以 0.2mm 微针滚轮/印章导入。间隔 2 周，2–3 个疗程。可与其他肽鸡尾酒混合。";
const PEP_USE_TH = "ทำความสะอาดด้วยแอลกอฮอล์ แล้วลงด้วยเดอร์มาโรลเลอร์/สแตมป์ 0.2mm เว้น 2 สัปดาห์ 2–3 ครั้ง ผสมค็อกเทลกับเปปไทด์อื่นได้";
const PEP_USE_VI = "Làm sạch bằng cồn, dùng dermaroller/stamp 0.2mm. Cách 2 tuần, 2–3 buổi. Có thể pha cocktail với peptide khác.";

/* ── English ─────────────────────────────────────────────────────────────── */
const en: Dict = {
  hero: {
    eyebrow: "Cosmeceutical Solutions for Professionals",
    title1: "Clinical Beauty,",
    titleEm: "Refined by Science",
    body: "A U.S. FDA-registered manufacturer with EU CPNP-notified formulations — GANA Cosmetic supplies PDRN, PLLA, and HA cosmeceuticals to distributors and aesthetic clinics worldwide.",
    ctaScience: "Discover Our Science →",
    ctaInquiry: "B2B Inquiry",
    badges: ["FDA Registered", "EU CPNP Compliant", "GMP Certified"],
  },
  features: [
    { title: "Clinical-Grade Actives", text: "High-purity PDRN, PLLA, HA, and peptides at verified concentrations. No unnecessary additives." },
    { title: "Clinically Tested", text: "FDA registered and EU CPNP compliant. Tested for efficacy and safety in professional aesthetic settings." },
    { title: "Cellular Regeneration", text: "PDRN and Sodium DNA formulations that support DNA repair, cellular turnover, and microbiome balance." },
    { title: "Clean Formulation", text: "Full INCI disclosure on every product. No hidden blends. Transparent ingredient sourcing." },
  ],
  stats: {
    eyebrow: "Regulatory Standing",
    heading: "Certified for Global Distribution",
    certs: [
      { title: "FDA Registration", body: "GANA TOX registered under U.S. FDA cosmetic product notification." },
      { title: "EU CPNP Compliant", body: "Selected products notified under EU Cosmetic Products Notification Portal." },
      { title: "GMP Certified", body: "Manufacturing facility operates under Good Manufacturing Practice standards." },
      { title: "ISO 13485", body: "Quality management system certified for medical device design and production." },
    ],
    noticeLabel: "Regulatory Notice:",
    notice: "GANA DA and GANA V LINE are lipolysis solutions for trained professionals only. Certificates available upon request.",
  },
  products: {
    label: "Cosmeceuticals", allLabel: "All", items: "{n} items",
    ctaEyebrow: "From Seoul to Your Clinic",
    ctaTitle1: "Global B2B supply,", ctaTitleEm: "direct from the manufacturer.", ctaButton: "Start a Conversation →",
  },
  contact: {
    eyebrow: "Get in Touch", h2pre: "Partner with", h2em: "GANA Cosmetic",
    body: "Whether you are a distributor seeking exclusive territory rights, a clinic looking for reliable supply, or an ODM partner — we respond to every inquiry within 48 hours.",
    list: ["Distributor Partnership", "Clinic Supply", "ODM / Private Label", "General Inquiry"],
    thankTitle: "Thank You", thankBody: "Your inquiry has been received. We will respond within 48 hours.",
    labels: { name: "Name", company: "Company / Clinic", email: "Email", phone: "Phone", country: "Country", type: "Inquiry Type", message: "Message" },
    selectPlaceholder: "Select type",
    typeOptions: { distributor: "Distributor Partnership", clinic: "Clinic Supply", odm: "ODM / Private Label", general: "General Inquiry" },
    messagePlaceholder: "Describe your business and requirements...",
    error: "Something went wrong. Please try again or email us directly at contact@gana-cosmetics.com.",
    submit: "Send Inquiry →", submitting: "Sending…",
    prefill: "I'm interested in {product}. Please send pricing and details.",
  },
  group: {
    eyebrow: "Our Group", h2pre: "The", h2em: "GANA Group",
    body: "Three companies, one mission — combining cosmeceutical, medical-device, and gene-therapy expertise under a single Korean corporate group.",
    brands: [
      { tag: "Medical Devices", desc: "Dermal fillers, mesotherapy devices, and ODM development for medical aesthetics." },
      { tag: "Cosmeceuticals", desc: "Clinical-grade cosmetic formulations distributed to clinics and partners worldwide." },
      { tag: "Gene Therapy R&D", desc: "Advanced gene therapy research and next-generation medical innovation." },
    ],
  },
  footer: {
    tagline: "U.S. FDA-registered cosmeceutical manufacturer within the GANA Group. Supplying distributors and aesthetic clinics worldwide.",
    contactHeading: "Contact", companyHeading: "Company",
    labelAddress: "Address", labelTel: "Tel", labelEmail: "Email",
    labelManufacturer: "Manufacturer", labelFdaNo: "FDA Reg. No.", labelGroup: "Group", labelHours: "Hours",
    hoursValue: "Mon–Fri 09:00–18:00 KST",
    disclaimer: "For professional use only. Products may not be available in all markets. Lipolysis solutions (GANA DA, V LINE) are for trained professionals only. Product images sourced from official GANA Cosmetic catalogues.",
  },
  detail: {
    allProducts: "← All Products", home: "Home", productsCrumb: "Products",
    notFound: "Product not found", backToCatalogue: "← Back to catalogue",
    retailNote: "Retail price shown. Dealer & distributor pricing available separately upon inquiry.",
    inquireBtn: "Inquire about this product →", inquiryPrice: "Inquiry",
    keyActives: "Key Actives", specifications: "Specifications",
    specCategory: "Category", specVolume: "Volume / Packaging", specRetail: "Retail (USD)", specLabel: "Label",
    specNote: "Full INCI disclosure, regulatory documentation, and wholesale pricing available upon inquiry.",
    relatedIn: "Related in {cat}",
    indicationsTitle: "Indications", protocolTitle: "How to Use",
    downloadsTitle: "Documents", downloadInci: "INCI / Full Ingredients", downloadCoa: "COA / Regulatory", downloadCatalogue: "Catalogue (PDF)",
    requestNote: "Available to verified B2B partners on request.",
    cataloguePage: "Catalogue",
  },
  cats: {
    "Skin Booster": "Skin Booster", "Meso Solution": "Meso Solution", "Chemical Peel": "Chemical Peel",
    "Intimate Care": "Intimate Care", "Clinic Care": "Clinic Care", "Peptide": "Peptide",
  },
  badges: {
    "2024 NEW": "2024 NEW", "2025 NEW": "2025 NEW", "FDA + CPNP": "FDA + CPNP", "vs Rejuran": "vs Rejuran",
    "Hair Specialist": "Hair Specialist", "PDRN": "PDRN", "Eye Care": "Eye Care", "Whitening": "Whitening",
    "Sensitive Skin": "Sensitive Skin", "Intimate Care": "Intimate Care",
    "PLLA Meso": "PLLA Meso", "Lipolysis": "Lipolysis", "Biorevital": "Biorevital", "Hydration": "Hydration", "Peptide": "Peptide",
  },
  indicationLabels: {
    "Regeneration": "Regeneration", "Hydration": "Hydration", "Brightening": "Brightening", "Elasticity": "Elasticity",
    "Volume": "Volume", "Wrinkles": "Wrinkles", "Scars": "Scars", "Hair": "Hair / Scalp", "Eye bags": "Eye Bags",
    "Dark circles": "Dark Circles", "Anti-aging": "Anti-Aging", "Exfoliation": "Exfoliation", "Sensitive skin": "Sensitive Skin",
    "pH care": "pH Care", "Lipolysis": "Lipolysis", "Lash growth": "Lash Growth",
  },
  ingredientInfo: {
    "Cross-linked HA": "Long-lasting hydration & volume", "PDRN": "DNA fragment — cell regeneration & repair",
    "PLLA": "Collagen biostimulator", "Hyaluronic": "Deep hydration", "HA": "Deep hydration",
    "Glutathione": "Antioxidant whitening", "Argireline": "Botox-like wrinkle relaxer", "Acetyl Hexapeptide-8": "Botox-like wrinkle relaxer",
    "GHK-Cu": "Copper peptide — hair & repair", "Carnitine": "Targets under-eye fat", "Vitamin C": "Antioxidant & collagen",
    "Polyhydroxy Acid": "Gentle exfoliating acid", "Alpha Arbutin": "Brightening agent", "Sodium DNA": "DNA-based regeneration",
    "Adenosine": "Energy & anti-aging", "Niacinamide": "Tone & barrier", "Lidocaine": "Pain relief",
    "Soy Isoflavone": "Soothing phytoestrogen", "Lactic Acid": "pH balance & mild exfoliation",
    "Deoxycholic Acid": "Fat-dissolving", "Phosphatidylcholine": "Lipolytic", "Acetyl Tetrapeptide-5": "Reduces puffiness",
    "Dipeptide Diaminobutyroyl": "SYN-AKE muscle relaxer", "L-Carnosine": "Anti-aging geroprotector",
    "Palmitoyl Pentapeptide-3": "Collagen-boosting (Matrixyl)", "Palmitoyl Tripeptide-1": "Skin-repair peptide",
    "Myristoyl Pentapeptide-17": "Eyelash growth peptide", "Acetyl Glutamyl Heptapeptide-1": "SNAP-8 wrinkle peptide", "Nonapeptide-1": "Tyrosinase-inhibiting whitening",
  },
  prod: {
    "dmp-plus": { tag: "High-End Multi-Active Booster", desc: "PLLA + HA + PDRN + Glutathione. Multi-active booster in a ready-to-use prefilled vial.", usage: "Ready-to-use prefilled vial — apply by meso gun or MTS." },
    "phv": { tag: "2-Year Lasting Hydration", desc: "High-molecular HA + PLLA biostimulator. Hyaluronidase-correctable for precise control.", usage: "Meso / skin-booster procedure." },
    "eye-booster": { tag: "Full-Face PDRN Revitalizer", desc: "PDRN + Sodium DNA + Glutathione. Targets cellular regeneration across the full face.", usage: "Meso / MTS / topical." },
    "tox": { tag: "Topical Neuromodulator", desc: "Argireline 100ppm + PDRN + HA. Spray-applied — no injection required. FDA & EU CPNP.", usage: "Air-spray gun or dermaroller (≤0.5mm), before bed, 2–3×/week, 5–6 sessions. Never inject." },
    "pnv-plus": { tag: "High-Concentration PDRN", desc: "PDRN 2% — direct clinical alternative to Rejuran. With Glutathione and HA 10mg/cc.", usage: "Meso gun (needle 1.5mm+) / MTS, weekly, 3 sessions." },
    "pnv": { tag: "Low-Concentration PDRN", desc: "Low-concentration PDRN (0.5%) mesotherapy with glutathione and cross-linked HA for regeneration, whitening, and hydration.", usage: "Topical or dermaroller 0.2–0.5mm, weekly, 3 sessions." },
    "scalp": { tag: "Scalp Regeneration", desc: "PDRN + GHK-Cu targeting hair follicle regeneration and scalp microenvironment.", usage: "Dermaroller, biweekly. Alternate PDRN & GHK-Cu vials, 10 sessions. Not for face/neck." },
    "eye": { tag: "Eye Bag & Dark Circle Solution", desc: "Targeted meso solution for under-eye bags and dark circles, with carnitine and acetyl tetrapeptide-5.", usage: "Meso under the eyes. One box = 20+ sessions." },
    "cocktail": { tag: "Whitening Meso Cocktail", desc: "Dual-vial whitening program — glutathione and vitamin C (ascorbic acid), applied on alternating weeks. Never mixed together.", usage: "Dermaroller/meso, alternating (Glutathione wk 1·3·5 / Vitamin C wk 2·4·6). Never mix." },
    "dm": { tag: "PLLA Collagen Meso", desc: "Freeze-dried PLLA powder + cross-linked HA two-part set. Collagen stimulation for acne scars, stretch marks, and lifting. Not a filler.", usage: "Mix PLLA + HA with a vortex mixer. Monthly intervals, 2–3 sessions." },
    "v-line": { tag: "Facial Lipolysis", desc: "PPC + deoxycholic acid lipolysis solution with peptide and glutathione for facial contouring.", usage: "Meso for facial contouring. Trained professionals only." },
    "pha": { tag: "Gentle PHA Peel", desc: "Polyhydroxy acid peel (PHA 10%) with alpha arbutin — gentle, low-irritation exfoliation and brightening for sensitive, rosacea, and atopic skin.", usage: "Cleanse before bed, apply. Weekly, 2–3 sessions." },
    "gyno": { tag: "Intimate Brightening & pH Care", desc: "Intimate area brightening and pH-balance care with glutathione and soy isoflavone. Also soothes dryness.", usage: "Topical / lubricant." },
    "booster": { tag: "HA Biorevitalization", desc: "Cross-linked HA gel with lidocaine for biorevitalization (water-glow). Applied by meso gun.", usage: "Apply by meso gun." },
    "booster-v": { tag: "Biorevitalization Vial", desc: "Cross-linked HA + glutathione biorevitalization solution in vial form.", usage: "Meso / dermaroller." },
    "ha-v": { tag: "High-Concentration HA", desc: "High-concentration cross-linked HA (22mg/cc) for hydration and volume, vial form.", usage: "Meso." },
    "da": { tag: "Body & Chin Lipolysis", desc: "Deoxycholic acid lipolysis solution for double chin and body fat. Not for facial use.", usage: "Meso for double chin / body. Not for the face." },
    "pep-apdn": { tag: "SYN-AKE Relaxing Peptide", desc: "Pure SYN-AKE dipeptide solution — relaxes expression wrinkles via acetylcholine antagonism (Botox-like).", usage: PEP_USE_EN },
    "pep-carnosine": { tag: "Anti-Aging Geroprotector", desc: "Pure L-Carnosine solution — a geroprotector that reduces telomere shortening for anti-aging.", usage: PEP_USE_EN },
    "pep-ah8": { tag: "Argireline Wrinkle Peptide", desc: "Pure Acetyl hexapeptide-8 (Argireline) solution — Botox-like relaxation of expression wrinkles.", usage: PEP_USE_EN },
    "pep-pp3": { tag: "Matrixyl Collagen Peptide", desc: "Pure Palmitoyl pentapeptide-3 (Matrixyl) solution — boosts collagen and elastin, reduces fine lines.", usage: PEP_USE_EN },
    "pep-pt1": { tag: "Skin-Repair Peptide", desc: "Pure Palmitoyl tripeptide-1 (pal-GHK) solution — repairs visible damage and strengthens skin's support structures.", usage: PEP_USE_EN },
    "pep-mp17": { tag: "Eyelash Growth Peptide", desc: "Pure Myristoyl pentapeptide-17 solution — stimulates keratin genes to thicken and grow eyelashes.", usage: "Apply along lash line with an eye brush (avoid eyes), biweekly, 3–4 sessions." },
    "pep-agh1": { tag: "SNAP-8 Wrinkle Peptide", desc: "Pure Acetyl glutamyl heptapeptide-1 (SNAP-8) solution — an elongated Argireline for Botox-like wrinkle relaxation.", usage: PEP_USE_EN },
    "pep-at5": { tag: "Anti-Eyebag Peptide", desc: "Pure Acetyl tetrapeptide-5 solution — reduces puffy under-eye bags.", usage: PEP_USE_EN },
    "pep-np1": { tag: "Whitening Peptide", desc: "Pure Nonapeptide-1 solution — inhibits tyrosinase activation for whitening and spot correction.", usage: PEP_USE_EN },
  },
};

/* ── Chinese (Simplified) ────────────────────────────────────────────────── */
const zh: Dict = {
  hero: {
    eyebrow: "面向专业人士的药妆解决方案", title1: "临床之美，", titleEm: "以科学精炼",
    body: "GANA Cosmetic 是通过美国 FDA 注册、配方完成 EU CPNP 备案的制造商，向全球经销商与医美诊所供应 PDRN、PLLA 与 HA 药妆产品。",
    ctaScience: "了解我们的科学 →", ctaInquiry: "B2B 咨询", badges: ["FDA 注册", "EU CPNP 合规", "GMP 认证"],
  },
  features: [
    { title: "临床级活性成分", text: "高纯度 PDRN、PLLA、HA 与多肽，浓度经过验证，绝无多余添加。" },
    { title: "临床验证", text: "通过 FDA 注册并符合 EU CPNP，在专业医美场景中验证功效与安全性。" },
    { title: "细胞再生", text: "PDRN 与 Sodium DNA 配方，支持 DNA 修复、细胞更新与微生态平衡。" },
    { title: "纯净配方", text: "每款产品全成分（INCI）公开，绝无隐藏混合，原料来源透明。" },
  ],
  stats: {
    eyebrow: "法规资质", heading: "通过全球分销认证",
    certs: [
      { title: "FDA 注册", body: "GANA TOX 已完成美国 FDA 化妆品产品备案。" },
      { title: "EU CPNP 合规", body: "部分产品已通过欧盟化妆品备案门户（CPNP）备案。" },
      { title: "GMP 认证", body: "生产工厂依照 GMP（良好生产规范）标准运营。" },
      { title: "ISO 13485", body: "质量管理体系通过医疗器械设计与生产认证。" },
    ],
    noticeLabel: "法规提示：", notice: "GANA DA 与 GANA V LINE 为溶脂产品，仅限受训专业人员使用。证书可应要求提供。",
  },
  products: {
    label: "药妆系列", allLabel: "全部", items: "{n} 件",
    ctaEyebrow: "从首尔直达您的诊所", ctaTitle1: "全球 B2B 供应，", ctaTitleEm: "由制造商直供。", ctaButton: "开始洽谈 →",
  },
  contact: {
    eyebrow: "联系我们", h2pre: "携手", h2em: "GANA Cosmetic",
    body: "无论您是寻求独家区域代理的经销商、寻找稳定供货的诊所，还是 ODM 合作伙伴 —— 我们都会在 48 小时内回复每一封咨询。",
    list: ["经销代理合作", "诊所供货", "ODM / 贴牌代工", "一般咨询"],
    thankTitle: "感谢您", thankBody: "我们已收到您的咨询，将在 48 小时内回复。",
    labels: { name: "姓名", company: "公司 / 诊所", email: "邮箱", phone: "电话", country: "国家", type: "咨询类型", message: "留言" },
    selectPlaceholder: "请选择类型",
    typeOptions: { distributor: "经销代理合作", clinic: "诊所供货", odm: "ODM / 贴牌代工", general: "一般咨询" },
    messagePlaceholder: "请描述您的业务与需求…",
    error: "提交出错，请重试或直接发送邮件至 contact@gana-cosmetics.com。",
    submit: "发送咨询 →", submitting: "发送中…", prefill: "我对 {product} 感兴趣，请提供报价与详情。",
  },
  group: {
    eyebrow: "我们的集团", h2pre: "", h2em: "GANA Group",
    body: "三家公司，一个使命 —— 将药妆、医疗器械与基因治疗的专长汇聚于同一家韩国企业集团之下。",
    brands: [
      { tag: "医疗器械", desc: "面向医疗美容的真皮填充剂、美塑器械与 ODM 开发。" },
      { tag: "药妆", desc: "临床级化妆品配方，分销至全球诊所与合作伙伴。" },
      { tag: "基因治疗研发", desc: "前沿基因治疗研究与新一代医疗创新。" },
    ],
  },
  footer: {
    tagline: "隶属 GANA Group 的美国 FDA 注册药妆制造商，为全球经销商与医美诊所供货。",
    contactHeading: "联系方式", companyHeading: "公司信息",
    labelAddress: "地址", labelTel: "电话", labelEmail: "邮箱",
    labelManufacturer: "制造商", labelFdaNo: "FDA 注册号", labelGroup: "集团", labelHours: "营业时间",
    hoursValue: "周一至周五 09:00–18:00（KST）",
    disclaimer: "仅供专业用途。部分产品可能并非在所有市场供应。溶脂产品（GANA DA、V LINE）仅限受训专业人员使用。产品图片来自 GANA Cosmetic 官方目录。",
  },
  detail: {
    allProducts: "← 全部产品", home: "首页", productsCrumb: "产品",
    notFound: "未找到该产品", backToCatalogue: "← 返回目录",
    retailNote: "所示为零售价。经销商与代理价格可另行咨询。",
    inquireBtn: "咨询此产品 →", inquiryPrice: "询价",
    keyActives: "核心活性成分", specifications: "规格参数",
    specCategory: "类别", specVolume: "容量 / 包装", specRetail: "零售价（USD）", specLabel: "标签",
    specNote: "完整成分（INCI）公开、法规文件及批发价格可应要求提供。", relatedIn: "{cat} 同类产品",
    indicationsTitle: "适应症", protocolTitle: "使用方法",
    downloadsTitle: "资料下载", downloadInci: "INCI / 全成分", downloadCoa: "COA / 法规文件", downloadCatalogue: "产品目录（PDF）",
    requestNote: "经认证的 B2B 合作伙伴可应要求获取。",
    cataloguePage: "产品目录",
  },
  cats: {
    "Skin Booster": "皮肤水光", "Meso Solution": "美塑（Meso）", "Chemical Peel": "化学焕肤",
    "Intimate Care": "私密护理", "Clinic Care": "诊所护理", "Peptide": "多肽原料",
  },
  badges: {
    "2024 NEW": "2024 新品", "2025 NEW": "2025 新品", "FDA + CPNP": "FDA + CPNP", "vs Rejuran": "对标 Rejuran",
    "Hair Specialist": "头皮专研", "PDRN": "PDRN", "Eye Care": "眼部护理", "Whitening": "美白",
    "Sensitive Skin": "敏感肌", "Intimate Care": "私密护理",
    "PLLA Meso": "PLLA 美塑", "Lipolysis": "溶脂", "Biorevital": "活肤", "Hydration": "保湿", "Peptide": "多肽",
  },
  indicationLabels: {
    "Regeneration": "再生", "Hydration": "保湿", "Brightening": "提亮", "Elasticity": "弹力", "Volume": "丰盈",
    "Wrinkles": "皱纹", "Scars": "疤痕", "Hair": "头皮·毛发", "Eye bags": "眼袋", "Dark circles": "黑眼圈",
    "Anti-aging": "抗衰", "Exfoliation": "去角质", "Sensitive skin": "敏感肌", "pH care": "pH 护理",
    "Lipolysis": "溶脂", "Lash growth": "睫毛增长",
  },
  ingredientInfo: {
    "Cross-linked HA": "持久保湿与丰盈", "PDRN": "DNA 片段 — 细胞再生与修复", "PLLA": "胶原蛋白刺激剂",
    "Hyaluronic": "深层补水", "HA": "深层补水", "Glutathione": "抗氧化美白",
    "Argireline": "类肉毒抗皱", "Acetyl Hexapeptide-8": "类肉毒抗皱", "GHK-Cu": "铜肽 — 头皮与修复",
    "Carnitine": "针对眼下脂肪", "Vitamin C": "抗氧化与胶原", "Polyhydroxy Acid": "温和去角质酸",
    "Alpha Arbutin": "提亮成分", "Sodium DNA": "DNA 再生", "Adenosine": "能量与抗衰", "Niacinamide": "肤色与屏障",
    "Lidocaine": "缓解疼痛", "Soy Isoflavone": "舒缓植物雌激素", "Lactic Acid": "pH 平衡与温和去角质",
    "Deoxycholic Acid": "溶解脂肪", "Phosphatidylcholine": "溶脂", "Acetyl Tetrapeptide-5": "减轻浮肿",
    "Dipeptide Diaminobutyroyl": "SYN-AKE 肌肉松弛", "L-Carnosine": "抗衰老保护剂",
    "Palmitoyl Pentapeptide-3": "促胶原（Matrixyl）", "Palmitoyl Tripeptide-1": "皮肤修复肽",
    "Myristoyl Pentapeptide-17": "睫毛增长肽", "Acetyl Glutamyl Heptapeptide-1": "SNAP-8 抗皱肽", "Nonapeptide-1": "抑制酪氨酸酶美白",
  },
  prod: {
    "dmp-plus": { tag: "高端复合活性水光", desc: "PLLA + HA + PDRN + 谷胱甘肽。预填充即用安瓶，多重活性水光。", usage: "预填充即用安瓶 —— 美塑枪或 MTS 导入。" },
    "phv": { tag: "长达两年的持久保湿", desc: "高分子 HA + PLLA 生物刺激剂。可用透明质酸酶溶解修正，精准可控。", usage: "美塑 / 水光术式。" },
    "eye-booster": { tag: "全脸 PDRN 焕活", desc: "PDRN + Sodium DNA + 谷胱甘肽。针对全脸的细胞再生。", usage: "美塑 / MTS / 外涂。" },
    "tox": { tag: "外用神经调节剂", desc: "Argireline 100ppm + PDRN + HA。喷涂使用 —— 无需注射。FDA 与 EU CPNP。", usage: "气动喷枪或微针滚轮（≤0.5mm），睡前，每周 2–3 次，5–6 个疗程。切勿注射。" },
    "pnv-plus": { tag: "高浓度 PDRN", desc: "PDRN 2% —— 可直接替代 Rejuran 的临床方案。含谷胱甘肽与 HA 10mg/cc。", usage: "美塑枪（针 1.5mm+）/ MTS，每周一次，3 个疗程。" },
    "pnv": { tag: "低浓度 PDRN", desc: "低浓度 PDRN（0.5%）美塑精华，含谷胱甘肽与交联 HA，用于再生、美白与保湿。", usage: "外涂或微针滚轮 0.2–0.5mm，每周一次，3 个疗程。" },
    "scalp": { tag: "头皮再生", desc: "PDRN + GHK-Cu，针对毛囊再生与头皮微环境。", usage: "微针滚轮，每两周一次。PDRN 与 GHK-Cu 交替，共 10 个疗程。勿用于面颈。" },
    "eye": { tag: "眼袋与黑眼圈方案", desc: "针对眼袋与黑眼圈的专研美塑精华，含 Carnitine 与 Acetyl Tetrapeptide-5。", usage: "眼下美塑。一盒可做 20+ 个疗程。" },
    "cocktail": { tag: "美白美塑鸡尾酒", desc: "双安瓶美白方案 —— 谷胱甘肽与维生素 C（抗坏血酸）按周交替使用，切勿混合。", usage: "微针/美塑，交替（谷胱甘肽 1·3·5 周 / 维 C 2·4·6 周）。切勿混合。" },
    "dm": { tag: "PLLA 胶原美塑", desc: "冻干 PLLA 粉末 + 交联 HA 双剂套装。刺激胶原，改善痘疤、妊娠纹与提升。非填充剂。", usage: "用涡旋混合器混合 PLLA + HA。每月一次，2–3 个疗程。" },
    "v-line": { tag: "面部溶脂", desc: "PPC + 脱氧胆酸溶脂方案，含多肽与谷胱甘肽，用于面部轮廓。", usage: "面部轮廓美塑。仅限受训专业人员。" },
    "pha": { tag: "温和 PHA 焕肤", desc: "多羟基酸焕肤（PHA 10%）搭配 Alpha Arbutin —— 温和低刺激去角质与提亮，适合敏感、玫瑰痤疮及特应性肌肤。", usage: "睡前洁面后涂抹。每周一次，2–3 个疗程。" },
    "gyno": { tag: "私密提亮与 pH 护理", desc: "私密部位提亮与 pH 平衡护理，含谷胱甘肽与大豆异黄酮，亦可舒缓干燥。", usage: "外涂 / 润滑。" },
    "booster": { tag: "HA 活肤水光", desc: "含利多卡因的交联 HA 凝胶，用于活肤（水光）。美塑枪导入。", usage: "美塑枪导入。" },
    "booster-v": { tag: "活肤安瓶", desc: "交联 HA + 谷胱甘肽活肤精华，安瓶型。", usage: "美塑 / 微针滚轮。" },
    "ha-v": { tag: "高浓度 HA", desc: "高浓度交联 HA（22mg/cc），保湿与丰盈，安瓶型。", usage: "美塑。" },
    "da": { tag: "身体与下巴溶脂", desc: "脱氧胆酸溶脂方案，用于双下巴与身体脂肪。不可用于面部。", usage: "双下巴 / 身体美塑。勿用于面部。" },
    "pep-apdn": { tag: "SYN-AKE 松弛肽", desc: "纯 SYN-AKE 二肽溶液 —— 通过拮抗乙酰胆碱舒缓表情纹（类肉毒）。", usage: PEP_USE_ZH },
    "pep-carnosine": { tag: "抗衰保护肽", desc: "纯 L-肌肽溶液 —— 减缓端粒缩短的抗衰保护剂。", usage: PEP_USE_ZH },
    "pep-ah8": { tag: "Argireline 抗皱肽", desc: "纯 Acetyl hexapeptide-8（Argireline）溶液 —— 类肉毒舒缓表情纹。", usage: PEP_USE_ZH },
    "pep-pp3": { tag: "Matrixyl 胶原肽", desc: "纯 Palmitoyl pentapeptide-3（Matrixyl）溶液 —— 促进胶原与弹性蛋白，减少细纹。", usage: PEP_USE_ZH },
    "pep-pt1": { tag: "皮肤修复肽", desc: "纯 Palmitoyl tripeptide-1（pal-GHK）溶液 —— 修复可见损伤，强化皮肤支撑结构。", usage: PEP_USE_ZH },
    "pep-mp17": { tag: "睫毛增长肽", desc: "纯 Myristoyl pentapeptide-17 溶液 —— 刺激角蛋白基因，增浓并促进睫毛生长。", usage: "用眼刷沿睫毛根部涂抹（避开眼睛），每两周一次，3–4 个疗程。" },
    "pep-agh1": { tag: "SNAP-8 抗皱肽", desc: "纯 Acetyl glutamyl heptapeptide-1（SNAP-8）溶液 —— Argireline 的延长肽，类肉毒抗皱。", usage: PEP_USE_ZH },
    "pep-at5": { tag: "抗眼袋肽", desc: "纯 Acetyl tetrapeptide-5 溶液 —— 减轻眼下浮肿眼袋。", usage: PEP_USE_ZH },
    "pep-np1": { tag: "美白肽", desc: "纯 Nonapeptide-1 溶液 —— 抑制酪氨酸酶活化，美白并改善色斑。", usage: PEP_USE_ZH },
  },
};

/* ── Thai ────────────────────────────────────────────────────────────────── */
const th: Dict = {
  hero: {
    eyebrow: "โซลูชันเวชสำอางสำหรับมืออาชีพ", title1: "ความงามเชิงคลินิก", titleEm: "กลั่นกรองด้วยวิทยาศาสตร์",
    body: "GANA Cosmetic เป็นผู้ผลิตที่จดทะเบียนกับ FDA สหรัฐฯ และมีสูตรที่แจ้ง EU CPNP — จัดส่งเวชสำอาง PDRN, PLLA และ HA ให้แก่ผู้จัดจำหน่ายและคลินิกความงามทั่วโลก",
    ctaScience: "ค้นพบวิทยาศาสตร์ของเรา →", ctaInquiry: "สอบถาม B2B", badges: ["จดทะเบียน FDA", "เป็นไปตาม EU CPNP", "ได้รับรอง GMP"],
  },
  features: [
    { title: "สารออกฤทธิ์เกรดคลินิก", text: "PDRN, PLLA, HA และเปปไทด์บริสุทธิ์สูงในความเข้มข้นที่ผ่านการตรวจสอบ ไม่มีสารปรุงแต่งที่ไม่จำเป็น" },
    { title: "ผ่านการทดสอบทางคลินิก", text: "จดทะเบียน FDA และเป็นไปตาม EU CPNP ทดสอบประสิทธิภาพและความปลอดภัยในสภาพแวดล้อมความงามระดับมืออาชีพ" },
    { title: "การฟื้นฟูระดับเซลล์", text: "สูตร PDRN และ Sodium DNA ที่ช่วยซ่อมแซม DNA การผลัดเซลล์ และสมดุลไมโครไบโอม" },
    { title: "สูตรสะอาดบริสุทธิ์", text: "เปิดเผยส่วนผสม (INCI) ครบถ้วนในทุกผลิตภัณฑ์ ไม่มีส่วนผสมที่ซ่อนเร้น แหล่งที่มาของวัตถุดิบโปร่งใส" },
  ],
  stats: {
    eyebrow: "สถานะด้านกฎระเบียบ", heading: "ได้รับการรับรองเพื่อการจัดจำหน่ายทั่วโลก",
    certs: [
      { title: "การจดทะเบียน FDA", body: "GANA TOX จดทะเบียนภายใต้การแจ้งผลิตภัณฑ์เครื่องสำอางของ FDA สหรัฐฯ" },
      { title: "เป็นไปตาม EU CPNP", body: "ผลิตภัณฑ์ที่เลือกได้แจ้งผ่านพอร์ทัลแจ้งผลิตภัณฑ์เครื่องสำอางของสหภาพยุโรป (CPNP)" },
      { title: "ได้รับรอง GMP", body: "โรงงานผลิตดำเนินงานภายใต้มาตรฐาน GMP (หลักเกณฑ์วิธีการที่ดีในการผลิต)" },
      { title: "ISO 13485", body: "ระบบบริหารคุณภาพได้รับการรับรองสำหรับการออกแบบและผลิตเครื่องมือแพทย์" },
    ],
    noticeLabel: "ประกาศด้านกฎระเบียบ:", notice: "GANA DA และ GANA V LINE เป็นโซลูชันสลายไขมัน สำหรับผู้เชี่ยวชาญที่ผ่านการฝึกอบรมเท่านั้น มีใบรับรองให้เมื่อร้องขอ",
  },
  products: {
    label: "เวชสำอาง", allLabel: "ทั้งหมด", items: "{n} รายการ",
    ctaEyebrow: "จากโซลถึงคลินิกของคุณ", ctaTitle1: "การจัดส่ง B2B ทั่วโลก", ctaTitleEm: "ตรงจากผู้ผลิต", ctaButton: "เริ่มพูดคุย →",
  },
  contact: {
    eyebrow: "ติดต่อเรา", h2pre: "ร่วมเป็นพันธมิตรกับ", h2em: "GANA Cosmetic",
    body: "ไม่ว่าคุณจะเป็นผู้จัดจำหน่ายที่มองหาสิทธิ์ในพื้นที่แต่เพียงผู้เดียว คลินิกที่ต้องการแหล่งจัดหาที่เชื่อถือได้ หรือพันธมิตร ODM — เราตอบทุกคำถามภายใน 48 ชั่วโมง",
    list: ["พันธมิตรผู้จัดจำหน่าย", "จัดส่งให้คลินิก", "ODM / Private Label", "สอบถามทั่วไป"],
    thankTitle: "ขอบคุณ", thankBody: "เราได้รับคำถามของคุณแล้ว และจะตอบกลับภายใน 48 ชั่วโมง",
    labels: { name: "ชื่อ", company: "บริษัท / คลินิก", email: "อีเมล", phone: "โทรศัพท์", country: "ประเทศ", type: "ประเภทการสอบถาม", message: "ข้อความ" },
    selectPlaceholder: "เลือกประเภท",
    typeOptions: { distributor: "พันธมิตรผู้จัดจำหน่าย", clinic: "จัดส่งให้คลินิก", odm: "ODM / Private Label", general: "สอบถามทั่วไป" },
    messagePlaceholder: "อธิบายธุรกิจและความต้องการของคุณ…",
    error: "เกิดข้อผิดพลาด กรุณาลองใหม่ หรือส่งอีเมลถึงเราโดยตรงที่ contact@gana-cosmetics.com",
    submit: "ส่งคำถาม →", submitting: "กำลังส่ง…", prefill: "ฉันสนใจ {product} กรุณาส่งราคาและรายละเอียด",
  },
  group: {
    eyebrow: "กลุ่มบริษัทของเรา", h2pre: "", h2em: "GANA Group",
    body: "สามบริษัท หนึ่งพันธกิจ — ผสานความเชี่ยวชาญด้านเวชสำอาง เครื่องมือแพทย์ และยีนบำบัด ไว้ภายใต้กลุ่มบริษัทเกาหลีเดียวกัน",
    brands: [
      { tag: "เครื่องมือแพทย์", desc: "ฟิลเลอร์ผิวหนัง อุปกรณ์เมโสเทอราพี และการพัฒนา ODM สำหรับเวชศาสตร์ความงาม" },
      { tag: "เวชสำอาง", desc: "สูตรเครื่องสำอางเกรดคลินิก จัดจำหน่ายสู่คลินิกและพันธมิตรทั่วโลก" },
      { tag: "วิจัยและพัฒนายีนบำบัด", desc: "การวิจัยยีนบำบัดล้ำสมัยและนวัตกรรมการแพทย์ยุคใหม่" },
    ],
  },
  footer: {
    tagline: "ผู้ผลิตเวชสำอางที่จดทะเบียน FDA สหรัฐฯ ภายในกลุ่ม GANA Group จัดส่งให้ผู้จัดจำหน่ายและคลินิกความงามทั่วโลก",
    contactHeading: "ติดต่อ", companyHeading: "ข้อมูลบริษัท",
    labelAddress: "ที่อยู่", labelTel: "โทรศัพท์", labelEmail: "อีเมล",
    labelManufacturer: "ผู้ผลิต", labelFdaNo: "เลขจดทะเบียน FDA", labelGroup: "กลุ่มบริษัท", labelHours: "เวลาทำการ",
    hoursValue: "จันทร์–ศุกร์ 09:00–18:00 (KST)",
    disclaimer: "สำหรับใช้งานโดยมืออาชีพเท่านั้น ผลิตภัณฑ์อาจไม่มีจำหน่ายในทุกตลาด โซลูชันสลายไขมัน (GANA DA, V LINE) สำหรับผู้เชี่ยวชาญที่ผ่านการฝึกอบรมเท่านั้น ภาพผลิตภัณฑ์มาจากแคตตาล็อกอย่างเป็นทางการของ GANA Cosmetic",
  },
  detail: {
    allProducts: "← ผลิตภัณฑ์ทั้งหมด", home: "หน้าแรก", productsCrumb: "ผลิตภัณฑ์",
    notFound: "ไม่พบผลิตภัณฑ์", backToCatalogue: "← กลับไปที่แคตตาล็อก",
    retailNote: "ราคาที่แสดงเป็นราคาขายปลีก ราคาสำหรับตัวแทนจำหน่ายและผู้จัดจำหน่ายสอบถามแยกต่างหาก",
    inquireBtn: "สอบถามผลิตภัณฑ์นี้ →", inquiryPrice: "สอบถามราคา",
    keyActives: "สารออกฤทธิ์หลัก", specifications: "ข้อมูลจำเพาะ",
    specCategory: "หมวดหมู่", specVolume: "ปริมาตร / บรรจุภัณฑ์", specRetail: "ขายปลีก (USD)", specLabel: "ป้ายกำกับ",
    specNote: "การเปิดเผยส่วนผสม (INCI) ครบถ้วน เอกสารด้านกฎระเบียบ และราคาขายส่ง มีให้เมื่อร้องขอ", relatedIn: "ผลิตภัณฑ์ที่เกี่ยวข้องใน {cat}",
    indicationsTitle: "ข้อบ่งใช้", protocolTitle: "วิธีใช้",
    downloadsTitle: "เอกสาร", downloadInci: "INCI / ส่วนผสมทั้งหมด", downloadCoa: "COA / เอกสารกฎระเบียบ", downloadCatalogue: "แคตตาล็อก (PDF)",
    requestNote: "มีให้สำหรับพันธมิตร B2B ที่ผ่านการยืนยันเมื่อร้องขอ",
    cataloguePage: "แคตตาล็อก",
  },
  cats: {
    "Skin Booster": "สกินบูสเตอร์", "Meso Solution": "เมโสเทอราพี", "Chemical Peel": "เคมิคอลพีล",
    "Intimate Care": "ดูแลจุดซ่อนเร้น", "Clinic Care": "ดูแลในคลินิก", "Peptide": "เปปไทด์",
  },
  badges: {
    "2024 NEW": "ใหม่ 2024", "2025 NEW": "ใหม่ 2025", "FDA + CPNP": "FDA + CPNP", "vs Rejuran": "เทียบ Rejuran",
    "Hair Specialist": "ผู้เชี่ยวชาญเส้นผม", "PDRN": "PDRN", "Eye Care": "ดูแลรอบดวงตา", "Whitening": "ผิวกระจ่างใส",
    "Sensitive Skin": "ผิวแพ้ง่าย", "Intimate Care": "ดูแลจุดซ่อนเร้น",
    "PLLA Meso": "PLLA เมโส", "Lipolysis": "สลายไขมัน", "Biorevital": "ฟื้นบำรุง", "Hydration": "เพิ่มความชุ่มชื้น", "Peptide": "เปปไทด์",
  },
  indicationLabels: {
    "Regeneration": "ฟื้นฟู", "Hydration": "เพิ่มความชุ่มชื้น", "Brightening": "กระจ่างใส", "Elasticity": "ความยืดหยุ่น",
    "Volume": "เพิ่มวอลุ่ม", "Wrinkles": "ริ้วรอย", "Scars": "แผลเป็น", "Hair": "เส้นผม/หนังศีรษะ", "Eye bags": "ถุงใต้ตา",
    "Dark circles": "รอยคล้ำ", "Anti-aging": "ชะลอวัย", "Exfoliation": "ผลัดเซลล์ผิว", "Sensitive skin": "ผิวแพ้ง่าย",
    "pH care": "ดูแลค่า pH", "Lipolysis": "สลายไขมัน", "Lash growth": "ขนตายาว",
  },
  ingredientInfo: {
    "Cross-linked HA": "ชุ่มชื้นและวอลุ่มยาวนาน", "PDRN": "ชิ้นส่วน DNA — ฟื้นฟูและซ่อมแซมเซลล์", "PLLA": "กระตุ้นคอลลาเจน",
    "Hyaluronic": "เติมน้ำให้ผิวล้ำลึก", "HA": "เติมน้ำให้ผิวล้ำลึก", "Glutathione": "ต้านอนุมูลอิสระ กระจ่างใส",
    "Argireline": "ลดริ้วรอยคล้ายโบทอกซ์", "Acetyl Hexapeptide-8": "ลดริ้วรอยคล้ายโบทอกซ์", "GHK-Cu": "คอปเปอร์เปปไทด์ — เส้นผมและซ่อมแซม",
    "Carnitine": "เป้าหมายไขมันใต้ตา", "Vitamin C": "ต้านอนุมูลอิสระและคอลลาเจน", "Polyhydroxy Acid": "กรดผลัดเซลล์อ่อนโยน",
    "Alpha Arbutin": "สารกระจ่างใส", "Sodium DNA": "ฟื้นฟูด้วย DNA", "Adenosine": "พลังงานและชะลอวัย", "Niacinamide": "สีผิวและเกราะป้องกัน",
    "Lidocaine": "บรรเทาปวด", "Soy Isoflavone": "ไฟโตเอสโตรเจนปลอบประโลม", "Lactic Acid": "สมดุล pH และผลัดเซลล์อ่อนๆ",
    "Deoxycholic Acid": "สลายไขมัน", "Phosphatidylcholine": "สลายไขมัน", "Acetyl Tetrapeptide-5": "ลดความบวม",
    "Dipeptide Diaminobutyroyl": "SYN-AKE คลายกล้ามเนื้อ", "L-Carnosine": "สารชะลอวัย",
    "Palmitoyl Pentapeptide-3": "กระตุ้นคอลลาเจน (Matrixyl)", "Palmitoyl Tripeptide-1": "เปปไทด์ซ่อมแซมผิว",
    "Myristoyl Pentapeptide-17": "เปปไทด์ขนตายาว", "Acetyl Glutamyl Heptapeptide-1": "SNAP-8 ลดริ้วรอย", "Nonapeptide-1": "ยับยั้งไทโรซิเนสเพื่อความกระจ่างใส",
  },
  prod: {
    "dmp-plus": { tag: "บูสเตอร์มัลติแอคทีฟระดับไฮเอนด์", desc: "PLLA + HA + PDRN + Glutathione บูสเตอร์มัลติแอคทีฟในไวอัลพร้อมใช้แบบเติมสำเร็จ", usage: "ไวอัลพร้อมใช้ — ลงด้วยเมโสกันหรือ MTS" },
    "phv": { tag: "ความชุ่มชื้นยาวนาน 2 ปี", desc: "ไบโอสติมูเลเตอร์ HA โมเลกุลสูง + PLLA แก้ไขได้ด้วยไฮยาลูโรนิเดสเพื่อการควบคุมที่แม่นยำ", usage: "หัตถการเมโส / สกินบูสเตอร์" },
    "eye-booster": { tag: "ฟื้นฟูทั้งใบหน้าด้วย PDRN", desc: "PDRN + Sodium DNA + Glutathione มุ่งเป้าการฟื้นฟูระดับเซลล์ทั่วทั้งใบหน้า", usage: "เมโส / MTS / ทาภายนอก" },
    "tox": { tag: "นิวโรโมดูเลเตอร์แบบทาภายนอก", desc: "Argireline 100ppm + PDRN + HA ใช้แบบสเปรย์ — ไม่ต้องฉีด FDA และ EU CPNP", usage: "ปืนสเปรย์ลมหรือเดอร์มาโรลเลอร์ (≤0.5mm) ก่อนนอน 2–3 ครั้ง/สัปดาห์ 5–6 ครั้ง ห้ามฉีด" },
    "pnv-plus": { tag: "PDRN ความเข้มข้นสูง", desc: "PDRN 2% — ทางเลือกเชิงคลินิกที่ทดแทน Rejuran ได้โดยตรง พร้อม Glutathione และ HA 10mg/cc", usage: "เมโสกัน (เข็ม 1.5mm+) / MTS สัปดาห์ละครั้ง 3 ครั้ง" },
    "pnv": { tag: "PDRN ความเข้มข้นต่ำ", desc: "เมโส PDRN ความเข้มข้นต่ำ (0.5%) พร้อม Glutathione และ HA แบบครอสลิงก์ เพื่อฟื้นฟู กระจ่างใส และชุ่มชื้น", usage: "ทาภายนอกหรือเดอร์มาโรลเลอร์ 0.2–0.5mm สัปดาห์ละครั้ง 3 ครั้ง" },
    "scalp": { tag: "ฟื้นฟูหนังศีรษะ", desc: "PDRN + GHK-Cu มุ่งเป้าการฟื้นฟูรูขุมขนและสภาพแวดล้อมของหนังศีรษะ", usage: "เดอร์มาโรลเลอร์ ทุก 2 สัปดาห์ สลับ PDRN และ GHK-Cu รวม 10 ครั้ง ห้ามใช้บนหน้า/คอ" },
    "eye": { tag: "โซลูชันถุงใต้ตาและรอยคล้ำ", desc: "เมโสเฉพาะจุดสำหรับถุงใต้ตาและรอยคล้ำ ด้วย Carnitine และ Acetyl Tetrapeptide-5", usage: "เมโสบริเวณใต้ตา หนึ่งกล่อง = 20+ ครั้ง" },
    "cocktail": { tag: "เมโสค็อกเทลเพื่อความกระจ่างใส", desc: "โปรแกรมความกระจ่างใสแบบสองไวอัล — Glutathione และวิตามินซี (Ascorbic Acid) ใช้สลับสัปดาห์ ห้ามผสมรวมกัน", usage: "เดอร์มาโรลเลอร์/เมโส สลับ (Glutathione สัปดาห์ 1·3·5 / Vit C 2·4·6) ห้ามผสม" },
    "dm": { tag: "PLLA คอลลาเจนเมโส", desc: "ผง PLLA ฟรีซดราย + ครอสลิงก์ HA แบบสองส่วน กระตุ้นคอลลาเจนสำหรับแผลเป็นสิว รอยแตกลาย และยกกระชับ ไม่ใช่ฟิลเลอร์", usage: "ผสม PLLA + HA ด้วยเครื่องวอร์เท็กซ์ ทุกเดือน 2–3 ครั้ง" },
    "v-line": { tag: "สลายไขมันใบหน้า", desc: "PPC + กรดดีออกซีโคลิก โซลูชันสลายไขมันพร้อมเปปไทด์และกลูตาไธโอน สำหรับรูปหน้า", usage: "เมโสปรับรูปหน้า เฉพาะผู้เชี่ยวชาญที่ผ่านการฝึก" },
    "pha": { tag: "PHA พีลอ่อนโยน", desc: "พีลกรดโพลีไฮดรอกซี (PHA 10%) พร้อม Alpha Arbutin — ผลัดเซลล์อ่อนโยน ระคายเคืองต่ำ และกระจ่างใส สำหรับผิวแพ้ง่าย โรซาเชีย และภูมิแพ้", usage: "ก่อนนอน ล้างหน้าแล้วลง สัปดาห์ละครั้ง 2–3 ครั้ง" },
    "gyno": { tag: "ความกระจ่างใสจุดซ่อนเร้นและดูแล pH", desc: "ความกระจ่างใสจุดซ่อนเร้นและดูแลสมดุล pH ด้วย Glutathione และ Soy Isoflavone ช่วยลดความแห้งกร้านด้วย", usage: "ทา / สารหล่อลื่น" },
    "booster": { tag: "HA ฟื้นบำรุงผิว", desc: "เจลครอสลิงก์ HA พร้อมลิโดเคน เพื่อฟื้นบำรุง (ผิวฉ่ำวาว) ลงด้วยเมโสกัน", usage: "ลงด้วยเมโสกัน" },
    "booster-v": { tag: "ฟื้นบำรุงแบบไวอัล", desc: "ครอสลิงก์ HA + Glutathione ฟื้นบำรุงแบบไวอัล", usage: "เมโส / เดอร์มาโรลเลอร์" },
    "ha-v": { tag: "HA ความเข้มข้นสูง", desc: "ครอสลิงก์ HA ความเข้มข้นสูง (22mg/cc) เพื่อความชุ่มชื้นและวอลุ่ม แบบไวอัล", usage: "เมโส" },
    "da": { tag: "สลายไขมันลำตัวและคาง", desc: "กรดดีออกซีโคลิกสลายไขมันสำหรับเหนียงและไขมันลำตัว ห้ามใช้บนใบหน้า", usage: "เมโสบริเวณเหนียง / ลำตัว ห้ามใช้บนใบหน้า" },
    "pep-apdn": { tag: "SYN-AKE เปปไทด์คลายกล้ามเนื้อ", desc: "ไดเปปไทด์ SYN-AKE บริสุทธิ์ — คลายริ้วรอยจากการแสดงสีหน้าผ่านการต้านอะเซทิลโคลีน (คล้ายโบทอกซ์)", usage: PEP_USE_TH },
    "pep-carnosine": { tag: "สารชะลอวัย", desc: "L-Carnosine บริสุทธิ์ — สารชะลอวัยที่ลดการสั้นลงของเทโลเมียร์", usage: PEP_USE_TH },
    "pep-ah8": { tag: "Argireline เปปไทด์ลดริ้วรอย", desc: "Acetyl hexapeptide-8 (Argireline) บริสุทธิ์ — คลายริ้วรอยคล้ายโบทอกซ์", usage: PEP_USE_TH },
    "pep-pp3": { tag: "Matrixyl เปปไทด์คอลลาเจน", desc: "Palmitoyl pentapeptide-3 (Matrixyl) บริสุทธิ์ — เพิ่มคอลลาเจนและอีลาสติน ลดริ้วรอยเล็ก", usage: PEP_USE_TH },
    "pep-pt1": { tag: "เปปไทด์ซ่อมแซมผิว", desc: "Palmitoyl tripeptide-1 (pal-GHK) บริสุทธิ์ — ซ่อมแซมความเสียหายและเสริมโครงสร้างผิว", usage: PEP_USE_TH },
    "pep-mp17": { tag: "เปปไทด์ขนตายาว", desc: "Myristoyl pentapeptide-17 บริสุทธิ์ — กระตุ้นยีนเคราตินเพื่อขนตาดกและยาว", usage: "ลงตามแนวขนตาด้วยแปรงตา (เลี่ยงดวงตา) ทุก 2 สัปดาห์ 3–4 ครั้ง" },
    "pep-agh1": { tag: "SNAP-8 เปปไทด์ลดริ้วรอย", desc: "Acetyl glutamyl heptapeptide-1 (SNAP-8) บริสุทธิ์ — Argireline แบบยาว ลดริ้วรอยคล้ายโบทอกซ์", usage: PEP_USE_TH },
    "pep-at5": { tag: "เปปไทด์ลดถุงใต้ตา", desc: "Acetyl tetrapeptide-5 บริสุทธิ์ — ลดถุงใต้ตาบวม", usage: PEP_USE_TH },
    "pep-np1": { tag: "เปปไทด์กระจ่างใส", desc: "Nonapeptide-1 บริสุทธิ์ — ยับยั้งการทำงานของไทโรซิเนสเพื่อความกระจ่างใสและลดจุดด่างดำ", usage: PEP_USE_TH },
  },
};

/* ── Vietnamese ──────────────────────────────────────────────────────────── */
const vi: Dict = {
  hero: {
    eyebrow: "Giải pháp dược mỹ phẩm cho chuyên gia", title1: "Vẻ đẹp lâm sàng,", titleEm: "tinh luyện bằng khoa học",
    body: "GANA Cosmetic là nhà sản xuất đã đăng ký FDA Hoa Kỳ với các công thức được thông báo EU CPNP — cung cấp dược mỹ phẩm PDRN, PLLA và HA cho các nhà phân phối và phòng khám thẩm mỹ trên toàn thế giới.",
    ctaScience: "Khám phá khoa học của chúng tôi →", ctaInquiry: "Liên hệ B2B", badges: ["Đã đăng ký FDA", "Tuân thủ EU CPNP", "Chứng nhận GMP"],
  },
  features: [
    { title: "Hoạt chất cấp lâm sàng", text: "PDRN, PLLA, HA và peptide độ tinh khiết cao ở nồng độ đã được kiểm chứng. Không phụ gia thừa." },
    { title: "Đã kiểm nghiệm lâm sàng", text: "Đăng ký FDA và tuân thủ EU CPNP. Được kiểm nghiệm về hiệu quả và độ an toàn trong môi trường thẩm mỹ chuyên nghiệp." },
    { title: "Tái tạo tế bào", text: "Công thức PDRN và Sodium DNA hỗ trợ sửa chữa DNA, tái tạo tế bào và cân bằng hệ vi sinh." },
    { title: "Công thức sạch", text: "Công bố đầy đủ thành phần (INCI) trên mọi sản phẩm. Không pha trộn ẩn. Nguồn nguyên liệu minh bạch." },
  ],
  stats: {
    eyebrow: "Vị thế pháp lý", heading: "Được chứng nhận để phân phối toàn cầu",
    certs: [
      { title: "Đăng ký FDA", body: "GANA TOX được đăng ký theo thông báo sản phẩm mỹ phẩm của FDA Hoa Kỳ." },
      { title: "Tuân thủ EU CPNP", body: "Các sản phẩm chọn lọc được thông báo qua Cổng thông báo sản phẩm mỹ phẩm EU (CPNP)." },
      { title: "Chứng nhận GMP", body: "Nhà máy sản xuất vận hành theo tiêu chuẩn GMP (Thực hành sản xuất tốt)." },
      { title: "ISO 13485", body: "Hệ thống quản lý chất lượng được chứng nhận cho thiết kế và sản xuất thiết bị y tế." },
    ],
    noticeLabel: "Lưu ý pháp lý:", notice: "GANA DA và GANA V LINE là dung dịch tan mỡ, chỉ dành cho chuyên gia được đào tạo. Có thể cung cấp chứng nhận khi có yêu cầu.",
  },
  products: {
    label: "Dược mỹ phẩm", allLabel: "Tất cả", items: "{n} sản phẩm",
    ctaEyebrow: "Từ Seoul đến phòng khám của bạn", ctaTitle1: "Cung ứng B2B toàn cầu,", ctaTitleEm: "trực tiếp từ nhà sản xuất.", ctaButton: "Bắt đầu trao đổi →",
  },
  contact: {
    eyebrow: "Liên hệ", h2pre: "Hợp tác cùng", h2em: "GANA Cosmetic",
    body: "Dù bạn là nhà phân phối tìm kiếm quyền khu vực độc quyền, phòng khám cần nguồn cung đáng tin cậy, hay đối tác ODM — chúng tôi phản hồi mọi yêu cầu trong vòng 48 giờ.",
    list: ["Hợp tác phân phối", "Cung ứng phòng khám", "ODM / Nhãn hàng riêng", "Liên hệ chung"],
    thankTitle: "Cảm ơn bạn", thankBody: "Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi trong vòng 48 giờ.",
    labels: { name: "Họ tên", company: "Công ty / Phòng khám", email: "Email", phone: "Điện thoại", country: "Quốc gia", type: "Loại yêu cầu", message: "Lời nhắn" },
    selectPlaceholder: "Chọn loại",
    typeOptions: { distributor: "Hợp tác phân phối", clinic: "Cung ứng phòng khám", odm: "ODM / Nhãn hàng riêng", general: "Liên hệ chung" },
    messagePlaceholder: "Mô tả doanh nghiệp và nhu cầu của bạn…",
    error: "Đã xảy ra lỗi. Vui lòng thử lại hoặc gửi email trực tiếp cho chúng tôi tại contact@gana-cosmetics.com.",
    submit: "Gửi yêu cầu →", submitting: "Đang gửi…", prefill: "Tôi quan tâm đến {product}. Vui lòng gửi báo giá và chi tiết.",
  },
  group: {
    eyebrow: "Tập đoàn của chúng tôi", h2pre: "", h2em: "GANA Group",
    body: "Ba công ty, một sứ mệnh — kết hợp chuyên môn về dược mỹ phẩm, thiết bị y tế và liệu pháp gen trong một tập đoàn Hàn Quốc duy nhất.",
    brands: [
      { tag: "Thiết bị y tế", desc: "Chất làm đầy da, thiết bị meso và phát triển ODM cho thẩm mỹ y khoa." },
      { tag: "Dược mỹ phẩm", desc: "Công thức mỹ phẩm cấp lâm sàng, phân phối đến phòng khám và đối tác trên toàn thế giới." },
      { tag: "R&D liệu pháp gen", desc: "Nghiên cứu liệu pháp gen tiên tiến và đổi mới y tế thế hệ mới." },
    ],
  },
  footer: {
    tagline: "Nhà sản xuất dược mỹ phẩm đã đăng ký FDA Hoa Kỳ thuộc GANA Group. Cung ứng cho các nhà phân phối và phòng khám thẩm mỹ trên toàn thế giới.",
    contactHeading: "Liên hệ", companyHeading: "Công ty",
    labelAddress: "Địa chỉ", labelTel: "Điện thoại", labelEmail: "Email",
    labelManufacturer: "Nhà sản xuất", labelFdaNo: "Số đăng ký FDA", labelGroup: "Tập đoàn", labelHours: "Giờ làm việc",
    hoursValue: "Thứ Hai–Thứ Sáu 09:00–18:00 (KST)",
    disclaimer: "Chỉ dành cho mục đích chuyên nghiệp. Sản phẩm có thể không có sẵn ở mọi thị trường. Dung dịch tan mỡ (GANA DA, V LINE) chỉ dành cho chuyên gia được đào tạo. Hình ảnh sản phẩm lấy từ catalogue chính thức của GANA Cosmetic.",
  },
  detail: {
    allProducts: "← Tất cả sản phẩm", home: "Trang chủ", productsCrumb: "Sản phẩm",
    notFound: "Không tìm thấy sản phẩm", backToCatalogue: "← Quay lại danh mục",
    retailNote: "Giá hiển thị là giá bán lẻ. Giá cho đại lý và nhà phân phối được cung cấp riêng khi có yêu cầu.",
    inquireBtn: "Hỏi về sản phẩm này →", inquiryPrice: "Liên hệ giá",
    keyActives: "Hoạt chất chính", specifications: "Thông số kỹ thuật",
    specCategory: "Danh mục", specVolume: "Dung tích / Quy cách", specRetail: "Bán lẻ (USD)", specLabel: "Nhãn",
    specNote: "Công bố đầy đủ thành phần (INCI), hồ sơ pháp lý và giá bán sỉ được cung cấp khi có yêu cầu.", relatedIn: "Sản phẩm liên quan trong {cat}",
    indicationsTitle: "Chỉ định", protocolTitle: "Cách dùng",
    downloadsTitle: "Tài liệu", downloadInci: "INCI / Thành phần đầy đủ", downloadCoa: "COA / Pháp lý", downloadCatalogue: "Catalogue (PDF)",
    requestNote: "Cung cấp cho đối tác B2B đã xác minh khi có yêu cầu.",
    cataloguePage: "Catalogue",
  },
  cats: {
    "Skin Booster": "Skin Booster", "Meso Solution": "Dung dịch Meso", "Chemical Peel": "Tẩy da hóa học",
    "Intimate Care": "Chăm sóc vùng kín", "Clinic Care": "Chăm sóc phòng khám", "Peptide": "Peptide",
  },
  badges: {
    "2024 NEW": "MỚI 2024", "2025 NEW": "MỚI 2025", "FDA + CPNP": "FDA + CPNP", "vs Rejuran": "so với Rejuran",
    "Hair Specialist": "Chuyên gia tóc", "PDRN": "PDRN", "Eye Care": "Chăm sóc mắt", "Whitening": "Làm trắng",
    "Sensitive Skin": "Da nhạy cảm", "Intimate Care": "Chăm sóc vùng kín",
    "PLLA Meso": "PLLA Meso", "Lipolysis": "Tan mỡ", "Biorevital": "Tái tạo sinh học", "Hydration": "Cấp ẩm", "Peptide": "Peptide",
  },
  indicationLabels: {
    "Regeneration": "Tái tạo", "Hydration": "Cấp ẩm", "Brightening": "Làm sáng", "Elasticity": "Đàn hồi", "Volume": "Tạo khối",
    "Wrinkles": "Nếp nhăn", "Scars": "Sẹo", "Hair": "Tóc/da đầu", "Eye bags": "Bọng mắt", "Dark circles": "Quầng thâm",
    "Anti-aging": "Chống lão hóa", "Exfoliation": "Tẩy tế bào chết", "Sensitive skin": "Da nhạy cảm", "pH care": "Chăm sóc pH",
    "Lipolysis": "Tan mỡ", "Lash growth": "Dài mi",
  },
  ingredientInfo: {
    "Cross-linked HA": "Cấp ẩm & tạo khối bền lâu", "PDRN": "Mảnh DNA — tái tạo & sửa chữa tế bào", "PLLA": "Kích thích sinh collagen",
    "Hyaluronic": "Cấp ẩm sâu", "HA": "Cấp ẩm sâu", "Glutathione": "Chống oxy hóa, làm trắng",
    "Argireline": "Giãn nếp nhăn kiểu Botox", "Acetyl Hexapeptide-8": "Giãn nếp nhăn kiểu Botox", "GHK-Cu": "Peptide đồng — tóc & phục hồi",
    "Carnitine": "Nhắm mỡ vùng mắt", "Vitamin C": "Chống oxy hóa & collagen", "Polyhydroxy Acid": "Axit tẩy tế bào dịu nhẹ",
    "Alpha Arbutin": "Hoạt chất làm sáng", "Sodium DNA": "Tái tạo từ DNA", "Adenosine": "Năng lượng & chống lão hóa", "Niacinamide": "Tông da & hàng rào",
    "Lidocaine": "Giảm đau", "Soy Isoflavone": "Phytoestrogen làm dịu", "Lactic Acid": "Cân bằng pH & tẩy nhẹ",
    "Deoxycholic Acid": "Phân hủy mỡ", "Phosphatidylcholine": "Tan mỡ", "Acetyl Tetrapeptide-5": "Giảm bọng",
    "Dipeptide Diaminobutyroyl": "SYN-AKE giãn cơ", "L-Carnosine": "Chống lão hóa",
    "Palmitoyl Pentapeptide-3": "Tăng collagen (Matrixyl)", "Palmitoyl Tripeptide-1": "Peptide phục hồi da",
    "Myristoyl Pentapeptide-17": "Peptide dài mi", "Acetyl Glutamyl Heptapeptide-1": "SNAP-8 giảm nhăn", "Nonapeptide-1": "Ức chế tyrosinase làm trắng",
  },
  prod: {
    "dmp-plus": { tag: "Booster đa hoạt chất cao cấp", desc: "PLLA + HA + PDRN + Glutathione. Booster đa hoạt chất trong lọ nạp sẵn, dùng ngay.", usage: "Lọ nạp sẵn dùng ngay — dùng meso gun hoặc MTS." },
    "phv": { tag: "Cấp ẩm bền vững 2 năm", desc: "Chất kích thích sinh học HA phân tử cao + PLLA. Có thể điều chỉnh bằng hyaluronidase để kiểm soát chính xác.", usage: "Thủ thuật meso / skin booster." },
    "eye-booster": { tag: "Tái tạo toàn mặt bằng PDRN", desc: "PDRN + Sodium DNA + Glutathione. Nhắm đến tái tạo tế bào trên toàn khuôn mặt.", usage: "Meso / MTS / bôi ngoài." },
    "tox": { tag: "Chất điều biến thần kinh bôi ngoài", desc: "Argireline 100ppm + PDRN + HA. Dạng xịt — không cần tiêm. FDA & EU CPNP.", usage: "Súng xịt khí hoặc dermaroller (≤0.5mm), trước khi ngủ, 2–3 lần/tuần, 5–6 buổi. Không tiêm." },
    "pnv-plus": { tag: "PDRN nồng độ cao", desc: "PDRN 2% — giải pháp lâm sàng thay thế trực tiếp cho Rejuran. Kèm Glutathione và HA 10mg/cc.", usage: "Meso gun (kim 1.5mm+) / MTS, hàng tuần, 3 buổi." },
    "pnv": { tag: "PDRN nồng độ thấp", desc: "Dung dịch meso PDRN nồng độ thấp (0.5%) với glutathione và HA liên kết chéo, giúp tái tạo, làm sáng và cấp ẩm.", usage: "Bôi ngoài hoặc dermaroller 0.2–0.5mm, hàng tuần, 3 buổi." },
    "scalp": { tag: "Tái tạo da đầu", desc: "PDRN + GHK-Cu nhắm đến tái tạo nang tóc và vi môi trường da đầu.", usage: "Dermaroller, hai tuần một lần. Luân phiên PDRN & GHK-Cu, 10 buổi. Không dùng cho mặt/cổ." },
    "eye": { tag: "Giải pháp bọng mắt & quầng thâm", desc: "Dung dịch meso chuyên biệt cho bọng mắt và quầng thâm, với carnitine và acetyl tetrapeptide-5.", usage: "Meso vùng dưới mắt. Một hộp = 20+ buổi." },
    "cocktail": { tag: "Cocktail meso làm sáng", desc: "Chương trình làm sáng hai lọ — glutathione và vitamin C (acid ascorbic), dùng xen kẽ theo tuần. Không bao giờ trộn chung.", usage: "Dermaroller/meso, xen kẽ (Glutathione tuần 1·3·5 / Vit C 2·4·6). Không trộn." },
    "dm": { tag: "PLLA Collagen Meso", desc: "Bột PLLA đông khô + HA liên kết chéo dạng hai phần. Kích thích collagen cho sẹo mụn, rạn da và nâng cơ. Không phải filler.", usage: "Trộn PLLA + HA bằng máy vortex. Hàng tháng, 2–3 buổi." },
    "v-line": { tag: "Tan mỡ mặt", desc: "Dung dịch tan mỡ PPC + acid deoxycholic với peptide và glutathione để tạo đường nét khuôn mặt.", usage: "Meso tạo đường nét. Chỉ chuyên gia được đào tạo." },
    "pha": { tag: "Tẩy da PHA dịu nhẹ", desc: "Tẩy da bằng acid polyhydroxy (PHA 10%) với alpha arbutin — dịu nhẹ, ít kích ứng và làm sáng cho da nhạy cảm, rosacea và da cơ địa.", usage: "Trước khi ngủ, làm sạch rồi thoa. Hàng tuần, 2–3 buổi." },
    "gyno": { tag: "Làm sáng vùng kín & chăm sóc pH", desc: "Làm sáng vùng kín và cân bằng pH với glutathione và soy isoflavone. Cũng làm dịu khô.", usage: "Bôi / chất bôi trơn." },
    "booster": { tag: "Tái tạo sinh học HA", desc: "Gel HA liên kết chéo với lidocaine để tái tạo sinh học (căng bóng). Dùng meso gun.", usage: "Dùng meso gun." },
    "booster-v": { tag: "Tái tạo sinh học dạng lọ", desc: "Dung dịch HA liên kết chéo + glutathione tái tạo sinh học, dạng lọ.", usage: "Meso / dermaroller." },
    "ha-v": { tag: "HA nồng độ cao", desc: "HA liên kết chéo nồng độ cao (22mg/cc) cho cấp ẩm và tạo khối, dạng lọ.", usage: "Meso." },
    "da": { tag: "Tan mỡ cơ thể & cằm", desc: "Dung dịch tan mỡ acid deoxycholic cho nọng cằm và mỡ cơ thể. Không dùng cho mặt.", usage: "Meso nọng cằm / cơ thể. Không dùng cho mặt." },
    "pep-apdn": { tag: "Peptide giãn cơ SYN-AKE", desc: "Dung dịch dipeptide SYN-AKE nguyên chất — giãn nếp nhăn biểu cảm qua đối kháng acetylcholine (kiểu Botox).", usage: PEP_USE_VI },
    "pep-carnosine": { tag: "Chống lão hóa", desc: "Dung dịch L-Carnosine nguyên chất — chất chống lão hóa làm giảm rút ngắn telomere.", usage: PEP_USE_VI },
    "pep-ah8": { tag: "Peptide nếp nhăn Argireline", desc: "Dung dịch Acetyl hexapeptide-8 (Argireline) nguyên chất — giãn nếp nhăn biểu cảm kiểu Botox.", usage: PEP_USE_VI },
    "pep-pp3": { tag: "Peptide collagen Matrixyl", desc: "Dung dịch Palmitoyl pentapeptide-3 (Matrixyl) nguyên chất — tăng collagen và elastin, giảm nếp nhăn nhỏ.", usage: PEP_USE_VI },
    "pep-pt1": { tag: "Peptide phục hồi da", desc: "Dung dịch Palmitoyl tripeptide-1 (pal-GHK) nguyên chất — sửa chữa hư tổn và củng cố cấu trúc nâng đỡ da.", usage: PEP_USE_VI },
    "pep-mp17": { tag: "Peptide dài mi", desc: "Dung dịch Myristoyl pentapeptide-17 nguyên chất — kích thích gen keratin để mi dày và dài.", usage: "Thoa dọc chân mi bằng cọ mắt (tránh mắt), hai tuần một lần, 3–4 buổi." },
    "pep-agh1": { tag: "Peptide nếp nhăn SNAP-8", desc: "Dung dịch Acetyl glutamyl heptapeptide-1 (SNAP-8) nguyên chất — Argireline kéo dài, giãn nếp nhăn kiểu Botox.", usage: PEP_USE_VI },
    "pep-at5": { tag: "Peptide chống bọng mắt", desc: "Dung dịch Acetyl tetrapeptide-5 nguyên chất — giảm bọng mắt dưới mắt.", usage: PEP_USE_VI },
    "pep-np1": { tag: "Peptide làm trắng", desc: "Dung dịch Nonapeptide-1 nguyên chất — ức chế kích hoạt tyrosinase để làm trắng và mờ đốm.", usage: PEP_USE_VI },
  },
};

export const translations: Record<Lang, Dict> = { en, zh, th, vi };

/** Replace "{key}" placeholders in a translated string. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

/** Best-match ingredient → benefit blurb (longest matching key wins). */
export function ingredientBlurb(dict: Record<string, string>, ing: string): string | null {
  let best: string | null = null;
  for (const key of Object.keys(dict)) {
    if (ing.toLowerCase().includes(key.toLowerCase()) && (!best || key.length > best.length)) best = key;
  }
  return best ? dict[best] : null;
}
