import { useEffect, useState } from "react";
import { useCategoryContext } from "../context/useCategoryContext";
import { CategoryMap } from "../util/CategoryMap";
import SymptomInformation from "./SymptomInformation";
import axios from "axios";
import { Hospital } from "../type/Hospital";
import { apiURL } from "../util/baseUrl";

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
  const [isLoadingHospitals, setIsLoadingHospitals] = useState(false);

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

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      console.error("이 브라우저는 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.permissions
      ?.query({ name: "geolocation" as PermissionName })
      .then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          getLocation();
        } else {
          alert("위치 권한이 거부되어 위치를 가져올 수 없습니다.");
        }
      })
      .catch(() => {
        getLocation();
      });

    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
        },
        (err) => {
          console.error("위치 정보를 가져오지 못했습니다:", err.message);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (userLocation && result?.department && result.department.length > 0) {
      console.log("병원 추천 요청 시작");
      setIsLoadingHospitals(true);

      const axiosConfig = {
        params: {
          lat: userLocation[0],
          lng: userLocation[1],
          department: result.department[0],
          radius: 2,
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get(`${apiURL}/api/hospitals/recommend`, axiosConfig)
        .then((res) => {
          console.log("서버 응답:", res.data);
          setHospitals(Array.isArray(res.data) ? res.data : []);
        })
        .catch((err) => {
          console.error("병원 추천 실패", err);
          setHospitals([]);
        })
        .finally(() => {
          setIsLoadingHospitals(false);
        });
    }
  }, [userLocation?.[0], userLocation?.[1], result?.department?.[0]]);

  return (
    <div>
      {result && (
        <>
          {isLoadingHospitals && (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                fontSize: "16px",
                color: "#666",
              }}
            >
              병원 탐색중입니다...
            </div>
          )}
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
