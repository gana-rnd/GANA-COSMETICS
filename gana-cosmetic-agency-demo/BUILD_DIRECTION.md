# GANA Cosmetic — 에이전시 수준 웹사이트 빌드 방향 분석

> **작성 기준**: 브레인스토밍 핸드아웃(pasted_content.txt), 2021·2024·2025년 카탈로그 PDF, 2026년 가격표(원화·USD), GANA R&D 가격표, 첨부 비주얼 레퍼런스 이미지 분석 결과를 종합.

---

## 1. 사이트 정체성 정의

GANA Cosmetic Co., Ltd.는 한국 경기도 성남 소재의 코스메슈티컬 전문 기업으로, 메조테라피 솔루션·스킨 부스터·케미컬 필링·토피컬 제품 23개 활성 SKU를 보유한다. 이 웹사이트의 목적은 **해외 B2B 바이어(디스트리뷰터, 클리닉, ODM 파트너)를 대상으로 한 영어 전용 카탈로그 + 단일 문의 창구**이며, 전자상거래 기능은 포함하지 않는다.

핵심 포지셔닝 메시지는 두 축으로 구성된다. 첫째, **과학적 신뢰성** — PDRN·PLLA·HA·Glutathione 등 임상 성분 기반의 제형력. 둘째, **럭셔리 코스메슈티컬 미감** — 2024-2025 신제품 라인(DMP+, EYE BOOSTER, PHV)이 이미 확립한 에디토리얼 패키지 디자인 방향을 사이트 전체로 확장한다.

---

## 2. 빌드 방향 핵심 결정 사항

### 2.1 기술 스택 권고

| 항목 | 권고 옵션 | 근거 |
|------|-----------|------|
| **프레임워크** | **Astro 5** | 정적 카탈로그 사이트에 최적. 빌드 타임 HTML 생성으로 SEO 최강. 이미지 최적화 내장. React/Vue 컴포넌트 아일랜드 방식으로 인터랙션 추가 가능 |
| **스타일링** | Tailwind CSS 4 + 커스텀 CSS 변수 | 디자인 토큰 관리 용이. 박소정의 기존 스택과 호환 |
| **문의 폼** | Resend (이메일 전달) + Zod 검증 | 서버리스 함수 1개로 처리 가능. DB 없이 운영 가능 |
| **CMS** | Tina CMS (Git 기반) | 본사 직원이 Markdown 파일을 GitHub UI에서 직접 수정 가능. 개발자 경험 우수 |
| **호스팅** | Vercel (현재 gana-cosmetics.com 도메인 유지) | 기존 도메인 그대로 활용. 글로벌 CDN, 자동 HTTPS |
| **분석** | Plausible Analytics | 쿠키 없음, GDPR 친화적, B2B 해외 바이어 대상 적합 |

**차선 옵션**: 박소정이 Next.js 스택을 Mutate SaaS와 공유하고 싶다면 Next.js 15 App Router + Vercel도 합리적이다. 다만 정적 카탈로그에는 Astro가 번들 크기와 SEO 면에서 우위를 가진다.

### 2.2 사이트 구조 (페이지 아키텍처)

```
/                    → Hero + 브랜드 소개 + 제품 카테고리 프리뷰 + CTA
/products            → 전체 카탈로그 그리드 (필터: 카테고리, 적응증)
/products/[slug]     → 개별 제품 상세 (성분, 사양, 적응증, 관련 제품)
/about               → 회사 소개, 인증 현황 (FDA, CPNP, GMP, ISO 13485)
/contact             → 문의 폼 (Name, Company, Phone, Email, Country, Inquiry Type, Message)
/private-label       → ODM 전용 페이지 (비공개 또는 별도 접근 제어)
```

> **카탈로그 제외 확정 (2026, 본사 지시)**: Dermal Fillers 전체 · Clinic Care 전체 · R&D(TEL, ANGIO) 제외. 해외 타겟, 소비자가 공개, 딜러가 문의별도. 상세 목록은 [CATALOG_POLICY.md](CATALOG_POLICY.md) 참조.

### 2.3 제품 분류 체계 (확정 전 박소정·본사 협의 필요)

| 카테고리 | 포함 제품 | SKU 수 |
|----------|-----------|--------|
| Skin Boosters | DMP+, PHV, EYE BOOSTER | 3 |
| Meso Solutions | TOX, PNV, PNV+, SCALP, Cocktail, EYE, PF, V LINE, DA | 9 |
| Chemical Peels | PHA, GINO FACE, GINO BODY, REGEN PEEL | 4 |
| Topicals | TC, TC+, KA, BB | 4 |
| Intimate Care | GYNO | 1 |
| Filler-Adjacent Meso | Booster V, HA V | 2 (포함 여부 미결) |

**주의 사항**:
- `GANA GYNO`: "Vaginal whitening" 표현 완전 삭제. "Intimate area brightening & pH balance care"로 재서술.
- `GANA PF`: 사이트에서 "Peptide Filler" 표기 대신 "Expression Line Solution"으로 재명명 권고.
- `GANA KA`: Kojic acid 4% — EU CPNP 한도(1%) 초과. EU 타겟 페이지에서 EU 비적합 명시 또는 EU 바이어 대상 제외.
- `REGEN PEEL`: "For licensed medical professionals only" 면책 문구 필수.

---

## 3. 디자인 시스템 — "Precision Mineral"

### 3.1 디자인 철학

**Scientific Minimalism × Editorial Luxury**. 분자 구조·버블·세럼 드로퍼 이미지가 전달하는 과학적 정밀함을 장식이 아닌 구조 요소로 사용한다. 2024-2025 신제품 카탈로그(DMP+)가 확립한 코랄/로즈 + 웜 오프화이트 팔레트를 사이트 전체 기준으로 삼는다.

### 3.2 컬러 팔레트

| 역할 | 색상 코드 | 용도 |
|------|-----------|------|
| Background | `#F7F4F1` | 페이지 기본 배경 (웜 오프화이트) |
| Primary Text | `#1A1614` | 본문, 헤드라인 |
| Accent Rose | `#B85C5C` | CTA 버튼, 강조 레이블, 링크 |
| Ice Blue | `#8AACBE` | 보조 강조, 분자 이미지 색조 |
| Warm Gray | `#C8BDB8` | 구분선, 비활성 텍스트 |
| Deep Charcoal | `#2C2420` | 네비게이션, 푸터 배경 |

### 3.3 타이포그래피

| 역할 | 폰트 | 특성 |
|------|------|------|
| Display / Hero | Cormorant Garamond | 세리프, 얇고 우아함. 72-96px 헤드라인 전용 |
| UI / Body | DM Sans | 산세리프, 가독성 높음. 14-20px 본문·레이블 |
| Data / Specs | DM Mono | 모노스페이스. 성분 수치, 가격, 사양 테이블 |

### 3.4 레이아웃 원칙

비대칭 에디토리얼 그리드를 기본으로 한다. 히어로 섹션은 좌 60% 텍스트 / 우 40% 분자 이미지 분할 구조를 취하며, 제품 그리드는 3열 → 2열 → 풀 와이드 교차 배치로 시각적 리듬을 형성한다. 섹션 구분은 수평선 대신 여백으로만 처리하고, 세로 텍스트 레이블(카테고리명 90도 회전)을 좌측 마진에 배치해 에디토리얼 긴장감을 준다.

### 3.5 인터랙션 & 애니메이션

페이지 진입 시 텍스트 라인별 아래에서 위로 fade-up(stagger 60ms)을 적용하고, 섹션 진입은 IntersectionObserver 기반 opacity + translateY 트랜지션(300ms ease-out)으로 처리한다. 제품 카드 hover는 이미지 스케일업(1.03) + 배경색 변화(오프화이트 → 아이스 블루 8%)로 응답성을 표현한다. 모든 애니메이션은 `prefers-reduced-motion` 미디어 쿼리로 게이트한다.

---

## 4. 콘텐츠 전략

### 4.1 제품 상세 페이지 구성 요소

각 제품 페이지는 다음 요소를 포함해야 한다: 제품명 + 태그라인, 주요 성분 리스트(DM Mono 폰트), 적응증, 용량·사양, 경쟁 제품 대비 포지셔닝 문구(예: DMP+의 "vs Juvelook / vs Rejuran"), 관련 제품 3종 추천. 가격은 "Contact for pricing" 처리하거나 USD 소매가 표시 후 "Wholesale pricing available upon inquiry" 문구를 병기한다.

### 4.2 신뢰 지표 섹션

About 페이지 또는 홈 하단에 인증 배지를 배치한다: FDA Registration, EU CPNP, GMP, ISO 13485. 인증서 PDF 다운로드 링크를 제공하면 B2B 바이어의 신뢰도가 크게 높아진다.

### 4.3 문의 폼 필드 설계

```
Name *
Company / Clinic Name *
Email *
Phone (with country code) *
Country *
Inquiry Type * [Distributor Partnership / Clinic Supply / ODM/Private Label / General]
Products of Interest (multi-select)
Message
```

폼 제출 후 Resend를 통해 본사 이메일로 자동 전달하고, 발신자에게 확인 이메일을 발송한다.

---

## 5. 미결정 사항 — 박소정·본사 협의 필요

다음 항목들은 사이트 빌드 전에 결정이 필요하다. 결정이 늦어지면 데이터 모델 확정이 지연된다.

| 항목 | 옵션 A | 옵션 B | 우선순위 |
|------|--------|--------|----------|
| CMS 도입 여부 | Tina CMS (본사 직접 수정) | Git 기반 (박소정 통해서만) | 높음 |
| GYNO 처리 | 본 사이트 포함 (표현 재서술) | 별도 마이크로사이트 | 높음 |
| ODM 7종 노출 | `/private-label` 공개 페이지 | 비공개 (문의 시 자료 제공) | 높음 |
| ~~Booster V / HA V~~ | ~~카탈로그 포함~~ | **제외 확정** (Clinic Care 전체 제외) | — |
| 다국어 확장 | 영어 단일 출시 후 i18n 구조 준비 | 처음부터 영어만 | 낮음 |
| 제품 사진 표준화 | 본사 재촬영 의뢰 | 박소정 합성·보정 | 높음 (빌드보다 시간 더 걸림) |

---

## 6. 빌드 로드맵 (권고 순서)

1. **본사 확인 6가지** 완료 (단종 SKU, 사진 자산, 인증서 PDF)
2. **디자인 시스템 확정** — 컬러 토큰, 타이포그래피 스케일, 컴포넌트 라이브러리
3. **제품 데이터 모델 구축** — 23종 SKU JSON 또는 Markdown 파일
4. **제품 사진 표준화** — 표준 라이팅·배경으로 재촬영 또는 합성
5. **정적 페이지 빌드** — Home, Products, About, Contact
6. **문의 폼 백엔드** — Resend 연동
7. **SEO 최적화** — 메타 태그, OG 이미지, sitemap.xml
8. **QA & 런칭** — gana-cosmetics.com 도메인 연결

---

*이 문서는 빌드 방향 분석 초안입니다. 박소정의 결정 사항이 확정되는 대로 업데이트됩니다.*
