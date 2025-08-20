import { MapPin } from "lucide-react";
import "./RetryButton.css";

interface RetryButtonProps {
  onRetry: () => void;
}

const RetryButton = ({ onRetry }: RetryButtonProps) => (
  <button onClick={onRetry} className="btn btn-primary">
    <MapPin className="w-5 h-5" />
    위치 정보 허용
  </button>
);

export default RetryButton;
