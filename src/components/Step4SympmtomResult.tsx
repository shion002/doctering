// 1단계: userLocation 의존성 문제 해결
// [userLocation, result?.department?.[0]] 에서
// userLocation 배열이 매번 새로 생성되는 문제

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

  // 타입 안전하게 result 가져오기
  const getSymptomResult = (): SymptomResultItem | undefined => {
    if (!selectedSymptom) return undefined;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const symptomData = (CategoryMap[4] as any)[selectedSymptom];
    if (
      !symptomData ||
      !Array.isArray(symptomData) ||
      symptomData.length === 0
    ) {
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
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      (err) => {
        console.error("위치 정보를 가져오지 못했습니다:", err);
      }
    );
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (userLocation && result?.department && result.department.length > 0) {
      console.log("병원 추천 요청 시작");

      const axiosConfig = {
        params: {
          lat: userLocation[0],
          lng: userLocation[1],
          department: result.department[0],
          radius: 3,
          limit: 5,
        },
        // withCredentials는 최상위 레벨에 설정
        withCredentials: true,
        // headers는 별도로 설정
        ...(token && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      };

      axios
        .get(`${baseURL}/api/hospitals/recommend`, axiosConfig)
        .then((res) => {
          console.log("서버 응답:", res.data);
          setHospitals(Array.isArray(res.data) ? res.data : []);
        })
        .catch((err) => {
          console.error("병원 추천 실패", err);
          setHospitals([]);
        });
    }
  }, [
    userLocation?.[0], // 위도만
    userLocation?.[1], // 경도만
    result?.department?.[0], // 첫 번째 진료과만
    // token 제거 (localStorage는 컴포넌트 생명주기 동안 변하지 않음)
  ]);

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
