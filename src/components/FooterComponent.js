import { Box, Typography } from "@mui/material";
import React from "react";
import SocialButtonsComponent from "./SocialButtonsComponent";

function FooterComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <SocialButtonsComponent />
        <Typography>Copyright © 2022 - All Right Reserved.</Typography>
        <Typography>Designed by GP Gallery.</Typography>
      </Box>
    </>
  );
}

export default FooterComponent;
