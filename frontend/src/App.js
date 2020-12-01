import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Routes from "./routes";
import theme from "./theme";
import Select from "./components/select";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <aside>
          <Logo />
          <Router>
            <Routes />
          </Router>
          <h1>HorarioCE</h1>
          <h2>Escuela: </h2>
          <Select className="select1" variant="outlined" />
        </aside>
      </div>
    </ThemeProvider>
  );
};

export default App;
