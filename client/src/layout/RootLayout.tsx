import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
