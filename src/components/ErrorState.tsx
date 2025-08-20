import { AlertCircle, MapPin } from "lucide-react";
import LocationGuide from "./LocationGuide";
import RetryButton from "./RetryButton";
import "./ErrorState.css";

interface ErrorStateProps {
  error: string;
  denied: boolean;
  onRetry: () => void;
}

const ErrorState = ({ error, denied, onRetry }: ErrorStateProps) => (
  <>
    <div className="relative">
      <MapPin className="icon-lg text-red-500 mx-auto" />
      <AlertCircle className="icon-sm text-red-600 absolute -top-1 -right-1" />
    </div>

    <h1 className="title">위치 정보 필요</h1>

    <p className="description mb-2">
      이 앱을 사용하려면 위치 정보가 필요합니다.
    </p>

    <div className="error-box">
      <p className="text-red-700 text-sm">{error}</p>
    </div>

    {denied ? <LocationGuide /> : <RetryButton onRetry={onRetry} />}
  </>
);

export default ErrorState;
