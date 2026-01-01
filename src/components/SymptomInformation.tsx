import { useEffect, useState } from "react";
import { Hospital } from "../type/Hospital";
import FadeInUp from "../util/FadeInUp";
import KakaoMap from "./KakaoMap";
import "./SymptomInformation.css";
import { motion, PanInfo, useAnimation, useMotionValue } from "framer-motion";
import bookmark from "./../assets/bookmark_button.jpg";
import axios from "axios";
import useLoginSelect from "../context/useLoginSelect";
import { useCategoryContext } from "../context/useCategoryContext";
import { apiURL } from "../util/baseUrl";
import kakaomapIcon from "./../assets/kakaomap.webp";

interface SymptomType {
  disease: readonly string[];
  measures: readonly string[];
  department?: readonly string[];
  serverity: string | undefined;
  hospitals: Hospital[];
  userLocation: [number, number] | null;
  loading: boolean;
}
const CARD_WIDTH = 360;
const SymptomInformation = ({
  disease,
  measures,
  serverity,
  department = [],
  hospitals,
  userLocation,
  loading,
}: SymptomType) => {
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(currentX);
  const controls = useAnimation();
  const [displayedHospitals, setDisplayedHospitals] = useState<Hospital[]>([]);
  const { open: openLoginSelect } = useLoginSelect();
  const { category, categoryHistory } = useCategoryContext();

  const container = document.querySelector(".symptom_border") as HTMLElement;
  const containerWidth = container?.offsetWidth ?? window.innerWidth;

  useEffect(() => {
    setDisplayedHospitals(hospitals);
  }, [hospitals]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const newX = x.get();
    const velocity = info.velocity.x;

    const maxX = 0;
    let minX: number;

    if (containerWidth < 600) {
      minX = -CARD_WIDTH * (hospitals.length - 1) - 150;
    } else {
      minX = -CARD_WIDTH * (hospitals.length - 1);
    }

    const minXFix = minX;

    controls.start({
      x: newX,
      transition: {
        type: "inertia",
        velocity: velocity,
        power: 0.8,
        timeConstant: 700,
        bounceStiffness: 300,
        bounceDamping: 30,
        min: minXFix,
        max: maxX,
      },
    });

    setCurrentX(newX);
  };

  useEffect(() => {
    x.set(currentX);
  }, [currentX]);

  const token = localStorage.getItem("token");

  const bookmarkCheck = (hospital: Hospital) => {
    if (!token) {
      localStorage.setItem(
        "postLoginAction",
        JSON.stringify({
          type: "bookmarkClick",
          hospitalId: hospital.id,
          category: category,
          categoryHistory: categoryHistory,
        })
      );

      openLoginSelect();
      return;
    }

    axios
      .post(
        `${apiURL}/api/bookmark/check`,
        {
          hospitalId: hospital.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        setDisplayedHospitals((perv) =>
          perv.map((h) =>
            h.id === hospital.id ? { ...h, bookmarked: !h.bookmarked } : h
          )
        );
      })
      .catch((e) => {
        console.error(e);
        alert("북마크 요청 실패");
      });
  };

  const openKakaoMap = (placeName: string) => {
    const kakaoUrl = `kakaomap://search?q=${encodeURIComponent(placeName)}`;
    const webFallback = `https://map.kakao.com/link/search/${encodeURIComponent(
      placeName
    )}`;
    const playStore = `https://play.google.com/store/apps/details?id=net.daum.android.map`;
    const appStore = `https://apps.apple.com/kr/app/kakaomap/id304608425`;

    window.location.href = kakaoUrl;

    const timer = setTimeout(() => {
      const ua = navigator.userAgent.toLowerCase();

      if (/android/.test(ua)) {
        window.location.href = playStore;
      } else if (/iphone|ipad|ipod/.test(ua)) {
        window.location.href = appStore;
      } else {
        window.open(webFallback, "_blank");
      }
    }, 1000);

    window.addEventListener("blur", () => clearTimeout(timer));
    window.addEventListener("pagehide", () => clearTimeout(timer));
  };

  return (
    <>
      <FadeInUp>
        <div className="symptom_first">
          <h3 className="symptom_title">의심증상</h3>
          {disease.map((disease, idx) => (
            <p className="symptom_first_list" key={idx}>
              {disease}
            </p>
          ))}
        </div>
      </FadeInUp>

      <FadeInUp delay={0.5}>
        <div className="symptom_sec">
          <h3 className="symptom_title">응급조치</h3>
          {measures.map((measure, idx) => (
            <p key={idx} className="symptom_sec_list">
              {measure}
            </p>
          ))}
        </div>
      </FadeInUp>

      <FadeInUp delay={1.2}>
        <div className="symptom_trd">
          <h3 className="symptom_trd_title">
            추천 진료과: {department.join(", ")}
          </h3>
          <h4 className="symptom_trd_title">응급도 : {serverity}</h4>
        </div>

        <div className="symptom_recommend">
          {Array.isArray(hospitals) && hospitals.length > 0 ? (
            <>
              <h4 className="symptom_subtitle">근처 추천 병원</h4>
              <div className="symptom_border">
                <motion.div
                  className="sypmtom_slider"
                  drag="x"
                  style={{ x }}
                  animate={controls}
                  onDragEnd={handleDragEnd}
                  dragElastic={0.4}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <ul className="sypmtom_hospital_list">
                    {displayedHospitals.map((hospital) => (
                      <li key={hospital.id}>
                        <div
                          className="sypmtom_bookmark"
                          onClick={() => bookmarkCheck(hospital)}
                        >
                          <img
                            src={bookmark}
                            className={`sypmtom_bookmark_img ${
                              hospital.bookmarked ? "active" : ""
                            }`}
                          />
                        </div>
                        <h4>{hospital.name}</h4>
                        <h5>주소</h5>
                        <p className="sypmtom_list_address">
                          {hospital.address}
                        </p>
                        <h5>연락처</h5>
                        <p>{hospital.phone}</p>
                        <button
                          className="sypmtom_hospital_reservation"
                          onClick={() => {
                            window.location.href = `tel:${hospital.phone}`;
                          }}
                        >
                          예약하기
                        </button>
                        <div
                          className="map_button"
                          onClick={() => {
                            openKakaoMap(hospital.name);
                          }}
                        >
                          <div className="map_button_box">
                            <img src={kakaomapIcon} />
                            <p>카카오맵 열기</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="symptom_map">
                {userLocation && (
                  <KakaoMap center={userLocation} hospitals={hospitals} />
                )}
              </div>
            </>
          ) : (
            <p>
              {loading
                ? "주변 병원을 탐색중입니다..."
                : "주변에 탐색된 병원이 없습니다"}
            </p>
          )}
        </div>
      </FadeInUp>
      <FadeInUp delay={1.6}>
        <div className="sypmtom_bottom_img"></div>
      </FadeInUp>
    </>
  );
};

export default SymptomInformation;
