import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CourseCard from "../components/courseCard";
import images from "../assests/images";
import Footer from "../components/footer";
const CoursesPage = () => {
  const courses = [
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
    {
      image: images.nextjs,
      title: "NEXT.JS FIREBALL FULL COURSE",
      description: "Build a full-stack app with React, Firebase, and Next.js",
      tags: ["a", "b"],
    },
  ];
  return (
    <Box>
      {/* Name Box */}
      <Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "230px",
            flexDirection: "column",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              lineHeight: "48px",
              fontSize: "48px",
              fontFamily: "cubano, sans-serif",
              fontWeight: "800",
              marginBottom: "10px",
            }}
          >
            COURSES
          </Typography>
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
            challenging multi-step experiences with quizzes and
            progress-tracking
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
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center", px: 2 }}
      >
        {courses.map((course, key) => (
          <Grid key={key} item xl={3} lg={4} md={4} sm={6} xs={12}>
            <CourseCard
              image={course.image}
              title={course.title}
              description={course.description}
              tags={course.tags}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default CoursesPage;
