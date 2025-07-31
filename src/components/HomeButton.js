import { jsx as _jsx } from "react/jsx-runtime";
import "./HomeButton.css";
import { motion } from "framer-motion";
const buttonVariant = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
        },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};
function HomeButton({ text, categoryClick, custom = 0 }) {
    return (_jsx(motion.div, { custom: custom, variants: buttonVariant, initial: "initial", animate: "animate", exit: "exit", className: "HomeButton", onClick: categoryClick, children: _jsx("button", { children: text }) }));
}
export default HomeButton;
