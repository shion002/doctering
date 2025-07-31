import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./BookmarkList.css";
import BookmarkTab from "./BookmarkTab";
import { baseURL } from "../util/baseUrl";

interface BookmarkHospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  departments?: string;
  memo?: string;
}

interface BookmarkListProps {
  selectIndex: number | null;
  setSelectIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const BookmarkList = ({ selectIndex, setSelectIndex }: BookmarkListProps) => {
  const token = localStorage.getItem("token");
  const [list, setList] = useState<BookmarkHospital[]>([]);
  const [tabDirection, setTabDiraction] = useState<"up" | "down">("down");
  const tabRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get(`https://${baseURL}/api/bookmark/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleBookmarkClick = (index: number) => {
    setSelectIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tabRef.current && !tabRef.current.contains(event.target as Node)) {
        setSelectIndex(null);
      }
    };
    if (selectIndex !== null) {
      if (selectedRef.current) {
        const rect = selectedRef.current.getBoundingClientRect();
        const halfScreen = window.innerHeight / 2;
        setTabDiraction(rect.top > halfScreen ? "up" : "down");
      }
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [selectIndex]);

  return (
    <div className="BookmarkList">
      <h2 style={{ textAlign: "center", margin: "50px" }}>즐겨찾기 목록</h2>
      {list.map((bookmarkList, index) => (
        <div
          key={index}
          className={`bookmark ${
            selectIndex !== null
              ? selectIndex === index
                ? "focused"
                : "blurred"
              : ""
          }`}
          ref={selectIndex === index ? selectedRef : null}
          onClick={() => handleBookmarkClick(index)}
        >
          <h3 className="bookmark_name">{bookmarkList.name}</h3>
          <p className="bookmark_address">{bookmarkList.address}</p>
          <p className="bookmark_phone">{bookmarkList.phone}</p>

          {selectIndex === index && (
            <div
              ref={tabRef}
              className={`bookmark_tab_action ${
                tabDirection === "up" ? "above" : "below"
              }`}
            >
              <BookmarkTab
                bookmarkHospital={{
                  ...bookmarkList,
                  departments: bookmarkList.departments || "",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
