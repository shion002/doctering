import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./Bottom.css";
import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import homeBtn from "./../assets/home_button.jpg";
import starBtn from "./../assets/star_button.jpg";
import pushBtn from "./../assets/push_button.jpg";
import inforBtn from "./../assets/infor_button.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import useLoginSelect from "../context/useLoginSelect";
import { useAlertContext } from "../context/useAlertContext";
const Bottom = () => {
    const [active, setActive] = useState("홈");
    const nav = useNavigate();
    const location = useLocation();
    const { open: openLoginSelect } = useLoginSelect();
    const { readAlert } = useAlertContext();
    const buttons = [
        { name: "홈", img: homeBtn, path: "/" },
        { name: "즐겨찾기", img: starBtn, path: "/bookmark" },
        { name: "알림", img: pushBtn, path: "/alert" },
        { name: "내 정보", img: inforBtn, path: "/info" },
    ];
    useEffect(() => {
        const currentPath = location.pathname;
        const matchedButton = buttons.find((btn) => btn.path === currentPath);
        if (matchedButton) {
            setActive(matchedButton.name);
        }
        else {
            setActive("홈");
        }
        console.log(readAlert);
    }, [location.pathname]);
    const handleClick = (btn) => {
        const token = localStorage.getItem("token");
        if (!token &&
            (btn.name === "즐겨찾기" || btn.name === "알림" || btn.name === "내 정보")) {
            localStorage.setItem("redirectAfterLogin", btn.path);
            openLoginSelect();
            return;
        }
        nav(btn.path);
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "Bottom", children: buttons.map((btn) => (_jsx(BottomButton, { handleClick: () => handleClick(btn), active: active === btn.name, name: btn.name, img: btn.img, unread: btn.name === "알림" && !readAlert }, btn.name))) }) }));
};
export default Bottom;
