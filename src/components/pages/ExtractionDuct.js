import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  textspace: {
    height: "140px",
    width: "100%",
  },
}));

export default function ExtractionDuct() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/images/ductCleaning.jpeg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h5">
              Canopy, Extraction & Fan Cleaning
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.textpace}
            >
              <strong>Sanitech</strong> Food Hygiene Ltd specialise in kitchen
              extraction cleaning which includes removing the grease from
              canopies and ductwork Call 07718313166 today for a QUOTATION. At{" "}
              <strong>Sanitech</strong> , one of our primary specialities is
              cleaning canopies, ducts, fans and filters thoroughly in order to
              fully clean out your commercial kitchen extraction system. This
              process removes grease and fat deposits which tend to build up
              over time, especially in busy restaurants, pubs, schools,
              canteens, hospitals, care homes and similar environments.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            <Typography>Learn more</Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography> */}
              <Typography paragraph>
                All <strong>Sanitech</strong> jobs are cleaned to BESA TR-19
                standards, and we provide photo evidence of the clean plus a
                certificate of hygiene on completion.
              </Typography>
              <Typography paragraph>
                It’s very common for extract ducts, filters and so on to be left
                for long periods of time without being cleaned. This is often
                because these places are out of sight, so they can easily be
                forgotten. Even if you’re aware of the need to keep them clean,
                doing so can be difficult and inconvenient, especially without
                the specialist tools and skills we have at our disposal at{" "}
                <strong>Sanitech</strong>
                Food Hygiene Ltd. The need for getting these specific areas
                cleaned should not be underestimated. There are three major
                reasons to take this seriously: White tick icon Hygiene risk –
                Areas in your extract ducts, canopies and similar areas that
                become clogged with a layer of grease will often become ideal
                breeding grounds for bacteria. White tick icon Fire risk – Fat
                deposits in your ductwork can be extremely flammable, meaning in
                the event of a fire in your kitchen, it could spread dangerously
                quickly. White tick icon Legal risk – There are specific
                regulations relating to health and safety at work, and
                particularly in the category of fire regulations, which must be
                adhered to by anyone operating a commercial kitchen.
              </Typography>
              <Typography>
                At <strong>Sanitech</strong> , we are experts at ensuring you
                are compliant with regulations, in order to help you operate as
                a responsible business and minimise the risk of legal costs and
                consequences later.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
}
