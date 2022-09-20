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
    padding: "80px",
    paddingBottom: "180px",
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

export default function ContactForm() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.aboutText}>
          <div>
            <Typography
              variant="h6"
              color="initial"
              className={classes.titleText}
              style={{
                color: "white",
                marginTop: "auto",
                paddingBottom: "20px",
              }}
            >
              <strong>Contact Us</strong>
            </Typography>
          </div>

          <Box>
            <Typography
              variant="subtitle2"
              color="initial"
              className={classes.contactText}
            ></Typography>
            <Typography variant="h5" color="initial" style={{ color: "white" }}>
              Give us a call or send an email. <br /> <br />
            </Typography>

            <Typography style={{ color: "white" }}>
              Monday-Friday, 09:00 AM - 5:00 PM
            </Typography>
            <Typography style={{ color: "white", paddingBottom: "20px" }}>
              Farant House <br /> Battersea <br /> SW11 2BS
              <br />
            </Typography>
            <Typography style={{ color: "green", paddingBottom: "20px" }}>
              info@sanitech.com <br /> 0203322 5333
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={1} md={6}>
          <Box>
            <Form />
          </Box>

        
        </Grid>
      </Grid>
      <Box>
        <Footer/>
      </Box>
    </div>
  );
}
