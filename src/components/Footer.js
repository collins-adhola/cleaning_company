import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import Navbar2 from "./Navbar2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  topNav: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  copyright: {
    position: "fixed",
    width: "100%",
    bottom: "0px",
    backgroundColor: "#2E819C",
    textAlign: "center",
    padding: "15px",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
    {/* <Navbar2/> */}

      <Grid container className={classes.root}>
        <Grid item>
          <Box>
            <Typography>SANITECH LTD</Typography>
          </Box>
        </Grid>
        {/* <Grid item>Useful Pages</Grid>
        <Grid item>Legal</Grid>
        <Grid item>Info</Grid> */}
      </Grid>

      <div className={classes.copyright}>COPYRIGHT &copy; Sanitech 2022</div>
    </>
  );
}
