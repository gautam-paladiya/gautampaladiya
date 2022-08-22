import { styled, Typography } from "@mui/material";
import React from "react";
import BRLineComponent from "./BRLineComponent";

const MyTypography = styled(Typography)`
  position: relative;
  :after {
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgb(165, 165, 165),
      rgba(0, 0, 0, 0)
    );
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    content: "";
    bottom: 0px;
    max-width: 300px;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

function TitleComponent(props) {
  return (
    <>
      <BRLineComponent mb={50} mt={25} />
      <MyTypography
        variant="h1"
        sx={{
          mx: "auto",
          cursor: "pointer",
          fontSize: 45,
          textAlign: "center",
        }}
      >
        {props.text}
      </MyTypography>
    </>
  );
}

export default TitleComponent;
