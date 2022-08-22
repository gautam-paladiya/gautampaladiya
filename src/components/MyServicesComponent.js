import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TitleComponent from "./TitleComponent";
import HandymanIcon from "@mui/icons-material/Handyman";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AlbumIcon from "@mui/icons-material/Album";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ServiceComponent(props) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        gap: 2,
        flex: 1,
      }}
    >
      <IconButton
        sx={{
          "& svg": { fontSize: 50 },
        }}
      >
        {props.icon}
      </IconButton>
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center", fontSize: 28 }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ textAlign: "justify", fontSize: 18 }}
        variant="h6"
        component="p"
      >
        {props.description}
      </Typography>
    </Paper>
  );
}

function MyServicesComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <Box
      style={{ display: "flex", flexDirection: "column" }}
      id="section_service"
      ref={ref}
    >
      <motion.div animate={animation}>
        <TitleComponent text="My Services" />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            mt: 5,
            mx: 3,
            gap: 5,
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <ServiceComponent
            title="HTML & CSS Responsive Web Design"
            description="Enterprise-class websites need consistent colors, fonts, and design to match the organization's branding guidelines. Toptal’s front-end developers are experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML."
            icon={<HandymanIcon fontSize="large" color="secondary" />}
          />
          <ServiceComponent
            title="React JS Development"
            description="ReactJS is renowned for its extensibility, adjustability, and convenience. Toptal ReactJS developers create complex software for your business, including web browsers and mobile application user interfaces."
            icon={<AlbumIcon fontSize="large" color="secondary" />}
          />
          <ServiceComponent
            title="Node.js Development"
            description="Node.js enables fast and scalable server-side and networking applications. Toptal Node.js developers produce dynamic web page content before the page is sent to the end user's web browser, using event-driven programming to communicate with web servers through speedy JavaScript interpreters."
            icon={<JavascriptIcon fontSize="large" color="secondary" />}
          />
        </Box>
      </motion.div>
    </Box>
  );
}

export default MyServicesComponent;
