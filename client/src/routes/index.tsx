import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import AboutPage from "../pages/AboutPage";
import DonatePage from "../pages/DonatePage";
import GuidePage from "../pages/GuidePage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import EncryptPage from "../pages/EncryptPage";
import DecryptPage from "../pages/DecryptPage";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";

// const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
//   isAuthenticated: false,
//   authenticationPath: "/login",
// };

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route path="login" element={<GuestRoute outlet={<SigninPage />} />} />
    <Route path="register" element={<GuestRoute outlet={<SignupPage />} />} />

    <Route path="" element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="guide" element={<GuidePage />} />
    <Route path="donate" element={<DonatePage />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="encrypt" element={<PrivateRoute outlet={<EncryptPage />} />} />
    <Route path="decrypt" element={<PrivateRoute outlet={<DecryptPage />} />} />
    <Route
      path="dashboard"
      element={<PrivateRoute outlet={<DashboardPage />} />}
    />
  </Route>
);

export const routeElements = createRoutesFromElements(routes);

export default createBrowserRouter(createRoutesFromElements(routes));
