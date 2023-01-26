import React, { Component } from "react";
import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import FeaturedAuction from "../Components/Vehicles/FeaturedAuction";
import SortVehicles from "../Components/Vehicles/SortVehicles";
import { Products } from "../data";


const Vehicles_Container = styled.div`
  width: 100%;
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
`;

const Container = styled.div``;

const Vehicles = () => {
  return (
    <Vehicles_Container>
      <Container>
        <HeaderSection
          SingleRoute={false}
          Page="Pages"
          CurrentPage={"Vehicles"}
        />
      </Container>
      <FeaturedAuction />
      <SortVehicles />
      <Footer />
    </Vehicles_Container>
  );
};

export default Vehicles;
