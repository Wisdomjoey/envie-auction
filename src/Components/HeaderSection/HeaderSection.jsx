import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Home/Navbar";
import RouteLinks from "./RouteLinks";


const Container = styled.div`
  padding-top: 85px;
`;

function HeaderSection({SingleRoute, Page, CurrentPage}) {

  return (
    <Container>
      <Navbar />
      <RouteLinks
        SingleRoute={SingleRoute}
        Page={Page}
        CurrentPage={CurrentPage}
      />
    </Container>
  );
}

export default HeaderSection;
