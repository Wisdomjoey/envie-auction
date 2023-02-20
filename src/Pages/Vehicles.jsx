import React, { Component } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import Spinner from "../Components/utils/Spinner";
import FeaturedAuction from "../Components/Vehicles/FeaturedAuction";
import SortVehicles from "../Components/Vehicles/SortVehicles";
import { Products } from "../data";


const VehiclesContainer = styled.div`
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
  const { loading } = useSelector((state) => state.auth);
  window.scrollTo(0, 0);

  return (
    <>
      <Spinner show={loading} />
    <VehiclesContainer>
      <Container>
        <HeaderSection
          SingleRoute={false}
          Page="Pages"
          CurrentPage={"Auctions"}
        />
      </Container>
      <FeaturedAuction />
      <SortVehicles />
      <Footer />
        </VehiclesContainer>
    </>
  );
};

export default Vehicles;
