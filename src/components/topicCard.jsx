import { Avatar, Box, Typography } from "@mui/material";
// import images from "../assests/images/images";
const TopicCardComponent = ({
  title,
  num_series,
  num_videos,
  topic_image,
  dot_image,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        bgcolor: "#2E3440",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        px: "5px",
        cursor: "pointer",
        "&:hover": {
          background: "#363c4a",
        },
      }}
    >
      <Avatar
        src={topic_image}
        sx={{
          borderRadius: "4px",
          width: "50px",
          height: "50px",
          mx: { xs: "6px", md: "3px", lg: "6px" },
        }}
      />
      <Box>
        {/* Title Typography */}
        <Typography
          sx={{
            fontFamily: "Cabin, sans-serif",
            fontSize: "15px",
            lineHeight: "18.75px",
            letterSpacing: "0.3px",
            fontWeight: "500",
          }}
        >
          {title}
        </Typography>
        {/* No. Of Series And Videos */}
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="div"
            sx={{
              fontFamily: "Poppins, Helvetica, Arial, sans-serif",
              fontSize: "9px",
              lineHeight: "13.5px",
              fontWeight: "400",
              color: "#6b7994",
              letterSpacing: "0.2px",
              display: "flex",
            }}
          >
            {num_series} Series
          </Typography>
          <Avatar
            src={dot_image}
            sx={{ width: "7px", height: "7px", mt: "3px", mx: "6px" }}
          />
          <Typography
            variant="div"
            sx={{
              fontFamily: "Poppins, Helvetica, Arial, sans-serif",
              fontSize: "9px",
              lineHeight: "13.5px",
              fontWeight: "400",
              color: "#6b7994",
              letterSpacing: "0.2px",
            }}
          >
            {num_videos} Videos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopicCardComponent;
