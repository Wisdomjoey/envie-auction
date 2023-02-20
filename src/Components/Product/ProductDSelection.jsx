import { useState } from "react";
import styled from "styled-components";
import tab1 from "../../images/tab1.png";
import tab2 from "../../images/tab2.png";
import tab3 from "../../images/tab3.png";
import tab4 from "../../images/tab4.png";
import ProductDescription from "./ProductDescription";
import ProductBidHistory from "./ProductBidHistory";
import ProductDeliveryOptions from "./ProductDeliveryOptions";
import ProductQuestions from "./ProductQuestions";

const ProductDSelectionCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 100px;
`;
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
const ProductInfoWrapper = styled.div`
background-color: #ebf2ff;
display:flex;
  flex-wrap: wrap;
align-items:center;
justify-content:space-between;
width:80%;
flex:1;
margin-top: 80px;
box-sizing:border-box;
padding:10px 20px;
margin:bottom:80px;
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
  margin-top: 30px;
`;
const Container = styled.div``;

function ProductDSelection({data}) {
  const [active, SetActive] = useState("ProductDetails");
  return (
    <ProductDSelectionCon>
      <ProductInfoWrapper>
        <Details
          className="Description"
          onClick={() => {
            SetActive("ProductDetails");
          }}
          style={
            active === "ProductDetails" ? { backgroundColor: "white" } : {}
          }
        >
          <DetailsImgCon>
            <DetailsImg src={tab1} alt="tab1" />
          </DetailsImgCon>
          <DetailsTxt>ProductDetails</DetailsTxt>
        </Details>
        <Details
          className="Delivery_Options"
          onClick={() => {
            SetActive("Delivery_Option");
          }}
          style={
            active === "Delivery_Option" ? { backgroundColor: "white" } : {}
          }
        >
          <DetailsImgCon>
            <DetailsImg src={tab2} alt="tab2" />
          </DetailsImgCon>
          <DetailsTxt>Delivery Options</DetailsTxt>
        </Details>
        <Details
          className="ProductDetails"
          onClick={() => {
            SetActive("BidHistory");
          }}
          style={active === "BidHistory" ? { backgroundColor: "white" } : {}}
        >
          <DetailsImgCon>
            <DetailsImg src={tab3} alt="tab3" />
          </DetailsImgCon>
          <DetailsTxt>Bid history</DetailsTxt>
        </Details>

        <Details
          className="ProductDetails"
          onClick={() => {
            SetActive("Questions");
          }}
          style={active === "Questions" ? { backgroundColor: "white" } : {}}
        >
          <DetailsImgCon>
            <DetailsImg src={tab4} alt="tab4" />
          </DetailsImgCon>
          <DetailsTxt>Questions</DetailsTxt>
        </Details>
      </ProductInfoWrapper>
      <SetProductDetails>
        {active === "ProductDetails" && <ProductDescription data={data.description} />}
        {active === "Delivery_Option" && <ProductDeliveryOptions />}
        {active === "BidHistory" && <ProductBidHistory data={data.bids} />}
        {active === "Questions" && <ProductQuestions />}
      </SetProductDetails>
    </ProductDSelectionCon>
  );
}

export default ProductDSelection;
