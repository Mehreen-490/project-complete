import { Box, Grid } from "@mui/material";
// import { getTopicsData } from "../../api/TopicsData";
import { getFrameWorksData } from "../../api/FrameWorksData";
import TopicCard from "../topicCard";
const Techniques = () => {
  const FrameWorksData = getFrameWorksData();
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
        {FrameWorksData.map((topic, key) => (
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

export default Techniques;
