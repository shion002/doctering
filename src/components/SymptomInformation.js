import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import FadeInUp from "../util/FadeInUp";
import KakaoMap from "./KakaoMap";
import "./SymptomInformation.css";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import bookmark from "./../assets/bookmark_button.jpg";
import axios from "axios";
import useLoginSelect from "../context/useLoginSelect";
import { useCategoryContext } from "../context/useCategoryContext";
import { baseURL } from "../util/baseUrl";
const CARD_WIDTH = 360;
const SymptomInformation = ({ disease, measures, serverity, department = [], hospitals, userLocation, }) => {
    const [currentX, setCurrentX] = useState(0);
    const x = useMotionValue(currentX);
    const controls = useAnimation();
    const [displayedHospitals, setDisplayedHospitals] = useState([]);
    const { open: openLoginSelect } = useLoginSelect();
    const { category, categoryHistory } = useCategoryContext();
    useEffect(() => {
        setDisplayedHospitals(hospitals);
    }, [hospitals]);
    const handleDragEnd = () => {
        const newX = x.get();
        const maxX = 0;
        const minX = -CARD_WIDTH * (hospitals.length - 1);
        let clampedX = newX;
        if (newX > maxX) {
            clampedX = maxX;
        }
        else if (newX < minX) {
            clampedX = minX;
        }
        // animate 카드 위치
        controls.start({
            x: clampedX,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        });
        // 위치 기억 업데이트
        setCurrentX(clampedX);
    };
    // 위치 바뀔 때마다 x도 직접 업데이트
    useEffect(() => {
        x.set(currentX);
    }, [currentX]);
    const token = localStorage.getItem("token");
    const bookmarkCheck = (hospital) => {
        if (!token) {
            localStorage.setItem("postLoginAction", JSON.stringify({
                type: "bookmarkClick",
                hospitalId: hospital.id,
                category: category,
                categoryHistory: categoryHistory,
            }));
            openLoginSelect();
            return;
        }
        axios
            .post(`${baseURL}/api/bookmark/check`, {
            hospitalId: hospital.id,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        })
            .then(() => {
            setDisplayedHospitals((perv) => perv.map((h) => h.id === hospital.id ? { ...h, bookmarked: !h.bookmarked } : h));
        })
            .catch((e) => {
            console.error(e);
            alert("북마크 요청 실패");
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(FadeInUp, { children: _jsxs("h3", { className: "symptom_title", children: ["\uC758\uC2EC\uC99D\uC0C1: ", disease.join(", ")] }) }), _jsx(FadeInUp, { delay: 0.5, children: _jsx("h3", { className: "symptom_title", children: "\uC751\uAE09\uC870\uCE58" }) }), _jsx("ul", { children: measures.map((measure, idx) => (_jsx(FadeInUp, { delay: 0.9, children: _jsx("li", { className: "symptom_list", children: measure }) }, idx))) }), _jsxs(FadeInUp, { delay: 1.2, children: [_jsxs("h3", { className: "symptom_title", children: ["\uCD94\uCC9C \uC9C4\uB8CC\uACFC: ", department.join(", ")] }), _jsxs("h4", { className: "symptom_title", children: ["\uC751\uAE09\uB3C4 : ", serverity] }), Array.isArray(hospitals) && hospitals.length > 0 ? (_jsxs(_Fragment, { children: [_jsx("h4", { className: "symptom_subtitle", children: "\uADFC\uCC98 \uCD94\uCC9C \uBCD1\uC6D0" }), _jsx("div", { className: "symptom_border", children: _jsx(motion.div, { className: "sypmtom_slider", drag: "x", style: { x }, animate: controls, onDragEnd: handleDragEnd, dragElastic: 0.4, transition: { type: "spring", stiffness: 300, damping: 30 }, children: _jsx("ul", { className: "sypmtom_hospital_list", children: displayedHospitals.map((hospital) => (_jsxs("li", { children: [_jsx("div", { className: "sypmtom_bookmark", onClick: () => bookmarkCheck(hospital), children: _jsx("img", { src: bookmark, className: `sypmtom_bookmark_img ${hospital.bookmarked ? "active" : ""}` }) }), _jsx("h4", { children: hospital.name }), _jsx("h5", { children: "\uC8FC\uC18C" }), _jsx("p", { children: hospital.address }), _jsx("h5", { children: "\uC5F0\uB77D\uCC98" }), _jsx("p", { children: hospital.phone })] }, hospital.id))) }) }) }), userLocation && (_jsx(KakaoMap, { center: userLocation, hospitals: hospitals }))] })) : (_jsx("p", { children: "\uC8FC\uBCC0\uC5D0 \uD0D0\uC0C9\uB41C \uBCD1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" }))] })] }));
};
export default SymptomInformation;
