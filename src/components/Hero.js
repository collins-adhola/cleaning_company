import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// import img from "./public/images/kitchen-vent-1.jpeg";

// import wood from "./components/src/public/images/kitchen-vent-1.jpeg";
const useStyles = makeStyles((theme) => ({
  backImg: {
    backgroundSize: "cover",
    backgroundImage: "url(/images/kitchen-vent-1.jpeg)",
    // position: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "60vh",
    //  filter:'blur(8px) ',
  },
  paper: {
    textAlign: "center",
    margin: "30px",
    backgroundColor: "rgba(0,0,0, 0.1)",
    color: "white",
    justifyContent: "center",
  },
  // heading: {
  //   fontSize: theme.extraBold,
  // },
  root: {
    // display:'flex',
    flexGrow: 1,
    marginBottom: "0px",
    width: "auto",
    fontSize: theme.extraBold,
  },

  btnHero: {
    backgroundColor: "#2E819C",
    marginLeft: "80px",
    color: "white",
    width: "auto",
    fontSize: "15px",
  },

  heroGridLg: {
    marginTop: "100px",
    marginBottom: "50px",
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
  heroGridSm: {
    marginTop: "100px",
  },
  heading: {
    ...theme.fonts.bold,
    fontSize: "28px",
    // color: "green"
  },
  headingText: {
    ...theme.fonts.light,
    fontWeight: "400",
  },
  paperSm: {
    ...theme.fonts.light,
    textAlign: "center",
    // margin: "30px",
    backgroundColor: "rgba(255,255,255,0.4)",
    color: "black",
    justifyContent: "left",
    fontSize: "40px",
    width: "300px",
    borderLeft: "4px solid #2E819C",
  },
  heroList: {
    margin: "9px 0px",
    fontSize: theme.fonts.extraBold,
    lineHeight: "10px",
  },
  btnSm: {
    marginLeft: "80px",
    backgroundColor: "#2E819C",
    color: "white",
    opaque: "8",
  },
}));

export default function Hero() {
  const services = [
    "Kitchen Deep Cleaning",
    "Cooking Equipment",
    "Structural Cleaning",
    "Canopy & Filter Cleaning",
    "Ductwork & Fan Cleaning",
    "Infection Control Cleaning",
  ];

  const serviceItems = services.map((service)=>
  <ListItem key={services.toString()}>
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>

                        <ListItemText>{service}</ListItemText>
                </ListItem>

  
  )
  // const listHandler= services.map(service =>

  //   console.log(service, i)
  // )
  const service = services.map((x) => x * 2);

  console.log(service);
  // listHandler();

  const classes = useStyles();


  return (
    <div>
      <Grid container className={classes.backImg} spacing={2}>
        <Grid
          container
          display="flex"
          // justifyContent="center"
          alignItems="center"
          spacing={3}
          align="center"
          className={classes.mainGrid}
        >
          <Grid
            item
            xs={12}
            md={8}
            className={classes.heroGridLg}
            display="flex"
          >
            <Card className={classes.paper} variant={"outlined"}>
              <CardContent className={classes.root}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.heading}
                >
                  Kitchen Deep Cleaning & <br />
                  Extraction Cleaning
                  <br />
                </Typography>

                <Typography
                  variant="h6"
                  component="h4"
                  className={classes.headingText}
                >
                  Our specialised commercial and domestic cleaning services are
                  designed to make sure your kitchen and premised and fully
                  complaint with health and safety laws as well as insurance
                  requirements
                  <br />
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton className={classes.btnHero} align="center">
                  See more
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.heroGridSm}>
            <Card className={classes.paperSm} variant={"outlined"}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h4"
                  style={{ color: "#2E819C" }}
                >
                  Services we provide
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.heroList}
                >
                  <div>
                    <List>{serviceItems}</List>
                  </div>
                  <br />
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  className={classes.quoteIcon}
                  style={{ backgroundColor: "#6F9935", bottom: "7px" }}
                  variant="outlined"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/contact";
                  }}
                >
                  GET A QUOTE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
