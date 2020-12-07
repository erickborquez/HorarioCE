import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./index.css";

import Routes from "./routes";
import theme from "./theme";
import PreferencesProvider from "./context/PreferencesContext";

const App = () => {
  return (
    <PreferencesProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </PreferencesProvider>
  );
};

export default App;
