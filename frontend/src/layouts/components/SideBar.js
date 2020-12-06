import React, { Children } from "react";

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppleIcon from "@material-ui/icons/Apple";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";

import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";

import Logo from "../../assets/images/logo.svg";
import createPalette from "@material-ui/core/styles/createPalette";
import StyledSelect from "../../components/StyledSelect";

const DRAWER_WIDTH = 240;
const DRAWER_HEIGHT = 1000;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      minHeight: DRAWER_HEIGHT,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    height: "auto",
  },
  content: {
    flexGrow: 1,
    marginTop: 64,
    minHeight: DRAWER_WIDTH,
  },
  sidebarHeader: {
    display: "flex",
  },
  background: {
    background: "#211359",
    color: "#6cf2c1",
    minHeight: DRAWER_HEIGHT,
  },
  sideLogo: {
    // width: 100,
    // height: 100,
    width: "90%",
    margin: " 0 auto",
  },
}));

const carrers = [
  { value: "0", label: "Ingeniería Civil" },
  { value: "1", label: "Ingeniería en Alimentos y Biotecnología" },
  { value: "2", label: "Ingeniería Topográfica" },
  { value: "3", label: "Ingeniería Industrial" },
  { value: "4", label: "Ingeniería Mecánica Eléctrica" },
  { value: "5", label: "Ingeniería Química" },
  { value: "6", label: "Ingeniería en Logística y Transporte" },
  { value: "7", label: "Ingeniería Informática" },
  { value: "8", label: "Ingeniería Biomédica" },
  { value: "9", label: "Ingeniería en Computación" },
  { value: "10", label: "Ingeniería en Comunicaciones y Electrónica" },
  { value: "11", label: "Ingeniería Fotónica" },
  { value: "12", label: "Ingeniería Robótica" },
];

function ResponsiveDrawer({ children, window, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.background}>
      <div className={clsx(classes.toolbar, classes.sidebarHeader)}>
        <img src={Logo} alt="Logo horarrioCE" className={classes.sideLogo} />
      </div>
      <div></div>
      <Divider />
      <List>
        {["HorarioCE", "Preferencias"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            HorarioCE
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
}

export default ResponsiveDrawer;
