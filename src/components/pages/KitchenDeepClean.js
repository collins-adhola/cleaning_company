import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Image from "material-ui-image";
import { Box } from "@mui/material";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Contact from "./Contact";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    ...theme.fonts.light,
    fontSize: "18px",
  },
  title:{
    ...theme.fonts.bold,
    paddingBottom:'20px',
    

  }
}));
export default function KitchenDeepClean() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item sm={12} md={6} space={3} style={{ padding: "100px" }}>
          <Typography variant="h4" color="initial">
            About
          </Typography>
          <Typography variant="h3" className={classes.title}>
            Kitchen Deep Cleaning Services
          </Typography>
          <Image src="/images/kitchen-cleaning-1.jpeg" />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            className={classes.text}
            style={{ paddingTop: "35px" }}
          >
            <strong>Satinech</strong> have built a reputation as a kitchen deep
            cleaning company with extremely high standards, and whatever state
            your commercial kitchen is in we will make sure our work meets or
            exceeds your expectations every time. If your business relies on
            preparing and serving food, you have no choice but to take hygiene
            very seriously. We understand the requirements you need to meet in
            order to comply with laws and regulations, pass inspections based on
            Food Standards Agency guidelines, and keep your staff and customers
            safe from all health and safety risks.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} style={{ padding: "100px" }}>
          {/* <Typography variant="h4">Kitchen Deep Cleaning</Typography> */}
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            className={classes.text}
          >
            We have built a reputation as a kitchen deep cleaning company with
            extremely high standards, and whatever state your commercial kitchen
            is in we will make sure our work meets or exceeds your expectations
            every time. If your business relies on preparing and serving food,
            you have no choice but to take hygiene very seriously. At{" "}
            <strong>Sanitech</strong> , we understand the requirements you need
            to meet in order to comply with laws and regulations, pass
            inspections based on Food Standards Agency guidelines, and keep your
            staff and customers safe from all health and safety risks.
            <br />
            Unlike many alternative providers, we approach this task responsibly
            and we are fully equipped to do everything we need to in order to
            get the job done. This includes comprehensive deep cleaning for all
            the areas you can’t see, including dismantling your appliances to
            fully clean every component if necessary.
            <br />
            For your peace of mind, and to ensure high standards are always
            upheld, you can expect all of the following when you choose our
            services: White tick icon Services provided 24 hours a day to help
            minimise disruption White tick icon Professional, friendly,
            DBS-checked staff in uniform White tick icon Experience working in
            commercial, residential and medical settings White tick icon Methods
            and results that are fully compliant with relevant legislation
            <br />
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
      </Grid>
      <Box>
        <ContactForm />
        <Footer />
      </Box>
    </>
  );
}

