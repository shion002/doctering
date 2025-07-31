import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./BottomButton.css";
const BottomButton = ({ handleClick, active, name, img, unread, }) => {
    return (_jsxs("div", { className: "BottomButton", onClick: handleClick, children: [_jsx("div", { className: "image_box", children: _jsx("img", { src: img, className: `bottom_img ${active ? "active" : ""}` }) }), _jsx("p", { className: `bottom_text ${active ? "active" : ""}`, children: name }), unread && _jsx("span", { className: "alert-dot" })] }));
};
export default BottomButton;
