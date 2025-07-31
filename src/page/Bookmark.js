import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import BookmarkList from "../components/BookmarkList";
import Bottom from "../components/Bottom";
import Header from "../components/Header";
const Bookmark = () => {
    const [selectIndex, setSelectIndex] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), selectIndex !== null && _jsx("div", { className: "overlay" }), _jsx(BookmarkList, { selectIndex: selectIndex, setSelectIndex: setSelectIndex }), _jsx(Bottom, {})] }));
};
export default Bookmark;
