import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const FadeInUp = ({ children, delay = 0 }) => {
    return (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay,
            },
        }, exit: { opacity: 0, y: 20 }, children: children }));
};
export default FadeInUp;
