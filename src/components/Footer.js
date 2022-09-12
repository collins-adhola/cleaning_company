import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    bottom: "0px",
    backgroundColor: "#2E819C",
    textAlign: "center",
    padding: "15px",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return( <div className={classes.root}>COPYRIGHT &copy; Sanitech 2022</div>);
}
