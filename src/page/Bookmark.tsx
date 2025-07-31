import { useState } from "react";
import BookmarkList from "../components/BookmarkList";
import Bottom from "../components/Bottom";
import Header from "../components/Header";

const Bookmark = () => {
  const [selectIndex, setSelectIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      {selectIndex !== null && <div className="overlay" />}
      <BookmarkList selectIndex={selectIndex} setSelectIndex={setSelectIndex} />
      <Bottom />
    </>
  );
};

export default Bookmark;
