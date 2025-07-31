import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
const KakaoMap = ({ center, hospitals }) => {
    const mapRef = useRef(null);
    useEffect(() => {
        if (!center)
            return;
        // 스크립트가 이미 로드되어 있으면 바로 resolve
        const loadKakaoMapScript = () => {
            return new Promise((resolve, reject) => {
                if (window.kakao && window.kakao.maps) {
                    resolve();
                    return;
                }
                // 스크립트 없으면 생성
                const script = document.createElement("script");
                script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error("카카오맵 스크립트 로드 실패"));
                document.head.appendChild(script);
            });
        };
        loadKakaoMapScript()
            .then(() => {
            window.kakao.maps.load(() => {
                const mapContainer = mapRef.current;
                if (!mapContainer) {
                    console.error("map container not found");
                    return;
                }
                const mapOption = {
                    center: new window.kakao.maps.LatLng(center[0], center[1]),
                    level: 5,
                };
                const map = new window.kakao.maps.Map(mapContainer, mapOption);
                hospitals.forEach((hospital) => {
                    const marker = new window.kakao.maps.Marker({
                        map,
                        position: new window.kakao.maps.LatLng(hospital.lat, hospital.lng),
                        title: hospital.name,
                    });
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;font-size:12px;">${hospital.name}</div>`,
                    });
                    window.kakao.maps.event.addListener(marker, "mouseover", () => {
                        infowindow.open(map, marker);
                    });
                    window.kakao.maps.event.addListener(marker, "mouseout", () => {
                        infowindow.close();
                    });
                });
            });
        })
            .catch((error) => console.error(error));
    }, [center, hospitals]);
    return (_jsx("div", { id: "map", ref: mapRef, style: { width: "100%", height: "300px", marginTop: "1rem" } }));
};
export default KakaoMap;
