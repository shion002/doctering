import { useEffect, useState, useMemo } from "react";
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

  // useMemo를 사용하여 result를 메모이제이션 - 스프레드 연산자 제거
  const result = useMemo((): SymptomResultItem | undefined => {
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

    // 스프레드 연산자 없이 직접 참조하여 참조 안정성 확보
    return {
      disease: Array.isArray(rawResult.disease) ? rawResult.disease : [],
      measures: Array.isArray(rawResult.measures) ? rawResult.measures : [],
      department: Array.isArray(rawResult.department)
        ? rawResult.department
        : undefined,
      serverity: rawResult.serverity ? String(rawResult.serverity) : undefined,
      recommendVisit: Boolean(rawResult.recommendVisit),
    };
  }, [selectedSymptom]); // selectedSymptom이 변경될 때만 재계산

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

  // 첫 번째 진료과명을 별도로 메모이제이션
  const firstDepartment = useMemo(() => {
    return result?.department?.[0] || null;
  }, [result?.department]);

  const token = localStorage.getItem("token");

  // 병원 추천 요청 - 더 안정적인 의존성 관리
  useEffect(() => {
    if (userLocation && firstDepartment) {
      const headers = token
        ? { Authorization: `Bearer ${token}`, withCredentials: true }
        : {};

      console.log("병원 추천 요청 시작:", {
        lat: userLocation[0],
        lng: userLocation[1],
        department: firstDepartment,
      });

      axios
        .get(`${baseURL}/api/hospitals/recommend`, {
          params: {
            lat: userLocation[0],
            lng: userLocation[1],
            department: firstDepartment,
            radius: 3,
            limit: 5,
          },
          headers,
        })
        .then((res) => {
          console.log("서버 응답:", res.data);
          setHospitals(Array.isArray(res.data) ? res.data : []);
        })
        .catch((err) => {
          console.error("병원 추천 실패", err);
          setHospitals([]);
        });
    }
  }, [userLocation, firstDepartment]); // token 의존성 제거하고 더 간단하게

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
