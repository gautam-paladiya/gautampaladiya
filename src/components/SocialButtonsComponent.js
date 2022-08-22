import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, IconButton } from "@mui/material";

function SocialButtonsComponent() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <IconButton
        size="large"
        onClick={() => window.open(process.env.REACT_APP_LINK_GITHUB, "_blank")}
        sx={{
          mr: 1,
          ":hover": {
            backgroundColor: (theme) => theme.palette.secondary.main,
          },
        }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        size="large"
        onClick={() =>
          window.open(process.env.REACT_APP_LINK_LINKEDIN, "_blank")
        }
        sx={{
          mr: 1,
          ":hover": {
            backgroundColor: (theme) => theme.palette.secondary.main,
          },
        }}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        size="large"
        onClick={() =>
          window.open(process.env.REACT_APP_LINK_TWITTER, "_blank")
        }
        sx={{
          mr: 1,
          ":hover": {
            backgroundColor: (theme) => theme.palette.secondary.main,
          },
        }}
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        size="large"
        onClick={() =>
          window.open(process.env.REACT_APP_LINK_FACEBOOK, "_blank")
        }
        sx={{
          mr: 1,
          ":hover": {
            backgroundColor: (theme) => theme.palette.secondary.main,
          },
        }}
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default SocialButtonsComponent;
