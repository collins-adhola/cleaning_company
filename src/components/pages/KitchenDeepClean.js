import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Image from "material-ui-image";
import { Box } from "@mui/material";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Contact from "./Contact";

export default function KitchenDeepClean() {
  
  return (
    <>
      <Grid container>
        <Grid item sm={12} md={6} space={3} style={{ padding: "100px" }}>
          <Image src="/images/kitchen-cleaning-1.jpeg" />
        </Grid>
        <Grid item sm={12} md={6} style={{ padding: "100px" }}>
          <Typography variant="h4">Kitchen Deep Cleaning</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We have built a reputation as a kitchen deep cleaning company with
            extremely high standards, and whatever state your commercial kitchen
            is in we will make sure our work meets or exceeds your expectations
            every time. If your business relies on preparing and serving food,
            you have no choice but to take hygiene very seriously. At KDC, we
            understand the requirements you need to meet in order to comply with
            laws and regulations, pass inspections based on Food Standards
            Agency guidelines, and keep your staff and customers safe from all
            health and safety risks.
            <br />
            Unlike many alternative providers, we approach this task responsibly
            and we are fully equipped to do everything we need to in order to
            get the job done. This includes comprehensive deep cleaning for all
            the areas you can’t see, including dismantling your appliances to
            fully clean every component if necessary.
            <br />
            For your peace of mind, and to ensure high standards are always //
            upheld, you can expect all of the following when you choose our //
            services: White tick icon Services provided 24 hours a day to //
            help minimise disruption White tick icon Professional, friendly, //
            DBS-checked staff in uniform White tick icon Experience working //
            in commercial, residential and medical settings White tick icon //
            Methods and results that are fully compliant with relevant //
            legislation
          </Typography>

          <Typography>
            Because all businesses are different, we believe that when you
            choose a Kitchen cleaning company, you need to receive a
            personalised service every time. That’s why our team’s skills will
            be applied differently in every situation, but typically our main
            cleaning services for commercial kitchens include the following:
            White tick icon Structural White tick icon Cooking equipment White
            tick icon Extraction system White tick icon Canopy and filter White
            tick icon Ductwork White tick icon General cleaning White tick icon
            Servery Areas White tick icon Dishwash Areas Free Quotation
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Contact />
        </Grid>
        <Grid item sm={12} md={6}></Grid>
        <Grid item sm={12} md={6}>
          {" "}
        </Grid>
      </Grid>
      <Box>
        <ContactForm />
        <Footer />
      </Box>
    </>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Grid from "@material-ui/core/Grid";
// import { Box } from "@material-ui/core";
// import ContactForm from "../ContactForm";
// import Footer from "../Footer";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function KitchenDeepClean() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <>
//       <Box>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image="/images/kitchen-cleaning-1.jpeg"
//             title="Paella dish"
//           />
//           <CardContent>
// <Typography variant="h5">Kitchen Deep Cleaning</Typography>
// <Typography variant="body2" color="textSecondary" component="p">
//   We have built a reputation as a kitchen deep cleaning company with
//   extremely high standards, and whatever state your commercial
//   kitchen is in we will make sure our work meets or exceeds your
//   expectations every time. If your business relies on preparing and
//   serving food, you have no choice but to take hygiene very
//   seriously. At KDC, we understand the requirements you need to meet
//   in order to comply with laws and regulations, pass inspections
//   based on Food Standards Agency guidelines, and keep your staff and
//   customers safe from all health and safety risks.
// </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <Typography>Learn more</Typography>
//             <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Method:</Typography>
//               <Typography paragraph>
//                 Our experienced team members use only the best techniques to
//                 conduct an extremely thorough and effective deep clean of your
//                 entire kitchen, if this is what you require.
//               </Typography>
//               <Typography paragraph>
// Unlike many alternative providers, we approach this task
// responsibly and we are fully equipped to do everything we need
// to in order to get the job done. This includes comprehensive
// deep cleaning for all the areas you can’t see, including
// dismantling your appliances to fully clean every component if
// necessary.
//               </Typography>
//               <Typography paragraph>
//                 For your peace of mind, and to ensure high standards are always
//                 upheld, you can expect all of the following when you choose our
//                 services: White tick icon Services provided 24 hours a day to
//                 help minimise disruption White tick icon Professional, friendly,
//                 DBS-checked staff in uniform White tick icon Experience working
//                 in commercial, residential and medical settings White tick icon
//                 Methods and results that are fully compliant with relevant
//                 legislation
//               </Typography>
//               <Typography>
//                 Set aside off of the heat to let rest for 10 minutes, and then
//                 serve.
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//         <ContactForm/>
//         <Footer/>

//       </Box>
//     </>
//   );
// }
