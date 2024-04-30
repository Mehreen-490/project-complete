import { Avatar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom"; //Routes, Route, Outlet, Link
import images from "../assests/images";
import CloseIcon from "@mui/icons-material/Close";
const AllLinksPage = () => {
  return (
    <Box>
      {/* MD NavBar  */}
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
            // my: "20px",
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${images.wordleWorkshop})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            position: "relative",
          }}
        >
          {/* Transparent Color */}
          <Box
            sx={{
              position: "absolute",
              background:
                "linear-gradient(to bottom,  #131920 0%,#171e26 50%,#1d2630 100%)",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              opacity: "0.8",
              // borderRadius: "20px",
            }}
          >
            {/* CloseIcon Box */}
            <Box
              sx={{
                width: "80px",
                height: "80px",
                ml: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CloseIcon
                fontSize="large"
                sx={{
                  p: "2px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(to bottom,  #263240 0%, #303f50 50%,#394b60 100%)",
                  "&:hover": {
                    color: "#263240",
                    background: "white",
                    cursor: "pointer",
                  },
                }}
              />
            </Box>

            {/* Links Box */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              {/* Home Link Box */}
              <Box sx={{ mb: "25px" }}>
                <Typography
                  component={NavLink}
                  to="/"
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "33.6px",
                    lineHeight: "50.4px",
                    mb: "3px",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? " #56718f" : "",
                  })}
                >
                  HOME
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "11.2px",
                    lineHeight: "16.8px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "#afbecf",
                    letterSpacing: "0.5px",
                  }}
                >
                  // is where the home is
                </Typography>
              </Box>
              {/* Topics Link Box */}
              <Box sx={{ mb: "25px" }}>
                <Typography
                  component={NavLink}
                  to="/courses"
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "33.6px",
                    lineHeight: "50.4px",
                    mb: "3px",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? " #56718f" : "",
                  })}
                >
                  TOPICS
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "11.2px",
                    lineHeight: "16.8px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "#afbecf",
                    letterSpacing: "0.5px",
                  }}
                >
                  // it's what you're here for
                </Typography>
              </Box>
              {/* Labs Link Box */}
              <Box sx={{ mb: "25px" }}>
                <Typography
                  component={NavLink}
                  to="/labs"
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "33.6px",
                    lineHeight: "50.4px",
                    mb: "3px",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? " #56718f" : "",
                  })}
                >
                  LABS
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "11.2px",
                    lineHeight: "16.8px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "#afbecf",
                  }}
                >
                  // walk the path
                </Typography>
              </Box>
              {/* Series Link Box */}
              <Box sx={{ mb: "25px" }}>
                <Typography
                  component={NavLink}
                  to="/series"
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "33.6px",
                    lineHeight: "50.4px",
                    mb: "3px",
                    fontWeight: "600",
                    letterSpacing: "0.2px",
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? " #56718f" : "",
                  })}
                >
                  SERIES
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                    fontSize: "11.2px",
                    lineHeight: "16.8px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "#afbecf",
                    letterSpacing: "0.5px",
                  }}
                >
                  // got some minutes
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  mt: "25px",
                }}
              >
                {/* Log In Link Box */}
                <Box sx={{ mr: "12px" }}>
                  <Typography
                    component={NavLink}
                    to="/series"
                    sx={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "33.6px",
                      lineHeight: "50.4px",
                      mb: "3px",
                      fontWeight: "600",
                      letterSpacing: "0.2px",
                    }}
                    style={({ isActive }) => ({
                      color: isActive ? " #56718f" : "",
                    })}
                  >
                    LOG IN
                  </Typography>
                </Box>
                {/* Sign Up Box */}
                <Box sx={{ ml: "12px" }}>
                  <Typography
                    component={NavLink}
                    to="/series"
                    sx={{
                      fontFamily: "Poppins, Helvetica, Arial, sans-serif",
                      fontSize: "33.6px",
                      lineHeight: "50.4px",
                      mb: "3px",
                      fontWeight: "600",
                      letterSpacing: "0.2px",
                    }}
                    style={({ isActive }) => ({
                      color: isActive ? " #56718f" : "",
                    })}
                  >
                    SIGN UP
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllLinksPage;
