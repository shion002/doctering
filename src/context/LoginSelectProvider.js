import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { LoginSelectContext } from "./LoginSelectContext";
import LoginSelect from "../components/LoginSelect";
const LoginSelectProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);
    const open = () => setShow(true);
    const close = () => {
        setShow(false);
        localStorage.removeItem("postLoginAction");
    };
    return (_jsxs(LoginSelectContext.Provider, { value: { show, open, close }, children: [children, show && (_jsxs(_Fragment, { children: [_jsx("div", { className: "login_overlay", onClick: close }), _jsx(LoginSelect, {})] }))] }));
};
export default LoginSelectProvider;
