/**
 * GANA Cosmetic — 문의 폼 수신용 Google Apps Script
 * 추가 가입/결제 없이, contact@gana-cosmetics.com 구글 계정 그대로 사용.
 *
 * ── 설치 순서 ──────────────────────────────────────────────
 * 1. contact@gana-cosmetics.com 으로 로그인한 상태에서 https://script.google.com 접속
 * 2. "새 프로젝트" → 기본 코드 전부 지우고 이 파일 내용 붙여넣기 → 저장
 * 3. 오른쪽 위 "배포" → "새 배포" → 유형: "웹 앱"
 *      - 실행 계정: 나 (contact@gana-cosmetics.com)
 *      - 액세스 권한: "모든 사용자(Anyone)"
 * 4. "배포" 누르면 권한 승인 창 → 본인 계정 허용
 * 5. 발급된 "웹 앱 URL" 복사  (https://script.google.com/macros/s/...../exec)
 * 6. 그 URL을 Home.tsx 의 APPS_SCRIPT_URL 에 붙여넣기
 * ──────────────────────────────────────────────────────────
 */

var TO_EMAIL = "contact@gana-cosmetics.com";

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var subject = "[GANA B2B Inquiry] " + (d.company || d.name || "New inquiry");
    var body =
      "New inquiry from the GANA Cosmetic website\n" +
      "──────────────────────────────────────────\n" +
      "Name:         " + (d.name || "") + "\n" +
      "Company:      " + (d.company || "") + "\n" +
      "Email:        " + (d.email || "") + "\n" +
      "Phone:        " + (d.phone || "") + "\n" +
      "Country:      " + (d.country || "") + "\n" +
      "Inquiry Type: " + (d.inquiry_type || "") + "\n" +
      "──────────────────────────────────────────\n\n" +
      (d.message || "");

    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      replyTo: d.email || TO_EMAIL,
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 배포 확인용 (브라우저로 URL 열었을 때 표시)
function doGet() {
  return ContentService.createTextOutput("GANA contact form endpoint is live.");
}
