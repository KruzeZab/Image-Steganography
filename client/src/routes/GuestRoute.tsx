import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export interface GuestRouteProps {
  outlet: JSX.Element;
}

const GuestRoute = ({ outlet }: GuestRouteProps) => {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const location = useLocation();

  const next = location.state?.next ?? "/";

  if (!authenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: next }} />;
  }
};

export default GuestRoute;
