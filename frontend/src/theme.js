import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6cf2c1",
      main: "#2ebf91",
      dark: "#008e63",
      gradient: "#8360C3",
    },
    secondary: {
      light: "#c44cff",
      main: "#8360c3",
      dark: "#5700ad",
      background: "#211359",
    },

    landing: {
      main: "#8360C3",
    },
  },
});

export default theme;
