import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import Spinner from "../Components/utils/Spinner";
import FeaturedAuction from "../Components/Vehicles/FeaturedAuction";
import SortVehicles from "../Components/Vehicles/SortVehicles";
import { Products } from "../data";
import bg from '../images/hero-bg.png';

const VehiclesContainer = styled.div`
  width: 100%;
  // background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
`;
const Container1 = styled.div`
   width:100%;
   box-sizing:border-box;
   padding:0 5vh;

`
const TitleCon = styled.div`
  width:100%;
  margin-top:60px;
  margin-bottom:60px;
`
const Title = styled.h1`
    color:white;
    font-size:40px;
`
const FeaturedAuctionsCard = styled.div`
   dsiplay:flex;
   align-items:center;
   justify-content:space-between;
   flex-wrap:wrap;
   width: 100%;
   display: flex;
   gap: 30px;
   padding-top: 70px;
`

const Container = styled.div``;

const Vehicles = () => {
  const { loading } = useSelector((state) => state.auth);
  window.scrollTo(0, 0);
  const [data, setdata] = useState([]);
  const { auctions } = useSelector((state) => state.auction);

  useEffect(() => {
    const list = auctions.filter((item) => item.status === 'featured');

    setdata(list);
  }, [auctions])

  return (
    <>
      <Spinner show={loading} />
    <VehiclesContainer style={{background: `url(${bg})`}}>
      <Container>
        <HeaderSection
          SingleRoute={false}
          Page="Pages"
          CurrentPage={"Auctions"}
        />
      </Container>
        <Container1>
          <TitleCon>
            <Title>Bid On These Featured Auctions!</Title>
          </TitleCon>
          <FeaturedAuctionsCard className="flex aic jcc">
            {data.map((item, ind) => {
              return <FeaturedAuction item={item} key={ind} />
            })}
          </FeaturedAuctionsCard>
        </Container1>
      <SortVehicles />
      <Footer />
        </VehiclesContainer>
    </>
  );
};

export default Vehicles;
