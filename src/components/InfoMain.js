import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import "./InfoMain.css";
import location from "./../assets/location_icon.svg";
import { useNavigate } from "react-router-dom";
import logout from "./../assets/logout_icon.svg";
import { baseURL } from "../util/baseUrl";
const InfoMain = () => {
    const [memberName, setMemberName] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const nav = useNavigate();
    const logoutClick = () => {
        const con = confirm("로그아웃 하시겠습니까?");
        if (con) {
            localStorage.removeItem("token");
            nav("/");
            window.location.reload();
        }
    };
    useEffect(() => {
        axios
            .get(`https://${baseURL}/api/oauth/member`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            withCredentials: true,
        })
            .then((res) => {
            console.log(res.data);
            setMemberName(res.data.nickname);
            setMemberEmail(res.data.email);
        })
            .catch((e) => {
            console.error(e);
        });
    }, []);
    return (_jsxs("div", { className: "Infomain", children: [_jsxs("div", { className: "info_profile", children: [_jsxs("h4", { children: [memberName, "\uB2D8 \uAC74\uAC15\uD558\uC138\uC694!"] }), _jsx("div", { className: "info_profile_line" }), _jsxs("div", { className: "info_profile_button", children: [_jsx("button", { children: "\uBBF8\uAD6C\uD604" }), _jsx("button", { children: "\uBBF8\uAD6C\uD604" }), _jsx("button", { children: "\uBBF8\uAD6C\uD604" })] })] }), _jsxs("div", { className: "info_config", children: [_jsx("h5", { children: "\uC124\uC815" }), _jsxs("div", { children: [_jsx("img", { src: location }), _jsx("p", { children: "\uB0B4 \uC8FC\uC18C \uC124\uC815" })] }), _jsxs("div", { onClick: logoutClick, children: [_jsx("img", { src: logout }), _jsx("p", { children: "\uB85C\uADF8\uC544\uC6C3" })] })] })] }));
};
export default InfoMain;
