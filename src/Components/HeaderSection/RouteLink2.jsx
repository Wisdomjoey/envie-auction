import { ArrowForwardRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RouteLinksCon = styled.div`
  width: 100%;
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  position: relative;
  // top: 70px;
`;
const RouteLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RouteLink = styled.p`
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    cursor: ${(props) => props.cp};
    color: ${(props) => props.hv};
  }
`;

function RouteLink2({ CurrentPage }) {
  return (
    <Container>
      <RouteLinksCon id="RouteLinks_Con">
        <RouteLinks>
          <RouteLink hv="orange" cp="pointer">
            Home
          </RouteLink>
          <ArrowForwardRounded id="ArrowForward_Icon" />

          <RouteLink>{CurrentPage} </RouteLink>
        </RouteLinks>
      </RouteLinksCon>
    </Container>
  );
}

export default RouteLink2;
