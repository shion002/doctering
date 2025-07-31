import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "LoginSelect", children: [_jsx("div", { onClick: handleKakaoLogin, children: _jsx("img", { src: kakao }) }), _jsx("div", { onClick: handleNaverLogin, children: _jsx("img", { src: naver }) })] }));
};
export default LoginSelect;
