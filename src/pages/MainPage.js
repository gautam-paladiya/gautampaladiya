import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AboutMeComponent from "../components/AboutMeComponent";
import AppBarComponent from "../components/AppBarComponent";
import BRLineComponent from "../components/BRLineComponent";
import ContactMeComponent from "../components/ContactMeComponent";
import FloatingButton from "../components/FloatingButton";
import FooterComponent from "../components/FooterComponent";
import MyServicesComponent from "../components/MyServicesComponent";
import MySkillComponent from "../components/MySkillComponent";
import ScreenAnimation from "../components/ScreenAnimation";
import SocialButtonsComponent from "../components/SocialButtonsComponent";
import WorkEducationComponent from "../components/WorkEducationComponent";

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {loading ? (
        <ScreenAnimation />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            width: "100%",
          }}
        >
          <AppBarComponent />
          <AboutMeComponent />
          <MyServicesComponent />
          <WorkEducationComponent />
          <MySkillComponent />
          <ContactMeComponent />
          <FooterComponent />
          {visible && <FloatingButton onClick={scrollToTop} />}
        </Box>
      )}
    </>
  );
}

export default MainPage;
