import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useScroll, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect } from "react";
import TitleComponent from "./TitleComponent";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CV from "../assets/CV.pdf";

const ProfileItem = (prop) => (
  <ListItem disablePadding>
    {/* <ListItemButton sx={{ p: 0 }}> */}
    <ListItemText
      primary={
        <Typography sx={(theme) => ({ color: theme.palette.secondary.main })}>
          {prop.title}
        </Typography>
      }
      secondary={
        <Typography variant="h6" component="h2">
          {prop.value}
        </Typography>
      }
    />
    {/* </ListItemButton> */}
  </ListItem>
);

function AboutMeComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
        },
      });
    } else {
      animation.start({
        x: "200vw",
      });
    }
  }, [inView]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      component="section"
      id="section_about"
      ref={ref}
    >
      <motion.div animate={animation}>
        <TitleComponent text="About Me" />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 1,
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mx: 3,
              mt: 5,
              alignItems: "flex-start",
              flex: { md: 2, sm: 1 },
            }}
          >
            {/* <Typography variant="h4" component="h3">
            Full stack web developer
          </Typography> */}
            {/* <Divider flexItem variant="fullWidth" sx={{ borderBottomWidth: 2 }} /> */}
            <Typography
              component="p"
              variant="h6"
              sx={{ textAlign: "justify", textIndent: 35 }}
            >
              Passionate React developer with five years of experience and a
              strong focus on front-end development. Expertise in web and mobile
              app development, with a particular interest in using React to
              create high-performance user interfaces. seeks a position where he
              can continue developing his skills and contribute to a team of
              talented developers.
            </Typography>

            <Typography
              component="p"
              variant="h6"
              sx={{ textAlign: "justify", mt: 2, textIndent: 35 }}
            >
              Over 2+ years of extensive experience in IT industry as Front -
              End UI Developer with web-based applications and UI applications
              in various domains. experience in application and web development
              with emphasis on HTML/HTML5, XHTML, DHTML, XML, CSS 2/3, AJAX,
              JSON, DOM, DOJO, JavaScript, jQuery, Angular.js, Angular2, Angular
              4, 5,react.js, redux, Node.js, Express.js, Babel.js, Webpack.
            </Typography>
          </Box>
          <Box
            sx={{
              gap: 1,
              mx: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mt: 5,
            }}
          >
            <Typography variant="h4">Personal Information</Typography>
            <Divider
              variant="fullWidth"
              flexItem
              sx={{ borderBottomWidth: 2 }}
            />
            <List sx={{ p: 0 }}>
              <ProfileItem title="Name" value="Gautam Paladiya" />
              <ProfileItem title="Age" value="26 Years" />
              <ProfileItem title="Residence" value="Lublin,Poland" />
              <ProfileItem title="Phone" value="+48729213040" />
              <ProfileItem title="Email" value="Mrpaladiyagautam@gmail.com" />
            </List>

            <Button
              href={CV}
              target="_blank"
              variant="outlined"
              color="secondary"
              sx={{ mt: 1 }}
              size="large"
              // download
            >
              DOWNLOAD MY CV
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default AboutMeComponent;
