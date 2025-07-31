import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Header.css";
import { useCategoryContext } from "../context/useCategoryContext";
import left from "./../assets/left_icon.svg";
const Header = () => {
    const { step, handleBack } = useCategoryContext();
    const backClick = () => {
        handleBack();
    };
    return (_jsxs("div", { className: "Header", children: [_jsx("div", { className: "header_left", children: step >= 2 ? _jsx("img", { src: left, alt: "back", onClick: backClick }) : null }), _jsx("div", { className: "header_center", children: _jsx("p", { className: "header_title", children: "\uC804\uBB38\uC758 \uB2E5\uD130\uB9C1" }) }), _jsx("div", { className: "header_right" })] }));
};
export default Header;
