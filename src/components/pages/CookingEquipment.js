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

export default function CookingEquipment() {
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
            <Typography variant="h5">
              Commercial Kitchen Oven & Equipment Deep Cleaning
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We can thoroughly clean commercial ovens, ranges, fryers, grills,
              steamers, combination ovens, bain maries, convection ovens and
              many more appliances. Any equipment you use in your commercial
              kitchen can pose serious risks to your employees and your
              customers if not cleaned properly, and these risks are often
              ignored with severe consequences. At KDC, we work hard to make
              sure your business does not compromise on health and safety.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
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
                We make use of a variety of professional deep cleaning
                techniques to get the job done including the use of solution dip
                tanks to remove carbon, fat and grease deposits from cooking
                equipment, which is done by dismantling each appliance and
                cleaning each component individually.
              </Typography>
              <Typography paragraph>
                The Problem When using a tumble dryer, the vent will eventually
                get blocked with fibres, creating a fire risk. This may take
                longer to happen with a more efficient dryer, because more air
                will usually be flowing through to keep everything moving.
                Eventually though, any dust build-up can begin to block the
                pipe, reducing the efficiency and reliability of the machine.
                Not only does this increase running costs, it also presents a
                fire hazard which needs to be tackled.
              </Typography>
              <Typography paragraph>
                The large, solid body of each appliance is also treated to
                eliminate deposits of limescale, carbon and grease which
                inevitably build up over time, before reassembling all the clean
                parts and polishing them to provide a brilliant finish. All of
                this is achieved by using our specially formulated cleaning
                solution, deployed by our highly trained team. We use our own
                exclusive products to ensure fantastic results every time, which
                you are not guaranteed with other providers. In fact, many
                commercial kitchen cleaning companies do not bother to fully
                clean all your equipment, only treating the top surfaces with
                basic cleaning supplies and leaving the dirtiest areas
                untouched.
              </Typography>
              <Typography>
                Our team of commercial kitchen deep cleaning professionals are
                fully trained and compliant with all the latest industry
                guidelines. We have achieved the following accreditations:
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
}
