import { IconButton } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from "@mui/system";

function FloatingButton(props) {
  return (
    <Box sx={{ position: "fixed", bottom: 50, right: 50 }}>
      <IconButton
        onClick={() => props.onClick()}
        sx={(theme) => ({
          "& svg": { fontSize: 35 },
          backgroundColor: theme.palette.secondary.main,
          ":hover": { backgroundColor: theme.palette.secondary.light },
        })}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
}

export default FloatingButton;
