import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import theme from "./theme";
import { ThemeProvider} from "@material-ui/core";



const App = () => {
  return (
    
        <Router>
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
        </Router>
        
      
    
    
  );
};

export default App;
