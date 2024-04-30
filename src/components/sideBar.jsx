import { Box, Avatar, Typography, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListIcon from "@mui/icons-material/List";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { getSerieData } from "../api/series";
import ReactPlayer from "react-player";
import { useState } from "react";
import { NavLink } from "react-router-dom"; //Routes, Route, Outlet, Link
import images from "../assests/images";
const SideBar = () => {
  const SectionData = getSerieData();
  const [isHovering, setIsHovering] = useState("");
  const [show, setShow] = useState([]);
  const [showSideBar, setIsShowSideBar] = useState(false);

  // useEffect(() => {
  //   console.log("show", show);
  // }, [show]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* SideBar */}
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: {
            xs: showSideBar ? "100%" : "0%",
            lg: "300px",
          },
          background: "linear-gradient(to bottom, #12181b 0%, #171e26 100%)",
          borderRight: "1px solid #2a2e35",
        }}
      >
        <NavLink to="/">
          {/* Series Overview*/}
          <Box
            sx={{
              display: "flex",
              height: "60px",
              alignItems: "center",
              // marginBottom: "15px",
              mt: "8px",
            }}
          >
            {/* BackArrowIcon, Typography(Series OverView) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "#328af1",
                },
              }}
            >
              {/* Arrow */}
              <ArrowBackIosNewIcon
                sx={{
                  fontSize: "18px",
                  marginLeft: "25px",
                  mr: "4px",
                  "&:hover": {
                    color: "#328af1",
                  },
                }}
              />
              {/* Typography(Series Overview) */}
              <Typography
                py={0.5}
                component="span"
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontWeight: "700",
                }}
              >
                Series Overview
              </Typography>
            </Box>
            {/* LogoWhiteArrow Box */}
            <Box sx={{ ml: "auto", mr: "8px" }}>
              {/* LogoWhiteArrow */}
              <Avatar
                src={images.logoWhiteArrow}
                sx={{
                  width: "40px",
                  display: {
                    xs: "none",
                    lg: "block",
                  },
                }}
              />
            </Box>
            {/* CloseIcon Box */}
            <Box
              onClick={() => setIsShowSideBar(false)}
              sx={{
                ml: "auto",
                width: "70px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* CloseIcon */}
              <CloseIcon
                fontSize="medium"
                sx={{
                  display: {
                    sx: "block",
                    lg: "none",
                  },
                  "&:hover": {
                    color: "#4f5664",
                  },
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </NavLink>

        {/* Header*/}
        <Box>
          <Box sx={{ display: "flex", mb: "20px" }}>
            <Box>
              <Avatar
                src={images.wordleWorkshop}
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "0px",
                  marginLeft: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mx: "14px",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: "700",
                }}
              >
                Wordle Workshop
              </Typography>
              <Box sx={{ display: "flex", marginTop: "8px", color: "#78909c" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "4px",
                  }}
                >
                  <Avatar
                    src={images.book}
                    sx={{
                      width: "14px",
                      height: "14px",
                      mr: "4px",
                      color: "white",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "9px",
                      lineHeight: "13.5px",
                      fontWeight: "600",
                    }}
                  >
                    17 Lessons
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={images.clock}
                    sx={{
                      width: "14px",
                      height: "14px",
                      mr: "4px",
                      color: "#78909c",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "9px",
                      lineHeight: "13.5px",
                      fontWeight: "600",
                    }}
                  >
                    2h 21m
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Sections & Episodes*/}
        <Box>
          {SectionData.map((data, key) => (
            <Box sx={{ display: "flex", flexDirection: "column" }} key={key}>
              {/* All Sections */}
              <Box
                onMouseEnter={() => {
                  setIsHovering(data.id);
                }}
                onMouseLeave={() => {
                  setIsHovering("");
                }}
                onClick={() => {
                  // setShow(!show);
                  // console.log("start");
                  console.log("isHovering", isHovering);
                  let showClone = show;
                  if (!showClone.includes(data.id)) {
                    showClone.push(data.id);
                  } else {
                    let index = showClone.indexOf(data.id);
                    showClone.splice(index, 1);
                  }
                  setShow([...showClone]);
                }}
              >
                {/* Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "40px",
                    borderRadius: "14px",
                    ml: "8px",
                    mr: "14px",
                    mb: "10px",
                    pl: "15px",
                    bgcolor: "#2A2E35",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#383e47",
                    },
                  }}
                >
                  <Box>
                    {/* Section No. */}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "Cabin, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        letterSpacing: "0.3px",
                        fontWeight: "600",
                      }}
                    >
                      Section {data.id}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "Cabin, sans-serif",
                        fontSize: "18px",
                        lineHeight: "18px",
                        letterSpacing: "0.3px",
                        fontWeight: "600",
                        color: "gray",
                        mx: "10px",
                      }}
                    >
                      |
                    </Typography>
                    {/* Section Title */}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "Cabin, sans-serif",
                        fontSize: "12px",
                        lineHeight: "18px",
                        letterSpacing: "0.3px",
                        fontWeight: "600",
                      }}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                  {/* Arrow Up Icon Box */}
                  <Box
                    hidden={isHovering !== data.id}
                    sx={{
                      marginLeft: "auto",
                      marginRight: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        width: "25px",
                        height: "25px",
                        background:
                          "linear-gradient(to bottom, #4f5764 0%,#5a6472 50%,#657081 100%)",
                        ml: "20px",
                      }}
                    >
                      {show.indexOf(data.id) !== -1 ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowUpIcon />
                      )}
                    </Box>
                  </Box>
                </Box>
                {/* All Episodes */}
                <Box hidden={show.includes(data.id)}>
                  {data.episodes.map((episode, key) => (
                    <Box key={key}>
                      {/* Episode */}
                      <Box
                        sx={{
                          display: "flex",
                          width: {
                            xs: "98%",
                            lg: "93.5%",
                          },
                          background: "inherit",
                          border: "1px solid inherit",
                          borderRadius: "16px",
                          height: "50px",
                          cursor: "pointer",
                          alignItems: "center",
                          transitionProperty:
                            "background-color, border-color, color, fill, stroke",
                          transitionDuration: "1s",
                          px: {
                            xs: "10px",
                            lg: "6px",
                          },
                          mb: "5px",
                          mx: {
                            xs: "10px",
                            lg: "5px",
                          },
                          mr: {
                            lg: "6px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient(to right, #2d3139 0%,#383e47 50%,#434a56 100%)",
                            border: "0.4px solid white",
                          },
                        }}
                      >
                        {/* Episode Num */}
                        <Box
                          component="div"
                          sx={{
                            border: "1px solid white",
                            px: "6px",
                            py: "4px",
                            borderRadius: "30px",
                            mx: "4px",
                          }}
                        >
                          {episode.num}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            mx: "5px",
                          }}
                        >
                          {/* Episode Title */}
                          <Box
                            component="div"
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "11px",
                              lineHeight: "16.5px",
                              fontWeight: "600px",
                            }}
                          >
                            {episode.ep_title}
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              marginTop: "8px",
                              color: "#78909c",
                            }}
                          >
                            {/* Episode Number */}
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily:
                                    "Poppins, Helvetica, Arial, sans-serif",
                                  fontSize: "9px",
                                  lineHeight: "13.5px",
                                  fontWeight: "600",
                                }}
                              >
                                {episode.ep_num}
                              </Typography>
                            </Box>
                            {/* Episode Time */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar
                                src={images.clock}
                                sx={{
                                  width: "14px",
                                  height: "14px",
                                  mr: "2px",
                                  ml: "4px",
                                  color: "#78909c",
                                }}
                              />
                              <Typography
                                sx={{
                                  fontFamily:
                                    "Poppins, Helvetica, Arial, sans-serif",
                                  fontSize: "9px",
                                  lineHeight: "13.5px",
                                  fontWeight: "600",
                                }}
                              >
                                {episode.ep_time}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Part */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: !showSideBar ? "100%" : "0%",
            lg: "80%",
          },
          height: "100vh",
          bgcolor: "inherit",
          overflowY: "scroll",
          overflowX: "hidden",
          pb: "30px",
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            background: "#2a2e35",
          }}
        >
          {/* Laracasts Typograpghy */}
          <Box sx={{ flex: "92" }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "750",
                letterSpacing: "3px",
                mx: "20px",
                my: "17px",
                cursor: "pointer",
              }}
            >
              LARACASTS
            </Typography>
          </Box>
          {/* Serach Icon */}
          <Box sx={{ flex: "8" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "12px",
                justifyContent: "center",
                bgcolor: " #383e47",
                width: "42px",
                height: "40px",
                cursor: "pointer",
                ml: "20px",
                "&:hover": {
                  border: "2px solid  #1d2b44",
                  color: " #1d2b44",
                  background: "linear-gradient(45deg, #2a2e35 , #8d96a5)",
                },
              }}
            >
              <SearchIcon
                sx={{
                  fontWeight: "100",
                  "&:hover": { color: " #16191d" },
                }}
              />
            </Box>
          </Box>
          {/* Sign In Typography */}
          <Box sx={{ flex: "8" }}>
            <Typography
              component="a"
              sx={{
                fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                fontSize: "12px",
                fontWeight: "500px",
                lineHeight: "18px",
                cursor: "pointer",
                letterSpacing: "normal",
                "&:hover": {
                  color: "white",
                  textDecoration: "underline",
                  textShadow: "none",
                },
              }}
            >
              SIGN IN
            </Typography>
          </Box>
        </Box>
        {/* Video Player */}
        <Box>
          <Box
            sx={{
              width: "100%",
              height: "600px",
              bgcolor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ReactPlayer
                controls
                width="88%"
                height="600px"
                url="E:\new_folder\EPS\code breaker"
              />
            </Box>
          </Box>
        </Box>
        {/* Toggle Episode List */}
        <Box
          onClick={() => setIsShowSideBar(true)}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "60px",
            mt: "20px",
            mb: "8px",
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: {
                xs: "94%",
                sm: "94%",
                md: "94%",
                lg: "96%",
                xl: "96%",
              },
              background: "#2a2e35",
              borderRadius: "15px",
            }}
          >
            {/* ListIcon */}
            <Box sx={{ flex: "5 " }}>
              <ListIcon
                sx={{
                  ml: "10px",
                  color: "#656f81",
                  width: "70px",
                  height: "70px",
                }}
              />
            </Box>
            {/* Toggle Typography */}
            <Box
              sx={{
                flex: "92",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // bgcolor: "aqua",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSIze: "11.2px",
                  lineHeight: "16.8px",
                  fontWeight: "700",
                  pr: "30px",
                }}
              >
                Toggle Episode List
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Series Introduction */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* WordleWorkshop Background Image*/}
            <Box
              component="div"
              sx={{
                my: "20px",
                width: {
                  xs: "94%",
                  sm: "94%",
                  md: "94%",
                  lg: "96%",
                  xl: "96%",
                },
                height: "200px",
                backgroundImage: `url(${images.wordleWorkshop})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                position: "relative",
              }}
            >
              {/* Yellow Box */}
              <Box
                sx={{
                  position: "absolute",
                  background:
                    "linear-gradient(to right, #F29C1C 0%,#F6A926 50%, #FEC63B 100%)",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "200px",
                  opacity: "0.9",
                  borderRadius: "20px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  {/* ArrowBackIosIcon */}
                  <Box
                    sx={{
                      width: {
                        // xs: "6%",
                        // sm: "6%",
                        md: "8%",
                        lg: "8%",
                        xl: "8%",
                      },
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(360deg, #f7b23b 0%,#f5b656 50%, #f7c06e 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pl: "8px",
                        "&:hover": {
                          background:
                            "linear-gradient(360deg,  #f8bc54 0%, #f9c56c 50%,#facf85 100%)",
                        },
                      }}
                    >
                      <ArrowBackIosIcon />
                    </Box>
                  </Box>

                  {/* Series Information Heading & Detail */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: "20px",
                    }}
                  >
                    {/* Series introduction Heading*/}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "80px",
                        mt: "30px",
                      }}
                    >
                      {/* FavoriteIcon  Box */}
                      <Box
                        sx={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "20px",
                          background:
                            "linear-gradient(360deg, #f7b23b 0%,#f5b656 50%, #f7c06e 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: "15px",
                          "&:hover": {
                            background:
                              "linear-gradient(360deg,  #f8bc54 0%, #f9c56c 50%,#facf85 100%)",
                          },
                        }}
                      >
                        {/* FavoriteIcon */}
                        <FavoriteIcon fontSize="small" />
                      </Box>
                      {/* Typography (Series Introduction) */}
                      <Typography
                        sx={{
                          fontFamily: "Cabin, sans-serif",
                          fontSize: "33px",
                          lineHeight: "41.25px",
                          letterSpacing: "0.3px",
                          fontWeight: "700",
                        }}
                      >
                        Series Introduction
                      </Typography>
                    </Box>
                    {/* Seies Introduction Details */}
                    <Box sx={{ mt: "20px", display: "flex" }}>
                      {/* Episode Info */}
                      <Box
                        sx={{
                          height: "60px",
                          width: "70px",
                          mx: "10px",
                          borderRight: "1px solid #f8bc54",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamil: "Cabin, sans-serif",
                            fontSize: "9.99px",
                            lineHeight: "14.9985px",
                            fontWeight: "500",
                            mb: "10px",
                          }}
                        >
                          Episode
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                            fontSize: "13.005px",
                            lineHeight: "19.5075px",
                            fontWeight: "600",
                            letterSpacing: "normal",
                          }}
                        >
                          01
                        </Typography>
                      </Box>
                      {/* Time Info */}
                      <Box
                        sx={{
                          height: "60px",
                          width: "70px",
                          mx: "10px",
                          borderRight: "1px solid #f8bc54",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamil: "Cabin, sans-serif",
                            fontSize: "9.99px",
                            lineHeight: "14.9985px",
                            fontWeight: "500",
                            mb: "10px",
                          }}
                        >
                          Run Time
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                            fontSize: "13.005px",
                            lineHeight: "19.5075px",
                            fontWeight: "600",
                            letterSpacing: "normal",
                          }}
                        >
                          0:59
                        </Typography>
                      </Box>
                      {/* Published Date Info */}
                      <Box
                        sx={{
                          height: "60px",
                          width: "100px",
                          mx: "10px",
                          borderRight: "1px solid #f8bc54",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamil: "Cabin, sans-serif",
                            fontSize: "9.99px",
                            lineHeight: "14.9985px",
                            fontWeight: "500",
                            mb: "10px",
                          }}
                        >
                          Published
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                            fontSize: "13.005px",
                            lineHeight: "19.5075px",
                            fontWeight: "600",
                            letterSpacing: "normal",
                          }}
                        >
                          Mar 10th, 2022
                        </Typography>
                      </Box>
                      {/* Topic Info */}
                      <Box
                        sx={{
                          height: "60px",
                          width: "70px",
                          mx: "10px",
                          // borderRight: "1px solid #f8bc54",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamil: "Cabin, sans-serif",
                            fontSize: "9.99px",
                            lineHeight: "14.9985px",
                            fontWeight: "500",
                            mb: "10px",
                          }}
                        >
                          Topic
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                            fontSize: "13.005px",
                            lineHeight: "19.5075px",
                            fontWeight: "600",
                            letterSpacing: "normal",
                          }}
                        >
                          JavaScript
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {/* ArrowForwardIosIcon */}
                  <Box
                    sx={{
                      marginLeft: "auto",
                      width: "8%",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(360deg, #fecc4d 0%,#fed367 50%, #fedb80 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          background:
                            "linear-gradient(360deg,#fed367 0%, #fedb80 50%, #fee29a 100%)",
                        },
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Teacher's Info */}
        <Box
          sx={{
            // my: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "94%",
                sm: "94%",
                md: "94%",
                lg: "70%",
              },
              height: {
                xs: "200px",
                sm: "200px",
                md: "160px",
                lg: "160px",
                xl: "160px",
              },
              background: "#2a2e35",
              borderRadius: "20px",
              py: "10px",
              px: {
                xs: "20px",
                sm: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
              },
              "&:hover": {
                background: "#383e47",
              },
            }}
          >
            {/* Teacher Name, Twitter Icon, GitHub, Chip */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                height: "50px",
              }}
            >
              {/* Teacher Name */}
              <Box sx={{ flex: "60" }}>
                <Typography
                  sx={{
                    fontFamily: "Cabin, sans-serif",
                    fontSize: "15px",
                    lineHeight: "23px",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}
                >
                  YOUR TEACHER | Jeffrey Way
                </Typography>
              </Box>
              {/* Twitter Icon, GithubIcon, Chip(Visit Website) */}
              <Box
                sx={{
                  flex: "40",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  justifyContent: "flex-end",
                }}
              >
                {/* TwitterIcon */}
                <Box
                  sx={{
                    background: "white",
                    color: "#2a2e35",
                    width: "30px",
                    height: "30px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TwitterIcon
                    sx={{
                      fontsize: "10px",
                      "&:hover": {
                        color: "#2a2e35",
                      },
                    }}
                  />
                </Box>
                {/* GitHubIcon */}
                <GitHubIcon sx={{ fontSize: "30px", mx: "6px" }} />
                {/* Chip For Visiting Website */}
                <Chip
                  label="Visit Website"
                  sx={{
                    color: "white",
                    background: "	 #434a56",
                    width: "110px",
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "9.999px",
                    lineHeight: "9.999px",
                    letterSpacing: "0.3px",
                    fontWeight: "600",
                    "&:hover": {
                      color: "#22252b",
                      fontSize: "10px",
                      fontWeight: "800",
                    },
                  }}
                />
              </Box>
            </Box>
            {/* Avatar, About Teacher */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "85%",
                // flex: "wrap",
              }}
            >
              {/* Avatar */}
              <Avatar
                src={images.jeffreyWay}
                sx={{
                  height: "75px",
                  width: "75px",
                  border: "5px solid #FFC73C",
                  mr: "10px",
                }}
              />
              {/* About Teacher */}
              <Typography
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSize: "13.005px",
                  lineHeight: "19.5075px",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  // bgcolor: "red",
                }}
              >
                Hi, I'm Jeffrey. I'm the creator of Laracasts and spend most of
                my days building the site and thinking of new ways to teach
                confusing concepts. I live in Orlando, Florida with my wife and
                two kids.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Things You'll Learn, About This Episode */}
        <Box
          sx={{
            display: "flex",
            my: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
          }}
        >
          {/* Things You'll Learn */}
          <Box
            sx={{
              mr: {
                lg: "10px",
                xl: "10px",
              },
              mb: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "0px",
                xl: "0px",
              },
              width: {
                xs: "94%",
                md: "94%",
                lg: "24%",
                xl: "24%",
              },
              minWidth: "200px",
              height: {
                xs: "170px",
                md: "170px",
                lg: "270px",
                xl: "270px",
              },
              bgcolor: "#2a2e35",
              borderRadius: "20px",
              px: "20px",
              py: "30px",
              "&:hover": {
                background: "#383e47",
              },
            }}
          >
            <Box>
              {/* Typography */}
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "15.999px",
                  lineHeight: "23.9985px",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                }}
              >
                Things You'll Learn
              </Typography>
            </Box>
            <Box sx={{ display: "flex", my: "10px" }}>
              {/* CheckMark */}
              <Avatar
                src={images.checkMark}
                sx={{ width: "20px", height: "20px" }}
              />
              {/* Typography */}
              <Typography
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSize: "13.005px",
                  lineHeight: "19.5075px",
                  letterSpacing: "normal",
                  fontWeight: "600",
                  px: "10px",
                }}
              >
                TryCat Inspiration
              </Typography>
            </Box>
          </Box>
          {/* About This Episode */}
          <Box
            sx={{
              width: {
                xs: "94%",
                sm: "94%",
                md: "94%",
                lg: "43%",
                xl: "43%",
              },
              height: {
                xs: "300px",
                sm: "270px",
                md: "270px",
                lg: "270px",
                xl: "270px",
              },
              bgcolor: "#2a2e35",
              borderRadius: "20px",
              px: "20px",
              py: "30px",
              "&:hover": {
                background: "#383e47",
              },
            }}
          >
            {/* Title, Publishing Date */}
            <Box sx={{ display: "flex", mb: "10px", flex: "wrap" }}>
              {/* Title */}
              <Typography
                sx={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "15.999px",
                  lineHeight: "23.9985px",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                }}
              >
                About This Episode
              </Typography>
              {/* Publishing Date */}
              <Typography
                sx={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "9.999px",
                  lineHeight: "14.9985px",
                  fontWeight: "700",
                  marginLeft: "auto",
                  color: "#4f5664",
                }}
              >
                Published on Mar 10th, 2022
              </Typography>
            </Box>
            {/* About Details */}
            <Box>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSize: "13.005px",
                  lineHeight: "21.4583px",
                  fontWeight: "550",
                  mb: "10px",
                }}
              >
                Lately, my five year old daughter has constantly been asking me
                to make paper Wordles for her. These challenges usually consist
                of simple, three-letter sight words that she can instantly
                recognize.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                  fontSize: "13.005px",
                  lineHeight: "21.4583px",
                  fontWeight: "550",
                }}
              >
                One day, it suddenly occurred to me that maybe I should program
                a kid-friendly clone of Wordle so that I can stop drawing paper
                grids every morning! And now here we are...
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Download Video & Series Wallpaper */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointer: "cursor",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          {/* Download Video */}
          <Box
            sx={{
              height: "160px",
              bgcolor: "#2a2e35",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              width: {
                xs: "94%",
                sm: "94%",
                md: "47%",
                lg: "33.5%",
                xl: "33.5%",
              },
              "&:hover": {
                background: "#383e47",
              },
              mr: {
                md: "10px",
                lg: "10px",
                xl: "10px",
              },
              mb: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
            }}
          >
            {/* Download icon */}
            <Avatar
              src={images.download}
              sx={{ width: "70px", height: "70px" }}
            />
            {/* Typography Download Video*/}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "13.005px",
                lineHeight: "19.5075px",
                fontWeight: "600",
                letterSpacing: "0.3px",
                my: "4px",
              }}
            >
              Download this video.
            </Typography>
          </Box>
          {/* Download Series Wallpaper */}
          <Box
            sx={{
              height: "160px",
              bgcolor: "#2a2e35",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              width: {
                xs: "94%",
                sm: "94%",
                md: "47%",
                lg: "33.5%",
                xl: "33.5%",
              },
              "&:hover": {
                background: "#383e47",
              },
            }}
          >
            {/* Download icon */}
            <Avatar
              src={images.download}
              sx={{ width: "70px", height: "70px" }}
            />
            {/* Typography Download Series*/}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "13.005px",
                lineHeight: "19.5075px",
                fontWeight: "600",
                letterSpacing: "0.3px",
                my: "4px",
              }}
            >
              Download series wallpaper.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
//  <Box
//    sx={{
//      display: "flex",
//      height: "60px",
//      alignItems: "center",
//      marginBottom: "15px",
//    }}
//  >
//    <Box
//      sx={{
//        display: "flex",
//        alignItems: "center",
//      }}
//    >
//      <Box
//        sx={{
//          display: "flex",
//          alignItems: "center",
//          width: "100%",
//          bgcolor: "red",
//          "&:hover": {
//            color: "#328af1",
//          },
//        }}
//      >
//        {/* Arrow */}
//        <ArrowBackIosNewIcon
//          sx={{
//            fontSize: "18px",
//            fontWeight: "700",
//            marginLeft: "25px",
//            "&:hover": {
//              color: "#328af1",
//            },
//          }}
//        />
//        {/* typography(Series Overview) */}
//        <Typography
//          py={0.5}
//          component="span"
//          sx={{
//            fontFamily: "Poppins, Helvetica, Arial, sans-serif",
//            fontSize: "12px",
//            lineHeight: "18px",
//            fontWeight: "700",
//          }}
//        >
//          Series Overview
//        </Typography>
//      </Box>
//      {/* LogoWhiteArrow */}
//      <Box sx={{ bgcolor: "red" }}>
//        <Avatar
//          src={images.logoWhiteArrow}
//          sx={{
//            width: "40px",
//            // ml: "80px",
//            display: {
//              xs: "none",
//              lg: "block",
//            },
//          }}
//        />
//      </Box>
//    </Box>
//    {/* CloseIcon Box */}
//    <Box
//      onClick={() => setIsShowSideBar(false)}
//      sx={{
//        ml: "auto",
//        width: "70px",
//        height: "70px",
//        display: "flex",
//        alignItems: "center",
//        justifyContent: "center",
//      }}
//    >
//      {/* CloseIcon */}
//      <CloseIcon
//        fontSize="medium"
//        sx={{
//          display: {
//            sx: "block",
//            lg: "none",
//          },
//          "&:hover": {
//            color: "#4f5664",
//          },
//          cursor: "pointer",
//        }}
//      />
//    </Box>
//  </Box>;
