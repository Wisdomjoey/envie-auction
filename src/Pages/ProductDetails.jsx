import { useState, useEffect } from "react";

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
// import ProductQuestions from "../Components/Product/ProductQuestions";
import ProductDescription from "../Components/Product/ProductDescription";
import ProductDeliveryOptions from "../Components/Product/ProductDeliveryOptions";
import ProductBidHistory from "../Components/Product/ProductBidHistory";
import ProductQuestions from "../Components/Product/ProductQuestions";
import HeaderSection from "../Components/HeaderSection/HeaderSection";

const ProductDetailsCon = styled.div`display:block`;
const PoliciesLink = styled.a`
  text-decoration: underline;
  color: lightpurple;
`;

const Product_Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const ProductInfo_Wrapper = styled.div`
background-color: #ebf2ff;
display:flex;
align-items:center;
justify-content:space-between;
width:80%;
flex:1;
margin-top: 80px;
box-sizing:border-box;
padding:10px 20px;
margin:bottom:80px;
// width:100%;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e0e0f1;
  padding: 10px 30px;
  flex: 1;
  margin: 8px;
  cursor: pointer;
  // background-color:white;
`;
const Details_ImgCon = styled.div``;
const DetailsImg = styled.img`
  max-width: 90%;
  margin: 5px;
`;
const DetailsTxt = styled.p`
  font-weight: 400;
`;

const SetProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
`;

function ProductDetails() {
  const [productDetails, SetProductDetails] = useState("Description");
  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);
  return (
    <ProductDetailsCon>
      <HeaderSection/>
      
      {/* <Product_Details> */}
    </ProductDetailsCon>
  );
}

export default Product_Details;
