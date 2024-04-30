import React from "react";
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import images from "../assests/images";
const LabsPage = () => {
  const chapterCards = [
    {
      id: 1,
      num: "01",
      title: "README",
      description: "Watch this video before starting the course!",
      image: images.police,
    },
    {
      id: 2,
      num: "02",
      title: "REACT BASICS",
      description:
        "Learn the fundamentals of Firebase Authentication, Firestore, and Storage",
      image: images.atom,
    },
    {
      id: 3,
      num: "03",
      title: "FIREBASE BASICS",
      description:
        "Learn the fundamentals of Next.js and server-side rendering",
      image: images.fire,
    },
    {
      id: 4,
      num: "04",
      title: "NEXT.JS BASICS",
      description:
        "Learn the fundamentals of React.js and reactive UI development",
      image: images.joystick,
    },
    {
      id: 5,
      num: "05",
      title: "TECHNICAL OVERVIEW",
      description: "Blueprint and technical decisions behind the app",
      image: images.dna,
    },
    {
      id: 6,
      num: "06",
      title: "NEXT.JS SETUP",
      description: "Setup a Next.js app and explore the file system",
      image: images.laptop,
    },
    {
      id: 7,
      num: "07",
      title: "REACT BASICS",
      description: "Setup Next.js with TypeScript (optional)",
      image: images.monocole,
    },
    {
      id: 8,
      num: "08",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.fire,
    },
    {
      id: 9,
      num: "09",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.train,
    },
    {
      id: 10,
      num: "10",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.counterclock,
    },
    {
      id: 11,
      num: "11",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.chocolate,
    },
    {
      id: 12,
      num: "12",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.butter,
    },
    {
      id: 13,
      num: "13",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.holdinghand,
    },
    {
      id: 14,
      num: "14",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.silhouette,
    },
    {
      id: 15,
      num: "15",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.globe,
    },
    {
      id: 16,
      num: "16",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.fishingpole,
    },
    {
      id: 17,
      num: "17",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.magnifying,
    },
    {
      id: 18,
      num: "18",
      title: "REACT BASICS",
      description: "Watch this video before starting the course!",
      image: images.floppydisk,
    },
  ];
  return (
    <Box>
      {/* Name Box */}
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: {
            xs: "265px",
            sm: "200px",
            md: "250px",
          },
          // bgcolor: "red",
          flexDirection: "column",
          px: "10px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "40px",
              md: "60px",
            },
            lineHeight: {
              xs: "40px",
              md: "60px",
            },
            fontFamily: "cubano, sans-serif",
            fontWeight: "700",
            marginBottom: {
              xs: "20px",
              md: "10px",
            },
          }}
        >
          NEXT.JS FIREBASE FULL COURSE
        </Typography>
        {/* Description */}
        <Typography
          component="h1"
          sx={{
            color: "#B2BFD0",
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: "400",
            mx: "3px",
            fontFamily: "sofia-pro, sans-serif",
          }}
        >
          Build a full-stack app with React, Firebase, and Next.js
        </Typography>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10px",
          marginTop: "20px",
          marginBottom: "60px",
        }}
      >
        <Typography
          component="div"
          sx={{
            borderBottom: "4px solid #8BAAC9",
            borderRadius: "2px",
            width: "100px",
          }}
        ></Typography>
      </Box>
      {/* Video player Box */}
      <Box
        sx={{
          display: "flex",
          height: {
            md: "400px",
            lg: "600px",
          },
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Video Player */}
        <Box
          sx={{
            width: {
              lg: "980px",
              md: "640px",
              sm: "580px",
              xs: "400px",
            },
            height: {
              lg: "480px",
              md: "360px",
              sm: "360px",
              xs: "320px",
            },
          }}
        >
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
          />
        </Box>
      </Box>
      {/* Maker Picture & Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          width: "100%",
          // marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <Typography componenet="div">
          <Avatar
            alt="Jeff Delaney"
            src={images.jeffdelaney}
            sx={{ width: 56, height: 56 }}
          />
        </Typography>

        <Typography
          componenet="div"
          sx={{
            fontFamily: "sofia-pro, sans-serif",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "8px",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: "400",
            }}
          >
            Taught by Jeff Delaney
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "#6c7983",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "400",
            }}
          >
            That guy from the Fireship YouTube channel
          </Typography>
        </Typography>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10px",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <Typography
          component="div"
          sx={{
            borderBottom: "4px solid #8BAAC9",
            borderRadius: "2px",
            width: "100px",
          }}
        ></Typography>
      </Box>

      {/* Tech Stack Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "60px",
        }}
      >
        {/* Title(Tech Stack) */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "cubano, sans-serif",
            fontSize: "32px",
            lineHeight: "42.67px",
            fontWeight: "800",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          TECH STACK
        </Typography>
        {/* React , NextJS, FireBase Box */}
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* React Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: "5px",
              mx: "5px",
              borderRadius: "25px",
              height: {
                md: "160px",
                sm: "140px",
                xs: "110px",
              },
              width: {
                md: "170px",
                sm: "150px",
                xs: "120px",
              },
              background: "#0d1113",
              borderBottom: "4px solid gray",
            }}
          >
            {/* React Image */}
            <Avatar
              src={images.react}
              sx={{
                height: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                width: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                borderRadius: "80px",
              }}
            />
          </Box>
          {/* NextJS Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: "5px",
              mx: "5px",
              borderRadius: "25px",
              height: {
                md: "160px",
                sm: "140px",
                xs: "110px",
              },
              width: {
                md: "170px",
                sm: "150px",
                xs: "120px",
              },
              background: "#0d1113",
              borderBottom: "4px solid gray",
            }}
          >
            {/* NextJS Image */}
            <Avatar
              src={images.nextj}
              sx={{
                height: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                width: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                borderRadius: "80px",
              }}
            />
          </Box>
          {/* FireBase Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: "5px",
              mx: "5px",
              borderRadius: "25px",
              height: {
                md: "160px",
                sm: "140px",
                xs: "110px",
              },
              width: {
                md: "170px",
                sm: "150px",
                xs: "120px",
              },
              background: "#0d1113",
              borderBottom: "4px solid gray",
            }}
          >
            {/* FireBase Image */}
            <Avatar
              src={images.firebase}
              sx={{
                height: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                width: {
                  md: "100px",
                  sm: "80px",
                  xs: "60px",
                },
                borderRadius: "80px",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10px",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <Typography
          component="div"
          sx={{
            borderBottom: "4px solid #8BAAC9",
            borderRadius: "2px",
            width: "100px",
          }}
        ></Typography>
      </Box>
      {/* Course Intro */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          // bgcolor: "aqua",
        }}
      >
        <Box
          sx={{
            width: {
              md: "800px",
              sm: "90%",
              xs: "80%",
            },
            height: "120px",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: "sofia-pro, sans-serif",
              fontSize: {
                md: "16px",
                xs: "14px",
              },
              lineHeight: "28px",
              color: "#d1d5db",
              marginBottom: "30px",
            }}
          >
            <strong>Next.js Firebase - The Full Course </strong>
            takes you from zero to a production-ready hybrid-rendered webapp.
            Learn how to build a high-performance React app that features
            realtime data from Firebase and multiple server-side rendering
            paradigms with Next.js
          </Typography>
        </Box>
        {/* Klutch Image */}
        <Box sx={{ marginBottom: "60px" }}>
          <Avatar
            src={images.klutch}
            sx={{ borderRadius: 0, width: "800px", height: "150px" }}
          />
        </Box>
        {/* Build */}
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            width: "800px ",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "cubaon, sans-serif",
              fontSize: "32px",
              lineHeight: "42.667px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            🦄 What will I build?
          </Typography>
          <Typography
            sx={{
              fontFamily: "sofia-pro, sans-serif",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: "400",
              color: "#d1d5db",
            }}
          >
            You will build a full-stack Social Blogging Platform inspired by
            sites like 🌈 DEV.to and Medium. Authors can create content under a
            custom username, then publish publicly with SEO-friendly rendering,
            while readers can heart or like posts in realtime. Featuring…
          </Typography>
          {/* List */}
          <List>
            <ListItem>
              <ListItemText primary="👨‍🎤 Custom Firebase usernames" />
            </ListItem>
            <ListItem>
              <ListItemText primary="📰 Bot-friendly content (SEO)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="🦾 Advanced SSR, SSG, and ISR techniques" />
            </ListItem>
            <ListItem>
              <ListItemText primary="🔥 Firestore realtime CRUD and data modeling" />
            </ListItem>
            <ListItem>
              <ListItemText primary="⚛️ Reactive forms with react-hook-form" />
            </ListItem>
            <ListItem>
              <ListItemText primary="📂 Image file uploads" />
            </ListItem>
            <ListItem>
              <ListItemText primary="💞 Realtime hearts" />
            </ListItem>
            <ListItem>
              <ListItemText primary="🚀 Security & Deployment" />
            </ListItem>
          </List>
        </Box>
        {/* Auttors */}
        <Box sx={{ display: "flex", py: "30px" }}>
          {/* Box 1 */}
          <Box sx={{ paddingRight: "100px" }}>
            <Typography
              component="div"
              sx={{
                width: "350px",
                height: "300px",
                background: "#2a2e35",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                px: "45px",
                py: "50px",
              }}
            >
              <Typography sx={{ display: "flex", marginBottom: "50px" }}>
                <Avatar
                  src={images.leeRobinson}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Typography
                  component="div"
                  sx={{ display: "flex", flexDirection: "column", px: "8px" }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "sofia-pro, sans-serif",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: "700",
                    }}
                  >
                    Lee Robinson
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "sofia-pro, sans-serif",
                      fontSize: "16px",
                      lineHeight: "28px",
                      fontWeight: "400",
                      color: "#d1d5db",
                    }}
                  >
                    @leeerob
                  </Typography>
                </Typography>
              </Typography>
              <Typography component="div">
                260,000 views already? 🤯 @fireship_dev this video is
                incredible.
              </Typography>
            </Typography>
          </Box>
          {/* Box 2 */}
          <Box>
            <Typography
              component="div"
              sx={{
                width: "350px",
                height: "300px",
                background: "#2a2e35",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                px: "45px",
                py: "50px",
              }}
            >
              <Typography sx={{ display: "flex", marginBottom: "50px" }}>
                <Avatar
                  src={images.leeRobinson}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Typography
                  component="div"
                  sx={{ display: "flex", flexDirection: "column", px: "8px" }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "sofia-pro, sans-serif",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: "700",
                    }}
                  >
                    Lee Robinson
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: "sofia-pro, sans-serif",
                      fontSize: "16px",
                      lineHeight: "28px",
                      fontWeight: "400",
                      color: "#d1d5db",
                    }}
                  >
                    @leeerob
                  </Typography>
                </Typography>
              </Typography>
              <Typography component="div">
                260,000 views already? 🤯 @fireship_dev this video is
                incredible.
              </Typography>
            </Typography>
          </Box>
        </Box>
        {/* Question */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "800px" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "cobano,sans-serif",
              fontSize: "32px",
              lineHeight: "42.6667px",
              fontWeight: "800",
              marginTop: "70px",
              marginBottom: "40px",
            }}
          >
            🤔 IS THIS COURSE RIGHT FOR ME?
          </Typography>
          <Typography
            component="div"
            sx={{
              width: "800px",
              height: "180px",
              background: "#2a2e35",
              borderRadius: "0px 25px 25px 0px",
              borderLeft: "4px solid #3b82f6",
              fontFamily: "sofia-pro, sans-serif",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: "400",
              color: "#d1d5db",
              display: "flex",
              alignItems: "center",
              px: "25px",
            }}
          >
            This course is intermediate level 🟦 and will challenge you to build
            an app that delivers high-performance and search engine visibility
            via server-side rendering. It assumes you have at least basic
            knowledge of web programming with familiarity of JavaScript, HTML,
            and CSS. It is fast-paced and similar to my style on YouTube, but
            far more in-depth and followed in a long linear format.
          </Typography>
        </Box>
      </Box>
      {/* Name Box */}
      <Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            marginTop: "60px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              lineHeight: "48px",
              fontSize: "48px",
              fontFamily: "cubano, sans-serif",
              fontWeight: "800",
              marginBottom: "10px",
              letterSpacing: "normal",
            }}
          >
            CHAPTERS
          </Typography>
        </Box>
        {/* Divider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          <Typography
            component="div"
            sx={{
              borderBottom: "4px solid #8BAAC9",
              borderRadius: "2px",
              width: "100px",
            }}
          ></Typography>
        </Box>
      </Box>
      {/* Chapter Card */}
      <Box>
        <Grid container>
          {chapterCards.map((chapterCard, key) => (
            <Grid
              item
              key={key}
              lg={3}
              md={4}
              xs={12}
              sx={{ px: "20px", my: "20px" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  position: "relative",
                  px: "10px",
                  py: "10px",
                }}
              >
                <Box>
                  <Typography
                    component="div"
                    sx={{
                      width: "100%",
                      height: "180px",
                      background: "#2a2e35",
                      borderRadius: "15px",
                      display: "flex",
                      flexDirection: "column",
                      px: "20px",
                      py: "30px",
                    }}
                  >
                    <Box>
                      <Typography
                        component="h5"
                        sx={{
                          fontFamily: "cunano, sans-serif",
                          fontSize: "20px",
                          lineHeight: "35px",
                          fontWeight: "800",
                          letterSpacing: "normal",
                          marginBottom: "20px",
                        }}
                      >
                        <span className="id">{chapterCard.num} </span>
                        {chapterCard.title}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          color: "#b2becd",
                          fontFamily: "cubano, sans-serif",
                          fontSize: "16px",
                          lineHeight: "28px",
                          fontWeight: "500",
                          letterSpacing: "normal",
                        }}
                      >
                        {chapterCard.description}
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
                <Box>
                  <span>
                    <Avatar
                      src={chapterCard.image}
                      sx={{ position: "absolute", top: "-5px", left: "-3px" }}
                    />
                  </span>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LabsPage;
// eslint-disable-next-line
{
  /* <Box>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
  <Grid item lg={3} md={4} xs={12} sx={{ px: "20px" }}>
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "relative",
        px: "10px",
        py: "10px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            width: "100%",
            height: "165px",
            background: "#2a2e35",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            px: "20px",
            py: "30px",
          }}
        >
          <Box>
            <Typography
              component="h5"
              sx={{
                fontFamily: "cunano, sans-serif",
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "800",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              <span className="id">01</span> README
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#b2becd",
                fontFamily: "cubano, sans-serif",
                fontSize: "16px",
                lineHeight: "28px",
                fontWeight: "500",
                letterSpacing: "normal",
              }}
            >
              Watch this video before starting the course!
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box>
        <span>
          <Avatar
            src={images.police}
            sx={{ position: "absolute", top: "-5px", left: "-3px" }}
          />
        </span>
      </Box>
    </Box>
  </Grid>
</Box>; */
}
