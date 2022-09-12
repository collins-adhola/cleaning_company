import React from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { ChevronLeft } from "@material-ui/icons";
import {useState, useEffect} from 'react'

const useStyles = makeStyles((theme) => ({

  container: {
    ...theme.container,
  },
  quoteIcon: {
    marginLeft: "80px",
    backgroundColor: "green",
    color: "white",
  },
  tabs: {
    // margin:'10px',
    " & .MuiTab-root": {
      minWidth: 10,
      marginLeft: "10px",
    },
  },
  hamburger: {
    fontSize: "35px",
    marginRight: "10px",
  },
  logo: {
    ...theme.fonts.bold,
    backgroundColor: "green",
    color: "white",
    borderRadius: "40%",
    width: "25px",
    border: "1px grey solid",
  },
  indicator: {
    backgroundColor: theme.palette.common.light,
  },
  drawerHeader:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    padding:theme.spacing(0,1),
    //necesary for content to be below bar
    ...theme.mixins.toolbar,

  }
}));
function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen= ()=>{
    setOpenDrawer(true)
  }

   const handleDrawerClose = () => {
     setOpenDrawer(false);
   };
   const[tabIndex, setTabIndex]= useState(false);
   const handleTabIndexChange = (event,index)=>{
    setTabIndex(index);

   }

    const routes = [
      { name: "HOME", link: "/", index: 0 },
      { name: "ABOUT", link: "/about", index: 1 },
      {
        name: "DEEP CLEANING SERVICES",
        link: "/deep-cleaning-services",
        index: 2,
      },
      { name: "OTHER SERVICES", link: "/other-services", index: 3 },
      { name: "NEWS", link: "/news", index: 4 },
    ];

    useEffect(() => {
      routes.forEach((route) => {
        switch (window.location.pathname) {
          case `${route.link}`:
            setTabIndex(route.index);
            break;
          default:
            return false;
        }
      });
      // eslint-disable-next-line
    }, [window.location.pathname]);
   
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              arial-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon className={classes.humburger} />
            </IconButton>
          </Hidden>

          <Typography component="h6" className={classes.logo}>
            SC
          </Typography>
          <Hidden smDown>
            <Tabs
              value={tabIndex}
              onChange={handleTabIndexChange}
              className={classes.tabs}
              classes={{ indicator: classes.indicator }}
            >
              console.log(route.name);
              {routes.map((route, index) => (
                <Tab
                  key={`${route}${index}`}
                  label={route.name}
                  component={Link}
                  to={route.link}
                />
              ))}
            </Tabs>

            <Box>
              <Button
                className={classes.quoteIcon}
                variant="outlined"
                onClick={() => {
                  alert("clicked");
                }}
              >
                GET A QUOTE
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={openDrawer}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${index}`}
              component={Link}
              to={route.link}
              selected={window.location.pathway === route.link}
              onClick={handleDrawerClose}
              button
            >
              <ListItemText primary={route.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;