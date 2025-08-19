import "./Bottom.css";
import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import homeBtn from "./../assets/home_button.jpg";
import starBtn from "./../assets/star_button.jpg";
import pushBtn from "./../assets/push_button.jpg";
import inforBtn from "./../assets/infor_button.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import useLoginSelect from "../context/useLoginSelect";
import { useAlertContext } from "../context/useAlertContext";
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext"; // CategoryContext import 추가

const Bottom = () => {
  const [active, setActive] = useState("홈");
  const nav = useNavigate();
  const location = useLocation();
  const { open: openLoginSelect } = useLoginSelect();
  const { readAlert } = useAlertContext();
  const categoryContext = useContext(CategoryContext); // CategoryContext 사용

  interface BottomButton {
    name: string;
    img: string;
    path: string;
  }

  const buttons: BottomButton[] = [
    { name: "홈", img: homeBtn, path: "/" },
    { name: "즐겨찾기", img: starBtn, path: "/bookmark" },
    { name: "알림", img: pushBtn, path: "/alert" },
    { name: "내 정보", img: inforBtn, path: "/info" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;

    const matchedButton = buttons.find((btn) => btn.path === currentPath);
    if (matchedButton) {
      setActive(matchedButton.name);
    } else {
      setActive("홈");
    }
  }, [location.pathname]);

  const handleClick = (btn: BottomButton) => {
    const token = localStorage.getItem("token");

    // 홈 버튼을 눌렀을 때 step1로 초기화
    if (btn.name === "홈") {
      // CategoryContext가 있다면 초기화 실행
      if (categoryContext?.handleCategoryReset) {
        categoryContext.handleCategoryReset();
      } else {
        // CategoryContext가 없어도 URL 해시로 초기화
        window.history.replaceState(null, "", "#step1");
      }

      // 홈페이지 이동 전에 약간의 딜레이 (초기화가 완료되도록)
      setTimeout(() => {
        nav(btn.path);
      }, 50);
      return;
    }

    if (
      !token &&
      (btn.name === "즐겨찾기" || btn.name === "알림" || btn.name === "내 정보")
    ) {
      localStorage.setItem("redirectAfterLogin", btn.path);
      openLoginSelect();
      return;
    }

    nav(btn.path);
  };

  return (
    <>
      <div className="Bottom">
        {buttons.map((btn) => (
          <BottomButton
            key={btn.name}
            handleClick={() => handleClick(btn)}
            active={active === btn.name}
            name={btn.name}
            img={btn.img}
            unread={btn.name === "알림" && !readAlert}
          />
        ))}
      </div>
    </>
  );
};

export default Bottom;
