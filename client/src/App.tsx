import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

const App = () => {
  useEffect(() => {
    console.log("first");
    localStorage.setItem("asd", "hahaha");
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
