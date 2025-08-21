export function formatPhone(phone: string): string {
  // 이미 하이픈이 있으면 그대로 반환
  if (phone.includes("-")) {
    return phone;
  }

  // 숫자만 추출
  const digits = phone.replace(/\D/g, "");

  if (digits.length < 9) {
    return phone; // 너무 짧으면 포맷 불가 → 그대로 반환
  }

  let formatted = "";

  if (digits.startsWith("02")) {
    // 서울 (2자리 지역번호)
    formatted = digits.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3");
  } else if (digits.startsWith("0")) {
    // 나머지 지역번호 (3자리 지역번호)
    formatted = digits.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  } else {
    // 앞에 0이 없는 경우 → 2자리 지역번호 간주
    formatted = digits.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }

  return formatted;
}
