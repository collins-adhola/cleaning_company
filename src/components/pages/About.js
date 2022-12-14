import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { Box } from "@mui/material";
import Contact from "./Contact";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
  },
  root: {
    // ...theme.container,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    // height: "500px",
    width: "1200px",
    backgroundColor: "#FFFFFF",
    margin: "auto",
    justifyContent: "space-between",
    marginTop: "60px",
  },
  aboutText: {
    ...theme.fonts.light,
    backgroundColor: "#E1E1E1",
    borderLeft: "2px solid #2E819C",
    borderRight: "12px",

    paddingLeft: "30px",
    lineHeight: "30px",
    fontWeight: "90px",
    fontSize: "20px",
  },

  bodyText: {
    // width:'100%',
    // maxWidth:'100%',
    border: "4.5px solid #2e819c",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    // backgroundColor: "#f4f4f4",
    padding: "10px",
    marginLeft: "40px",
    fontSize: "18px",
  },
  titleText: {
    ...theme.fonts.extraBold,
    // fontSize: "theme.extraBold",
    fontSize: "28px",
    backgroundColor: "...theme.palette.beta",
    marginBottom: "40px",
    width: "30%",
    color: "#2E819C",
    // maxWidth: "100%",
    marginLeft: "0px",
    // marginTop: "80px",
    // padding: "10px",
  },
  aboutPhoto: {
    backgroundSize: "cover",
    backgroundImage: "url(/images/kitchen-1.jpeg)",

    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  services: {
    padding: "5px",
    textAlign: "center",
    color: "#2E819C",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Typography
          variant="h5"
          color="initial"
          className={classes.services}
          display="grid"
        >
          ABOUT US
        </Typography>
      </Box>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.aboutText}>
          <div>
            <Typography
              variant="h5"
              color="initial"
              className={classes.titleText}
            >
              SANITECH Ltd
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle2"
              color="initial"
              className={classes.aboutText}
            >
              Welcome to <strong>Sanitech</strong> Food Hygiene Ltd. Based in
              London but operating across the UK. We are providers of commercial
              kitchen deep cleaning services and along with everything food
              hygiene. Our specialised services are designed to make sure your
              kitchen and premises are fully compliant with health and safety
              laws as well as insurance requirements. In fact, our professional
              deep cleaning services can prepare your kitchen to meet even the
              highest standards.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image src="/images/kitchen-vent-1.jpeg" />
        </Grid>
        
      </Grid>

     
    </div>
  );
}
