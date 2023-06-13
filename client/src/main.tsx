import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./app/store";

import theme from "./theme";
import { setupInterceptors } from "./lib/axios/server";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </>
);

setupInterceptors(store);
