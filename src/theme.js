import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const alpha = "#2E819C"; //Blue
const beta = "#2E819C"; //Lilac website
const gamma = "#6F9935"; // Green website
const delta = "#FFFFFF";
const alert = "#FD5959";
const contrast = "#2C3E50";  //purple-blue
const elements = "#C4C4C4";  // red
const light = "#F4F4F4";// text background
const skills = "#e1e1e1";

export default createTheme({
  typography: {
    fontFamily: "OpenSans-Regular",
  
  },
  palette: {
    primary: {
      main: `${skills}`,
    },
    secondary: {
      main: `${beta}`,
    },
    error: {
      main: `${alert}`,
    },
    common: {
      alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
    },
    background: {
      // site's background colour
      default: `${delta}`,
    },
  },
  container: {
    width: "1000px",
    margin: "0 auto",
    padding: "0 2rem",
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  fonts: {
    bold: {
      fontFamily: "OpenSans-Bold",
    },
    extraBold: {
      fontFamily: "OpenSans-ExtraBold",
    },
    light: {
      fontFamily: "OpenSans-Light",
    },
  },
});
