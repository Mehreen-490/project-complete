import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import images from "../assests/images";
import { useState } from "react";
const SignUp = () => {
  // UseState
  const [value, setValue] = useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // Styles
  const paperStyle = {
    padding: "30px 20px",
    width: 350,
    height: "75.8vh",
    margin: "0px auto",
  };
  const MarginStyle = { marginBottom: 3 };
  return (
    <Box>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar
            src={images.user}
            style={MarginStyle}
            sx={{ width: 60, height: 60 }}
          />
          <Typography
            variant="h4"
            style={MarginStyle}
            sx={{ fontWeight: "700" }}
          >
            Sign Up
          </Typography>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        {/* TextFields, RadioControls, CheckBox */}
        <form>
          {/* Name */}
          <TextField
            style={MarginStyle}
            variant="standard"
            fullWidth
            label="Name"
            placeholder="Enter Name....."
          />
          {/* Email */}
          <TextField
            style={MarginStyle}
            variant="standard"
            fullWidth
            label="Email"
            placeholder="Enter Email....."
          />
          {/* Radio Controls */}
          <FormControl style={MarginStyle}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              sx={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          {/* Password */}
          <TextField
            style={MarginStyle}
            variant="standard"
            fullWidth
            label="Password"
            placeholder="Enter Password....."
          />
          {/* Confirm Password */}
          <TextField
            style={MarginStyle}
            variant="standard"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm Password....."
          />
          {/* CheckBox */}
          <FormGroup style={MarginStyle}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I accept the terms and conditions."
            />
          </FormGroup>
          {/* Submit Button */}
          <Button
            style={MarginStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
