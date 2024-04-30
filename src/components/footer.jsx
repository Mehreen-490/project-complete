import { Box, Stack, Link, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box>
      {/* Footer */}
      <Box sx={{ overflowX: "hidden" }}>
        {/* Divider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10px",
            marginTop: "40px",
            marginBottom: "40px",
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
        {/* Footer Content */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontFamily: "sofia-pro, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              color: "#B2BFD0",
              marginBottom: "10px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Typography> Find an issue with this page?</Typography>
            <Link underline="none"> Fix it on GitHub</Link>
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "sofia-pro, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              marginBottom: "10px",
              color: "#B2BFD0",
            }}
          >
            Need help?<strong> Email hello@fireship.io</strong>
          </Typography>
          <Typography component="div">
            <Stack
              direction="row"
              spacing={1}
              sx={{
                color: "#B2BFD0",
                marginBottom: "10px",
                fontSize: "30px",
              }}
            >
              <YouTubeIcon />
              <TwitterIcon />
              <GitHubIcon />
            </Stack>
          </Typography>
          <Typography
            component="h6"
            sx={{
              color: "#B2BFD0",
              fontFamily: "cubano, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            <strong>HELPFUL LINKS</strong>
          </Typography>
          <Typography>
            <Link
              underline="none"
              href="#!"
              sx={{
                fontFamily: "sofia-pro, sans-serif",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
                color: "#B2BFD0",
                textAlign: "center",
              }}
            >
              Courses | Labs | Snippets | Tags | Contrib | Privacy | Terms
            </Link>
          </Typography>
          <Typography
            component="div"
            sx={{
              color: "#B2BFD0",
              marginTop: "10px",
              fontFamily: "sofia-pro, sans-serif",
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              marginBottom: "60px",
            }}
          >
            Copyright © 2022 Fireship LLC
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
