import { Box, useTheme } from "@mui/material";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from {
  -webkit-transform: translateY(0);
}
to {
  -webkit-transform: translateY(60px);
          transform: translateY(60px);
}
`;

const Line = styled.div`
  ${(prop) => {
    return css`
      margin: 0 auto;
      margin-top: ${prop.mt}px;
      margin-bottom: : ${prop.mb}px;
      position: relative;
      overflow: hidden;
      height: 60px;
      width: 5px;
      background: black;
      right: 0;
      left: 0;
      z-index: 1;
      :before {
        background: ${prop.theme.palette.secondary.main};
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        top: 5px;
        z-index: -1;
        animation: ${rotate} linear 2s infinite;
      }
      :after {
        background: ${prop.theme.palette.secondary.main};
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        top: 20px;
        z-index: -1;
        animation: ${rotate} linear 2s infinite;
      }
    `;
  }}
`;

function BRLineComponent(props) {
  const theme = useTheme();

  return <Line mt={props.mt} mb={props.mb} theme={theme} />;
}

export default BRLineComponent;
