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
                        <button className="sypmtom_hospital_reservation">
                          예약하기
                        </button>
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
            <p>주변에 탐색된 병원이 없습니다</p>
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
