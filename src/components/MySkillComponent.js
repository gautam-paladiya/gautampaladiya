import { Box, Paper, Slider, Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import TitleComponent from "./TitleComponent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillComponent(props) {
  function valuetext(value) {
    return `${value} %`;
  }

  return (
    <>
      <Typography
        id={props.title.toLowerCase().replaceAll(" ", "-")}
        gutterBottom
      >
        {props.title}
      </Typography>
      <Slider
        aria-labelledby={props.title.toLowerCase().replaceAll(" ", "-")}
        defaultValue={props.percent}
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        step={10}
        valueLabelDisplay="on"
        color="secondary"
        marks
        sx={{
          pointerEvents: "none",
        }}
      />
    </>
  );
}

function MySkillComponent() {
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
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
      id="section_my_skills"
      ref={ref}
    >
      <TitleComponent text="My Skills" />
      <motion.div animate={animation}>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            mt: 5,
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
            gap: 2,
            width: "100%",
          })}
        >
          <Paper sx={{ mx: 3, p: 2, flex: 1 }}>
            <SkillComponent title="HTML5 & CSS3" percent={90} />
            <SkillComponent title="Javascript & Typescript" percent={90} />
            <SkillComponent title="React.js" percent={99} />
            <SkillComponent title="Node.js" percent={80} />
            <SkillComponent title="MaterialUI" percent={95} />
          </Paper>
          <Paper sx={{ mx: 3, p: 2, flex: 1 }}>
            <SkillComponent title="English" percent={99} />
            <SkillComponent title="Polish" percent={80} />
            <SkillComponent title="Hindi" percent={99} />
          </Paper>
        </Box>
      </motion.div>
    </Box>
  );
}

export default MySkillComponent;
