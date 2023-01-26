import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tab1 from "../../images/tab1.png";
import tab2 from "../../images/tab2.png";
import tab3 from "../../images/tab3.png";
import tab4 from "../../images/tab4.png";
import ProductDescription from "./ProductDescription";
import ProductBidHistory from "./ProductBidHistory";
import ProductDeliveryOptions from "./ProductDeliveryOptions";
import ProductQuestions from "./ProductQuestions";

const PoliciesLink = styled.a`
  text-decoration: underline;
  color: lightpurple;
`;

const ProductDetails = styled.div`
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

function ProductDetailsSelection() {
  const [productDetails, SetProductDetails] = useState("Description");
  // useEffect(() => {
  //   console.log(productDetails);
  // }, [productDetails]);

  return (
    <ProductDetails>
      <ProductInfo_Wrapper>
        <Details
          className="Description"
          // onClick={() => {
          //   console.log("clicked");
          // }}
          style={
            productDetails === "Description" ? { backgroundColor: "white" } : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab1} alt="tab1" />
          </Details_ImgCon>
          <DetailsTxt>ProductDetails</DetailsTxt>
        </Details>
        <Details
          className="Delivery_Options"
          // onClick={() => {
          //   SetProductDetails("Delivery_Options");
          // }}
          style={
            productDetails === "Delivery_Options"
              ? { backgroundColor: "white" }
              : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab2} alt="tab2" />
          </Details_ImgCon>
          <DetailsTxt>Delivery Options</DetailsTxt>
        </Details>
        <Details
          className="ProductDetails"
          // onClick={() => {
          //   SetProductDetails("Bid_History");
          // }}
          style={
            productDetails === "Bid_History" ? { backgroundColor: "white" } : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab3} alt="tab3" />
          </Details_ImgCon>
          <DetailsTxt>Bid history</DetailsTxt>
        </Details>

        <Details
          className="ProductDetails"
          // onClick={() => {
          //   SetProductDetails("Questions");
          // }}
          style={
            productDetails === "Questions" ? { backgroundColor: "white" } : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab4} alt="tab4" />
          </Details_ImgCon>
          <DetailsTxt>Questions</DetailsTxt>
        </Details>
      </ProductInfo_Wrapper>
      <SetProductDetails>
        {/* {productDetails === "Description" && <ProductDescription />}
        {productDetails === "Delivery_Options" && <ProductDeliveryOptions />}
        {productDetails === "Bid_History" && <ProductBidHistory />}
        {productDetails === "Questions" && <ProductQuestions />} */}

        <ProductQuestions />
      </SetProductDetails>
    </ProductDetails>
  );
}

export default ProductDetailsSelection;
