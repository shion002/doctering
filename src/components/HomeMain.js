import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCategoryContext } from "../context/useCategoryContext";
import HomeCategory from "./HomeCategory";
import "./HomeMain.css";
import { AnimatePresence, motion } from "framer-motion";
function HomeMain() {
    const { title } = useCategoryContext();
    return (_jsx(AnimatePresence, { children: _jsxs("div", { className: "HomeMain", children: [_jsx(motion.h1, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 1 }, className: "main_title", children: title }), _jsx(HomeCategory, {})] }) }));
}
export default HomeMain;
