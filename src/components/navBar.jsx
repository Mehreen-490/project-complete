import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; //Routes, Route, Outlet, Link
import { NavLink } from "react-router-dom"; //Routes, Route, Outlet, Link
import "../App.css";
import LogInSignUpModal from "./LogInSignUpModal";
import images from "../assests/images";
const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ background: "inherit" }}>
        <Toolbar sx={{ background: "inherit", height: "90px" }}>
          {/* HomeLink */}
          <Link to="/" end>
            <Typography
              sx={{
                ml: "auto",
                fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                fontSize: "20px",
                lineHeight: "15px",
                fontWeight: "600",
                letterSpacing: "1.7px",
              }}
            >
              LARACASTS
            </Typography>
          </Link>
          {/* NavLinks (Courses,Labs,Series)*/}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              justifyContent: {
                md: "flex-start",
                lg: "center",
              },
              mt: "4px",
              height: "100%",
              width: "90%",
            }}
          >
            {/* CoursesLink */}
            <Typography
              component={NavLink}
              to="/courses"
              sx={{
                width: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: {
                  sm: "10px",
                  md: "14px",
                },
                borderBottom: "6px solid transparent",
                "&:hover": {
                  borderBottom: "6px solid #8BAAC9",
                  borderRadius: "3px",
                  // bgcolor: "red",
                },
              }}
              style={({ isActive }) => ({
                color: isActive ? "white" : "#5a6372",
                borderBottom: isActive ? "6px solid #8BAAC9" : "",
                borderRadius: "3px",
                transition: "0.5s ease-in",
              })}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.01px",
                  lineHeight: "21.015px",
                  fontWeight: "500",
                  color: "#5a6372",
                  py: "10px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                TOPICS
              </Typography>
            </Typography>

            {/* LabsLink */}
            <Typography
              component={NavLink}
              to="/labs"
              sx={{
                width: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: {
                  sm: "10px",
                  md: "14px",
                },
                borderBottom: "6px solid transparent",
                "&:hover": {
                  borderBottom: "6px solid #8BAAC9",
                  borderRadius: "3px",
                },
              }}
              style={({ isActive }) => ({
                color: isActive ? "#ffffff" : "#5a6372",
                borderBottom: isActive ? "6px solid #8BAAC9" : "",
                borderRadius: "3px",
                transition: "0.5s ease-in",
              })}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.01px",
                  lineHeight: "21.015px",
                  fontWeight: "500",
                  color: "#5a6372",
                  py: "10px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                LABS
              </Typography>
            </Typography>

            {/* SeriesLink */}
            <Typography
              component={NavLink}
              to="/series"
              sx={{
                width: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: {
                  sm: "10px",
                  md: "14px",
                },
                borderBottom: "6px solid transparent",
                "&:hover": {
                  borderBottom: "6px solid #8BAAC9",
                  borderRadius: "3px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.01px",
                  lineHeight: "21.015px",
                  fontWeight: "500",
                  color: "#5a6372",
                  py: "10px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                SERIES
              </Typography>
            </Typography>
            {/* AllLinksLink */}
            <Typography
              component={NavLink}
              to="/links"
              sx={{
                width: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: {
                  sm: "10px",
                  md: "14px",
                },
                borderBottom: "6px solid transparent",
                "&:hover": {
                  borderBottom: "6px solid #8BAAC9",
                  borderRadius: "3px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.01px",
                  lineHeight: "21.015px",
                  fontWeight: "500",
                  color: "#5a6372",
                  py: "10px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                All Links
              </Typography>
            </Typography>
          </Box>
          {/* SignUp, SignIn Buttons */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              height: "100%",
              width: "240px",
              alignItems: "center",
              justifyContent: "flex-end",
              // bgcolor: "red",
              ml: "auto",
            }}
          >
            {/* LogInSignUpModal */}
            <LogInSignUpModal />
          </Box>
          {/* Menu Icon Box */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              // bgcolor: "red",
              ml: "auto",
            }}
          >
            {/* Menu Icon */}
            <Avatar
              src={images.menu}
              sx={{ width: "60px", height: "60px", borderRadius: "0px" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
// eslint-disable-next-line
{
  /*
  sx={{ borderBottom: path === to ? "6px solid red" : "" }}
   <AppBar
        elevation={0}
        sx={{ background: "inherit", marginTop: "15px" }}
        position="static"
      >
        <Toolbar disableGutters>
          <IconButton>
            <NavLink to="/">
              <LocalFireDepartmentIcon
                sx={{
                  fontSize: "60px",
                  marginLeft: "10px",
                  backgroundImage: "linear-gradient(red, yellow)",
                  borderRadius: "16px",
                }}
              ></LocalFireDepartmentIcon>
            </NavLink>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "80px",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <Typography varriant="h3" component="h3" placement="right">
              <NavLink to="/courses">courses</NavLink>
            </Typography>

            <Typography varriant="h3" component="h3" placement="right">
              <NavLink to="/labs">labs</NavLink>
            </Typography>
            <Typography varriant="h3" component="h3" placement="right">
              <NavLink to="/series">series</NavLink>
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                background: "white",
                color: "black",
                borderRadius: "0",
                fontWeight: "800",
                fontFamily: "cubano, sans-serif",
                fontSize: "16.25px",
                px: "10px",
                py: "8px",
                "&:hover": {
                  background: "#9333ea",
                  color: "white",
                },
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Toolbar>
      </AppBar> */
}
