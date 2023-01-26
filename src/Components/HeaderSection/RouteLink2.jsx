import { ArrowForwardRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RouteLinks_Con = styled.div`
  width: 100%;
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  position: relative;
  // top: 70px;
`;
const Route_Links = styled.div`
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
      <RouteLinks_Con id="RouteLinks_Con">
        <Route_Links>
          <RouteLink hv="orange" cp="pointer">
            Home
          </RouteLink>
          <ArrowForwardRounded id="ArrowForward_Icon" />

          <RouteLink>{CurrentPage} </RouteLink>
        </Route_Links>
      </RouteLinks_Con>
    </Container>
  );
}

export default RouteLink2;
