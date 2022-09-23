import React from "react";

import { FormGroup, TextField, FormControl, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
      border: "blue",
      padding: "10px",
      // backgroundColor: "grey",
    },
    "& .MuiFormLabel-root": {
      color: '"#2E819C"',
    },
  },
  headingText: {
    paddingBottom: "20px",
    // color: "#2E819C",
    color: "black",
    marginLeft: "20px",
  },
}));

export default function Form() {
  const classes = useStyles();

  const [name, setName] = React.useState(" ");
  const [phone, setPhone] = React.useState(" ");
  const [nameError, setNameError] = React.useState(" ");
  const [phoneError, setPhoneError] = React.useState(" ");

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name);
    console.log(phone);

    setName(" ");
    setPhone(" ");
  
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
  
  };

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" className={classes.headingText}>
        Please enter your number and we shall contact you at the earlierst
        convenience
      </Typography>
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField
          variant="outlined"
          id="outlined-name"
          label="Name"
          type="text"
          onChange={handleNameChange}
          value={name}
        />
        <TextField
          variant="outlined"
          id="outlined-name"
          type="phone"
          label="Phone"
          onChange={handlePhoneChange}
          value={phone}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ color: "#2B748C", paddingLeft: "20px" }}
        >
          Submit
        </Button>
      </form>
      {/* <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert> */}
    </Grid>
  );
}
