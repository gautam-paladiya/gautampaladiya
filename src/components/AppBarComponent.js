import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline, Link, useScrollTrigger } from "@mui/material";
import ProfileImage from "../assets/img/profile_img.jpg";
import TypewriterComponent from "typewriter-effect";
import SocialButtonsComponent from "./SocialButtonsComponent";
import { motion } from "framer-motion";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Service",
  "Work & Education",
  "My Skills",
  "Blog",
  "Contact",
];

function AppBarComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          cursor: "pointer",
          fontSize: 30,
          fontWeight: 700,
          p: 5,
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        Gautam Paladiya
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
              <Link
                href={`#section_${item.toLowerCase().replaceAll(" ", "_")}`}
                variant="h6"
                sx={{
                  "&:hover": {
                    borderBottom: (theme) =>
                      `2px solid ${theme.palette.secondary.main}`,
                    color: (theme) => theme.palette.secondary.light,
                    fontSize: 16,
                  },
                  textTransform: "none",
                  fontSize: 16,
                  fontWeight: 700,
                  transition: "font-size .2s;",
                  color: "white",
                  textDecoration: "none",
                  width: "100%",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `linear-gradient(to bottom, rgba(203, 182, 163, 0.52), rgba(0, 0, 0, 0.73)), url(${ProfileImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "contain",
        backgroundPosition: "top left ",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#cbb6a3",
      }}
      id="section_home"
    >
      <AppBar
        elevation={0}
        component="nav"
        color={trigger ? "secondary" : "transparent"}
      >
        <Toolbar
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              display: "flex",
              justifyContent: trigger ? "space-between" : "flex-end",
              alignItems: "center",
            },
          })}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, pl: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              display: trigger ? "block" : "none",
              cursor: "pointer",
              fontSize: 25,
              fontWeight: 700,
              color: (theme) =>
                trigger ? theme.palette.secondary.main : theme.palette.white,
              whiteSpace: "nowrap",
            }}
          >
            Gautam Paladiya
          </Typography>
          <List
            sx={(theme) => ({
              display: { xs: "none", sm: "block" },
              [theme.breakpoints.up("md")]: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            })}
          >
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  key={index}
                  sx={{
                    color: "#fff",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <Link
                      href={`#section_${item
                        .toLowerCase()
                        .replaceAll(" ", "_")}`}
                      variant="h6"
                      sx={{
                        "&:hover": {
                          borderBottom: (theme) =>
                            `2px solid ${theme.palette.secondary.main}`,
                          color: (theme) => theme.palette.secondary.light,
                          fontSize: 16,
                        },
                        textTransform: "none",
                        fontSize: 16,
                        fontWeight: 700,
                        transition: "font-size .2s;",
                        color: "white",
                        textDecoration: "none",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Box
        sx={(theme) => ({
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 2,
          bottom: 10,
          [theme.breakpoints.up("md")]: {
            left: "45%",
            top: "20%",
            width: 700,
          },
        })}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: 35,
            fontWeight: 800,
          }}
        >
          Welcome to my website
        </Typography>
        <TypewriterComponent
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span style="color: #fff;font-size:25px;font-weight:600;text-align:center;">I am Gautam Paladiya</span>'
              )
              .pauseFor(1500)
              .deleteChars(15)
              .typeString(
                '<span style="color: #fff;font-size:25px;font-weight:600;text-align:center;">Front end developer</span>'
              )
              .pauseFor(1500)
              .deleteChars(19)
              .typeString(
                '<span style="color: #fff;font-size:25px;font-weight:600;text-align:center;">Javascript developer</span>'
              )
              .pauseFor(1500)
              .deleteChars(19)
              .start();
          }}
        />
        <SocialButtonsComponent />
        <Box sx={{ mt: 2 }}>
          <Button
            href="#section_work_&_education"
            variant="contained"
            sx={{ mr: 1 }}
          >
            View Work
          </Button>
          <Link href="#section_contact">
            <Button variant="contained" sx={{ ml: 1 }}>
              Hire Me
            </Button>
          </Link>
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default AppBarComponent;
