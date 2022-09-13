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
import { Box } from "@material-ui/core";

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
}));

export default function TumbleDryerVent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/images/kitchen-cleaning-1.jpeg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h5">Tumble Dryer Vent Cleaning</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              When using a tumble dryer, the vent will eventually get blocked
              with fibres, creating a fire risk. Get in touch to request a dryer
              duct cleaning quote.This may take longer to happen with a more
              efficient dryer, because more air will usually be flowing through
              to keep everything moving. Eventually though, any dust build-up
              can begin to block the pipe, reducing the efficiency and
              reliability of the machine.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}
            {/* <IconButton aria-label="share">
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
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                The Problem When using a tumble dryer, the vent will eventually
                get blocked with fibres, creating a fire risk.Not only does this
                increase running costs, it also presents a fire hazard which
                needs to be tackled.The Solution We use specialist tools
                including professional brushes and vacuum cleaners to ensure all
                excess dust, lint and so on are removed from the pipework of
                your tumble dryer. This will make sure the machine runs safely
                and more cost-effectively.
              </Typography>
              <Typography paragraph>
                For your peace of mind, and to ensure high standards are always
                upheld, you can expect all of the following when you choose our
                services: White tick icon Services provided 24 hours a day to
                help minimise disruption White tick icon Professional, friendly,
                DBS-checked staff in uniform White tick icon Experience working
                in commercial, residential and medical settings White tick icon
                Methods and results that are fully compliant with relevant
                legislation
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}
