import { Box, Grid } from "@mui/material";
import TopicCard from "../topicCard";
import { getTopicsData } from "../../api/TopicsData";
const AllTopics = () => {
  const TopicsData = getTopicsData();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        {TopicsData.map((topic, key) => (
          <Grid
            item
            key={key}
            my={1.5}
            xs={12}
            sm={6}
            md={3}
            lg={2}
            sx={{ px: "5px" }}
          >
            <TopicCard
              title={topic.title}
              num_series={topic.num_series}
              num_videos={topic.num_videos}
              topic_image={topic.topic_image}
              dot_image={topic.dot_image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllTopics;
// eslint-disable-next-line
{
  /* 
              <Box
                sx={{
                  width: "200px",
                  height: "80px",
                  bgcolor: "#2E3440",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  px: "10px",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#363c4a",
                  },
                }}
              >
                <Avatar
                  src={images.fingerPrint}
                  sx={{ borderRadius: "0px", width: "60px", height: "60px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Cabin, sans-serif",
                      fontSize: "15px",
                      lineHeight: "18.75px",
                      letterSpacing: "0.3px",
                      fontWeight: "500",
                    }}
                  >
                    {topic.title}
                  </Typography>

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
                      {topic.num_series} Series
                    </Typography>
                    <Avatar
                      src={images.dot}
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
                      {topic.num_videos} Videos
                    </Typography>
                  </Box>
                </Box>
              </Box> */
}
