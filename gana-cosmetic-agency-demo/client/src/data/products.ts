/* ── Shared product data + design tokens ─────────────────────────────────────
 * Single source of truth used by both Home (catalogue grid) and ProductDetail.
 * Prices are USD Retail (단가표 기준). Dealer/volume pricing = inquiry only.
 * 2026-06 curation (박소정): fillers / tube cosmetics(연고·크림·튜브필링) / R&D excluded.
 * Clinic Care kept except LIFT·PDO·PATCH. Peptides ×9 added. → 26 SKUs.
 * Translatable copy (tag/desc/usage/category/badge/indication) lives in i18n.
 * ------------------------------------------------------------------------- */

/* Product imagery — local files in client/public/products (from GANA catalogues).
 * New items (DM / V LINE / Clinic Care / Peptides) matched to their 2021-catalogue
 * shot via pdfimages page mapping. Any missing img falls back to a flask placeholder. */
export const PROD_DMP  = "/products/dmp-plus.png";
export const SYRINGE_B = "/products/phv.png";
export const SYRINGE_G = "/products/eye-booster.png";

/* Colour tokens — kept here so every page shares one palette. */
export const C = {
  white:   "#FFFFFF",
  off:     "#F5F8FA",
  light:   "#E9EFF3",
  ink:     "#16222C",
  ink70:   "rgba(22,34,44,0.70)",
  ink45:   "rgba(22,34,44,0.45)",
  gold:    "#A8905A",
  goldH:   "#BFA570",
  border:  "#D4DCE2",
  borderL: "#E3E9EE",
  deep:    "#13262E",
};

export type Product = {
  id: string;
  cat: string;            // category key (also a filter + i18n cats key)
  name: string;           // brand name — kept across all languages
  tag: string;            // EN source (i18n overrides per language)
  desc: string;           // EN source (i18n overrides per language)
  ings: string[];         // key actives / INCI — kept in English
  vol: string;            // package / volume — kept in English
  price: string;          // USD retail ("" = inquiry only)
  img: string | null;
  badge: string;          // i18n badges key
  certs?: string[];       // confirmed regulatory marks (exact name match only)
  indications: string[];  // i18n indicationLabels keys
};

export const PRODUCTS: Product[] = [
  /* ── Skin Booster ── */
  { id:"dmp-plus", cat:"Skin Booster", name:"GANA DMP+", tag:"High-End Multi-Active Booster",
    desc:"PLLA + HA + PDRN + Glutathione. Multi-active booster in a ready-to-use prefilled vial.",
    ings:["PLLA 1mg/ml","HA 3mg/ml","PDRN 2mg/ml","Glutathione 0.5mg"], vol:"3ml × 2 vials", price:"150", img:PROD_DMP, badge:"2024 NEW",
    indications:["Regeneration","Hydration","Brightening","Elasticity"] },
  { id:"phv", cat:"Skin Booster", name:"GANA PHV", tag:"2-Year Lasting Hydration",
    desc:"High-molecular HA + PLLA biostimulator. Hyaluronidase-correctable for precise control.",
    ings:["HA 20mg/ml","PLLA 1mg/ml"], vol:"10ml vial", price:"150", img:SYRINGE_B, badge:"2024 NEW",
    indications:["Hydration","Volume","Elasticity"] },
  { id:"eye-booster", cat:"Skin Booster", name:"GANA EYE BOOSTER", tag:"Full-Face PDRN Revitalizer",
    desc:"PDRN + Sodium DNA + Glutathione. Targets cellular regeneration across the full face.",
    ings:["PDRN","Sodium DNA","Glutathione","HA"], vol:"1.2ml syringe", price:"30", img:SYRINGE_G, badge:"2025 NEW",
    indications:["Regeneration","Brightening","Elasticity"] },

  /* ── Meso Solution ── */
  { id:"tox", cat:"Meso Solution", name:"GANA TOX", tag:"Topical Neuromodulator",
    desc:"Argireline 100ppm + PDRN + HA. Spray-applied — no injection required. FDA & EU CPNP.",
    ings:["Argireline 100ppm","PDRN","Adenosine","Glutathione","Niacinamide"], vol:"5ml × 10ea", price:"150", img:"/products/tox.jpg", badge:"FDA + CPNP", certs:["FDA","EU CPNP"],
    indications:["Wrinkles","Regeneration","Brightening","Scars"] },
  { id:"pnv-plus", cat:"Meso Solution", name:"GANA PNV+", tag:"High-Concentration PDRN",
    desc:"PDRN 2% — direct clinical alternative to Rejuran. With Glutathione and HA 10mg/cc.",
    ings:["PDRN 2%","Glutathione 2mg/cc","HA 10mg/cc"], vol:"3ml × 5ea", price:"150", img:"/products/pnv-plus.jpg", badge:"vs Rejuran", certs:["EU CPNP"],
    indications:["Regeneration","Scars","Wrinkles","Brightening"] },
  { id:"pnv", cat:"Meso Solution", name:"GANA PNV", tag:"Low-Concentration PDRN",
    desc:"Low-concentration PDRN (0.5%) mesotherapy with glutathione and cross-linked HA for regeneration, whitening, and hydration.",
    ings:["PDRN 0.5%","Glutathione 2mg/cc","HA 5mg/cc"], vol:"3ml × 5ea", price:"90", img:"/products/pnv.jpg", badge:"PDRN", certs:["EU CPNP"],
    indications:["Regeneration","Brightening","Hydration"] },
  { id:"scalp", cat:"Meso Solution", name:"GANA SCALP", tag:"Scalp Regeneration",
    desc:"PDRN + GHK-Cu targeting hair follicle regeneration and scalp microenvironment.",
    ings:["PDRN","GHK-Cu"], vol:"3ml × 10ea", price:"150", img:"/products/scalp.jpg", badge:"Hair Specialist", certs:["EU CPNP"],
    indications:["Hair","Regeneration"] },
  { id:"eye", cat:"Meso Solution", name:"GANA EYE", tag:"Eye Bag & Dark Circle Solution",
    desc:"Targeted meso solution for under-eye bags and dark circles, with carnitine and acetyl tetrapeptide-5.",
    ings:["Carnitine 2%","Acetyl Tetrapeptide-5 50ppm"], vol:"2ml × 5ea", price:"150", img:"/products/eye.jpg", badge:"Eye Care", certs:["EU CPNP"],
    indications:["Eye bags","Dark circles"] },
  { id:"cocktail", cat:"Meso Solution", name:"GANA Cocktail", tag:"Whitening Meso Cocktail",
    desc:"Dual-vial whitening program — glutathione and vitamin C (ascorbic acid), applied on alternating weeks. Never mixed together.",
    ings:["Glutathione","Vitamin C"], vol:"4ml × 5+5ea", price:"90", img:"/products/cocktail.jpg", badge:"Whitening",
    indications:["Brightening","Anti-aging"] },
  { id:"dm", cat:"Meso Solution", name:"GANA DM", tag:"PLLA Collagen Meso",
    desc:"Freeze-dried PLLA powder + cross-linked HA two-part set. Collagen stimulation for acne scars, stretch marks, and lifting. Not a filler.",
    ings:["PLLA 50mg/5ml","Cross-linked HA 5ml"], vol:"PLLA 50mg + HA 5ml set", price:"60", img:"/products/dm.jpg", badge:"PLLA Meso", certs:["EU CPNP"],
    indications:["Scars","Regeneration","Volume","Elasticity"] },
  { id:"v-line", cat:"Meso Solution", name:"GANA V LINE", tag:"Facial Lipolysis",
    desc:"PPC + deoxycholic acid lipolysis solution with peptide and glutathione for facial contouring.",
    ings:["Phosphatidylcholine","Deoxycholic Acid","Acetyl Hexapeptide-8","Glutathione"], vol:"5ml × 10ea", price:"90", img:"/products/v-line.jpg", badge:"Lipolysis",
    indications:["Lipolysis","Wrinkles","Brightening"] },

  /* ── Chemical Peel ── */
  { id:"pha", cat:"Chemical Peel", name:"GANA PHA", tag:"Gentle PHA Peel",
    desc:"Polyhydroxy acid peel (PHA 10%) with alpha arbutin — gentle, low-irritation exfoliation and brightening for sensitive, rosacea, and atopic skin.",
    ings:["Polyhydroxy Acid 10%","Alpha Arbutin 1%"], vol:"40ml", price:"60", img:"/products/pha.jpg", badge:"Sensitive Skin",
    indications:["Exfoliation","Brightening","Sensitive skin"] },

  /* ── Intimate Care ── */
  { id:"gyno", cat:"Intimate Care", name:"GANA GYNO", tag:"Intimate Brightening & pH Care",
    desc:"Intimate area brightening and pH-balance care with glutathione and soy isoflavone. Also soothes dryness.",
    ings:["Glutathione","Soy Isoflavone","Lactic Acid"], vol:"50ml", price:"60", img:"/products/gyno.jpg", badge:"Intimate Care",
    indications:["Brightening","pH care","Hydration"] },

  /* ── Clinic Care (LIFT·PDO·PATCH excluded) ── */
  { id:"booster", cat:"Clinic Care", name:"GANA Booster", tag:"HA Biorevitalization",
    desc:"Cross-linked HA gel with lidocaine for biorevitalization (water-glow). Applied by meso gun.",
    ings:["Cross-linked HA","Lidocaine"], vol:"2.5ml syringe", price:"20", img:"/products/booster.jpg", badge:"Biorevital",
    indications:["Hydration","Regeneration"] },
  { id:"booster-v", cat:"Clinic Care", name:"GANA Booster V", tag:"Biorevitalization Vial",
    desc:"Cross-linked HA + glutathione biorevitalization solution in vial form.",
    ings:["Cross-linked HA 10mg/cc","Glutathione 1mg/cc"], vol:"3/5ml × 2ea", price:"20", img:"/products/booster-v.jpg", badge:"Biorevital",
    indications:["Hydration","Brightening"] },
  { id:"ha-v", cat:"Clinic Care", name:"GANA HA V", tag:"High-Concentration HA",
    desc:"High-concentration cross-linked HA (22mg/cc) for hydration and volume, vial form.",
    ings:["Cross-linked HA 22mg/cc"], vol:"3/5ml × 2ea", price:"60", img:"/products/ha-v.jpg", badge:"Hydration",
    indications:["Hydration","Volume"] },
  { id:"da", cat:"Clinic Care", name:"GANA DA", tag:"Body & Chin Lipolysis",
    desc:"Deoxycholic acid lipolysis solution for double chin and body fat. Not for facial use.",
    ings:["Deoxycholic Acid 10mg/cc"], vol:"5ml × 10ea", price:"150", img:"/products/da.jpg", badge:"Lipolysis", certs:["EU CPNP"],
    indications:["Lipolysis"] },

  /* ── Peptide (pure raw-material solutions, 3ml × 2 vials, inquiry-priced) ── */
  { id:"pep-apdn", cat:"Peptide", name:"GANA Peptide APDN", tag:"SYN-AKE Relaxing Peptide",
    desc:"Pure SYN-AKE dipeptide solution — relaxes expression wrinkles via acetylcholine antagonism (Botox-like).",
    ings:["Dipeptide Diaminobutyroyl Benzylamide Diacetate 500ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-apdn.jpg", badge:"Peptide",
    indications:["Wrinkles"] },
  { id:"pep-carnosine", cat:"Peptide", name:"GANA Peptide Carnosine", tag:"Anti-Aging Geroprotector",
    desc:"Pure L-Carnosine solution — a geroprotector that reduces telomere shortening for anti-aging.",
    ings:["L-Carnosine 50ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-carnosine.jpg", badge:"Peptide",
    indications:["Anti-aging"] },
  { id:"pep-ah8", cat:"Peptide", name:"GANA Peptide AH8", tag:"Argireline Wrinkle Peptide",
    desc:"Pure Acetyl hexapeptide-8 (Argireline) solution — Botox-like relaxation of expression wrinkles.",
    ings:["Acetyl Hexapeptide-8 20ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-ah8.jpg", badge:"Peptide",
    indications:["Wrinkles"] },
  { id:"pep-pp3", cat:"Peptide", name:"GANA Peptide PP3", tag:"Matrixyl Collagen Peptide",
    desc:"Pure Palmitoyl pentapeptide-3 (Matrixyl) solution — boosts collagen and elastin, reduces fine lines.",
    ings:["Palmitoyl Pentapeptide-3 150ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-pp3.jpg", badge:"Peptide",
    indications:["Wrinkles","Anti-aging"] },
  { id:"pep-pt1", cat:"Peptide", name:"GANA Peptide PT1", tag:"Skin-Repair Peptide",
    desc:"Pure Palmitoyl tripeptide-1 (pal-GHK) solution — repairs visible damage and strengthens skin's support structures.",
    ings:["Palmitoyl Tripeptide-1 100ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-pt1.jpg", badge:"Peptide",
    indications:["Regeneration","Anti-aging"] },
  { id:"pep-mp17", cat:"Peptide", name:"GANA Peptide MP17", tag:"Eyelash Growth Peptide",
    desc:"Pure Myristoyl pentapeptide-17 solution — stimulates keratin genes to thicken and grow eyelashes.",
    ings:["Myristoyl Pentapeptide-17 500ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-mp17.jpg", badge:"Peptide",
    indications:["Lash growth"] },
  { id:"pep-agh1", cat:"Peptide", name:"GANA Peptide AGH1", tag:"SNAP-8 Wrinkle Peptide",
    desc:"Pure Acetyl glutamyl heptapeptide-1 (SNAP-8) solution — an elongated Argireline for Botox-like wrinkle relaxation.",
    ings:["Acetyl Glutamyl Heptapeptide-1 500ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-agh1.jpg", badge:"Peptide",
    indications:["Wrinkles"] },
  { id:"pep-at5", cat:"Peptide", name:"GANA Peptide AT5", tag:"Anti-Eyebag Peptide",
    desc:"Pure Acetyl tetrapeptide-5 solution — reduces puffy under-eye bags.",
    ings:["Acetyl Tetrapeptide-5 500ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-at5.jpg", badge:"Peptide",
    indications:["Eye bags"] },
  { id:"pep-np1", cat:"Peptide", name:"GANA Peptide NP1", tag:"Whitening Peptide",
    desc:"Pure Nonapeptide-1 solution — inhibits tyrosinase activation for whitening and spot correction.",
    ings:["Nonapeptide-1 500ppm"], vol:"3ml × 2 vials", price:"", img:"/products/pep-np1.jpg", badge:"Peptide",
    indications:["Brightening"] },
];

export function getProduct(id: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

/** Up to `limit` other products in the same category. */
export function getRelated(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, limit);
}
