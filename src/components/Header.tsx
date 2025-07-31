import "./Header.css";
import { useCategoryContext } from "../context/useCategoryContext";
import left from "./../assets/left_icon.svg";

const Header = () => {
  const { step, handleBack } = useCategoryContext();

  const backClick = () => {
    handleBack();
  };

  return (
    <div className="Header">
      <div className="header_left">
        {step >= 2 ? <img src={left} alt="back" onClick={backClick} /> : null}
      </div>
      <div className="header_center">
        <p className="header_title">전문의 닥터링</p>
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
