import { useState, useEffect } from "react";

import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";

const ProductDetailsCon = styled.div`display:block`;
const PoliciesLink = styled.a`
  text-decoration: underline;
  color: lightpurple;
`;

const ProductDetailsC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const ProductInfoWrapper = styled.div`
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
const DetailsImgCon = styled.div``;
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
  // const [productDetails, SetProductDetails] = useState("Description");
  window.scrollTo(0, 0);

  return (
    <ProductDetailsCon>
      <HeaderSection/>
      
      {/* <Product_Details> */}
    </ProductDetailsCon>
  );
}

export default ProductDetails;
