import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";


const useStyles = makeStyles((theme) => ({
  root: {
    
    minWidth: 275,
    flexGrow: 1,
    backgroundColor: "#2E819C",
    display: "flex",
    border: "none",
    color: "white",
    maxHeight: "120px",
   
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  boxItem: {
    height: "120px",
  },
  headText: {
    ...theme.fonts.bold,
  },
  bodyText: {
    ...theme.fonts.light,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid container spacing={0} >
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Contact us
            </Typography>

            <Typography variant="subtitle2" component="h6">
              Speak to us today and find out how we can give your kitchen a deep
              clean.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card className={classes.root}>
          <CardContent>
            {/* <CallIcon /> */}
            <Typography variant="h5" component="h2">
              Telephone us
            </Typography>

            <Typography variant="subtitle2" component="h6">
              0207699652
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card className={classes.root} variant="elevation">
          <CardContent>
            <EmailIcon />
            <Typography variant="h5" component="h2">
              Email us
              <br />
            </Typography>

            <Typography variant="subtitle2" component="h6">
              deepclean.outlook.com
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    // </div>
  );
}
