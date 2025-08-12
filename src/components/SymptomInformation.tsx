import { useEffect, useState } from "react";
import { Hospital } from "../type/Hospital";
import FadeInUp from "../util/FadeInUp";
import KakaoMap from "./KakaoMap";
import "./SymptomInformation.css";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import bookmark from "./../assets/bookmark_button.jpg";
import axios from "axios";
import useLoginSelect from "../context/useLoginSelect";
import { useCategoryContext } from "../context/useCategoryContext";
import { baseURL } from "../util/baseUrl";

interface SymptomType {
  disease: readonly string[];
  measures: readonly string[];
  department?: readonly string[];
  serverity: string | undefined;
  hospitals: Hospital[];
  userLocation: [number, number] | null;
}
const CARD_WIDTH = 360;
const SymptomInformation = ({
  disease,
  measures,
  serverity,
  department = [],
  hospitals,
  userLocation,
}: SymptomType) => {
  const [currentX, setCurrentX] = useState(0);
  const x = useMotionValue(currentX);
  const controls = useAnimation();
  const [displayedHospitals, setDisplayedHospitals] = useState<Hospital[]>([]);
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
    } else if (newX < minX) {
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
        `${baseURL}/api/bookmark/check`,
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

  return (
    <>
      <FadeInUp>
        <h3 className="symptom_title">의심증상: {disease.join(", ")}</h3>
      </FadeInUp>

      <FadeInUp delay={0.5}>
        <h3 className="symptom_title">응급조치</h3>
      </FadeInUp>
      <ul>
        {measures.map((measure, idx) => (
          <FadeInUp key={idx} delay={0.9}>
            <li className="symptom_list">{measure}</li>
          </FadeInUp>
        ))}
      </ul>

      <FadeInUp delay={1.2}>
        <h3 className="symptom_title">추천 진료과: {department.join(", ")}</h3>
        <h4 className="symptom_title">응급도 : {serverity}</h4>

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
                      <p>{hospital.address}</p>
                      <h5>연락처</h5>
                      <p>{hospital.phone}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            {userLocation && (
              <KakaoMap center={userLocation} hospitals={hospitals} />
            )}
          </>
        ) : (
          <p>주변에 탐색된 병원이 없습니다</p>
        )}
      </FadeInUp>
    </>
  );
};

export default SymptomInformation;
