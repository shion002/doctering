import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import { CategoryProvider } from "./context/CategoryProvider";
import Callback from "./auth/Callback";
import Bookmark from "./page/Bookmark";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "./page/Alert";
import LoginSelectProvider from "./context/LoginSelectProvider";
import Info from "./page/Info";
import { AlertProvider } from "./context/AlertProvider";
import { apiURL } from "./util/baseUrl";
import LocationBlockScreen from "./components/LocationBlockScreen";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
  denied: boolean;
}

const LOCATION_ERROR_MESSAGES = {
  PERMISSION_DENIED: "위치 정보 접근이 거부되었습니다.",
  POSITION_UNAVAILABLE: "위치 정보를 사용할 수 없습니다.",
  TIMEOUT: "위치 정보 요청 시간이 초과되었습니다.",
  NOT_SUPPORTED: "이 브라우저는 위치 서비스를 지원하지 않습니다.",
  UNKNOWN: "알 수 없는 오류가 발생했습니다.",
} as const;

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 300000, // 5분
} as const;

function App() {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
    denied: false,
  });

  const getLocationErrorMessage = (
    error: GeolocationPositionError
  ): [string, boolean] => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return [LOCATION_ERROR_MESSAGES.PERMISSION_DENIED, true];
      case error.POSITION_UNAVAILABLE:
        return [LOCATION_ERROR_MESSAGES.POSITION_UNAVAILABLE, false];
      case error.TIMEOUT:
        return [LOCATION_ERROR_MESSAGES.TIMEOUT, false];
      default:
        return [LOCATION_ERROR_MESSAGES.UNKNOWN, false];
    }
  };

  const requestLocation = () => {
    setLocation((prev) => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: LOCATION_ERROR_MESSAGES.NOT_SUPPORTED,
        denied: true,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          loading: false,
          denied: false,
        });
      },
      (error) => {
        const [errorMessage, isDenied] = getLocationErrorMessage(error);
        setLocation({
          latitude: null,
          longitude: null,
          error: errorMessage,
          loading: false,
          denied: isDenied,
        });
      },
      GEOLOCATION_OPTIONS
    );
  };

  const validateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.get(`${apiURL}/api/oauth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("세션 유지 로그인");
    } catch (error) {
      // axios 에러인지 확인하는 타입 가드
      if (axios.isAxiosError(error)) {
        if (token && error.response?.status === 401) {
          localStorage.removeItem("token");
          console.log("세션 만료 로그아웃됨");
        }
      } else {
        // axios 에러가 아닌 경우 처리
        console.error("알 수 없는 오류:", error);
      }
    }
  };

  useEffect(() => {
    requestLocation();
    validateToken();
  }, []);

  // 위치정보가 없으면 차단 화면 표시
  const shouldShowLocationScreen =
    location.loading ||
    location.error ||
    !location.latitude ||
    !location.longitude;

  if (shouldShowLocationScreen) {
    return (
      <LocationBlockScreen location={location} onRetry={requestLocation} />
    );
  }

  return (
    <div className="App">
      <AlertProvider>
        <CategoryProvider>
          <LoginSelectProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/info" element={<Info />} />
              <Route path="/oauth/callback" element={<Callback />} />
            </Routes>
          </LoginSelectProvider>
        </CategoryProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
