# 카탈로그 구성 · 가격 정책 (확정)

> 출처: 본사(파파이스) 지시 — 카카오톡 2026, 카탈로그 제품군 이미지 2종.
> 적용 대상: 해외 B2B 홈페이지(gana-cosmetics.com). "모든 제품이 들어간 전체 카탈로그"에서 아래 품목을 **제외**하고 구성한다.

---

## 1. 타겟 & 가격 정책

- **타겟**: 해외(overseas). 해외 B2B 바이어 + 해외 소비자 노출 기준.
- **공개 가격**: `20260407 제품 단가표 ( USD ).pdf` 의 **Retail Price (USD)** 컬럼을 그대로 표기한다. (본사 지시: "그냥 단가로 해")
- **딜러가(물량가)**: 단가표의 100+/1000+ Units 가격은 사이트에 표기하지 않고 **"문의(inquiry) 별도"** 로 처리한다.
- **필러 제품군 전체 제외**: 사이트는 필러를 제외한 제품으로만 구성한다.

---

## 2. 제외 품목 (사이트에서 빼는 것)

### 2.1 Dermal Fillers — 전체 제외
- GANA MHS (semi permanent)
- Filler X (PCL + HA filler)
- GANA HA (HA filler)
- GANA PH (PLLA + HA filler)
- GANA PN (PDRN syringe type)
- GANA FILL (CE approved PLLA filler)
- GANA CH (Calcium + HA filler)
- GANA PNS (PDRN filler)
- GANA PFS (peptide filler)

### 2.2 Clinic Care — 전체 제외
- GANA DA (lipolysis)
- GANA LIFT (cone type lifting)
- GANA booster (biorevitalization)
- GANA PDO (cog threads)
- GANA booster-V
- GANA HA-V
- GANA PATCH — KFDA approved (wound dressing)

### 2.3 Under R&D Products — 전체 제외
- GANA TEL (purified telomere)
- GANA ANGIO

> 본사 지시 원문: "pdo, path 빼", "(R&D) 이것도 빼고", "모든 제품 다 들어간 카탈로그에서 하나씩 빼고 올려."

---

## 3. 현재 홈페이지 반영 상태

홈페이지 제품 그리드(`client/src/pages/Home.tsx` 의 `PRODUCTS`)는 위 제외 품목을
**하나도 포함하지 않음** — 이미 필러/클리닉케어/R&D 제외 상태로 구성됨.

| 노출 중 9종 | 카테고리 |
|---|---|
| GANA DMP+ | Skin Booster |
| GANA PHV | Skin Booster |
| GANA EYE BOOSTER | Skin Booster |
| GANA TOX | Meso Solution |
| GANA PNV+ | Meso Solution |
| GANA SCALP | Meso Solution |
| GANA TC+ | Topical |
| GINO FACE | Chemical Peel |
| REGEN PEEL | Chemical Peel |

---

## 4. 가격 적용 결과 (USD Retail, 단가표 기준)

| 제품 | USD | 단가표 패키지 |
|---|---|---|
| GANA DMP+ | 150 | 3ml×2ea |
| GANA PHV | 150 | 10ml |
| GANA EYE BOOSTER | 30 | 1.2ml |
| GANA TOX | 150 | 5ml×10ea |
| GANA PNV+ | 150 | 3ml×5ea |
| GANA SCALP | 150 | 3ml×10ea |
| GANA TC+ | 90 | 45g |
| GINO FACE | 90 | 45g |
| REGEN PEEL | 60 | 30ml/50ml |

## 5. 미결(박소정 확인 필요)

- [ ] **노출 SKU 범위**: 현재 홈페이지는 대표 9종만 노출. 제외 후 전체 카탈로그 잔여 품목을 모두 올릴지, 대표 라인업만 유지할지 결정 필요.
- [ ] **통화**: 현재 USD 단독 표기. 원화/기타 통화 병기 필요 시 추가.
