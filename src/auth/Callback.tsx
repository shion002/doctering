import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useCategoryContext } from "../context/useCategoryContext";
import { baseURL } from "../util/baseUrl";

const Callback = () => {
  const nav = useNavigate();
  const { lastLocation } = useCategoryContext();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    const error = url.searchParams.get("error");

    if (error) {
      const errorMessages = {
        provider_conflict: "이미 다른 플랫폼으로 가입된 이메일입니다.",
      };
      alert(errorMessages[error] || "알 수 없는 오류가 발생했습니다.");
      localStorage.removeItem("redirectAfterLogin");
      nav("/");
      return;
    }

    if (!token) return;

    if (token) {
      localStorage.setItem("token", token);
      alert("로그인 완료");

      // postLoginAction이 있는 경우
      const savedAction = localStorage.getItem("postLoginAction");
      if (savedAction) {
        const action = JSON.parse(savedAction);
        localStorage.removeItem("postLoginAction");

        if (action.type === "bookmarkClick") {
          const hospitalId = action.hospitalId;
          const category = action.category;
          const categoryHistory = action.categoryHistory;

          axios
            .post(
              `https://${baseURL}/api/bookmark/check`,
              {
                hospitalId: hospitalId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
              }
            )
            .then((res) => {
              if (res.data === "북마크 중복") {
                alert("이미 추가된 북마크입니다");
              }
              lastLocation(category, categoryHistory);
            })
            .catch((e) => {
              console.error(e);
              alert("북마크 요청 실패");
            });
        }
      }
      const targetPath = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin");

      nav(targetPath, { replace: true });
    } else {
      alert("로그인 실패");
      nav("/");
    }
  }, []);

  return <div>로그인 중입니다...</div>;
};

export default Callback;
