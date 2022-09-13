import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import CookingEquipment from "./CookingEquipment";
import KitchenDeepClean from "./KitchenDeepClean";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
    justifyContent: "space-between",
    alignItems: "end",
    // border: "1px solid green",
    flex: "0 0 auto",
    alignSelf: "stretch",
    // "& .MuiGrid-grid-xs-12": {
    //   color: "green",
    // },
  },
  services: {
    padding: "50px",
    textAlign: "center",
  },
  textspace: {
    height: "140px",
    width: "100%",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  // const [deepClean, setDeepClean] = useState(false);

  // const handleDeepclean = (e) => {
  //   // return console.log("I have been clicked");
  //   // return setDeepClean("/deep-cleaning-services")
    
  //   setDeepClean( <KitchenDeepClean/> , console.log("hi"))
  // };

 

  return (
    <div
    // style={{
    //   background: "linear-gradient(to right bottom, #479999, #82ffa1)",
    // }}
    >
      <Box>
        <Typography
          variant="h4"
          color="initial"
          className={classes.services}
          display="grid"
        >
          OUR SERVICES
        </Typography>
      </Box>
      <Grid container className={classes.container} space={2}>
        <Grid item xs={12} md={6}>
          <Card className={classes.root} space={3}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/kitchen-cleaning-1.jpeg"
                title="kitchen-cleaning-1"
                style={{ height: 250, width: 450 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Kitchen Deep Cleaning
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.textspace}
                >
                  <strong> Sanitech </strong>can provide a full deep clean to
                  your kitchen or clean single items of equipment if required.
                  <br />
                  If your business relies on preparing and serving food, you
                  have no choice but to take hygiene very seriously. At
                  <strong>Sanitech </strong>, we understand the requirements you
                  need to meet in order to comply with laws and regulations,
                  pass inspections based on Food Standards Agency guidelines,
                  and keep your staff and customers safe from all health and
                  safety risks.
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/kitchen-2.jpeg"
                title="kitchen-cleaning-1"
                style={{ height: 250, width: 450 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cooking Equipment Cleaning
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.textspace}
                >
                  We clean Fryers, Grills, Oven Ranges, Combination Ovens,
                  Steamers and more.
                  <br /> <strong>Sanitech </strong>are a specialist commercial
                  kitchen deep cleaning company, providing professional cleaning
                  services to commercial caterers, the care industry, Education
                  etc across London.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => <CookingEquipment />}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: "auto" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/kitchenBAfter.jpeg"
                title="kitchen-cleaning-1"
                style={{ height: 250, width: 450 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Structural Cleaning
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.textspace}
                >
                  We clean Fryers, Grills, Oven Ranges, Combination Ovens,
                  Steamers and more.
                  <br /> <strong>Sanitech </strong>are a specialist commercial
                  kitchen deep cleaning company, providing professional cleaning
                  services to commercial caterers, the care industry, Education
                  etc across London.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: "auto" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/kitchenDeep1.jpeg"
                title="kitchen-cleaning-1"
                style={{ height: 250, width: 450 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Extraction & Duct Cleaning
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.textspace}
                >
                  <strong>Sanitech</strong> Food Hygiene specialise on Kitchen
                  Extraction Cleaning which includes removing the grease on
                  canopies, filters and ductwork.
                  <br />
                  Our extraction cleaning service is always tailored to your
                  exact needs, but in general we would recommend booking a
                  thorough clean of your entire kitchen somewhere between every
                  three months and once per year.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
