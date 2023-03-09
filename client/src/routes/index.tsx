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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="login/" element={<SigninPage />} />
      <Route path="register/" element={<SignupPage />} />

      <Route path="" element={<HomePage />} />
      <Route path="about/" element={<AboutPage />} />
      <Route path="guide/" element={<GuidePage />} />
      <Route path="donate/" element={<DonatePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;
