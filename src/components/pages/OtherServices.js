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
import TumbleDryerVent from "./TumbleDryerVent";
import { Grid, Box } from "@material-ui/core";
import ExtractionDuct from "./ExtractionDuct";
import CookingEquipment from "./CookingEquipment";
import CarpetCleaning from "./CarpetCleaning";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
  },
  root: {
    // ...theme.container,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexGrow: "1",
    justifyContent: "space-around",
    paddingTop: "120px",
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

  backImg: {
    backgroundSize: "cover",
    backgroundImage: "url(/images/kitchen-vent-1.jpeg)",
    // position: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "25vh",
    //  filter:'blur(8px) ',
  },
  text: {
    ...theme.fonts.bold,
    textAlign: " center",
    lineHeight: "150px",
    color: "white",
    fontSize: "40px",
  },
}));

export default function OtherServices() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box
        className={classes.backImg}
        style={{
          // background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          backgroundAttachment:
            '<Image src="/images/kitchen-cleaning-1.jpeg" />',
        }}
      >
        <Typography variant="h5" className={classes.text}>
          Other Services we provide
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        className={classes.root}
      
      >
        <Grid item sm={12} md={3}>
          <CookingEquipment />
        </Grid>
        <Grid item sm={12} md={3}>
          <CarpetCleaning />
        </Grid>
        <Grid item sm={12} md={3}>
          <TumbleDryerVent />
        </Grid>
        <Grid
          item
          sm={12}
          md={3}
          style={{
            height: "45vw",
          }}
        >
          <ExtractionDuct />
        </Grid>
      </Grid>
      <ContactForm />
      <Footer />
    </>
  );
}
