import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: (() => {
    const mode = localStorage.getItem("chakra-ui-color-mode");
    if (mode === "dark" || mode === "light" || mode === "system") {
      return mode;
    }
    return "light"; // default value
  })(),
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function deleteColorModeInLocalStorage() {
  window.localStorage.removeItem("chakra-ui-color-mode");
}

setTimeout(deleteColorModeInLocalStorage, 3000);

export default theme;
