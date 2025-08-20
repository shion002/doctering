import "./Bottom.css";
import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import homeBtn from "./../assets/home_button_svg.svg";
import starBtn from "./../assets/star_button_svg.svg";
import pushBtn from "./../assets/alert_button_svg.svg";
import inforBtn from "./../assets/info_button_svg.svg";
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

    if (btn.name === "홈") {
      if (categoryContext?.handleCategoryReset) {
        categoryContext.handleCategoryReset();
      } else {
        window.history.replaceState(null, "", "#step1");
      }
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
