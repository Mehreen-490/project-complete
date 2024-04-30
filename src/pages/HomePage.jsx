import React from "react";
import { Box, Tab, Typography, tabsClasses } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { NavLink } from "react-router-dom"; //Routes, Route, Outlet, Link
import { useState } from "react";
import AllTopics from "../components/HomePageComponents/AllTopics";
import FrameWorks from "../components/HomePageComponents/FrameWorks";
import Languages from "../components/HomePageComponents/Languages";
import Techniques from "../components/HomePageComponents/Techniques";

const HomePage = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{}}>
      {/* Header */}
      <Box
        variant="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: {
            sx: "300px",
            sm: "150px",
          },
          mt: "60px",
        }}
      >
        {/* TypoGraphy(Pick Topic) */}
        {/* <Typography
          variant="h3"
          sx={{
            fontFamily: "Cabin, sans-serif",
            fontSize: "39.999px",
            lineHeight: "49.9987px",
            letterSpacing: "0.3px",
            fontWeight: "600",
            mb: "20px",
            textAlign: "center",
          }}
        >
          Pick a topic. Any topic.
        </Typography> */}
        {/* <Box
          sx={{
            diplay: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "600px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "Poppins, Helvetica, Arial, sans-serif",
              fontSize: "16px",
              lineHeight: "22.5px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            If you already know what you're looking for, Laracasts is divided
            into various topics ranging from frameworks to packages to tools.
          </Typography>
        </Box> */}
      </Box>
      {/* Tabs */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#2a2e35",
              maxWidth: { sm: 480, md: 780 },
              minWidth: 200,
            }}
          >
            <TabList
              aria-label="Home-Page-Links"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              // centered={{ md: "true", lg: "true" }}
              TabIndicatorProps={{
                sx: {
                  // bgcolor: "red",
                  backgroundColor: "#8BAAC9",
                  height: 5.5,
                  borderRadius: 4,
                },
              }}
              sx={{
                "& button": { color: "#5a6372" },
                "& button:hover": { color: "white" },
                "& button.Mui-selected": { color: "white" },
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              <Tab label="All Topics" value="1" disableRipple />
              <Tab label="Frameworks" value="2" disableRipple />
              <Tab label="Languages" value="3" disableRipple />
              <Tab label="Techniques" value="4" disableRipple />
            </TabList>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TabPanel value="1">{<AllTopics />}</TabPanel>
            <TabPanel value="2">{<FrameWorks />} </TabPanel>
            <TabPanel value="3">{<Languages />}</TabPanel>
            <TabPanel value="4">{<Techniques />}</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default HomePage;
//eslint-disable-next-line
//  <Box
//    sx={{
//      display: "flex",
//      alignItems: "center",
//      justifyContent: "center",
//      overflowX: "hidden",
//    }}
//  >
//    {/* All Topics Link */}
//    <Typography
//      component={NavLink}
//      to="/all"
//      sx={{
//        width: "100px",
//        display: "flex",
//        alignItems: "center",
//        justifyContent: "center",
//        mx: {
//          sm: "10px",
//          md: "14px",
//        },
//        borderBottom: "6px solid transparent",
//        "&:hover": {
//          borderBottom: "6px solid #8BAAC9",
//          borderRadius: "3px",
//        },
//      }}
//      style={({ isActive }) => ({
//        color: isActive ? "white" : "#5a6372",
//        borderBottom: isActive ? "6px solid #8BAAC9" : "",
//        borderRadius: "3px",
//        transition: "0.5s ease-in",
//      })}
//    >
//      <Typography
//        sx={{
//          fontFamily: "Poppins, sans-serif",
//          fontSize: "14.01px",
//          lineHeight: "21.015px",
//          fontWeight: "500",
//          color: "#5a6372",
//          py: "10px",
//          "&:hover": {
//            color: "white",
//          },
//        }}
//      >
//        All Topics
//      </Typography>
//    </Typography>
//    {/* Frameworks Link */}
//    <Typography
//      component={NavLink}
//      to="/frameworks"
//      sx={{
//        width: "100px",
//        display: "flex",
//        alignItems: "center",
//        justifyContent: "center",
//        mx: {
//          sm: "10px",
//          md: "14px",
//        },
//        borderBottom: "6px solid transparent",
//        "&:hover": {
//          borderBottom: "6px solid #8BAAC9",
//          borderRadius: "3px",
//          // bgcolor: "red",
//        },
//      }}
//      style={({ isActive }) => ({
//        color: isActive ? "white" : "#5a6372",
//        borderBottom: isActive ? "6px solid #8BAAC9" : "",
//        borderRadius: "3px",
//        transition: "0.5s ease-in",
//      })}
//    >
//      <Typography
//        sx={{
//          fontFamily: "Poppins, sans-serif",
//          fontSize: "14.01px",
//          lineHeight: "21.015px",
//          fontWeight: "500",
//          color: "#5a6372",
//          py: "10px",
//          "&:hover": {
//            color: "white",
//          },
//        }}
//      >
//        Frameworks
//      </Typography>
//    </Typography>
//    {/* Languages Link */}
//    <Typography
//      component={NavLink}
//      to="/languages"
//      sx={{
//        width: "100px",
//        display: "flex",
//        alignItems: "center",
//        justifyContent: "center",
//        mx: {
//          sm: "10px",
//          md: "14px",
//        },
//        borderBottom: "6px solid transparent",
//        "&:hover": {
//          borderBottom: "6px solid #8BAAC9",
//          borderRadius: "3px",
//          // bgcolor: "red",
//        },
//      }}
//      style={({ isActive }) => ({
//        color: isActive ? "white" : "#5a6372",
//        borderBottom: isActive ? "6px solid #8BAAC9" : "",
//        borderRadius: "3px",
//        transition: "0.5s ease-in",
//      })}
//    >
//      <Typography
//        sx={{
//          fontFamily: "Poppins, sans-serif",
//          fontSize: "14.01px",
//          lineHeight: "21.015px",
//          fontWeight: "500",
//          color: "#5a6372",
//          py: "10px",
//          "&:hover": {
//            color: "white",
//          },
//        }}
//      >
//        Languages
//      </Typography>
//    </Typography>
//    {/* Techniques Link */}
//    <Typography
//      component={NavLink}
//      to="/techniques"
//      sx={{
//        width: "100px",
//        display: "flex",
//        alignItems: "center",
//        justifyContent: "center",
//        mx: {
//          sm: "10px",
//          md: "14px",
//        },
//        borderBottom: "6px solid transparent",
//        "&:hover": {
//          borderBottom: "6px solid #8BAAC9",
//          borderRadius: "3px",
//          // bgcolor: "red",
//        },
//      }}
//      style={({ isActive }) => ({
//        color: isActive ? "white" : "#5a6372",
//        borderBottom: isActive ? "6px solid #8BAAC9" : "",
//        borderRadius: "3px",
//        transition: "0.5s ease-in",
//      })}
//    >
//      <Typography
//        sx={{
//          fontFamily: "Poppins, sans-serif",
//          fontSize: "14.01px",
//          lineHeight: "21.015px",
//          fontWeight: "500",
//          color: "#5a6372",
//          py: "10px",
//          "&:hover": {
//            color: "white",
//          },
//        }}
//      >
//        Techniques
//      </Typography>
//    </Typography>
//  </Box>;
