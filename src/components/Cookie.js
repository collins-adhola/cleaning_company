import { AppBar, Collapse } from "@material-ui/core";
import { Alert, IconButton } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: { position: "fixed", width: "100%", bottom: "50px" },

  standardSuccess: {
    backgroundColor: theme.palette.common.beta,
    color: theme.palette.common.beta,
    // "& .MuiSvgIcon-root": {
    //   color: theme.palette.common.light,
    // },
  },
}));

export default function Cookie() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <AppBar position="static" className={classes.root}>
      <Collapse in={open}>
        <Alert
          classes={{ standardSuccess: classes.standardSuccess }}
          action={
            <IconButton
              arial-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          Sanitech cookies. By continuing you are agreeing to our terms of
          cookies
        </Alert>
      </Collapse>
    </AppBar>
  );
}
