import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  quoteIcon: {
    marginLeft: "80px",
    backgroundColor: "green",
    color: "white",
  },
}));
export default function Form() {
  const classes = useStyles();

  const [name, setName] = React.useState(" ");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [phone, setPhone] = React.useState(" ");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <>
      <Box
        // style={backgroundColor:'white'}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ backgroundColor: "white", margin: "auto", padding: "60px" }}
      >
        <Typography
          placeholder={"name"}
          variant="h5"
          color="initial"
          style={{ color: "black", paddingBottom: "30px" }}
        >
          <strong>Request a callback</strong> <br />
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          style={{ color: "black", paddingBottom: "30px" }}
        >
          Send us your name and number and we’ll contact you at the earliest
          convenience. <br />
        </Typography>

        <TextField
        
          id="outlined-name"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
        
          id="outlined-name"
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Box>
          <Button
            className={classes.quoteIcon}
            variant="outlined"
            style={{ backgroundColor: "#2B748C", margin: "auto" }}
            onClick={(e) => {
              // alert("clicked");
              console.log(e.target);
              console.log(e.refs.name.value);
              console.log(e.target.refs.phone);
            }}
          >
            Send Request
          </Button>
        </Box>
      </Box>
      {/* <Box>
     
        <Button
          className={classes.quoteIcon}
          variant="outlined"
          style={{ backgroundColor: "#2B748C", margin: "auto" }}
          onClick={() => {
            alert("clicked");
          }}
        >
          Send Request
        </Button>
      </Box> */}
    </>
  );
}
