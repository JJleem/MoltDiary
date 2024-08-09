import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { GlobalStyle } from "./theme/global-styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./component/common/header/Header";
import Footer from "./component/common/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
