import { RefreshCw } from "lucide-react";
import "./LoadingState.css";

const LoadingState = () => (
  <>
    <RefreshCw className="icon-lg text-blue-500 mx-auto animate-spin" />
    <h1 className="title">위치 정보 필요</h1>
    <p className="description">위치 정보를 가져오는 중입니다...</p>
  </>
);

export default LoadingState;
