import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import SymptomInformation from "./SymptomInformation";
import axios from "axios";
import { baseURL } from "../util/baseUrl";
const Step4SymptomResult = () => {
    const { category: selectedSymptom } = useCategoryContext();
    const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);
    // 타입 안전하게 result 가져오기
    const getSymptomResult = () => {
        if (!selectedSymptom)
            return undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const symptomData = CategoryMap[4][selectedSymptom];
        if (!symptomData ||
            !Array.isArray(symptomData) ||
            symptomData.length === 0) {
            return undefined;
        }
        const rawResult = symptomData[0];
        // 타입을 맞춰서 반환
        return {
            disease: Array.isArray(rawResult.disease) ? [...rawResult.disease] : [],
            measures: Array.isArray(rawResult.measures)
                ? [...rawResult.measures]
                : [],
            department: Array.isArray(rawResult.department)
                ? [...rawResult.department]
                : undefined,
            serverity: rawResult.serverity ? String(rawResult.serverity) : undefined,
            recommendVisit: Boolean(rawResult.recommendVisit),
        };
    };
    const result = getSymptomResult();
    // 위치 받아오기
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setUserLocation([latitude, longitude]);
        }, (err) => {
            console.error("위치 정보를 가져오지 못했습니다:", err);
        });
    }, [result]);
    const token = localStorage.getItem("token");
    // 병원 추천 요청
    useEffect(() => {
        if (userLocation && result?.department && result.department.length > 0) {
            const headers = token
                ? { Authorization: `Bearer ${token}`, withCredentials: true }
                : {};
            axios
                .get(`https://${baseURL}/api/hospitals/recommend`, {
                params: {
                    lat: userLocation[0],
                    lng: userLocation[1],
                    department: result.department[0],
                    radius: 3,
                    limit: 5,
                },
                headers,
            })
                .then((res) => {
                console.log("서버 응답:", res.data); // 배열인지 확인
                setHospitals(Array.isArray(res.data) ? res.data : []);
            })
                .catch((err) => {
                console.error("병원 추천 실패", err);
                setHospitals([]);
            });
        }
    }, [userLocation, result]);
    return (_jsx("div", { children: result && (_jsx(_Fragment, { children: _jsx(SymptomInformation, { disease: result.disease, measures: result.measures, department: result.department, serverity: result.serverity, hospitals: hospitals, userLocation: userLocation }) })) }));
};
export default Step4SymptomResult;
