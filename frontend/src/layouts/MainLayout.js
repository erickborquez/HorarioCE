import React from "react";
import { makeStyles } from "@material-ui/core";

import SideBar from "./components/SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return <SideBar>{children}</SideBar>;
};

export default MainLayout;
