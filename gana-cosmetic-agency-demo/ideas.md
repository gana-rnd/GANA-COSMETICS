# GANA Cosmetic 에이전시 웹페이지 — 디자인 아이디어

## 맥락 요약

- **운영 주체**: GANA Cosmetic Co., Ltd. (한국, 경기도 성남)
- **타겟**: 해외 B2B — 디스트리뷰터, 클리닉, ODM 바이어
- **언어**: 영어 단일
- **기능**: 카탈로그 + 단일 문의 폼. 구매 없음.
- **제품 수**: 활성 SKU 23종 (스킨 부스터, 메조테라피, 케미컬 필링, 토피컬, 인티미트)
- **비주얼 레퍼런스**: 분자 구조·버블·세럼 드로퍼·헥사곤 셀 이미지 → 과학적 정밀함 + 고급 코스메슈티컬 미감
- **기존 디자인 상태**: 2024-2025 신제품 라인이 에디토리얼 모노크롬 + 세리프 + 절제된 단색 팔레트로 레벨업됨. DMP+ 코랄/로즈 박스가 가장 완성도 높음.

---

## 세 가지 디자인 방향

<response>
<probability>0.07</probability>
<text>

### Option A — "Precision Mineral" (선택됨)

**Design Movement**: Scientific Minimalism × Editorial Luxury

**Core Principles**:
1. 과학적 정밀함을 시각화 — 분자 구조, 헥사곤 셀, 버블 모티프를 장식이 아닌 구조 요소로 사용
2. 극단적 여백 — 콘텐츠가 숨쉬는 공간. 정보 밀도는 낮게, 임팩트는 높게
3. 비대칭 레이아웃 — 좌우 비대칭 그리드로 에디토리얼 긴장감 형성
4. 단색 팔레트의 절제 — 배경은 거의 흰색(오프화이트), 강조색은 딥 로즈/코랄 단 하나

**Color Philosophy**:
- Background: `#F7F4F1` (웜 오프화이트 — DMP+ 카탈로그 배경과 동일 계열)
- Primary text: `#1A1614` (거의 검정, 따뜻한 언더톤)
- Accent: `#B85C5C` (딥 로즈 — DMP+ 박스 컬러에서 추출)
- Secondary accent: `#8AACBE` (아이스 블루 — 분자 이미지의 파란 버블)
- Muted: `#C8BDB8` (웜 그레이)

**Layout Paradigm**:
- Hero: 전체 화면 분할 — 좌 2/3 텍스트 영역, 우 1/3 분자 이미지 오버랩
- 제품 그리드: 비대칭 매거진 레이아웃 (3열 → 2열 → 풀 와이드 교차)
- 섹션 구분: 수평선 대신 여백으로만 구분
- 네비게이션: 상단 고정, 로고 좌, 메뉴 우, 극도로 얇은 폰트

**Signature Elements**:
1. 분자 구조 SVG 라인 — 배경에 반투명하게 떠있는 장식 요소
2. 세로 텍스트 레이블 — 섹션 번호나 카테고리명을 90도 회전해 좌측에 배치
3. 얇은 1px 구분선 — 수평이 아닌 수직으로 콘텐츠 분리

**Interaction Philosophy**:
- 스크롤 시 분자 이미지가 parallax로 느리게 이동
- 제품 카드 hover: 이미지 스케일업 + 배경색 변화 (오프화이트 → 아이스 블루 10%)
- CTA 버튼: 언더라인 슬라이드 애니메이션 (fill 방식)

**Animation**:
- 페이지 진입: 텍스트 라인별 아래에서 위로 fade-up (stagger 60ms)
- 섹션 진입: IntersectionObserver → opacity 0→1 + translateY 20px→0 (300ms ease-out)
- 버블 배경: CSS keyframe으로 분자 구조 미세 부유 (8s infinite, 매우 느림)

**Typography System**:
- Display: `Cormorant Garamond` (세리프, 얇고 우아함) — 헤드라인 전용
- Body: `DM Sans` (산세리프, 가독성 높음) — 본문, UI 레이블
- Mono: `DM Mono` — 성분 수치, 사양 테이블
- 크기 스케일: 72px / 48px / 32px / 20px / 16px / 13px

</text>
</response>

<response>
<probability>0.06</probability>
<text>

### Option B — "Clinical Noir"

**Design Movement**: Medical Brutalism × Luxury Dark

**Core Principles**:
1. 다크 배경 (#0D0D0D) + 화이트 텍스트로 클리닉 권위감 표현
2. 타이포그래피 주도 레이아웃 — 이미지보다 글자가 시각적 무게 담당
3. 형광 그린/사이안 단일 강조색으로 바이오테크 에너지

**Color Philosophy**:
- Background: `#0D0D0D`
- Accent: `#00FF88` (바이오테크 그린)

**Layout Paradigm**:
- 풀스크린 타이포그래피 히어로
- 제품 리스트: 수평 스크롤 트랙

**Signature Elements**:
1. 스캔라인 텍스처 오버레이
2. 데이터 시각화 스타일 성분 차트

**Typography System**:
- `Space Grotesk` + `Space Mono`

</text>
</response>

<response>
<probability>0.05</probability>
<text>

### Option C — "Aqua Editorial"

**Design Movement**: Scandinavian Minimalism × Cosmetic Science

**Core Principles**:
1. 아쿠아/민트 계열 단일 팔레트
2. 대형 타이포그래피 + 극소 이미지
3. 수평 스크롤 카탈로그 섹션

**Color Philosophy**:
- Background: `#FAFEFF`
- Primary: `#0B7A8A` (딥 틸)

**Typography System**:
- `Playfair Display` + `Outfit`

</text>
</response>

---

## 선택: **Option A — "Precision Mineral"**

DMP+ 카탈로그의 코랄/로즈 + 오프화이트 팔레트, 분자 이미지 비주얼 레퍼런스, 에디토리얼 세리프 타이포그래피를 사이트 전체로 확장. 해외 B2B 바이어에게 "과학적 신뢰 + 럭셔리 코스메슈티컬" 포지셔닝을 전달하는 데 가장 적합.
