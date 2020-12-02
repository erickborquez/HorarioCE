import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Routes from "./routes";
import theme from "./theme";
import Select from "./components/select";
import { ThemeProvider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  
  select:{
    backgroundColor:"red",
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <aside>
          <Logo className = "logo" />
          <Router>
            <Routes />
          </Router>
          <h1>HorarioCE</h1>
          <h2>Escuela: </h2>
          <Select vartiant="outlined" className={classes.select} InputProps={{className:classes.select}}/>
        </aside>
      </div>
    </ThemeProvider>
  );
};

export default App;
