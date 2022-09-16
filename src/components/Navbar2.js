import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { Box } from "@mui/material";
import Form from "./Form";
import { Button } from "@material-ui/core";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
  },
  root: {
    ...theme.container,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    paddingBottom:'50PX',
  
 
    marginTop: 20,
    alignItems: "center",

    width: "100%",
    backgroundColor: "#2E3A3D",
    // margin: "auto",
    // justifyContent: "space-between",
    // marginTop: "93PX",
  },
  services: {
    padding: "50px",
    textAlign: "center",
    // backgroundColor: "#2E819C",
  },
  contactText: {
    color: "white",
  },
}));

export default function Navbar2() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={1} className={classes.root}>
        <Grid item sm={12} md={3}>
          <Box>
            <Typography>Contact</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={3}>
          <Box>
            <Typography>services</Typography>
          </Box>
        </Grid>
        <Grid itemsm={12} md={3}>
          <Box>
            <Typography>Legal</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={3}>
          <Box>
            <Typography>Info</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
