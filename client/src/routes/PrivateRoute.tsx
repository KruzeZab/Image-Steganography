import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export interface PrivateRouteProps {
  outlet: JSX.Element;
}

const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/login/" }} />;
  }
};

export default PrivateRoute;
