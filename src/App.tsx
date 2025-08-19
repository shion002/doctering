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
import { baseURL } from "./util/baseUrl";
import { AlertCircle, MapPin, RefreshCw } from "lucide-react";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
  denied: boolean;
}

function App() {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
    denied: false,
  });

  const requestLocation = () => {
    setLocation((prev) => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: "이 브라우저는 위치 서비스를 지원하지 않습니다.",
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
        let errorMessage = "";
        let isDenied = false;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "위치 정보 접근이 거부되었습니다.";
            isDenied = true;
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "위치 정보를 사용할 수 없습니다.";
            break;
          case error.TIMEOUT:
            errorMessage = "위치 정보 요청 시간이 초과되었습니다.";
            break;
          default:
            errorMessage = "알 수 없는 오류가 발생했습니다.";
            break;
        }

        setLocation({
          latitude: null,
          longitude: null,
          error: errorMessage,
          loading: false,
          denied: isDenied,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5분
      }
    );
  };

  // useEffect를 early return 전에 위치시킴
  useEffect(() => {
    // 컴포넌트 마운트 즉시 위치 정보 요청
    requestLocation();

    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${baseURL}/api/oauth/validate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("세션 유지 로그인");
      })
      .catch((e) => {
        if (token && e.response?.status === 401) {
          localStorage.removeItem("token");
          console.log("세션 만료 로그아웃됨");
        }
      });
  }, []);

  // 위치정보가 없으면 차단 화면 표시
  if (
    location.loading ||
    location.error ||
    !location.latitude ||
    !location.longitude
  ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            {location.loading ? (
              <RefreshCw className="w-16 h-16 text-blue-500 mx-auto animate-spin" />
            ) : (
              <div className="relative">
                <MapPin className="w-16 h-16 text-red-500 mx-auto" />
                <AlertCircle className="w-8 h-8 text-red-600 absolute -top-1 -right-1" />
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            위치 정보 필요
          </h1>

          {location.loading ? (
            <p className="text-gray-600 mb-6">
              위치 정보를 가져오는 중입니다...
            </p>
          ) : (
            <>
              <p className="text-gray-600 mb-2">
                이 앱을 사용하려면 위치 정보가 필요합니다.
              </p>
              {location.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                  <p className="text-red-700 text-sm">{location.error}</p>
                </div>
              )}

              {location.denied ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    위치 정보 접근을 허용해주세요:
                  </p>

                  {/* 데스크탑 가이드 */}
                  <div className="hidden md:block">
                    <p className="text-xs text-gray-400 mb-2">PC/노트북:</p>
                    <ol className="text-sm text-gray-600 text-left space-y-1 bg-gray-50 p-3 rounded-lg">
                      <li>1. 주소창 왼쪽의 자물쇠 아이콘 클릭</li>
                      <li>2. 위치 정보를 '허용'으로 변경</li>
                      <li>3. 페이지 새로고침</li>
                    </ol>
                  </div>

                  {/* 모바일 가이드 */}
                  <div className="block md:hidden">
                    <p className="text-xs text-gray-400 mb-2">모바일:</p>
                    <div className="text-sm text-gray-600 text-left space-y-2 bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-700">
                          Chrome/Safari:
                        </p>
                        <ol className="space-y-1 ml-2">
                          <li>1. 주소창 왼쪽 아이콘 터치</li>
                          <li>2. '위치' 또는 '위치 정보' 허용</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          또는 브라우저 설정:
                        </p>
                        <ol className="space-y-1 ml-2">
                          <li>1. 브라우저 설정 → 사이트 권한</li>
                          <li>2. 현재 사이트 찾기</li>
                          <li>3. 위치 정보 허용</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    새로고침
                  </button>
                </div>
              ) : (
                <button
                  onClick={requestLocation}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
                >
                  <MapPin className="w-5 h-5" />
                  위치 정보 허용
                </button>
              )}
            </>
          )}

          <div className="mt-8 pt-6 border-gray-200">
            <p className="text-xs text-gray-400">
              위치 정보는 앱 기능 제공 목적으로만 사용됩니다.
            </p>
          </div>
        </div>
      </div>
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
