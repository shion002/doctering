import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import "./BookmarkTab.css";
import { baseURL } from "../util/baseUrl";
const bookmarkCancel = (hospitalId) => {
    const token = localStorage.getItem("token");
    const con = confirm("삭제하시겠습니까?");
    if (con) {
        axios
            .post(`https://${baseURL}/api/bookmark/delete`, {
            hospitalId: hospitalId,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        })
            .then(() => {
            window.location.reload();
        })
            .catch((e) => {
            console.log("에러 : ", e);
        });
    }
};
const BookmarkTab = ({ bookmarkHospital }) => {
    return (_jsxs("div", { className: "BookmarkTab", children: [_jsx("h4", { className: "bookmark_tab_name", children: bookmarkHospital.name }), _jsx("p", { className: "bookmark_tab_address", children: bookmarkHospital.address }), _jsx("h4", { className: "bookmark_tab_departments_title", children: "\uC9C4\uB8CC\uACFC\uBAA9" }), _jsx("p", { className: "bookmark_tab_departments", children: bookmarkHospital.departments }), _jsx("h4", { className: "bookmark_tab_memo_title", children: "\uBA54\uBAA8" }), _jsx("div", { className: "bookmark_tab_memo", children: _jsx("p", { className: "bookmark_tab_memo_default", children: "\uBA54\uBAA8\uC791\uC131" }) }), _jsxs("div", { className: "bookmark_tab_button", children: [_jsx("button", { className: "bookmark_tab_reserve", children: "\uC608\uC57D\uD558\uAE30" }), _jsx("button", { className: "bookmark_tab_cancel", onClick: () => bookmarkCancel(bookmarkHospital.id), children: "\uBD81\uB9C8\uD06C \uD574\uC81C" })] })] }));
};
export default BookmarkTab;
