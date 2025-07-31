import axios from "axios";
import { Hospital } from "../type/Hospital";
import "./BookmarkTab.css";
import { baseURL } from "../util/baseUrl";

interface BookmarkTabProps {
  bookmarkHospital: {
    id: number;
    name: string;
    address: string;
    departments: string;
  };
}

const bookmarkCancel = (hospitalId: number) => {
  const token = localStorage.getItem("token");

  const con = confirm("삭제하시겠습니까?");

  if (con) {
    axios
      .post(
        `https://${baseURL}/api/bookmark/delete`,
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
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        console.log("에러 : ", e);
      });
  }
};

const BookmarkTab = ({ bookmarkHospital }: BookmarkTabProps) => {
  return (
    <div className="BookmarkTab">
      <h4 className="bookmark_tab_name">{bookmarkHospital.name}</h4>
      <p className="bookmark_tab_address">{bookmarkHospital.address}</p>
      <h4 className="bookmark_tab_departments_title">진료과목</h4>
      <p className="bookmark_tab_departments">{bookmarkHospital.departments}</p>
      <h4 className="bookmark_tab_memo_title">메모</h4>
      <div className="bookmark_tab_memo">
        <p className="bookmark_tab_memo_default">메모작성</p>
      </div>
      <div className="bookmark_tab_button">
        <button className="bookmark_tab_reserve">예약하기</button>
        <button
          className="bookmark_tab_cancel"
          onClick={() => bookmarkCancel(bookmarkHospital.id)}
        >
          북마크 해제
        </button>
      </div>
    </div>
  );
};

export default BookmarkTab;
