import { useEffect, useState } from "react";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import SymptomInformation from "./SymptomInformation";
import axios from "axios";
import { Hospital } from "../type/Hospital";
import { baseURL } from "../util/baseUrl";

interface SymptomResultItem {
  disease: string[];
  measures: string[];
  department?: string[];
  serverity?: string;
  recommendVisit?: boolean;
}

const Step4SymptomResult = () => {
  const { category: selectedSymptom } = useCategoryContext();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  type SymptomCategoryType = keyof (typeof CategoryMap)[4];
  const result: SymptomResultItem | undefined =
    selectedSymptom &&
    CategoryMap[4][selectedSymptom as SymptomCategoryType]?.[0];

  // 위치 받아오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      (err) => {
        console.error("위치 정보를 가져오지 못했습니다:", err);
      }
    );
  }, [result]);

  const token = localStorage.getItem("token");

  // 병원 추천 요청
  useEffect(() => {
    if (userLocation && result?.department?.length > 0) {
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

  return (
    <div>
      {result && (
        <>
          <SymptomInformation
            disease={result.disease}
            measures={result.measures}
            department={result.department}
            serverity={result.serverity}
            hospitals={hospitals}
            userLocation={userLocation}
          />
        </>
      )}
    </div>
  );
};

export default Step4SymptomResult;
