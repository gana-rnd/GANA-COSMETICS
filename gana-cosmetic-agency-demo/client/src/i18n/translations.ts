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

type ProductCopy = { tag: string; desc: string; usage: string; home?: string; clinic?: string };

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
    label: string; allLabel: string; items: string; priceNote: string;
    searchPlaceholder: string; searchEmpty: string;
    ctaEyebrow: string; ctaTitle1: string; ctaTitleEm: string; ctaButton: string;
  };
  contact: {
    eyebrow: string; h2pre: string; h2em: string; body: string;
    list: [string, string, string, string];
    thankTitle: string; thankBody: string; thankFallback: string;
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
    labelAddress: string; labelTel: string; labelEmail: string; labelWhatsapp: string;
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
    downloadsTitle: string; downloadInci: string; downloadCoa: string; downloadCatalogue: string; requestNote: string; cataloguePage: string; beforeAfter: string;
    homeUse: string; clinicUse: string;
  };
  cats: Record<string, string>;
  badges: Record<string, string>;
  indicationLabels: Record<string, string>;
  ingredientInfo: Record<string, string>;
  prod: Record<string, ProductCopy>;
  peptideTitles: Record<string, { home: string; clinic: string }>;
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
    label: "Cosmeceuticals", allLabel: "All", items: "{n} items", priceNote: "All prices are retail (USD). Dealer pricing & shipping quoted separately on inquiry.",
    searchPlaceholder: "Search products", searchEmpty: "No products found",
    ctaEyebrow: "From Seoul to Your Clinic",
    ctaTitle1: "Global B2B supply,", ctaTitleEm: "direct from the manufacturer.", ctaButton: "Start a Conversation →",
  },
  contact: {
    eyebrow: "Get in Touch", h2pre: "Partner with", h2em: "GANA Cosmetic",
    body: "Whether you are a distributor seeking exclusive territory rights, a clinic looking for reliable supply, or an ODM partner — we respond to every inquiry within 48 hours.",
    list: ["Distributor Partnership", "Clinic Supply", "ODM / Private Label", "General Inquiry"],
    thankTitle: "Thank You", thankBody: "Your inquiry has been received. We will respond within 48 hours.", thankFallback: "No reply within 24 hours? Email us directly at contact@gana-cosmetics.com.",
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
    labelAddress: "Address", labelTel: "Tel", labelEmail: "Email", labelWhatsapp: "WhatsApp",
    labelManufacturer: "Manufacturer", labelFdaNo: "FDA Reg. No.", labelGroup: "Group", labelHours: "Hours",
    hoursValue: "Mon–Fri 09:00–18:00 KST",
    disclaimer: "For professional use only. Products may not be available in all markets. Lipolysis solutions (GANA DA, V LINE) are for trained professionals only. Product images sourced from official GANA Cosmetic catalogues.",
  },
  detail: {
    allProducts: "← All Products", home: "Home", productsCrumb: "Products",
    notFound: "Product not found", backToCatalogue: "← Back to catalogue",
    retailNote: "Retail price shown (USD). Dealer & distributor pricing on separate inquiry. Shipping not included.",
    inquireBtn: "Inquire about this product →", inquiryPrice: "Inquiry",
    keyActives: "Key Actives", specifications: "Specifications",
    specCategory: "Category", specVolume: "Volume / Packaging", specRetail: "Retail (USD)", specLabel: "Label",
    specNote: "Full INCI disclosure, regulatory documentation, and wholesale pricing available upon inquiry.",
    relatedIn: "Related in {cat}",
    indicationsTitle: "Indications", protocolTitle: "How to Use",
    downloadsTitle: "Documents", downloadInci: "INCI / Full Ingredients", downloadCoa: "COA / Regulatory", downloadCatalogue: "Catalogue (PDF)",
    requestNote: "Available to verified B2B partners on request.",
    cataloguePage: "Catalogue", beforeAfter: "Before & After",
    homeUse: "Home Use", clinicUse: "Clinic Use",
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
    "FDA Mask": "FDA Mask", "Recovery": "Recovery", "Anti-Aging": "Anti-Aging",
    "NMN": "NMN", "Exosome": "Exosome", "Marine Collagen": "Marine Collagen",
  },
  indicationLabels: {
    "Regeneration": "Regeneration", "Hydration": "Hydration", "Brightening": "Brightening", "Elasticity": "Elasticity",
    "Volume": "Volume", "Wrinkles": "Wrinkles", "Scars": "Scars", "Hair": "Hair / Scalp", "Eye bags": "Eye Bags",
    "Dark circles": "Dark Circles", "Anti-aging": "Anti-Aging", "Exfoliation": "Exfoliation", "Sensitive skin": "Sensitive Skin",
    "pH care": "pH Care", "Lipolysis": "Lipolysis", "Lash growth": "Lash Growth", "Soothing": "Soothing",
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
    "Bio Cellulose": "Bio-cellulose sheet — soothing", "Astragalus": "Telomerase-activating root extract",
    "Nicotinamide Mononucleotide": "NMN — NAD+ & sirtuin anti-aging", "Centella Asiatica": "Exosome — soothing & repair", "Marine Collagen": "Skin structure & elasticity",
  },
  peptideTitles: {
    "pep-apdn": { home: "Relaxing Expression Lines", clinic: "Enhanced Wrinkle Reduction" },
    "pep-carnosine": { home: "Anti-Aging Protection & Firmness", clinic: "Advanced Cellular Protection & Rejuvenation" },
    "pep-ah8": { home: "Softening Dynamic Wrinkles", clinic: "Targeted Relaxation of Expression Lines" },
    "pep-pp3": { home: "Boosting Collagen & Reducing Fine Lines", clinic: "Intensive Collagen Remodeling" },
    "pep-pt1": { home: "Repairing & Strengthening Skin", clinic: "Advanced Skin Regeneration & Repair" },
    "pep-mp17": { home: "Enhancing Eyelash Growth", clinic: "Professional Eyelash Enhancement" },
    "pep-agh1": { home: "Advanced Wrinkle Relaxation", clinic: "Superior Dynamic Wrinkle Reduction" },
    "pep-at5": { home: "Reducing Puffy Under-Eye Bags", clinic: "Professional Treatment for Eye Bags" },
    "pep-np1": { home: "Brightening & Spot Correction", clinic: "Targeted Hyperpigmentation Treatment" },
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
    "pep-apdn": { tag: "SYN-AKE Relaxing Peptide", desc: "Pure SYN-AKE dipeptide solution — relaxes expression wrinkles via acetylcholine antagonism (Botox-like).", usage: PEP_USE_EN, home: "GANA Peptide APDN features SYN-AKE, a synthetic peptide designed to mimic the wrinkle-relaxing effects of snake venom. This innovative ingredient works by temporarily inhibiting muscle contractions that cause dynamic wrinkles, such as frown lines, forehead creases, and crow's feet. By relaxing these micro-muscles, SYN-AKE helps to smooth out existing expression lines and prevent new ones from forming, giving the skin a more youthful and serene appearance. It's an excellent addition to an anti-aging routine for those looking for a non-invasive way to reduce the visibility of dynamic wrinkles. Routine Placement: Apply a few drops of GANA Peptide APDN serum to cleansed skin in the morning and evening, focusing on areas with expression lines. Follow with your regular moisturizer and SPF during the day.", clinic: "In a clinical setting, the efficacy of GANA Peptide APDN can be significantly enhanced through professional application methods. Due to the larger molecular size of peptides, topical application alone may not achieve maximum penetration. Clinics utilize techniques such as microneedling or dermarolling (typically 0.2mm - 0.5mm) to create microscopic channels in the skin. This allows the SYN-AKE peptide to bypass the skin's outer barrier and absorb deeply into the target tissues, maximizing its muscle-relaxing and wrinkle-smoothing effects. It can be integrated into a series of 2-3 sessions at 2-week intervals and can be combined with other peptide solutions for a comprehensive anti-aging treatment." },
    "pep-carnosine": { tag: "Anti-Aging Geroprotector", desc: "Pure L-Carnosine solution — a geroprotector that reduces telomere shortening for anti-aging.", usage: PEP_USE_EN, home: "GANA Peptide Carnosine harnesses the power of L-Carnosine, a naturally occurring dipeptide known for its potent antioxidant and anti-glycation properties. Glycation is a process where sugar molecules bind to proteins like collagen and elastin, leading to their stiffening and the formation of wrinkles and sagging skin. L-Carnosine acts as a protective shield, preventing this damage and helping to maintain the skin's firmness and elasticity. Furthermore, L-Carnosine has been shown to reduce telomere shortening, a key indicator of cellular aging, thus promoting cellular longevity and overall skin health. This makes it an excellent ingredient for daily anti-aging protection and for improving skin resilience. Routine Placement: Apply GANA Peptide Carnosine serum to your face and neck after cleansing and toning, both morning and night. It can be layered with other serums and followed by a moisturizer.", clinic: "In a professional setting, GANA Peptide Carnosine can be utilized to provide advanced cellular protection and rejuvenation. Its geroprotective properties, including the ability to reduce telomere shortening and combat glycation, make it a valuable asset in treatments aimed at slowing down the intrinsic aging process. When applied with microneedling or dermarolling (0.2mm - 0.5mm), L-Carnosine can penetrate deeper into the skin, enhancing its ability to protect collagen and elastin fibers from degradation and promote cellular repair. This can lead to improved skin firmness, elasticity, and a reduction in the visible signs of aging. It can be incorporated into a series of 2-3 sessions at 2-week intervals and can be combined with other peptide solutions." },
    "pep-ah8": { tag: "Argireline Wrinkle Peptide", desc: "Pure Acetyl hexapeptide-8 (Argireline) solution — Botox-like relaxation of expression wrinkles.", usage: PEP_USE_EN, home: "GANA Peptide AH8 contains Acetyl Hexapeptide-8, commonly known as Argireline, a popular peptide recognized for its Botox-like effects. This peptide works by interfering with the nerve signals that tell facial muscles to contract, thereby relaxing the muscles responsible for dynamic wrinkles. This leads to a visible reduction in the appearance of expression lines, particularly around the eyes and forehead, without the need for injections. It's a gentle yet effective way to achieve smoother-looking skin. Routine Placement: Apply GANA Peptide AH8 serum to areas with dynamic wrinkles (e.g., forehead, around the eyes) after cleansing and before heavier creams. Use twice daily for best results.", clinic: "In a clinical setting, GANA Peptide AH8 (Argireline) can be used to provide targeted relaxation of expression lines. Similar to other peptides, its penetration can be significantly enhanced through professional techniques. Microneedling or dermarolling (0.2mm - 0.5mm) can create micro-channels, allowing the Acetyl Hexapeptide-8 to reach deeper into the skin where it can more effectively modulate muscle contractions. This approach can lead to a more pronounced and longer-lasting reduction in the depth of wrinkles. It is typically administered in 2-3 sessions at 2-week intervals and can be combined with other peptides for a comprehensive anti-aging strategy." },
    "pep-pp3": { tag: "Matrixyl Collagen Peptide", desc: "Pure Palmitoyl pentapeptide-3 (Matrixyl) solution — boosts collagen and elastin, reduces fine lines.", usage: PEP_USE_EN, home: "GANA Peptide PP3 features Palmitoyl Pentapeptide-3, also known as Matrixyl, a powerful signal peptide that communicates with skin cells to stimulate the production of collagen and elastin. As we age, collagen and elastin production naturally declines, leading to loss of skin firmness and the formation of wrinkles. Matrixyl helps to reverse this process by encouraging the skin to rebuild its support structure, resulting in improved skin elasticity, reduced wrinkle depth, and a smoother, more youthful complexion. It's an essential ingredient for anyone looking to combat the signs of aging and restore skin vitality. Routine Placement: Apply GANA Peptide PP3 serum to your entire face and neck after cleansing and toning, both morning and night. Gently massage until absorbed, then follow with your preferred moisturizer.", clinic: "Clinically, GANA Peptide PP3 (Matrixyl) is ideal for intensive collagen remodeling treatments. By delivering Palmitoyl Pentapeptide-3 directly into the dermis, professional procedures can significantly amplify its collagen-boosting effects. Techniques such as microneedling or dermarolling (0.2mm - 0.5mm) facilitate deeper penetration, allowing the peptide to effectively signal fibroblasts to produce new collagen and elastin fibers. This leads to a more dramatic improvement in skin firmness, elasticity, and the reduction of fine lines and wrinkles. It can be incorporated into a series of 2-3 sessions at 2-week intervals and can be combined with other peptides for a holistic anti-aging approach." },
    "pep-pt1": { tag: "Skin-Repair Peptide", desc: "Pure Palmitoyl tripeptide-1 (pal-GHK) solution — repairs visible damage and strengthens skin's support structures.", usage: PEP_USE_EN, home: "GANA Peptide PT1 contains Palmitoyl Tripeptide-1, also known as pal-GHK, a skin-repairing peptide that plays a crucial role in strengthening the skin's support structures and repairing visible damage. This peptide works by stimulating the production of key components of the extracellular matrix, such as collagen and glycosaminoglycans. By promoting these essential building blocks, pal-GHK helps to improve skin resilience, reduce the appearance of fine lines and wrinkles, and enhance overall skin texture. It's particularly beneficial for skin that needs extra support in recovery and maintaining its youthful integrity. Routine Placement: Apply GANA Peptide PT1 serum to cleansed skin, focusing on areas needing repair or strengthening. Use morning and night before your moisturizer.", clinic: "In a clinical setting, GANA Peptide PT1 offers advanced capabilities for skin regeneration and repair. Professional application methods, such as microneedling or dermarolling (0.2mm - 0.5mm), ensure optimal delivery of Palmitoyl Tripeptide-1 to the deeper layers of the skin. This enhanced penetration allows the peptide to more effectively stimulate the synthesis of collagen and other vital skin components, leading to accelerated repair of damaged skin, improved wound healing, and a significant boost in skin firmness and elasticity. It can be integrated into a series of 2-3 sessions at 2-week intervals and can be cocktailed with other peptides for comprehensive skin rejuvenation." },
    "pep-mp17": { tag: "Eyelash Growth Peptide", desc: "Pure Myristoyl pentapeptide-17 solution — stimulates keratin genes to thicken and grow eyelashes.", usage: "Apply along lash line with an eye brush (avoid eyes), biweekly, 3–4 sessions.", home: "GANA Peptide MP17 features Myristoyl Pentapeptide-17, a specialized peptide designed to promote the appearance of longer, thicker, and fuller eyelashes. This peptide works by stimulating the keratin genes, which are essential for hair growth. By encouraging the natural growth cycle of eyelashes, it helps to improve their density and length over time. It's a safe and effective way to enhance the natural beauty of your eyes without the need for extensions or harsh chemicals. Routine Placement: Apply GANA Peptide MP17 along the lash line with an eye brush, similar to applying liquid eyeliner. Use biweekly, avoiding direct contact with the eyes. For best results, use consistently for 3-4 sessions.", clinic: "Clinically, GANA Peptide MP17 can be used for professional eyelash enhancement treatments. While the product is designed for home use, clinics can offer guidance on proper application techniques and integrate it into broader beauty regimens. The key is consistent and precise application along the lash line to stimulate keratin genes effectively. This peptide provides a non-invasive option for clients seeking to improve the natural growth and appearance of their eyelashes. It can be recommended as a standalone treatment or as part of a larger aesthetic plan." },
    "pep-agh1": { tag: "SNAP-8 Wrinkle Peptide", desc: "Pure Acetyl glutamyl heptapeptide-1 (SNAP-8) solution — an elongated Argireline for Botox-like wrinkle relaxation.", usage: PEP_USE_EN, home: "GANA Peptide AGH1 contains Acetyl Glutamyl Heptapeptide-1, known as SNAP-8, an advanced peptide that is an elongated version of Argireline. SNAP-8 works by further reducing the intensity of muscle contractions responsible for expression wrinkles, offering a more potent Botox-like effect. It targets the same mechanism as Argireline but with enhanced efficacy, leading to a more significant reduction in the depth of wrinkles, particularly on the forehead and around the eyes. This peptide provides a powerful solution for those seeking to visibly smooth out dynamic lines and achieve a more relaxed facial appearance. Routine Placement: Apply GANA Peptide AGH1 serum to areas with pronounced expression wrinkles after cleansing. Use twice daily, focusing on targeted application, before applying other serums or moisturizers.", clinic: "In a clinical setting, GANA Peptide AGH1 (SNAP-8) offers superior dynamic wrinkle reduction compared to its predecessor, Argireline, with studies suggesting it can be up to 30% more potent. When applied using microneedling or dermarolling (0.2mm - 0.5mm), Acetyl Glutamyl Heptapeptide-1 can achieve optimal penetration, leading to a more profound and lasting relaxation of facial muscles. This makes it an excellent choice for clients seeking significant improvement in deep expression lines. It is typically administered in 2-3 sessions at 2-week intervals and can be combined with other peptides for a comprehensive anti-aging treatment." },
    "pep-at5": { tag: "Anti-Eyebag Peptide", desc: "Pure Acetyl tetrapeptide-5 solution — reduces puffy under-eye bags.", usage: PEP_USE_EN, home: "GANA Peptide AT5 features Acetyl Tetrapeptide-5, a specialized peptide formulated to address the common concern of puffy under-eye bags. This peptide works by targeting the mechanisms that contribute to fluid accumulation and swelling in the delicate under-eye area. It helps to improve lymphatic circulation and reduce capillary permeability, thereby diminishing puffiness and dark circles caused by fluid retention. Regular use can lead to a more refreshed and revitalized eye contour. Routine Placement: Gently dab GANA Peptide AT5 serum around the orbital bone after cleansing and toning, both morning and night. Allow it to absorb fully before applying eye cream or moisturizer.", clinic: "Clinically, GANA Peptide AT5 is a valuable tool for professional treatments targeting under-eye bags and puffiness. By utilizing microneedling or dermarolling (0.2mm - 0.5mm), Acetyl Tetrapeptide-5 can be delivered more effectively to the periorbital area, enhancing its ability to reduce fluid retention and improve microcirculation. This can lead to a more significant and rapid reduction in the appearance of eye bags, providing clients with a more youthful and rested look. It can be integrated into a series of 2-3 sessions at 2-week intervals and can be combined with other peptides for a comprehensive eye rejuvenation treatment." },
    "pep-np1": { tag: "Whitening Peptide", desc: "Pure Nonapeptide-1 solution — inhibits tyrosinase activation for whitening and spot correction.", usage: PEP_USE_EN, home: "GANA Peptide NP1 contains Nonapeptide-1, a powerful whitening peptide designed to address hyperpigmentation and promote a brighter, more even skin tone. This peptide works by inhibiting the activity of tyrosinase, a key enzyme involved in melanin production. By blocking the signals that trigger melanin synthesis, Nonapeptide-1 helps to reduce the appearance of existing dark spots, sun spots, and post-inflammatory hyperpigmentation, while also preventing new discoloration from forming. It's an excellent choice for those seeking to achieve a luminous and uniform complexion. Routine Placement: Apply GANA Peptide NP1 serum to cleansed skin, focusing on areas with hyperpigmentation or uneven tone. Use morning and night, followed by a broad-spectrum SPF during the day.", clinic: "In a clinical setting, GANA Peptide NP1 offers targeted treatment for hyperpigmentation. Professional application methods, such as microneedling or dermarolling (0.2mm - 0.5mm), can significantly enhance the delivery of Nonapeptide-1 to the melanocytes, where it can more effectively inhibit tyrosinase activity. This leads to a more pronounced reduction in dark spots and a more even skin tone. It can be integrated into a series of 2-3 sessions at 2-week intervals and can be combined with other peptides for a comprehensive skin brightening and anti-pigmentation strategy." },
    "am": { tag: "Telomerase Anti-Aging Activator", desc: "Astragalus membranaceus root extract (100ppm) — TA-65-class telomerase activation for cellular anti-aging.", usage: "Meso / MTS / topical, biweekly." },
    "tm": { tag: "FDA-Registered Mask Pack", desc: "Multi-active sheet mask — PDRN, PHA, Acetyl Hexapeptide-8, cross-linked HA and alpha arbutin. FDA-registered formulation.", usage: "Apply one sheet to cleansed skin for 15–20 min, 2–3×/week." },
    "mask": { tag: "Post-Procedure Recovery Mask", desc: "Bio-cellulose recovery mask with PLLA, cross-linked HA and PDRN — soothes and regenerates burned or post-treatment skin.", usage: "Apply one sheet to the affected area after a procedure or burn. Single use." },
    "nphg": { tag: "NMN Anti-Aging Booster", desc: "Non-crosslinked HA booster with NMN, PDRN and glutathione — raises NAD+ and activates sirtuin genes for anti-aging, hydration and brightening.", usage: "Meso / MTS / topical." },
    "exo-nphg": { tag: "Exosome NMN Booster", desc: "Centella-derived exosome (extracellular vesicles) booster with NMN, PDRN and glutathione — soothing, regeneration and anti-aging in a non-crosslinked vial.", usage: "Meso / MTS / topical." },
    "fish-collagen": { tag: "Marine Collagen Booster", desc: "Pure marine (fish) collagen solution — improves skin hydration, elasticity and wrinkles while supporting tissue repair.", usage: "Meso / MTS / topical." },
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
    label: "药妆系列", allLabel: "全部", items: "{n} 件", priceNote: "所有价格为零售价（USD）。经销商价格与运费请另行咨询。",
    searchPlaceholder: "搜索产品", searchEmpty: "未找到产品",
    ctaEyebrow: "从首尔直达您的诊所", ctaTitle1: "全球 B2B 供应，", ctaTitleEm: "由制造商直供。", ctaButton: "开始洽谈 →",
  },
  contact: {
    eyebrow: "联系我们", h2pre: "携手", h2em: "GANA Cosmetic",
    body: "无论您是寻求独家区域代理的经销商、寻找稳定供货的诊所，还是 ODM 合作伙伴 —— 我们都会在 48 小时内回复每一封咨询。",
    list: ["经销代理合作", "诊所供货", "ODM / 贴牌代工", "一般咨询"],
    thankTitle: "感谢您", thankBody: "我们已收到您的咨询，将在 48 小时内回复。", thankFallback: "24 小时内未收到回复？请直接发送邮件至 contact@gana-cosmetics.com。",
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
    labelAddress: "地址", labelTel: "电话", labelEmail: "邮箱", labelWhatsapp: "WhatsApp",
    labelManufacturer: "制造商", labelFdaNo: "FDA 注册号", labelGroup: "集团", labelHours: "营业时间",
    hoursValue: "周一至周五 09:00–18:00（KST）",
    disclaimer: "仅供专业用途。部分产品可能并非在所有市场供应。溶脂产品（GANA DA、V LINE）仅限受训专业人员使用。产品图片来自 GANA Cosmetic 官方目录。",
  },
  detail: {
    allProducts: "← 全部产品", home: "首页", productsCrumb: "产品",
    notFound: "未找到该产品", backToCatalogue: "← 返回目录",
    retailNote: "所示为零售价（USD）。经销商与代理价格请另行咨询。运费另计。",
    inquireBtn: "咨询此产品 →", inquiryPrice: "询价",
    keyActives: "核心活性成分", specifications: "规格参数",
    specCategory: "类别", specVolume: "容量 / 包装", specRetail: "零售价（USD）", specLabel: "标签",
    specNote: "完整成分（INCI）公开、法规文件及批发价格可应要求提供。", relatedIn: "{cat} 同类产品",
    indicationsTitle: "适应症", protocolTitle: "使用方法",
    downloadsTitle: "资料下载", downloadInci: "INCI / 全成分", downloadCoa: "COA / 法规文件", downloadCatalogue: "产品目录（PDF）",
    requestNote: "经认证的 B2B 合作伙伴可应要求获取。",
    cataloguePage: "产品目录", beforeAfter: "前后对比",
    homeUse: "居家使用", clinicUse: "诊所应用",
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
    "FDA Mask": "FDA 面膜", "Recovery": "术后修复", "Anti-Aging": "抗衰",
    "NMN": "NMN", "Exosome": "外泌体", "Marine Collagen": "海洋胶原",
  },
  indicationLabels: {
    "Regeneration": "再生", "Hydration": "保湿", "Brightening": "提亮", "Elasticity": "弹力", "Volume": "丰盈",
    "Wrinkles": "皱纹", "Scars": "疤痕", "Hair": "头皮·毛发", "Eye bags": "眼袋", "Dark circles": "黑眼圈",
    "Anti-aging": "抗衰", "Exfoliation": "去角质", "Sensitive skin": "敏感肌", "pH care": "pH 护理",
    "Lipolysis": "溶脂", "Lash growth": "睫毛增长", "Soothing": "舒缓",
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
    "Bio Cellulose": "生物纤维膜 — 舒缓", "Astragalus": "激活端粒酶的根萃取",
    "Nicotinamide Mononucleotide": "NMN — NAD+ 与抗衰", "Centella Asiatica": "外泌体 — 舒缓与修复", "Marine Collagen": "皮肤结构与弹力",
  },
  peptideTitles: {
    "pep-apdn": { home: "舒缓表情纹", clinic: "强化抗皱" },
    "pep-carnosine": { home: "抗衰保护与紧致", clinic: "深层细胞保护与焕活" },
    "pep-ah8": { home: "柔化动态纹", clinic: "精准舒缓表情纹" },
    "pep-pp3": { home: "促进胶原、减少细纹", clinic: "强效胶原重塑" },
    "pep-pt1": { home: "修复与强韧肌肤", clinic: "进阶肌肤再生与修复" },
    "pep-mp17": { home: "促进睫毛生长", clinic: "专业睫毛增强" },
    "pep-agh1": { home: "进阶抗皱舒缓", clinic: "卓越动态抗皱" },
    "pep-at5": { home: "减轻眼下浮肿眼袋", clinic: "专业眼袋护理" },
    "pep-np1": { home: "提亮与淡斑", clinic: "针对性色素沉着护理" },
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
    "pep-apdn": { tag: "SYN-AKE 松弛肽", desc: "纯 SYN-AKE 二肽溶液 —— 通过拮抗乙酰胆碱舒缓表情纹（类肉毒）。", usage: PEP_USE_ZH, home: "GANA Peptide APDN 采用 SYN-AKE —— 一种模拟蛇毒舒缓皱纹效果的合成肽。这一创新成分通过暂时抑制引起动态皱纹（如皱眉纹、额头纹和鱼尾纹）的肌肉收缩发挥作用。通过放松这些微小肌肉，SYN-AKE 有助于抚平现有表情纹并预防新纹形成，使肌肤更显年轻、平静。对于希望以非侵入方式减少动态皱纹的人，它是抗衰护理的绝佳补充。使用方法：洁面后早晚取数滴 GANA Peptide APDN 精华涂于有表情纹的部位，白天后续使用日常保湿与防晒。", clinic: "在临床环境中，GANA Peptide APDN 的功效可通过专业应用方法显著增强。由于肽分子较大，单纯外用可能无法达到最大渗透。诊所采用微针或滚轮（通常 0.2mm - 0.5mm）在皮肤上制造微通道，使 SYN-AKE 肽绕过皮肤外屏障深入目标组织，最大化其舒缓肌肉与抚平皱纹的效果。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽溶液搭配用于全面的抗衰治疗。" },
    "pep-carnosine": { tag: "抗衰保护肽", desc: "纯 L-肌肽溶液 —— 减缓端粒缩短的抗衰保护剂。", usage: PEP_USE_ZH, home: "GANA Peptide Carnosine 蕴含 L-肌肽 —— 一种天然存在的二肽，以强效抗氧化与抗糖化特性著称。糖化是糖分子与胶原、弹性蛋白等蛋白质结合，导致其僵化并形成皱纹与松弛的过程。L-肌肽如同保护屏障，防止此类损伤，帮助维持肌肤紧致与弹性。此外，L-肌肽已被证明可减缓端粒缩短（细胞老化的关键指标），从而促进细胞长寿与整体肌肤健康。这使其成为日常抗衰保护与提升肌肤韧性的绝佳成分。使用方法：洁面爽肤后早晚将 GANA Peptide Carnosine 精华涂于面部与颈部，可叠加于其他精华，再使用保湿。", clinic: "在专业环境中，GANA Peptide Carnosine 可用于提供进阶的细胞保护与焕活。其抗衰保护特性（包括减缓端粒缩短与对抗糖化）使其成为延缓内源性老化疗程中的宝贵资产。配合微针或滚轮（0.2mm - 0.5mm）使用时，L-肌肽可更深层渗透，增强其保护胶原与弹性蛋白纤维免受降解并促进细胞修复的能力。这可改善肌肤紧致度、弹性，并减少可见的老化迹象。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽溶液搭配。" },
    "pep-ah8": { tag: "Argireline 抗皱肽", desc: "纯 Acetyl hexapeptide-8（Argireline）溶液 —— 类肉毒舒缓表情纹。", usage: PEP_USE_ZH, home: "GANA Peptide AH8 含有 Acetyl Hexapeptide-8（俗称 Argireline）—— 一种以类肉毒效果著称的热门肽。它通过干扰指示面部肌肉收缩的神经信号，放松导致动态皱纹的肌肉，从而在无需注射的情况下明显减少眼周与额头的表情纹。这是一种温和而有效的光滑肌肤方式。使用方法：洁面后、厚重面霜之前，将 GANA Peptide AH8 精华涂于动态纹区域（如额头、眼周），每日两次以获得最佳效果。", clinic: "在临床环境中，GANA Peptide AH8（Argireline）可用于精准舒缓表情纹。与其他肽类似，其渗透可通过专业技术显著增强。微针或滚轮（0.2mm - 0.5mm）可制造微通道，使 Acetyl Hexapeptide-8 更深入皮肤，更有效地调节肌肉收缩。此方法可带来更明显、更持久的皱纹深度减少。通常进行 2-3 个疗程、间隔 2 周，并可与其他肽搭配用于全面抗衰策略。" },
    "pep-pp3": { tag: "Matrixyl 胶原肽", desc: "纯 Palmitoyl pentapeptide-3（Matrixyl）溶液 —— 促进胶原与弹性蛋白，减少细纹。", usage: PEP_USE_ZH, home: "GANA Peptide PP3 采用 Palmitoyl Pentapeptide-3（又称 Matrixyl）—— 一种强效信号肽，与皮肤细胞沟通以刺激胶原与弹性蛋白生成。随着年龄增长，胶原与弹性蛋白生成自然下降，导致肌肤紧致度流失与皱纹形成。Matrixyl 通过鼓励皮肤重建支撑结构来逆转此过程，从而改善肌肤弹性、减少皱纹深度，使肤色更平滑、年轻。对于任何希望对抗老化迹象、恢复肌肤活力的人，它都是必备成分。使用方法：洁面爽肤后早晚将 GANA Peptide PP3 精华涂于整个面部与颈部，轻柔按摩至吸收，再使用喜爱的保湿产品。", clinic: "在临床上，GANA Peptide PP3（Matrixyl）非常适合强效胶原重塑疗程。通过将 Palmitoyl Pentapeptide-3 直接导入真皮，专业操作可显著放大其促胶原效果。微针或滚轮（0.2mm - 0.5mm）等技术促进更深渗透，使该肽有效地向成纤维细胞发出信号以生成新的胶原与弹性蛋白纤维。这可带来肌肤紧致度、弹性的显著改善以及细纹与皱纹的减少。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽搭配用于整体抗衰方案。" },
    "pep-pt1": { tag: "皮肤修复肽", desc: "纯 Palmitoyl tripeptide-1（pal-GHK）溶液 —— 修复可见损伤，强化皮肤支撑结构。", usage: PEP_USE_ZH, home: "GANA Peptide PT1 含有 Palmitoyl Tripeptide-1（又称 pal-GHK）—— 一种修复肽，在强化肌肤支撑结构与修复可见损伤方面发挥关键作用。它通过刺激细胞外基质关键成分（如胶原与氨基葡聚糖）的生成发挥作用。通过促进这些必需的构建单元，pal-GHK 有助于提升肌肤韧性、减少细纹与皱纹，并改善整体肤质。对于需要额外支持以恢复并维持年轻状态的肌肤尤为有益。使用方法：将 GANA Peptide PT1 精华涂于洁净肌肤需修复或强化的部位，早晚于保湿之前使用。", clinic: "在临床环境中，GANA Peptide PT1 为肌肤再生与修复提供进阶能力。微针或滚轮（0.2mm - 0.5mm）等专业应用方法可确保 Palmitoyl Tripeptide-1 最佳地输送至皮肤深层。这种增强渗透使该肽更有效地刺激胶原及其他重要肌肤成分的合成，从而加速受损肌肤修复、改善伤口愈合，并显著提升肌肤紧致度与弹性。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽鸡尾酒搭配用于全面肌肤焕活。" },
    "pep-mp17": { tag: "睫毛增长肽", desc: "纯 Myristoyl pentapeptide-17 溶液 —— 刺激角蛋白基因，增浓并促进睫毛生长。", usage: "用眼刷沿睫毛根部涂抹（避开眼睛），每两周一次，3–4 个疗程。", home: "GANA Peptide MP17 采用 Myristoyl Pentapeptide-17 —— 一种专门设计用于促进睫毛更长、更浓密、更丰盈外观的肽。它通过刺激对毛发生长至关重要的角蛋白基因发挥作用。通过促进睫毛的自然生长周期，它有助于随时间改善睫毛的密度与长度。这是一种安全有效的方式，无需嫁接或刺激性化学品即可增强双眼的自然美。使用方法：用眼刷沿睫毛根部涂抹 GANA Peptide MP17，类似涂抹眼线液。每两周一次，避免直接接触眼睛。为获得最佳效果，请坚持使用 3-4 个疗程。", clinic: "在临床上，GANA Peptide MP17 可用于专业睫毛增强护理。虽然该产品为居家使用设计，但诊所可就正确涂抹技巧提供指导，并将其纳入更广泛的美容护理中。关键在于沿睫毛根部持续而精准地涂抹，以有效刺激角蛋白基因。该肽为希望改善睫毛自然生长与外观的客户提供非侵入式选择。可作为单独护理或更大美学方案的一部分推荐。" },
    "pep-agh1": { tag: "SNAP-8 抗皱肽", desc: "纯 Acetyl glutamyl heptapeptide-1（SNAP-8）溶液 —— Argireline 的延长肽，类肉毒抗皱。", usage: PEP_USE_ZH, home: "GANA Peptide AGH1 含有 Acetyl Glutamyl Heptapeptide-1（称为 SNAP-8）—— 一种进阶肽，是 Argireline 的延长版本。SNAP-8 通过进一步降低导致表情纹的肌肉收缩强度发挥作用，提供更强的类肉毒效果。它针对与 Argireline 相同的机制但功效更强，从而更显著地减少皱纹深度，尤其在额头与眼周。该肽为希望明显抚平动态纹、获得更放松面部外观的人提供强效解决方案。使用方法：洁面后将 GANA Peptide AGH1 精华涂于明显的表情纹部位，每日两次，注重针对性涂抹，于其他精华或保湿之前使用。", clinic: "在临床环境中，GANA Peptide AGH1（SNAP-8）相比其前身 Argireline 提供更卓越的动态抗皱效果，研究表明其效力可高出约 30%。配合微针或滚轮（0.2mm - 0.5mm）使用时，Acetyl Glutamyl Heptapeptide-1 可达到最佳渗透，带来更深层、更持久的面部肌肉舒缓。这使其成为希望显著改善深层表情纹客户的绝佳选择。通常进行 2-3 个疗程、间隔 2 周，并可与其他肽搭配用于全面抗衰治疗。" },
    "pep-at5": { tag: "抗眼袋肽", desc: "纯 Acetyl tetrapeptide-5 溶液 —— 减轻眼下浮肿眼袋。", usage: PEP_USE_ZH, home: "GANA Peptide AT5 采用 Acetyl Tetrapeptide-5 —— 一种专门配制以应对眼下浮肿眼袋这一常见问题的肽。它通过针对导致眼下娇嫩部位液体积聚与肿胀的机制发挥作用。它有助于改善淋巴循环、降低毛细血管通透性，从而减少因水分滞留导致的浮肿与黑眼圈。规律使用可使眼部轮廓更显清新与焕活。使用方法：洁面爽肤后，将 GANA Peptide AT5 精华轻拍于眼眶骨周围，早晚各一次。待完全吸收后再使用眼霜或保湿产品。", clinic: "在临床上，GANA Peptide AT5 是针对眼袋与浮肿的专业护理的宝贵工具。通过使用微针或滚轮（0.2mm - 0.5mm），Acetyl Tetrapeptide-5 可更有效地输送至眼周区域，增强其减少水分滞留与改善微循环的能力。这可带来眼袋外观更显著、更快速的减少，使客户获得更年轻、更有神的外观。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽搭配用于全面眼部焕活护理。" },
    "pep-np1": { tag: "美白肽", desc: "纯 Nonapeptide-1 溶液 —— 抑制酪氨酸酶活化，美白并改善色斑。", usage: PEP_USE_ZH, home: "GANA Peptide NP1 含有 Nonapeptide-1 —— 一种强效美白肽，旨在应对色素沉着并促进更亮、更均匀的肤色。它通过抑制酪氨酸酶（黑色素生成的关键酶）的活性发挥作用。通过阻断触发黑色素合成的信号，Nonapeptide-1 有助于减少已有色斑、晒斑与炎症后色素沉着的外观，同时预防新的色素沉着形成。对于希望获得透亮、均匀肤色的人，它是绝佳选择。使用方法：将 GANA Peptide NP1 精华涂于洁净肌肤有色素沉着或肤色不均的部位，早晚使用，白天后续使用广谱防晒。", clinic: "在临床环境中，GANA Peptide NP1 为色素沉着提供针对性护理。微针或滚轮（0.2mm - 0.5mm）等专业应用方法可显著增强 Nonapeptide-1 向黑色素细胞的输送，使其更有效地抑制酪氨酸酶活性。这可带来色斑更明显的减少与更均匀的肤色。可纳入 2-3 个疗程、间隔 2 周，并可与其他肽搭配用于全面美白与抗色素沉着策略。" },
    "am": { tag: "端粒酶抗衰激活", desc: "黄芪根萃取（100ppm）—— TA-65 类端粒酶激活，细胞级抗衰。", usage: "美塑 / MTS / 外涂，每两周一次。" },
    "tm": { tag: "FDA 注册面膜", desc: "多重活性面膜 —— PDRN、PHA、Acetyl Hexapeptide-8、交联 HA 与 Alpha Arbutin。FDA 注册配方。", usage: "洁面后敷一片 15–20 分钟，每周 2–3 次。" },
    "mask": { tag: "术后修复面膜", desc: "生物纤维修复面膜，含 PLLA、交联 HA 与 PDRN —— 舒缓并修复烧伤或术后肌肤。", usage: "术后或烧伤后将一片敷于患处。一次性使用。" },
    "nphg": { tag: "NMN 抗衰水光", desc: "非交联 HA 水光，含 NMN、PDRN 与谷胱甘肽 —— 提升 NAD+、激活长寿蛋白基因，抗衰、保湿与提亮。", usage: "美塑 / MTS / 外涂。" },
    "exo-nphg": { tag: "外泌体 NMN 水光", desc: "积雪草来源外泌体（细胞外囊泡）水光，含 NMN、PDRN 与谷胱甘肽 —— 舒缓、再生与抗衰，非交联安瓶。", usage: "美塑 / MTS / 外涂。" },
    "fish-collagen": { tag: "海洋胶原水光", desc: "纯海洋（鱼）胶原溶液 —— 改善皮肤保湿、弹力与皱纹，支持组织修复。", usage: "美塑 / MTS / 外涂。" },
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
    label: "เวชสำอาง", allLabel: "ทั้งหมด", items: "{n} รายการ", priceNote: "ราคาทั้งหมดเป็นราคาขายปลีก (USD) ราคาตัวแทนจำหน่ายและค่าจัดส่งสอบถามแยกต่างหาก",
    searchPlaceholder: "ค้นหาผลิตภัณฑ์", searchEmpty: "ไม่พบผลิตภัณฑ์",
    ctaEyebrow: "จากโซลถึงคลินิกของคุณ", ctaTitle1: "การจัดส่ง B2B ทั่วโลก", ctaTitleEm: "ตรงจากผู้ผลิต", ctaButton: "เริ่มพูดคุย →",
  },
  contact: {
    eyebrow: "ติดต่อเรา", h2pre: "ร่วมเป็นพันธมิตรกับ", h2em: "GANA Cosmetic",
    body: "ไม่ว่าคุณจะเป็นผู้จัดจำหน่ายที่มองหาสิทธิ์ในพื้นที่แต่เพียงผู้เดียว คลินิกที่ต้องการแหล่งจัดหาที่เชื่อถือได้ หรือพันธมิตร ODM — เราตอบทุกคำถามภายใน 48 ชั่วโมง",
    list: ["พันธมิตรผู้จัดจำหน่าย", "จัดส่งให้คลินิก", "ODM / Private Label", "สอบถามทั่วไป"],
    thankTitle: "ขอบคุณ", thankBody: "เราได้รับคำถามของคุณแล้ว และจะตอบกลับภายใน 48 ชั่วโมง", thankFallback: "ไม่ได้รับการตอบกลับใน 24 ชั่วโมง? อีเมลถึงเราโดยตรงที่ contact@gana-cosmetics.com",
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
    labelAddress: "ที่อยู่", labelTel: "โทรศัพท์", labelEmail: "อีเมล", labelWhatsapp: "WhatsApp",
    labelManufacturer: "ผู้ผลิต", labelFdaNo: "เลขจดทะเบียน FDA", labelGroup: "กลุ่มบริษัท", labelHours: "เวลาทำการ",
    hoursValue: "จันทร์–ศุกร์ 09:00–18:00 (KST)",
    disclaimer: "สำหรับใช้งานโดยมืออาชีพเท่านั้น ผลิตภัณฑ์อาจไม่มีจำหน่ายในทุกตลาด โซลูชันสลายไขมัน (GANA DA, V LINE) สำหรับผู้เชี่ยวชาญที่ผ่านการฝึกอบรมเท่านั้น ภาพผลิตภัณฑ์มาจากแคตตาล็อกอย่างเป็นทางการของ GANA Cosmetic",
  },
  detail: {
    allProducts: "← ผลิตภัณฑ์ทั้งหมด", home: "หน้าแรก", productsCrumb: "ผลิตภัณฑ์",
    notFound: "ไม่พบผลิตภัณฑ์", backToCatalogue: "← กลับไปที่แคตตาล็อก",
    retailNote: "ราคาที่แสดงเป็นราคาขายปลีก (USD) ราคาสำหรับตัวแทนจำหน่ายสอบถามแยกต่างหาก ไม่รวมค่าจัดส่ง",
    inquireBtn: "สอบถามผลิตภัณฑ์นี้ →", inquiryPrice: "สอบถามราคา",
    keyActives: "สารออกฤทธิ์หลัก", specifications: "ข้อมูลจำเพาะ",
    specCategory: "หมวดหมู่", specVolume: "ปริมาตร / บรรจุภัณฑ์", specRetail: "ขายปลีก (USD)", specLabel: "ป้ายกำกับ",
    specNote: "การเปิดเผยส่วนผสม (INCI) ครบถ้วน เอกสารด้านกฎระเบียบ และราคาขายส่ง มีให้เมื่อร้องขอ", relatedIn: "ผลิตภัณฑ์ที่เกี่ยวข้องใน {cat}",
    indicationsTitle: "ข้อบ่งใช้", protocolTitle: "วิธีใช้",
    downloadsTitle: "เอกสาร", downloadInci: "INCI / ส่วนผสมทั้งหมด", downloadCoa: "COA / เอกสารกฎระเบียบ", downloadCatalogue: "แคตตาล็อก (PDF)",
    requestNote: "มีให้สำหรับพันธมิตร B2B ที่ผ่านการยืนยันเมื่อร้องขอ",
    cataloguePage: "แคตตาล็อก", beforeAfter: "ก่อน / หลัง",
    homeUse: "ใช้ที่บ้าน", clinicUse: "ใช้ในคลินิก",
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
    "FDA Mask": "มาส์ก FDA", "Recovery": "ฟื้นฟูหลังหัตถการ", "Anti-Aging": "ชะลอวัย",
    "NMN": "NMN", "Exosome": "เอ็กโซโซม", "Marine Collagen": "คอลลาเจนทะเล",
  },
  indicationLabels: {
    "Regeneration": "ฟื้นฟู", "Hydration": "เพิ่มความชุ่มชื้น", "Brightening": "กระจ่างใส", "Elasticity": "ความยืดหยุ่น",
    "Volume": "เพิ่มวอลุ่ม", "Wrinkles": "ริ้วรอย", "Scars": "แผลเป็น", "Hair": "เส้นผม/หนังศีรษะ", "Eye bags": "ถุงใต้ตา",
    "Dark circles": "รอยคล้ำ", "Anti-aging": "ชะลอวัย", "Exfoliation": "ผลัดเซลล์ผิว", "Sensitive skin": "ผิวแพ้ง่าย",
    "pH care": "ดูแลค่า pH", "Lipolysis": "สลายไขมัน", "Lash growth": "ขนตายาว", "Soothing": "ปลอบประโลม",
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
    "Bio Cellulose": "แผ่นไบโอเซลลูโลส — ปลอบประโลม", "Astragalus": "สารสกัดรากกระตุ้นเทโลเมอเรส",
    "Nicotinamide Mononucleotide": "NMN — NAD+ และชะลอวัย", "Centella Asiatica": "เอ็กโซโซม — ปลอบประโลมและซ่อมแซม", "Marine Collagen": "โครงสร้างผิวและความยืดหยุ่น",
  },
  peptideTitles: {
    "pep-apdn": { home: "คลายริ้วรอยจากการแสดงสีหน้า", clinic: "ลดริ้วรอยเข้มข้น" },
    "pep-carnosine": { home: "ปกป้องชะลอวัยและความกระชับ", clinic: "ปกป้องและฟื้นฟูเซลล์ขั้นสูง" },
    "pep-ah8": { home: "ลดริ้วรอยไดนามิก", clinic: "คลายริ้วรอยแบบเจาะจง" },
    "pep-pp3": { home: "เพิ่มคอลลาเจน ลดริ้วรอยเล็ก", clinic: "รีโมเดลคอลลาเจนเข้มข้น" },
    "pep-pt1": { home: "ซ่อมแซมและเสริมความแข็งแรงผิว", clinic: "ฟื้นฟูและซ่อมแซมผิวขั้นสูง" },
    "pep-mp17": { home: "เสริมการเจริญของขนตา", clinic: "เสริมขนตาระดับมืออาชีพ" },
    "pep-agh1": { home: "คลายริ้วรอยขั้นสูง", clinic: "ลดริ้วรอยไดนามิกเหนือชั้น" },
    "pep-at5": { home: "ลดถุงใต้ตาบวม", clinic: "รักษาถุงใต้ตาระดับมืออาชีพ" },
    "pep-np1": { home: "กระจ่างใสและลดจุดด่างดำ", clinic: "รักษารอยดำแบบเจาะจง" },
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
    "pep-apdn": { tag: "SYN-AKE เปปไทด์คลายกล้ามเนื้อ", desc: "ไดเปปไทด์ SYN-AKE บริสุทธิ์ — คลายริ้วรอยจากการแสดงสีหน้าผ่านการต้านอะเซทิลโคลีน (คล้ายโบทอกซ์)", usage: PEP_USE_TH, home: "GANA Peptide APDN ใช้ SYN-AKE เปปไทด์สังเคราะห์ที่ออกแบบมาเพื่อเลียนแบบฤทธิ์คลายริ้วรอยของพิษงู ส่วนผสมนวัตกรรมนี้ทำงานโดยยับยั้งการหดตัวของกล้ามเนื้อที่ก่อให้เกิดริ้วรอยไดนามิกชั่วคราว เช่น ริ้วรอยขมวดคิ้ว ร่องหน้าผาก และตีนกา ด้วยการคลายกล้ามเนื้อเล็กๆ เหล่านี้ SYN-AKE ช่วยลบเลือนริ้วรอยที่มีอยู่และป้องกันการเกิดริ้วรอยใหม่ ทำให้ผิวดูอ่อนเยาว์และผ่อนคลายยิ่งขึ้น เป็นส่วนเสริมที่ยอดเยี่ยมสำหรับรูทีนชะลอวัยของผู้ที่มองหาวิธีลดริ้วรอยไดนามิกแบบไม่รุกล้ำ วิธีใช้: หยด GANA Peptide APDN เซรั่มสองสามหยดลงบนผิวที่ทำความสะอาดแล้วทั้งเช้าและเย็น เน้นบริเวณที่มีริ้วรอย ตามด้วยมอยส์เจอไรเซอร์ประจำและกันแดดในเวลากลางวัน", clinic: "ในสถานพยาบาล ประสิทธิภาพของ GANA Peptide APDN สามารถเพิ่มขึ้นอย่างมีนัยสำคัญผ่านวิธีการแบบมืออาชีพ เนื่องจากโมเลกุลของเปปไทด์มีขนาดใหญ่ การทาภายนอกเพียงอย่างเดียวอาจไม่ได้การซึมสูงสุด คลินิกจึงใช้เทคนิคเช่นไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (โดยทั่วไป 0.2mm - 0.5mm) เพื่อสร้างไมโครแชนเนลในผิว ทำให้เปปไทด์ SYN-AKE ผ่านเกราะป้องกันชั้นนอกของผิวและซึมลึกเข้าสู่เนื้อเยื่อเป้าหมาย เพิ่มประสิทธิภาพการคลายกล้ามเนื้อและลบเลือนริ้วรอยสูงสุด สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อการรักษาชะลอวัยที่ครบถ้วน" },
    "pep-carnosine": { tag: "สารชะลอวัย", desc: "L-Carnosine บริสุทธิ์ — สารชะลอวัยที่ลดการสั้นลงของเทโลเมียร์", usage: PEP_USE_TH, home: "GANA Peptide Carnosine ดึงพลังของ L-Carnosine ไดเปปไทด์ที่เกิดขึ้นตามธรรมชาติซึ่งขึ้นชื่อด้านคุณสมบัติต้านอนุมูลอิสระและต้านไกลเคชันอันทรงพลัง ไกลเคชันคือกระบวนการที่โมเลกุลน้ำตาลจับกับโปรตีนเช่นคอลลาเจนและอีลาสติน ทำให้แข็งตัวและเกิดริ้วรอยและผิวหย่อนคล้อย L-Carnosine ทำหน้าที่เป็นเกราะป้องกัน ป้องกันความเสียหายนี้และช่วยรักษาความกระชับและความยืดหยุ่นของผิว นอกจากนี้ L-Carnosine ยังลดการสั้นลงของเทโลเมียร์ ตัวบ่งชี้สำคัญของความชราของเซลล์ จึงส่งเสริมอายุยืนของเซลล์และสุขภาพผิวโดยรวม ทำให้เป็นส่วนผสมที่ยอดเยี่ยมสำหรับการปกป้องชะลอวัยประจำวันและเพิ่มความยืดหยุ่นของผิว วิธีใช้: ลง GANA Peptide Carnosine เซรั่มบนใบหน้าและคอหลังทำความสะอาดและโทนเนอร์ ทั้งเช้าและกลางคืน สามารถซ้อนกับเซรั่มอื่นและตามด้วยมอยส์เจอไรเซอร์", clinic: "ในสภาพแวดล้อมมืออาชีพ GANA Peptide Carnosine สามารถใช้เพื่อให้การปกป้องและฟื้นฟูเซลล์ขั้นสูง คุณสมบัติชะลอวัยของมัน รวมถึงการลดการสั้นลงของเทโลเมียร์และต่อสู้กับไกลเคชัน ทำให้เป็นทรัพยากรมีค่าในทรีตเมนต์ที่มุ่งชะลอกระบวนการชราจากภายใน เมื่อใช้กับไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) L-Carnosine ซึมลึกเข้าสู่ผิวมากขึ้น เพิ่มความสามารถในการปกป้องเส้นใยคอลลาเจนและอีลาสตินจากการเสื่อมสลายและส่งเสริมการซ่อมแซมเซลล์ นำไปสู่ความกระชับ ความยืดหยุ่นที่ดีขึ้น และลดสัญญาณความชราที่มองเห็นได้ สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นได้" },
    "pep-ah8": { tag: "Argireline เปปไทด์ลดริ้วรอย", desc: "Acetyl hexapeptide-8 (Argireline) บริสุทธิ์ — คลายริ้วรอยคล้ายโบทอกซ์", usage: PEP_USE_TH, home: "GANA Peptide AH8 มี Acetyl Hexapeptide-8 หรือที่รู้จักกันทั่วไปว่า Argireline เปปไทด์ยอดนิยมที่ขึ้นชื่อด้านผลคล้ายโบทอกซ์ เปปไทด์นี้ทำงานโดยรบกวนสัญญาณประสาทที่สั่งให้กล้ามเนื้อใบหน้าหดตัว จึงคลายกล้ามเนื้อที่ก่อให้เกิดริ้วรอยไดนามิก ส่งผลให้ริ้วรอยจากการแสดงสีหน้าลดลงอย่างเห็นได้ชัด โดยเฉพาะรอบดวงตาและหน้าผาก โดยไม่ต้องฉีด เป็นวิธีที่อ่อนโยนแต่ได้ผลในการทำให้ผิวดูเรียบเนียนขึ้น วิธีใช้: ลง GANA Peptide AH8 เซรั่มบริเวณริ้วรอยไดนามิก (เช่น หน้าผาก รอบดวงตา) หลังทำความสะอาดและก่อนครีมเนื้อหนัก ใช้วันละสองครั้งเพื่อผลลัพธ์ที่ดีที่สุด", clinic: "ในสถานพยาบาล GANA Peptide AH8 (Argireline) ใช้เพื่อคลายริ้วรอยจากการแสดงสีหน้าแบบเจาะจงได้ เช่นเดียวกับเปปไทด์อื่น การซึมสามารถเพิ่มขึ้นอย่างมากผ่านเทคนิคมืออาชีพ ไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) สร้างไมโครแชนเนลให้ Acetyl Hexapeptide-8 เข้าลึกในผิวที่ซึ่งสามารถปรับการหดตัวของกล้ามเนื้อได้มีประสิทธิภาพยิ่งขึ้น วิธีนี้นำไปสู่การลดความลึกของริ้วรอยที่ชัดเจนและยาวนานขึ้น โดยทั่วไปทำ 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อกลยุทธ์ชะลอวัยที่ครบถ้วน" },
    "pep-pp3": { tag: "Matrixyl เปปไทด์คอลลาเจน", desc: "Palmitoyl pentapeptide-3 (Matrixyl) บริสุทธิ์ — เพิ่มคอลลาเจนและอีลาสติน ลดริ้วรอยเล็ก", usage: PEP_USE_TH, home: "GANA Peptide PP3 ใช้ Palmitoyl Pentapeptide-3 หรือที่รู้จักกันว่า Matrixyl ซิกแนลเปปไทด์อันทรงพลังที่สื่อสารกับเซลล์ผิวเพื่อกระตุ้นการสร้างคอลลาเจนและอีลาสติน เมื่อเราอายุมากขึ้น การสร้างคอลลาเจนและอีลาสตินลดลงตามธรรมชาติ นำไปสู่การสูญเสียความกระชับและการเกิดริ้วรอย Matrixyl ช่วยย้อนกระบวนการนี้โดยกระตุ้นให้ผิวสร้างโครงสร้างค้ำจุนขึ้นใหม่ ส่งผลให้ความยืดหยุ่นดีขึ้น ความลึกของริ้วรอยลดลง และผิวเรียบเนียนอ่อนเยาว์ยิ่งขึ้น เป็นส่วนผสมจำเป็นสำหรับผู้ที่ต้องการต่อสู้กับสัญญาณความชราและฟื้นความมีชีวิตชีวาของผิว วิธีใช้: ลง GANA Peptide PP3 เซรั่มทั่วใบหน้าและคอหลังทำความสะอาดและโทนเนอร์ ทั้งเช้าและกลางคืน นวดเบาๆ จนซึมแล้วตามด้วยมอยส์เจอไรเซอร์ที่ชื่นชอบ", clinic: "ในทางคลินิก GANA Peptide PP3 (Matrixyl) เหมาะอย่างยิ่งสำหรับทรีตเมนต์รีโมเดลคอลลาเจนเข้มข้น ด้วยการนำส่ง Palmitoyl Pentapeptide-3 เข้าสู่ชั้นหนังแท้โดยตรง หัตถการมืออาชีพสามารถขยายผลกระตุ้นคอลลาเจนได้อย่างมาก เทคนิคเช่นไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) ช่วยให้ซึมลึกขึ้น ทำให้เปปไทด์ส่งสัญญาณให้ไฟโบรบลาสต์สร้างเส้นใยคอลลาเจนและอีลาสตินใหม่ได้อย่างมีประสิทธิภาพ นำไปสู่การปรับปรุงความกระชับ ความยืดหยุ่น และการลดริ้วรอยที่ชัดเจนยิ่งขึ้น สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อแนวทางชะลอวัยแบบองค์รวม" },
    "pep-pt1": { tag: "เปปไทด์ซ่อมแซมผิว", desc: "Palmitoyl tripeptide-1 (pal-GHK) บริสุทธิ์ — ซ่อมแซมความเสียหายและเสริมโครงสร้างผิว", usage: PEP_USE_TH, home: "GANA Peptide PT1 มี Palmitoyl Tripeptide-1 หรือที่รู้จักกันว่า pal-GHK เปปไทด์ซ่อมแซมผิวที่มีบทบาทสำคัญในการเสริมโครงสร้างค้ำจุนผิวและซ่อมแซมความเสียหายที่มองเห็นได้ เปปไทด์นี้ทำงานโดยกระตุ้นการสร้างองค์ประกอบสำคัญของเมทริกซ์นอกเซลล์ เช่น คอลลาเจนและไกลโคซามิโนไกลแคน ด้วยการส่งเสริมหน่วยพื้นฐานที่จำเป็นเหล่านี้ pal-GHK ช่วยเพิ่มความยืดหยุ่นของผิว ลดริ้วรอยเล็กและริ้วรอย และปรับปรุงเนื้อผิวโดยรวม มีประโยชน์อย่างยิ่งสำหรับผิวที่ต้องการการสนับสนุนเพิ่มเติมในการฟื้นฟูและรักษาความอ่อนเยาว์ วิธีใช้: ลง GANA Peptide PT1 เซรั่มบนผิวที่ทำความสะอาดแล้ว เน้นบริเวณที่ต้องการซ่อมแซมหรือเสริมความแข็งแรง ใช้เช้าและกลางคืนก่อนมอยส์เจอไรเซอร์", clinic: "ในสถานพยาบาล GANA Peptide PT1 มอบความสามารถขั้นสูงสำหรับการฟื้นฟูและซ่อมแซมผิว วิธีการมืออาชีพเช่นไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) ช่วยให้นำส่ง Palmitoyl Tripeptide-1 สู่ชั้นผิวที่ลึกขึ้นอย่างเหมาะสม การซึมที่เพิ่มขึ้นนี้ทำให้เปปไทด์กระตุ้นการสังเคราะห์คอลลาเจนและองค์ประกอบสำคัญอื่นๆ ของผิวได้มีประสิทธิภาพยิ่งขึ้น นำไปสู่การซ่อมแซมผิวที่เสียหายเร็วขึ้น การสมานแผลที่ดีขึ้น และความกระชับและความยืดหยุ่นที่เพิ่มขึ้นอย่างมาก สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อการฟื้นฟูผิวที่ครบถ้วน" },
    "pep-mp17": { tag: "เปปไทด์ขนตายาว", desc: "Myristoyl pentapeptide-17 บริสุทธิ์ — กระตุ้นยีนเคราตินเพื่อขนตาดกและยาว", usage: "ลงตามแนวขนตาด้วยแปรงตา (เลี่ยงดวงตา) ทุก 2 สัปดาห์ 3–4 ครั้ง", home: "GANA Peptide MP17 ใช้ Myristoyl Pentapeptide-17 เปปไทด์เฉพาะทางที่ออกแบบมาเพื่อส่งเสริมขนตาที่ยาว ดก และหนาขึ้น เปปไทด์นี้ทำงานโดยกระตุ้นยีนเคราตินซึ่งจำเป็นต่อการเจริญของเส้นขน ด้วยการส่งเสริมวงจรการเจริญตามธรรมชาติของขนตา จึงช่วยเพิ่มความหนาแน่นและความยาวเมื่อเวลาผ่านไป เป็นวิธีที่ปลอดภัยและได้ผลในการเสริมความงามตามธรรมชาติของดวงตาโดยไม่ต้องต่อขนตาหรือใช้สารเคมีรุนแรง วิธีใช้: ลง GANA Peptide MP17 ตามแนวขนตาด้วยแปรงตา คล้ายการเขียนอายไลเนอร์ ใช้ทุกสองสัปดาห์ หลีกเลี่ยงการสัมผัสดวงตาโดยตรง เพื่อผลลัพธ์ที่ดีที่สุด ใช้อย่างต่อเนื่อง 3-4 ครั้ง", clinic: "ในทางคลินิก GANA Peptide MP17 ใช้สำหรับทรีตเมนต์เสริมขนตาระดับมืออาชีพได้ แม้ผลิตภัณฑ์ออกแบบมาเพื่อใช้ที่บ้าน แต่คลินิกสามารถให้คำแนะนำเรื่องเทคนิคการลงที่ถูกต้องและผสานเข้ากับการดูแลความงามที่กว้างขึ้น กุญแจสำคัญคือการลงตามแนวขนตาอย่างสม่ำเสมอและแม่นยำเพื่อกระตุ้นยีนเคราตินอย่างมีประสิทธิภาพ เปปไทด์นี้เป็นทางเลือกแบบไม่รุกล้ำสำหรับผู้ที่ต้องการปรับปรุงการเจริญและรูปลักษณ์ตามธรรมชาติของขนตา แนะนำเป็นทรีตเมนต์เดี่ยวหรือเป็นส่วนหนึ่งของแผนความงามที่ใหญ่ขึ้นได้" },
    "pep-agh1": { tag: "SNAP-8 เปปไทด์ลดริ้วรอย", desc: "Acetyl glutamyl heptapeptide-1 (SNAP-8) บริสุทธิ์ — Argireline แบบยาว ลดริ้วรอยคล้ายโบทอกซ์", usage: PEP_USE_TH, home: "GANA Peptide AGH1 มี Acetyl Glutamyl Heptapeptide-1 หรือที่รู้จักกันว่า SNAP-8 เปปไทด์ขั้นสูงที่เป็นเวอร์ชันยืดยาวของ Argireline SNAP-8 ทำงานโดยลดความเข้มของการหดตัวของกล้ามเนื้อที่ก่อให้เกิดริ้วรอยจากการแสดงสีหน้าเพิ่มเติม ให้ผลคล้ายโบทอกซ์ที่แรงกว่า มันมุ่งเป้าที่กลไกเดียวกับ Argireline แต่มีประสิทธิภาพสูงกว่า จึงลดความลึกของริ้วรอยได้มากขึ้น โดยเฉพาะที่หน้าผากและรอบดวงตา เปปไทด์นี้เป็นโซลูชันทรงพลังสำหรับผู้ที่ต้องการลบเลือนริ้วรอยไดนามิกอย่างเห็นได้ชัดและได้ใบหน้าที่ผ่อนคลายยิ่งขึ้น วิธีใช้: ลง GANA Peptide AGH1 เซรั่มบริเวณริ้วรอยที่ชัดเจนหลังทำความสะอาด ใช้วันละสองครั้ง เน้นการลงแบบเจาะจง ก่อนใช้เซรั่มหรือมอยส์เจอไรเซอร์อื่น", clinic: "ในสถานพยาบาล GANA Peptide AGH1 (SNAP-8) ให้ผลลดริ้วรอยไดนามิกที่เหนือกว่าเมื่อเทียบกับ Argireline รุ่นก่อน โดยงานวิจัยชี้ว่าอาจแรงกว่าถึงราว 30% เมื่อใช้กับไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) Acetyl Glutamyl Heptapeptide-1 สามารถซึมได้เหมาะสมที่สุด นำไปสู่การคลายกล้ามเนื้อใบหน้าที่ลึกและยาวนานยิ่งขึ้น จึงเป็นตัวเลือกที่ยอดเยี่ยมสำหรับผู้ที่ต้องการปรับปรุงริ้วรอยลึกอย่างมีนัยสำคัญ โดยทั่วไปทำ 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อการรักษาชะลอวัยที่ครบถ้วน" },
    "pep-at5": { tag: "เปปไทด์ลดถุงใต้ตา", desc: "Acetyl tetrapeptide-5 บริสุทธิ์ — ลดถุงใต้ตาบวม", usage: PEP_USE_TH, home: "GANA Peptide AT5 ใช้ Acetyl Tetrapeptide-5 เปปไทด์เฉพาะทางที่คิดค้นมาเพื่อจัดการปัญหาถุงใต้ตาบวมที่พบบ่อย เปปไทด์นี้ทำงานโดยมุ่งเป้าที่กลไกซึ่งก่อให้เกิดการสะสมของของเหลวและการบวมในบริเวณใต้ตาอันบอบบาง ช่วยปรับปรุงการไหลเวียนน้ำเหลืองและลดการรั่วซึมของหลอดเลือดฝอย จึงลดความบวมและรอยคล้ำที่เกิดจากการคั่งของน้ำ การใช้สม่ำเสมอช่วยให้เส้นรอบดวงตาดูสดชื่นและมีชีวิตชีวายิ่งขึ้น วิธีใช้: แตะ GANA Peptide AT5 เซรั่มเบาๆ รอบกระดูกเบ้าตาหลังทำความสะอาดและโทนเนอร์ ทั้งเช้าและกลางคืน ปล่อยให้ซึมเต็มที่ก่อนใช้ครีมตาหรือมอยส์เจอไรเซอร์", clinic: "ในทางคลินิก GANA Peptide AT5 เป็นเครื่องมือมีค่าสำหรับทรีตเมนต์มืออาชีพที่มุ่งเป้าถุงใต้ตาและความบวม ด้วยการใช้ไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) Acetyl Tetrapeptide-5 สามารถนำส่งสู่บริเวณรอบดวงตาได้มีประสิทธิภาพยิ่งขึ้น เพิ่มความสามารถในการลดการคั่งของน้ำและปรับปรุงการไหลเวียนระดับจุลภาค นำไปสู่การลดถุงใต้ตาที่ชัดเจนและรวดเร็วขึ้น ทำให้ลูกค้าได้รูปลักษณ์ที่อ่อนเยาว์และพักผ่อนเต็มที่ สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อการฟื้นฟูรอบดวงตาที่ครบถ้วน" },
    "pep-np1": { tag: "เปปไทด์กระจ่างใส", desc: "Nonapeptide-1 บริสุทธิ์ — ยับยั้งการทำงานของไทโรซิเนสเพื่อความกระจ่างใสและลดจุดด่างดำ", usage: PEP_USE_TH, home: "GANA Peptide NP1 มี Nonapeptide-1 เปปไทด์ไวต์เทนนิ่งอันทรงพลังที่ออกแบบมาเพื่อจัดการปัญหาความหมองคล้ำและส่งเสริมผิวกระจ่างใสและสม่ำเสมอยิ่งขึ้น เปปไทด์นี้ทำงานโดยยับยั้งการทำงานของไทโรซิเนส เอนไซม์หลักที่เกี่ยวข้องกับการสร้างเมลานิน ด้วยการบล็อกสัญญาณที่กระตุ้นการสังเคราะห์เมลานิน Nonapeptide-1 ช่วยลดจุดด่างดำ จุดแดด และรอยดำหลังการอักเสบที่มีอยู่ พร้อมป้องกันการเกิดจุดด่างดำใหม่ เป็นตัวเลือกที่ยอดเยี่ยมสำหรับผู้ที่ต้องการผิวกระจ่างเปล่งประกายและสม่ำเสมอ วิธีใช้: ลง GANA Peptide NP1 เซรั่มบนผิวที่ทำความสะอาดแล้ว เน้นบริเวณที่มีความหมองคล้ำหรือสีไม่สม่ำเสมอ ใช้เช้าและกลางคืน ตามด้วยกันแดดสเปกตรัมกว้างในเวลากลางวัน", clinic: "ในสถานพยาบาล GANA Peptide NP1 ให้การรักษาความหมองคล้ำแบบเจาะจง วิธีการมืออาชีพเช่นไมโครนีดเดิลหรือเดอร์มาโรลเลอร์ (0.2mm - 0.5mm) สามารถเพิ่มการนำส่ง Nonapeptide-1 สู่เมลาโนไซต์ได้อย่างมาก ที่ซึ่งสามารถยับยั้งการทำงานของไทโรซิเนสได้มีประสิทธิภาพยิ่งขึ้น นำไปสู่การลดจุดด่างดำที่ชัดเจนและสีผิวที่สม่ำเสมอยิ่งขึ้น สามารถทำเป็นชุด 2-3 ครั้ง เว้นระยะ 2 สัปดาห์ และผสมกับเปปไทด์อื่นเพื่อกลยุทธ์กระจ่างใสและต้านความหมองคล้ำที่ครบถ้วน" },
    "am": { tag: "กระตุ้นเทโลเมอเรสชะลอวัย", desc: "สารสกัดรากแอสตรากาลัส (100ppm) — กระตุ้นเทโลเมอเรสระดับ TA-65 เพื่อชะลอวัยระดับเซลล์", usage: "เมโส / MTS / ทาภายนอก ทุก 2 สัปดาห์" },
    "tm": { tag: "มาส์กลงทะเบียน FDA", desc: "ชีตมาส์กมัลติแอคทีฟ — PDRN, PHA, Acetyl Hexapeptide-8, ครอสลิงก์ HA และ Alpha Arbutin สูตรลงทะเบียน FDA", usage: "แปะหนึ่งแผ่นบนผิวที่ทำความสะอาดแล้ว 15–20 นาที 2–3 ครั้ง/สัปดาห์" },
    "mask": { tag: "มาส์กฟื้นฟูหลังหัตถการ", desc: "มาส์กไบโอเซลลูโลสฟื้นฟู พร้อม PLLA, ครอสลิงก์ HA และ PDRN — ปลอบประโลมและฟื้นฟูผิวที่ถูกไฟไหม้หรือหลังหัตถการ", usage: "แปะหนึ่งแผ่นบนบริเวณที่ต้องการหลังหัตถการหรือแผลไหม้ ใช้ครั้งเดียว" },
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
    label: "Dược mỹ phẩm", allLabel: "Tất cả", items: "{n} sản phẩm", priceNote: "Tất cả giá là giá bán lẻ (USD). Giá đại lý & phí vận chuyển báo riêng khi có yêu cầu.",
    searchPlaceholder: "Tìm sản phẩm", searchEmpty: "Không tìm thấy sản phẩm",
    ctaEyebrow: "Từ Seoul đến phòng khám của bạn", ctaTitle1: "Cung ứng B2B toàn cầu,", ctaTitleEm: "trực tiếp từ nhà sản xuất.", ctaButton: "Bắt đầu trao đổi →",
  },
  contact: {
    eyebrow: "Liên hệ", h2pre: "Hợp tác cùng", h2em: "GANA Cosmetic",
    body: "Dù bạn là nhà phân phối tìm kiếm quyền khu vực độc quyền, phòng khám cần nguồn cung đáng tin cậy, hay đối tác ODM — chúng tôi phản hồi mọi yêu cầu trong vòng 48 giờ.",
    list: ["Hợp tác phân phối", "Cung ứng phòng khám", "ODM / Nhãn hàng riêng", "Liên hệ chung"],
    thankTitle: "Cảm ơn bạn", thankBody: "Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi trong vòng 48 giờ.", thankFallback: "Không nhận được phản hồi trong 24 giờ? Email trực tiếp đến contact@gana-cosmetics.com.",
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
    labelAddress: "Địa chỉ", labelTel: "Điện thoại", labelEmail: "Email", labelWhatsapp: "WhatsApp",
    labelManufacturer: "Nhà sản xuất", labelFdaNo: "Số đăng ký FDA", labelGroup: "Tập đoàn", labelHours: "Giờ làm việc",
    hoursValue: "Thứ Hai–Thứ Sáu 09:00–18:00 (KST)",
    disclaimer: "Chỉ dành cho mục đích chuyên nghiệp. Sản phẩm có thể không có sẵn ở mọi thị trường. Dung dịch tan mỡ (GANA DA, V LINE) chỉ dành cho chuyên gia được đào tạo. Hình ảnh sản phẩm lấy từ catalogue chính thức của GANA Cosmetic.",
  },
  detail: {
    allProducts: "← Tất cả sản phẩm", home: "Trang chủ", productsCrumb: "Sản phẩm",
    notFound: "Không tìm thấy sản phẩm", backToCatalogue: "← Quay lại danh mục",
    retailNote: "Giá hiển thị là giá bán lẻ (USD). Giá đại lý & nhà phân phối vui lòng hỏi riêng. Chưa bao gồm phí vận chuyển.",
    inquireBtn: "Hỏi về sản phẩm này →", inquiryPrice: "Liên hệ giá",
    keyActives: "Hoạt chất chính", specifications: "Thông số kỹ thuật",
    specCategory: "Danh mục", specVolume: "Dung tích / Quy cách", specRetail: "Bán lẻ (USD)", specLabel: "Nhãn",
    specNote: "Công bố đầy đủ thành phần (INCI), hồ sơ pháp lý và giá bán sỉ được cung cấp khi có yêu cầu.", relatedIn: "Sản phẩm liên quan trong {cat}",
    indicationsTitle: "Chỉ định", protocolTitle: "Cách dùng",
    downloadsTitle: "Tài liệu", downloadInci: "INCI / Thành phần đầy đủ", downloadCoa: "COA / Pháp lý", downloadCatalogue: "Catalogue (PDF)",
    requestNote: "Cung cấp cho đối tác B2B đã xác minh khi có yêu cầu.",
    cataloguePage: "Catalogue", beforeAfter: "Trước & Sau",
    homeUse: "Dùng tại nhà", clinicUse: "Tại phòng khám",
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
    "FDA Mask": "Mặt nạ FDA", "Recovery": "Phục hồi", "Anti-Aging": "Chống lão hóa",
    "NMN": "NMN", "Exosome": "Exosome", "Marine Collagen": "Collagen biển",
  },
  indicationLabels: {
    "Regeneration": "Tái tạo", "Hydration": "Cấp ẩm", "Brightening": "Làm sáng", "Elasticity": "Đàn hồi", "Volume": "Tạo khối",
    "Wrinkles": "Nếp nhăn", "Scars": "Sẹo", "Hair": "Tóc/da đầu", "Eye bags": "Bọng mắt", "Dark circles": "Quầng thâm",
    "Anti-aging": "Chống lão hóa", "Exfoliation": "Tẩy tế bào chết", "Sensitive skin": "Da nhạy cảm", "pH care": "Chăm sóc pH",
    "Lipolysis": "Tan mỡ", "Lash growth": "Dài mi", "Soothing": "Làm dịu",
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
    "Bio Cellulose": "Màng bio-cellulose — làm dịu", "Astragalus": "Chiết xuất rễ kích hoạt telomerase",
    "Nicotinamide Mononucleotide": "NMN — NAD+ & chống lão hóa", "Centella Asiatica": "Exosome — làm dịu & phục hồi", "Marine Collagen": "Cấu trúc da & đàn hồi",
  },
  peptideTitles: {
    "pep-apdn": { home: "Giãn nếp nhăn biểu cảm", clinic: "Giảm nhăn tăng cường" },
    "pep-carnosine": { home: "Bảo vệ chống lão hóa & săn chắc", clinic: "Bảo vệ & trẻ hóa tế bào nâng cao" },
    "pep-ah8": { home: "Làm dịu nếp nhăn động", clinic: "Giãn nếp nhăn biểu cảm có mục tiêu" },
    "pep-pp3": { home: "Tăng collagen & giảm nếp nhăn nhỏ", clinic: "Tái cấu trúc collagen chuyên sâu" },
    "pep-pt1": { home: "Phục hồi & củng cố da", clinic: "Tái tạo & phục hồi da nâng cao" },
    "pep-mp17": { home: "Kích thích mọc mi", clinic: "Dưỡng mi chuyên nghiệp" },
    "pep-agh1": { home: "Giãn nếp nhăn nâng cao", clinic: "Giảm nhăn động vượt trội" },
    "pep-at5": { home: "Giảm bọng mắt", clinic: "Điều trị bọng mắt chuyên nghiệp" },
    "pep-np1": { home: "Làm sáng & mờ đốm", clinic: "Điều trị tăng sắc tố có mục tiêu" },
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
    "pep-apdn": { tag: "Peptide giãn cơ SYN-AKE", desc: "Dung dịch dipeptide SYN-AKE nguyên chất — giãn nếp nhăn biểu cảm qua đối kháng acetylcholine (kiểu Botox).", usage: PEP_USE_VI, home: "GANA Peptide APDN sử dụng SYN-AKE, một peptide tổng hợp được thiết kế để mô phỏng tác dụng giãn nếp nhăn của nọc rắn. Thành phần đột phá này hoạt động bằng cách tạm thời ức chế các co cơ gây ra nếp nhăn động như nếp chau mày, nếp nhăn trán và vết chân chim. Bằng cách thư giãn các vi cơ này, SYN-AKE giúp làm mịn các nếp nhăn biểu cảm hiện có và ngăn nếp nhăn mới hình thành, mang lại làn da trẻ trung và thư thái hơn. Đây là bổ sung tuyệt vời cho quy trình chống lão hóa với những ai tìm kiếm cách không xâm lấn để giảm nếp nhăn động. Cách dùng: Thoa vài giọt serum GANA Peptide APDN lên da đã làm sạch vào buổi sáng và tối, tập trung vào vùng có nếp nhăn biểu cảm. Tiếp theo dùng kem dưỡng ẩm thường ngày và kem chống nắng ban ngày.", clinic: "Trong môi trường lâm sàng, hiệu quả của GANA Peptide APDN có thể được tăng cường đáng kể qua các phương pháp ứng dụng chuyên nghiệp. Do kích thước phân tử peptide lớn, chỉ thoa ngoài có thể không đạt thẩm thấu tối đa. Phòng khám sử dụng kỹ thuật như lăn kim hoặc dermaroller (thường 0.2mm - 0.5mm) để tạo vi kênh trên da. Điều này cho phép peptide SYN-AKE vượt qua hàng rào bên ngoài của da và thấm sâu vào mô đích, tối đa hóa tác dụng giãn cơ và làm mịn nếp nhăn. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và kết hợp với các dung dịch peptide khác cho liệu trình chống lão hóa toàn diện." },
    "pep-carnosine": { tag: "Chống lão hóa", desc: "Dung dịch L-Carnosine nguyên chất — chất chống lão hóa làm giảm rút ngắn telomere.", usage: PEP_USE_VI, home: "GANA Peptide Carnosine khai thác sức mạnh của L-Carnosine, một dipeptide tự nhiên nổi tiếng với đặc tính chống oxy hóa và chống glycation mạnh mẽ. Glycation là quá trình các phân tử đường liên kết với protein như collagen và elastin, khiến chúng cứng lại và hình thành nếp nhăn cùng da chảy xệ. L-Carnosine hoạt động như một lá chắn bảo vệ, ngăn ngừa tổn thương này và giúp duy trì độ săn chắc và đàn hồi của da. Hơn nữa, L-Carnosine đã được chứng minh làm giảm rút ngắn telomere, một chỉ số quan trọng của lão hóa tế bào, từ đó thúc đẩy tuổi thọ tế bào và sức khỏe da tổng thể. Điều này khiến nó trở thành thành phần tuyệt vời cho việc bảo vệ chống lão hóa hằng ngày và cải thiện độ bền của da. Cách dùng: Thoa serum GANA Peptide Carnosine lên mặt và cổ sau khi làm sạch và toner, cả sáng lẫn tối. Có thể lớp cùng các serum khác và tiếp theo là kem dưỡng ẩm.", clinic: "Trong môi trường chuyên nghiệp, GANA Peptide Carnosine có thể được dùng để mang lại sự bảo vệ và trẻ hóa tế bào nâng cao. Đặc tính bảo vệ chống lão hóa của nó, bao gồm khả năng giảm rút ngắn telomere và chống glycation, khiến nó trở thành tài sản giá trị trong các liệu trình nhằm làm chậm quá trình lão hóa nội sinh. Khi dùng với lăn kim hoặc dermaroller (0.2mm - 0.5mm), L-Carnosine có thể thấm sâu hơn vào da, tăng cường khả năng bảo vệ sợi collagen và elastin khỏi thoái hóa và thúc đẩy phục hồi tế bào. Điều này có thể cải thiện độ săn chắc, đàn hồi và giảm các dấu hiệu lão hóa nhìn thấy. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và kết hợp với các dung dịch peptide khác." },
    "pep-ah8": { tag: "Peptide nếp nhăn Argireline", desc: "Dung dịch Acetyl hexapeptide-8 (Argireline) nguyên chất — giãn nếp nhăn biểu cảm kiểu Botox.", usage: PEP_USE_VI, home: "GANA Peptide AH8 chứa Acetyl Hexapeptide-8, thường gọi là Argireline, một peptide phổ biến nổi tiếng với hiệu ứng kiểu Botox. Peptide này hoạt động bằng cách can thiệp vào tín hiệu thần kinh ra lệnh cho cơ mặt co lại, từ đó thư giãn các cơ chịu trách nhiệm cho nếp nhăn động. Điều này dẫn đến giảm rõ rệt nếp nhăn biểu cảm, đặc biệt quanh mắt và trán, mà không cần tiêm. Đây là cách nhẹ nhàng nhưng hiệu quả để có làn da mịn màng hơn. Cách dùng: Thoa serum GANA Peptide AH8 lên vùng nếp nhăn động (ví dụ trán, quanh mắt) sau khi làm sạch và trước các loại kem đặc. Dùng hai lần mỗi ngày để có kết quả tốt nhất.", clinic: "Trong môi trường lâm sàng, GANA Peptide AH8 (Argireline) có thể được dùng để thư giãn nếp nhăn biểu cảm có mục tiêu. Tương tự các peptide khác, khả năng thẩm thấu có thể được tăng cường đáng kể qua kỹ thuật chuyên nghiệp. Lăn kim hoặc dermaroller (0.2mm - 0.5mm) có thể tạo vi kênh, cho phép Acetyl Hexapeptide-8 thấm sâu hơn vào da nơi nó điều hòa co cơ hiệu quả hơn. Cách tiếp cận này có thể dẫn đến giảm độ sâu nếp nhăn rõ rệt và lâu dài hơn. Thường thực hiện 2-3 buổi cách nhau 2 tuần và kết hợp với các peptide khác cho chiến lược chống lão hóa toàn diện." },
    "pep-pp3": { tag: "Peptide collagen Matrixyl", desc: "Dung dịch Palmitoyl pentapeptide-3 (Matrixyl) nguyên chất — tăng collagen và elastin, giảm nếp nhăn nhỏ.", usage: PEP_USE_VI, home: "GANA Peptide PP3 sử dụng Palmitoyl Pentapeptide-3, còn gọi là Matrixyl, một peptide tín hiệu mạnh mẽ giao tiếp với tế bào da để kích thích sản xuất collagen và elastin. Khi chúng ta già đi, sản xuất collagen và elastin suy giảm tự nhiên, dẫn đến mất độ săn chắc và hình thành nếp nhăn. Matrixyl giúp đảo ngược quá trình này bằng cách khuyến khích da tái tạo cấu trúc nâng đỡ, mang lại độ đàn hồi cải thiện, giảm độ sâu nếp nhăn và làn da mịn màng, trẻ trung hơn. Đây là thành phần thiết yếu cho bất kỳ ai muốn chống lại dấu hiệu lão hóa và khôi phục sức sống cho da. Cách dùng: Thoa serum GANA Peptide PP3 lên toàn bộ mặt và cổ sau khi làm sạch và toner, cả sáng lẫn tối. Massage nhẹ đến khi thấm rồi dùng kem dưỡng ẩm ưa thích.", clinic: "Về mặt lâm sàng, GANA Peptide PP3 (Matrixyl) lý tưởng cho các liệu trình tái cấu trúc collagen chuyên sâu. Bằng cách đưa Palmitoyl Pentapeptide-3 trực tiếp vào hạ bì, các thủ thuật chuyên nghiệp có thể khuếch đại đáng kể hiệu quả tăng collagen. Kỹ thuật như lăn kim hoặc dermaroller (0.2mm - 0.5mm) tạo điều kiện thẩm thấu sâu hơn, cho phép peptide ra hiệu hiệu quả cho nguyên bào sợi sản xuất sợi collagen và elastin mới. Điều này dẫn đến cải thiện rõ rệt hơn về độ săn chắc, đàn hồi và giảm nếp nhăn nhỏ cùng nếp nhăn. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và kết hợp với các peptide khác cho cách tiếp cận chống lão hóa toàn diện." },
    "pep-pt1": { tag: "Peptide phục hồi da", desc: "Dung dịch Palmitoyl tripeptide-1 (pal-GHK) nguyên chất — sửa chữa hư tổn và củng cố cấu trúc nâng đỡ da.", usage: PEP_USE_VI, home: "GANA Peptide PT1 chứa Palmitoyl Tripeptide-1, còn gọi là pal-GHK, một peptide phục hồi da đóng vai trò quan trọng trong việc củng cố cấu trúc nâng đỡ của da và sửa chữa tổn thương nhìn thấy. Peptide này hoạt động bằng cách kích thích sản xuất các thành phần chính của chất nền ngoại bào như collagen và glycosaminoglycan. Bằng cách thúc đẩy các khối xây dựng thiết yếu này, pal-GHK giúp cải thiện độ bền của da, giảm nếp nhăn nhỏ và nếp nhăn, và nâng cao kết cấu da tổng thể. Đặc biệt hữu ích cho làn da cần hỗ trợ thêm trong phục hồi và duy trì sự trẻ trung. Cách dùng: Thoa serum GANA Peptide PT1 lên da đã làm sạch, tập trung vào vùng cần phục hồi hoặc củng cố. Dùng sáng và tối trước kem dưỡng ẩm.", clinic: "Trong môi trường lâm sàng, GANA Peptide PT1 mang lại khả năng nâng cao cho tái tạo và phục hồi da. Các phương pháp ứng dụng chuyên nghiệp như lăn kim hoặc dermaroller (0.2mm - 0.5mm) đảm bảo đưa Palmitoyl Tripeptide-1 tối ưu đến các lớp sâu hơn của da. Sự thẩm thấu tăng cường này cho phép peptide kích thích hiệu quả hơn việc tổng hợp collagen và các thành phần da quan trọng khác, dẫn đến phục hồi nhanh da tổn thương, cải thiện lành thương, và tăng đáng kể độ săn chắc và đàn hồi. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và pha cocktail với các peptide khác cho sự trẻ hóa da toàn diện." },
    "pep-mp17": { tag: "Peptide dài mi", desc: "Dung dịch Myristoyl pentapeptide-17 nguyên chất — kích thích gen keratin để mi dày và dài.", usage: "Thoa dọc chân mi bằng cọ mắt (tránh mắt), hai tuần một lần, 3–4 buổi.", home: "GANA Peptide MP17 sử dụng Myristoyl Pentapeptide-17, một peptide chuyên biệt được thiết kế để thúc đẩy lông mi dài, dày và đầy đặn hơn. Peptide này hoạt động bằng cách kích thích gen keratin, vốn thiết yếu cho sự phát triển của lông. Bằng cách khuyến khích chu kỳ phát triển tự nhiên của lông mi, nó giúp cải thiện mật độ và chiều dài theo thời gian. Đây là cách an toàn và hiệu quả để tăng vẻ đẹp tự nhiên cho đôi mắt mà không cần nối mi hay hóa chất mạnh. Cách dùng: Thoa GANA Peptide MP17 dọc chân mi bằng cọ mắt, tương tự kẻ eyeliner. Dùng hai tuần một lần, tránh tiếp xúc trực tiếp với mắt. Để có kết quả tốt nhất, dùng đều đặn 3-4 buổi.", clinic: "Về mặt lâm sàng, GANA Peptide MP17 có thể dùng cho các liệu trình dưỡng mi chuyên nghiệp. Dù sản phẩm được thiết kế để dùng tại nhà, phòng khám có thể hướng dẫn kỹ thuật thoa đúng và lồng vào quy trình làm đẹp rộng hơn. Mấu chốt là thoa nhất quán và chính xác dọc chân mi để kích thích gen keratin hiệu quả. Peptide này mang lại lựa chọn không xâm lấn cho khách hàng muốn cải thiện sự phát triển và vẻ ngoài tự nhiên của lông mi. Có thể đề xuất như một liệu trình độc lập hoặc một phần của kế hoạch thẩm mỹ lớn hơn." },
    "pep-agh1": { tag: "Peptide nếp nhăn SNAP-8", desc: "Dung dịch Acetyl glutamyl heptapeptide-1 (SNAP-8) nguyên chất — Argireline kéo dài, giãn nếp nhăn kiểu Botox.", usage: PEP_USE_VI, home: "GANA Peptide AGH1 chứa Acetyl Glutamyl Heptapeptide-1, gọi là SNAP-8, một peptide tiên tiến là phiên bản kéo dài của Argireline. SNAP-8 hoạt động bằng cách giảm thêm cường độ co cơ chịu trách nhiệm cho nếp nhăn biểu cảm, mang lại hiệu ứng kiểu Botox mạnh hơn. Nó nhắm vào cùng cơ chế như Argireline nhưng với hiệu quả tăng cường, dẫn đến giảm độ sâu nếp nhăn đáng kể hơn, đặc biệt ở trán và quanh mắt. Peptide này mang lại giải pháp mạnh mẽ cho những ai muốn làm mịn nếp nhăn động rõ rệt và đạt vẻ mặt thư thái hơn. Cách dùng: Thoa serum GANA Peptide AGH1 lên vùng nếp nhăn biểu cảm rõ sau khi làm sạch. Dùng hai lần mỗi ngày, tập trung thoa có mục tiêu, trước khi dùng các serum hoặc kem dưỡng ẩm khác.", clinic: "Trong môi trường lâm sàng, GANA Peptide AGH1 (SNAP-8) mang lại hiệu quả giảm nhăn động vượt trội so với phiên bản tiền nhiệm Argireline, với các nghiên cứu cho thấy nó có thể mạnh hơn tới khoảng 30%. Khi dùng với lăn kim hoặc dermaroller (0.2mm - 0.5mm), Acetyl Glutamyl Heptapeptide-1 có thể đạt thẩm thấu tối ưu, dẫn đến thư giãn cơ mặt sâu và bền hơn. Điều này khiến nó trở thành lựa chọn tuyệt vời cho khách hàng muốn cải thiện đáng kể nếp nhăn biểu cảm sâu. Thường thực hiện 2-3 buổi cách nhau 2 tuần và kết hợp với các peptide khác cho liệu trình chống lão hóa toàn diện." },
    "pep-at5": { tag: "Peptide chống bọng mắt", desc: "Dung dịch Acetyl tetrapeptide-5 nguyên chất — giảm bọng mắt dưới mắt.", usage: PEP_USE_VI, home: "GANA Peptide AT5 sử dụng Acetyl Tetrapeptide-5, một peptide chuyên biệt được điều chế để giải quyết mối lo phổ biến về bọng mắt. Peptide này hoạt động bằng cách nhắm vào các cơ chế góp phần tích tụ dịch và sưng ở vùng dưới mắt mỏng manh. Nó giúp cải thiện tuần hoàn bạch huyết và giảm tính thấm mao mạch, từ đó giảm bọng và quầng thâm do ứ dịch. Dùng đều đặn có thể mang lại đường nét mắt tươi tắn và tràn sức sống hơn. Cách dùng: Nhẹ nhàng chấm serum GANA Peptide AT5 quanh xương hốc mắt sau khi làm sạch và toner, cả sáng lẫn tối. Để thấm hoàn toàn trước khi dùng kem mắt hoặc kem dưỡng ẩm.", clinic: "Về mặt lâm sàng, GANA Peptide AT5 là công cụ giá trị cho các liệu trình chuyên nghiệp nhắm vào bọng mắt và sưng. Bằng cách sử dụng lăn kim hoặc dermaroller (0.2mm - 0.5mm), Acetyl Tetrapeptide-5 có thể được đưa hiệu quả hơn đến vùng quanh mắt, tăng cường khả năng giảm ứ dịch và cải thiện vi tuần hoàn. Điều này có thể dẫn đến giảm bọng mắt đáng kể và nhanh hơn, mang lại cho khách hàng vẻ ngoài trẻ trung và nghỉ ngơi hơn. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và kết hợp với các peptide khác cho liệu trình trẻ hóa mắt toàn diện." },
    "pep-np1": { tag: "Peptide làm trắng", desc: "Dung dịch Nonapeptide-1 nguyên chất — ức chế kích hoạt tyrosinase để làm trắng và mờ đốm.", usage: PEP_USE_VI, home: "GANA Peptide NP1 chứa Nonapeptide-1, một peptide làm trắng mạnh mẽ được thiết kế để giải quyết tăng sắc tố và thúc đẩy làn da sáng và đều màu hơn. Peptide này hoạt động bằng cách ức chế hoạt động của tyrosinase, một enzyme chính trong sản xuất melanin. Bằng cách chặn các tín hiệu kích hoạt tổng hợp melanin, Nonapeptide-1 giúp giảm sự xuất hiện của đốm nâu, đốm nắng và tăng sắc tố sau viêm hiện có, đồng thời ngăn sự đổi màu mới hình thành. Đây là lựa chọn tuyệt vời cho những ai muốn đạt làn da rạng rỡ và đồng đều. Cách dùng: Thoa serum GANA Peptide NP1 lên da đã làm sạch, tập trung vào vùng tăng sắc tố hoặc không đều màu. Dùng sáng và tối, tiếp theo là kem chống nắng phổ rộng ban ngày.", clinic: "Trong môi trường lâm sàng, GANA Peptide NP1 mang lại điều trị có mục tiêu cho tăng sắc tố. Các phương pháp ứng dụng chuyên nghiệp như lăn kim hoặc dermaroller (0.2mm - 0.5mm) có thể tăng cường đáng kể việc đưa Nonapeptide-1 đến các melanocyte, nơi nó ức chế hoạt động tyrosinase hiệu quả hơn. Điều này dẫn đến giảm đốm nâu rõ rệt hơn và làn da đều màu hơn. Có thể tích hợp thành chuỗi 2-3 buổi cách nhau 2 tuần và kết hợp với các peptide khác cho chiến lược làm sáng da và chống sắc tố toàn diện." },
    "am": { tag: "Kích hoạt telomerase chống lão hóa", desc: "Chiết xuất rễ hoàng kỳ (Astragalus, 100ppm) — kích hoạt telomerase kiểu TA-65 để chống lão hóa cấp tế bào.", usage: "Meso / MTS / bôi ngoài, hai tuần một lần." },
    "tm": { tag: "Mặt nạ đăng ký FDA", desc: "Mặt nạ giấy đa hoạt chất — PDRN, PHA, Acetyl Hexapeptide-8, HA liên kết chéo và alpha arbutin. Công thức đăng ký FDA.", usage: "Đắp một miếng lên da đã làm sạch 15–20 phút, 2–3 lần/tuần." },
    "mask": { tag: "Mặt nạ phục hồi sau thủ thuật", desc: "Mặt nạ bio-cellulose phục hồi với PLLA, HA liên kết chéo và PDRN — làm dịu và tái tạo da bị bỏng hoặc sau điều trị.", usage: "Đắp một miếng lên vùng cần thiết sau thủ thuật hoặc bỏng. Dùng một lần." },
    "nphg": { tag: "Booster NMN chống lão hóa", desc: "Booster HA không liên kết chéo với NMN, PDRN và glutathione — tăng NAD+, kích hoạt gen sirtuin để chống lão hóa, cấp ẩm và làm sáng.", usage: "Meso / MTS / bôi ngoài." },
    "exo-nphg": { tag: "Booster Exosome NMN", desc: "Booster exosome từ rau má (túi ngoại bào) với NMN, PDRN và glutathione — làm dịu, tái tạo và chống lão hóa trong lọ không liên kết chéo.", usage: "Meso / MTS / bôi ngoài." },
    "fish-collagen": { tag: "Booster Collagen biển", desc: "Dung dịch collagen biển (cá) nguyên chất — cải thiện cấp ẩm, đàn hồi và nếp nhăn, hỗ trợ phục hồi mô.", usage: "Meso / MTS / bôi ngoài." },
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
