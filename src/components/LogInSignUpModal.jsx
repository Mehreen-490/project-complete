import {
  Box,
  Typography,
  Button,
  Paper,
  Tab,
  Tabs,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";

const LogInSignInModal = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  // Styles
  const DialogStyle = {
    width: 420,
    margin: "20px auto",
  };
  const ButtonStyle = {
    borderRadius: "10px",
    color: "#5a6372",
    borderColor: "#5a6372",
    width: "160px",
    minWidth: "160px",
    height: "40px",
    mx: "4px",
    "&:hover": {
      color: "white",
      borderColor: "white",
      borderRadius: "8px",
      transition: "0.5s ease-in",
    },
  };
  return (
    <Box>
      {/* Sign Up & Log In Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        style={ButtonStyle}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "500",
          }}
        >
          SIGN Up | SIGN IN
        </Typography>
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} style={DialogStyle}>
        <Paper>
          <Tabs
            centered
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <Tab label="Sign In" centerRipple />
            <Tab label="Sign Up" centerRipple />
          </Tabs>
          <TabPanel value={value} index={0}>
            {<SignIn handleChange={handleChange} />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {<SignUp />}
          </TabPanel>
        </Paper>

        {/* <DialogTitle> Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You sure You want to submit?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Submit</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default LogInSignInModal;
