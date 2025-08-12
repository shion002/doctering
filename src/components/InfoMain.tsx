import axios from "axios";
import { useEffect, useState } from "react";
import "./InfoMain.css";
import location from "./../assets/location_icon.svg";
import { useNavigate } from "react-router-dom";
import logout from "./../assets/logout_icon.svg";
import { baseURL } from "../util/baseUrl";

const InfoMain = () => {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");

  const nav = useNavigate();

  const logoutClick = () => {
    const con = confirm("로그아웃 하시겠습니까?");

    if (con) {
      localStorage.removeItem("token");

      nav("/");
      window.location.reload();
    }
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/api/oauth/member`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setMemberName(res.data.nickname);
        setMemberEmail(res.data.email);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="Infomain">
      <div className="info_profile">
        <h4>{memberName}님 건강하세요!</h4>
        <div className="info_profile_line"></div>
        <div className="info_profile_button">
          <button>미구현</button>
          <button>미구현</button>
          <button>미구현</button>
        </div>
      </div>
      <div className="info_config">
        <h5>설정</h5>
        <div>
          <img src={location} />
          <p>내 주소 설정</p>
        </div>
        <div onClick={logoutClick}>
          <img src={logout} />
          <p>로그아웃</p>
        </div>
      </div>
    </div>
  );
};

export default InfoMain;
