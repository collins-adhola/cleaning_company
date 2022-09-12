import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@material-ui/core";

export default function Form() {
  const [name, setName] = React.useState("Name");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [phone, setPhone] = React.useState("Enter your phone number");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <Box
      // style={backgroundColor:'white'}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ backgroundColor: "white" }}
    >
      <Typography variant="h5" color="initial" style={{ color: "black" }}>
        Request a callback
      </Typography>
      <Typography variant="h5" color="initial" style={{ color: "black" }}>
        Send us your name and number and we’ll contact you at the earliest
        convenience.
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
    </Box>
  );
}
