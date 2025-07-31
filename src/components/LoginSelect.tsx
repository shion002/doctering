import { baseURL } from "../util/baseUrl";
import kakao from "./../assets/kakao_login.png";
import naver from "./../assets/naver_login.png";
import "./LoginSelect.css";

const LoginSelect = () => {
  const handleKakaoLogin = () => {
    window.location.href = `http://${baseURL}/oauth2/authorization/kakao`;
  };

  const handleNaverLogin = () => {
    window.location.href = `http://${baseURL}/oauth2/authorization/naver`;
  };

  return (
    <div className="LoginSelect">
      <div onClick={handleKakaoLogin}>
        <img src={kakao} />
      </div>
      <div onClick={handleNaverLogin}>
        <img src={naver} />
      </div>
    </div>
  );
};

export default LoginSelect;
