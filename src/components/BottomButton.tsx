import "./BottomButton.css";

interface BottomButtonProps {
  handleClick: () => void;
  active: boolean;
  name: string;
  img: string;
  unread?: boolean;
}

const BottomButton = ({
  handleClick,
  active,
  name,
  img,
  unread,
}: BottomButtonProps) => {
  return (
    <div className="BottomButton" onClick={handleClick}>
      <div className="image_box">
        <img src={img} className={`bottom_img ${active ? "active" : ""}`} />
      </div>
      <p className={`bottom_text ${active ? "active" : ""}`}>{name}</p>
      {unread && <span className="alert-dot" />}
    </div>
  );
};

export default BottomButton;
