import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/GlobaleStyle";
import theme from "./components/styles/theme";
import ROUTES, { RenderRoutes } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RenderRoutes routes={ROUTES} />;
    </ThemeProvider>
  );
};

export default App;
