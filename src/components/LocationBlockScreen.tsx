import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import "./LocationBlockScreen.css";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
  denied: boolean;
}

interface LocationBlockScreenProps {
  location: LocationState;
  onRetry: () => void;
}

const LocationBlockScreen = ({
  location,
  onRetry,
}: LocationBlockScreenProps) => (
  <div className="location-screen">
    <div className="location-modal">
      <div className="mb-6">
        {location.loading ? (
          <LoadingState />
        ) : (
          <ErrorState
            error={location.error!}
            denied={location.denied}
            onRetry={onRetry}
          />
        )}
      </div>

      <div className="footer-info">
        <p className="text-xs text-gray-400">
          위치 정보는 앱 기능 제공 목적으로만 사용됩니다.
        </p>
      </div>
    </div>
  </div>
);

export default LocationBlockScreen;
