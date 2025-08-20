import "./LocationGuide.css";

const LocationGuide = () => (
  <div className="space-y-4">
    <p className="text-sm text-gray-500">위치 정보 접근을 허용해주세요:</p>

    {/* 데스크탑 */}
    <div className="hidden md:block">
      <p className="guide-label">PC/노트북:</p>
      <ol className="guide-box">
        <li>1. 주소창 왼쪽의 자물쇠 아이콘 클릭</li>
        <li>2. 위치 정보를 '허용'으로 변경</li>
        <li>3. 페이지 새로고침</li>
      </ol>
    </div>

    {/* 모바일 */}
    <div className="block md:hidden">
      <p className="guide-label">모바일:</p>
      <div className="guide-box">
        <div>
          <p className="font-medium text-gray-700">Chrome/Safari:</p>
          <ol className="space-y-1 ml-2">
            <li>1. 주소창 왼쪽 아이콘 터치</li>
            <li>2. '위치' 또는 '위치 정보' 허용</li>
          </ol>
        </div>
        <div>
          <p className="font-medium text-gray-700">또는 브라우저 설정:</p>
          <ol className="space-y-1 ml-2">
            <li>1. 브라우저 설정 → 사이트 권한</li>
            <li>2. 현재 사이트 찾기</li>
            <li>3. 위치 정보 허용</li>
          </ol>
        </div>
      </div>
    </div>

    <button
      onClick={() => window.location.reload()}
      className="btn btn-secondary mt-4"
    >
      새로고침
    </button>
  </div>
);

export default LocationGuide;
