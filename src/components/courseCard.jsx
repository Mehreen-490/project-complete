import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
const CardComponent = ({ image, title, description, tags }) => {
  return (
    <Box
      sx={{
        py: 3,
        px: 1,
      }}
    >
      <Card
        sx={{
          background: "#2a2e35",
          borderRadius: "10px",
          "&.hover": {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          // image={require("./1.webp")}
          image={image}
        />
        <CardContent sx={{ px: 3 }}>
          <Typography
            component="h5"
            sx={{
              fontFamily: "cubano, sans-serif",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: "800",
              color: "white",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "sofia",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: "400",
              color: "#B2BFD0",
              marginBottom: "25px",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: "15px", px: 3 }}>
          {tags.map((tag, key) => (
            <Chip
              key={key}
              label={tag}
              color="primary"
              size="small"
              sx={{
                borderRadius: "6px",
                fontFamily: "sofia-pro, sans-serif",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: "500",
              }}
            />
          ))}
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
