import { Box } from "@mui/system";
import React from "react";
import { motion } from "framer-motion";

function ScreenAnimation() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowX: "hidden",
        overflowY: "hidden",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
        initial={{ scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeatType: "reverse", repeat: Infinity }}
      ></motion.div>
    </Box>
  );
}

export default ScreenAnimation;
