import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./BookmarkList.css";
import BookmarkTab from "./BookmarkTab";
import { baseURL } from "../util/baseUrl";
const BookmarkList = ({ selectIndex, setSelectIndex }) => {
    const token = localStorage.getItem("token");
    const [list, setList] = useState([]);
    const [tabDirection, setTabDiraction] = useState("down");
    const tabRef = useRef(null);
    const selectedRef = useRef(null);
    useEffect(() => {
        axios
            .get(`https://${baseURL}/api/bookmark/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        })
            .then((res) => {
            console.log(res.data);
            setList(res.data);
        })
            .catch((e) => {
            console.error(e);
        });
    }, []);
    const handleBookmarkClick = (index) => {
        setSelectIndex(index);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tabRef.current && !tabRef.current.contains(event.target)) {
                setSelectIndex(null);
            }
        };
        if (selectIndex !== null) {
            if (selectedRef.current) {
                const rect = selectedRef.current.getBoundingClientRect();
                const halfScreen = window.innerHeight / 2;
                setTabDiraction(rect.top > halfScreen ? "up" : "down");
            }
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, [selectIndex]);
    return (_jsxs("div", { className: "BookmarkList", children: [_jsx("h2", { style: { textAlign: "center", margin: "50px" }, children: "\uC990\uACA8\uCC3E\uAE30 \uBAA9\uB85D" }), list.map((bookmarkList, index) => (_jsxs("div", { className: `bookmark ${selectIndex !== null
                    ? selectIndex === index
                        ? "focused"
                        : "blurred"
                    : ""}`, ref: selectIndex === index ? selectedRef : null, onClick: () => handleBookmarkClick(index), children: [_jsx("h3", { className: "bookmark_name", children: bookmarkList.name }), _jsx("p", { className: "bookmark_address", children: bookmarkList.address }), _jsx("p", { className: "bookmark_phone", children: bookmarkList.phone }), selectIndex === index && (_jsx("div", { ref: tabRef, className: `bookmark_tab_action ${tabDirection === "up" ? "above" : "below"}`, children: _jsx(BookmarkTab, { bookmarkHospital: bookmarkList }) }))] }, index)))] }));
};
export default BookmarkList;
