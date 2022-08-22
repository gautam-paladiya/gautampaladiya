import { Button, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TitleComponent from "./TitleComponent";

function WorkEducationComponent() {
  const WorkComponent = (prop) => (
    <TimelineItem sx={{ ":before": { flex: 0 } }}>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          pb={5}
        >
          <Typography variant="h5">{prop.title}</Typography>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ py: -6, mt: 1 }}
          >
            {prop.year}
          </Button>
          {prop.info}
          <Typography
            variant="h6"
            mt={1}
            sx={{ textAlign: "justify" }}
          ></Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );

  const ListDescriptionComponent = (prop) => (
    <Typography>{prop.title}</Typography>
  );

  const EducationComponent = (prop) => (
    <TimelineItem sx={{ ":before": { flex: 0 } }}>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          pb={5}
        >
          <Typography variant="h5">{prop.title}</Typography>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ py: -6, mt: 1 }}
          >
            {prop.year}
          </Button>
          {prop.info}
          <Typography
            variant="h6"
            mt={1}
            sx={{ textAlign: "justify" }}
          ></Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <Box
      component="section"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
      id="section_work_&_education"
    >
      <TitleComponent text="Work & Eduction" />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          mt: 5,
          gap: 2,
          mx: 3,
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        })}
      >
        <Paper sx={{ m: 5, flex: 1 }}>
          <Timeline position="right">
            <WorkComponent
              title="Full stack Javascript Developer"
              year="03/2021 - Present"
              info={
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      borderBottom: `2px ${theme.palette.secondary.main} solid `,
                      mb: 1,
                    })}
                  >
                    Upwork Freelancer
                  </Typography>
                  <ListDescriptionComponent title=" •  Developed a using ReactJS, babel, webpack with Next.js framwork based application for inventory management." />
                  <ListDescriptionComponent title=" •  Created node services and stored data on MongoDB with Graphql." />
                  <ListDescriptionComponent title=" •  Implemented continuous integration and delivery Learned new front-end technologies and implemented them Built new API services for external partners. " />
                </Box>
              }
            />
            <WorkComponent
              title="Technical Support Specialist"
              year="08/2018 - 02-2021"
              info={
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      borderBottom: `2px ${theme.palette.secondary.main} solid `,
                      mb: 1,
                    })}
                  >
                    Opstalent.com
                  </Typography>
                  <ListDescriptionComponent title=" •  Provided technical support for hardware, software, networks, peripherals, and web applications." />
                  <ListDescriptionComponent title=" •  Analyzed and understood complicated issues quickly, and implement the solutions urgently needed." />
                  <ListDescriptionComponent title=" •  Provided complex technical support combined with exemplary customer service." />
                </Box>
              }
            />
          </Timeline>
        </Paper>
        <Paper sx={{ mx: "auto", m: 5, flex: 1 }}>
          <Timeline position="right">
            <EducationComponent
              title="MSc Computer Science"
              year="08/2020 - 07-2022"
              info={
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      borderBottom: `2px ${theme.palette.secondary.main} solid `,
                      mb: 1,
                    })}
                  >
                    Higher School of Economics and Innovation(WSEI)
                  </Typography>
                  <ListDescriptionComponent title="Lublin, Poland" />
                  <ListDescriptionComponent
                    title={
                      <Link
                        href="https://www.wsei.lublin.pl"
                        color="secondary"
                        target="_blank"
                      >
                        https://www.wsei.lublin.pl
                      </Link>
                    }
                  />
                </Box>
              }
            />
            <EducationComponent
              title="Bachelors's in Computer Application (BCA)"
              year="03/2014 - 02-2017"
              info={
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      borderBottom: `2px ${theme.palette.secondary.main} solid `,
                      mb: 1,
                    })}
                  >
                    Veer Narmad South Gujarat University(VNSGU)
                  </Typography>
                  <ListDescriptionComponent title="Lublin, Poland" />
                  <ListDescriptionComponent
                    title={
                      <Link
                        href="https://www.vnsgu.ac.in/"
                        color="secondary"
                        target="_blank"
                      >
                        https://www.vnsgu.ac.in/
                      </Link>
                    }
                  />
                </Box>
              }
            />
            <EducationComponent
              title="Class 12 Science"
              year="03/2012 - 02-2014"
              info={
                <Box>
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      borderBottom: `2px ${theme.palette.secondary.main} solid `,
                      mb: 1,
                    })}
                  >
                    Gujarat Secondary and Higher Secondary Education Board
                  </Typography>
                  <ListDescriptionComponent title="Lublin, Poland" />
                  <ListDescriptionComponent
                    title={
                      <Link
                        href="https://www.gsebeservice.com/"
                        color="secondary"
                        target="_blank"
                      >
                        https://www.gsebeservice.com/
                      </Link>
                    }
                  />
                </Box>
              }
            />
          </Timeline>
        </Paper>
      </Box>
    </Box>
  );
}

export default WorkEducationComponent;
