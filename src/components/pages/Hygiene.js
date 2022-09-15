import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
  },
  root: {
    ...theme.container,
    // flexGrow: 1,
    // display: "flex",
    flexDirection: "row",
    height: "auto",
    // width: "1200px",
    backgroundColor: "#FFFFFF",
    margin: "auto",
    justifyContent: "space-between",
    paddingTop: "100px",
    textAlign: "center",
  },
  aboutText: {
    fontSize: 15,
  },

  titleText: {
    padding: "15px",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            Don’t take the risk… be safe, be clean, be legal.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.root} direction="column">
        <Grid item sm={12} md={6} className={classes.aboutText}>
          <div>
            <Typography
              variant="h5"
              color="initial"
              className={classes.titleText}
            >
              SANITECH HYGIENE Ltd
            </Typography>
          </div>
          <div>
            <Typography
              variant="p"
              color="initial"
              className={classes.aboutText}
            >
              The standards matter Why comply with standards? We are an
              insurance-compliant duct cleaning company, dedicated to meeting
              BESA and TR19 standards. This is demonstrated in our comprehensive
              reports which we provide with every visit. Everything is covered
              from risk assessments to method statements, plus product details
              complying with COSHH. All this gives you the peace of mind you
              expect with a commercial kitchen cleaning service of this calibre.
              We understand the risks you need to manage to keep your commercial
              premises safe, such as grease deposits which pose both a fire risk
              and a danger of bacterial contamination. Cleaning your kitchen
              ductwork, extraction systems and equipment to a high standard is a
              vital part of our professional service.
              <br />
              In fact, at <strong>Sanitech</strong> , cleaning means going above
              and beyond the minimum legal requirements in every area. That’s
              why our services include kitchen, structural and extraction
              cleaning, so you can be confident that no detail is forgotten each
              time we visit you. Our aim is to help you make sure no element of
              your premises lets you down upon inspection, from your kitchen
              canopy to all those hard-to-reach areas surrounding your
              appliances and equipment.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.aboutPhoto}>
          <Box>
            <Image
              src="/images/hygieneRating.jpeg"
              style={{ height: 10, width: 400 }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
