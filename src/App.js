import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import { CategoryProvider } from "./context/CategoryProvider";
import Callback from "./auth/Callback";
import Bookmark from "./page/Bookmark";
import { useEffect } from "react";
import axios from "axios";
import Alert from "./page/Alert";
import LoginSelectProvider from "./context/LoginSelectProvider";
import Info from "./page/Info";
import { AlertProvider } from "./context/AlertProvider";
import { baseURL } from "./util/baseUrl";
function App() {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token)
            return;
        axios
            .get(`${baseURL}/api/oauth/validate`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
            console.log("세션 유지 로그인");
        })
            .catch((e) => {
            if (token && e.response?.status === 401) {
                localStorage.removeItem("token");
                console.log("세션 만료 로그아웃됨");
            }
        });
    }, []);
    return (_jsx("div", { className: "App", children: _jsx(AlertProvider, { children: _jsx(CategoryProvider, { children: _jsx(LoginSelectProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/bookmark", element: _jsx(Bookmark, {}) }), _jsx(Route, { path: "/alert", element: _jsx(Alert, {}) }), _jsx(Route, { path: "/info", element: _jsx(Info, {}) }), _jsx(Route, { path: "/oauth/callback", element: _jsx(Callback, {}) })] }) }) }) }) }));
}
export default App;
