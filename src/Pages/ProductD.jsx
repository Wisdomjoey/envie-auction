import { useState, useEffect } from "react";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import ProductDetails_Selection from "../Components/Product/ProductDetailsSelection";
import Product_HomeSection from "../Components/Product/Product_HomeSection";

import {
  ArrowForwardRounded,
  ChevronLeft,
  ChevronRight,
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import img from "../images/product1.png";
import Pagimg from "../images/01 (1).png";
import ActiveBidders from "../images/ActiveBidders.png";
import watching from "../images/watching.png";
import TotalBid from "../images/totalBid.png";
import searchIcon from "../images/search-icon.png";
import tab1 from "../images/tab1.png";
import tab2 from "../images/tab2.png";
import tab3 from "../images/tab3.png";
import tab4 from "../images/tab4.png";
import { Rating } from "@mui/material";
import ProductDetailsSelection from "../Components/Product/ProductDetailsSelection";
import ProductDescription from "../Components/Product/ProductDescription";
import ProductDeliveryOptions from "../Components/Product/ProductDeliveryOptions";
import ProductBidHistory from "../Components/Product/ProductBidHistory";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import ProductDSelection from "../Components/Product/ProductDSelection";

const ProductDCon = styled.div`
  width: 100%;
`;
const Container = styled.div`
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  margin-bottom: 500px;
  height: 90vh;
`;

function ProductD() {
  return (
    <ProductDCon>
      <Container>
        <HeaderSection SingleRoute={false} Page="Page" CurrentPage="Product Details" />
        <Product_HomeSection />
        <ProductDSelection />
      <Footer/>
      </Container>
    </ProductDCon>
  );
}

export default ProductD;
