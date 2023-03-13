import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export interface GuestRouteProps {
  outlet: JSX.Element;
}

const GuestRoute = ({ outlet }: GuestRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};

export default GuestRoute;
