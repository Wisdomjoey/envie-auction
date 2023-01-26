import {
  ArrowForwardRounded,
  ChevronLeft,
  ChevronRight,
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  StarOutlined,
  Twitter,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import styled from "styled-components";
import img from "../../images/product1.png";
import Pagimg from "../../images/01 (1).png";
import ActiveBidders from "../../images/ActiveBidders.png";
import watching from "../../images/watching.png";
import TotalBid from "../../images/totalBid.png";
import searchIcon from "../../images/search-icon.png";
import tab1 from "../../images/tab1.png";
import tab2 from "../../images/tab2.png";
import tab3 from "../../images/tab3.png";
import tab4 from "../../images/tab4.png";
import { Rating } from "@mui/material";
import ProductDetailsSelection from './ProductDetailsSelection';
import ProductQuestions from "./ProductQuestions";
import ProductDescription from "./ProductDescription";
import ProductDeliveryOptions from "./ProductDeliveryOptions";
import ProductBidHistory from "./ProductBidHistory";


const Product_HomeSectionCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70vh;
`;

const ImageSlider_Con = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;
const MainImg_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
const MainImg = styled.img`
  box-shadow: 0px 9px 30px 0px rgb(22 26 57 / 16%);
  max-width: 100%;
`;
const PagImg_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3vw;
`;

const IconContainer = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: white;
  box-shadow: 0px 4px 30px 0px rgb(22 26 57 / 16%);

  &:hover {
    background-color: purple;
    color: white;
  }
`;

const PagIMage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
`;

const PagImg = styled.img`
  max-width: 160px;
`;

const ProductInfo_Con = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap:wrap;
  flex-direction:column;
  width: 80%;
  margin-top: 50px;
`;

const ProductInfoLeft_Con = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const Product_Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const Product_InfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Product_Name = styled.h1`
  white-space: nowrap;
  font-size: 42px;
`;
const Product_InfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px 0;
`;
const Listing_Id = styled.p`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
`;
const HR = styled.div`
  border-right: 2px solid gray;
  height: 15px;
  width: 2px;
  margin: 8px;
`;
const Item_Id = styled.p`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
`;

const Product_Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #ebf2ff;
  width: 100%;
  flex: 1;
  padding:15px;
  box-sizing: border-box;
`;

const Product_PriceLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const Product_PriceRight = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  items-align: left;
  text-align: right;
  flex-direction: column;
`;
const Product_PriceRightTxtCon = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Product_PriceLeftTxt = styled.p`
  text-align: left;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  color: ${(props) => props.cl};
`;

const ProductInfoRight = styled.div`
  flex: 1;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`;
const ProductInfoRight_Con = styled.div`
  margin-left: 20px;
  flex: 2;
  border-radius: 15px;
  border: 1px solid #e0e0f1;
  height: 100%;
  width: 100%;
  padding:20px 10px;
  margin-bottom: 50px;
`;
const AuctionTimeRemaining = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AunctionTimeTxt = styled.p`
  color: ${(props) => props.cl};
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin:10px 0;
`;

const AuctionTimeHr = styled.hr`
  border: none;
  background-color: #e0e0f1;
  width: ${(props) => props.wd};
  height: 1px;
  margin: ${(props) => props.mg};
`;

const BidDetails_Con = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-right: 8px;
`;

const BidDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  margin-top: 20px;
  // flex-direction: column;
`;

const BidDetailsImg_Con = styled.div``;
const BidDetailsImg = styled.img`
  max-width: 21%;
`;
const BidDetailsImgTxt_Con = styled.div``;
const BidDetailsImgTxt = styled.p`
  white-space: nowrap;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
`;

const SubmitBid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom:20px;
`;

const SubmitBidImg_Con = styled.div`
  flex: 1;
`;

const SubmitBidImg = styled.img`
  max-width: 60%;
`;

const InputContainer = styled.div`
  flex: 3;
  margin-right: 13px;
  border-radius: 16px;
  border: 1px solid #e0e0f1;
  padding: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

const SubmitBidButton_Con = styled.div`
  margin-left: 10px;
  flex: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SubmitBid_Button = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  flex: 1;
`;

const BuyProduct_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

const BuyNow_BtnCon = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Buy_Btn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  // flex: 1;
`;

const WishListBtn_Con = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`;

const WishListButton = styled.button`
  border: 1px solid #e0e0f1;
  color: black;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  white-space:nowrap;
  // flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: white;

  &:hover {
    color: white;
    background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
    box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  }
`;

const Share_Con = styled.div`
  flex: 1;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:10px;
`;
const ShareTxt = styled.p`
  white-space: nowrap;
  font-weight: 400;
`;
const UseFullLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: grey;
`;
const ShippingLink = styled.a`
  text-decoration: underline;
  color: lightpurple;
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



const Product_HomeSection = () =>{

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <Product_HomeSectionCon>
      <ImageSlider_Con>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
      </ImageSlider_Con>

      {/* End of Image Slider */}

      <ProductInfo_Con>
        <ProductInfoLeft_Con>
          <Product_Info>
            <Product_InfoTop>
              <Product_Name>The Breeze Zodiac IX</Product_Name>
            </Product_InfoTop>
            <Product_InfoBottom>
              <Listing_Id>Listing ID: 14076242</Listing_Id>
              <HR />
              <Item_Id>Item #: 7300-335686</Item_Id>
            </Product_InfoBottom>
          </Product_Info>
          <Product_Price>
            <Product_PriceLeft>
              <Product_PriceLeftTxt fz="35px" mb="39px" mt="20px" fw={400}>
                Current Price
              </Product_PriceLeftTxt>
              <Product_PriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                Buyer's Premium
              </Product_PriceLeftTxt>
              <Product_PriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                Bid Increment (US)
              </Product_PriceLeftTxt>
            </Product_PriceLeft>
            {/* <AuctionTimeHr/> */}
            <Product_PriceRight>
              {/* <Product_PriceRightTxtCon> */}
              <Product_PriceLeftTxt
                cl="#43B055"
                fw={600}
                fz="35px"
                mb="20px"
                mt="20px"
              >
                US $700.00
              </Product_PriceLeftTxt>
              <Product_PriceLeftTxt mt="10px" mb="10px" fz="19px">
                10.00%
              </Product_PriceLeftTxt>
              <Product_PriceLeftTxt mt="10px" mb="10px" fz="19px">
                $50.00
              </Product_PriceLeftTxt>
              {/* </Product_PriceRightTxtCon> */}
            </Product_PriceRight>
          </Product_Price>
          <AuctionTimeHr mg="25px" wd="95%" />

          <SubmitBid>
            <SubmitBidImg_Con>
              <SubmitBidImg src={searchIcon} alt="searchIcon" />
            </SubmitBidImg_Con>
            <InputContainer>
              <Input placeholder="Enter Your Bid Amount" />
            </InputContainer>
            <SubmitBidButton_Con>
              <SubmitBid_Button>Submit A Bid</SubmitBid_Button>
            </SubmitBidButton_Con>
          </SubmitBid>
          <BuyProduct_Con>
            <BuyNow_BtnCon>
              <Buy_Btn>BUY NOW: $4,200</Buy_Btn>
            </BuyNow_BtnCon>
            <WishListBtn_Con>
              <WishListButton>
                <StarOutlined sx={{ color: "darkOrange" }} />
                Add To Wishlist
              </WishListButton>
            </WishListBtn_Con>
            <Share_Con>
              <ShareTxt>Share to :</ShareTxt>
              <Facebook id="ShareTxtIcon" />
              <Twitter id="ShareTxtIcon" />
              <LinkedIn id="ShareTxtIcon" />
              <Instagram id="ShareTxtIcon" />
            </Share_Con>
          </BuyProduct_Con>
        </ProductInfoLeft_Con>
        {/* End Of ProductInfoLeft_Con */}

        <ProductInfoRight>
          <ProductInfoRight_Con>
            <AuctionTimeRemaining>
              <AunctionTimeTxt fz="20px" cl="black" fw={400}>
                This Auction Ends in
              </AunctionTimeTxt>
              <AunctionTimeTxt fz="30px" cl="#FC6677" fw={500}>
                0d : 18h : 18m : 6s
              </AunctionTimeTxt>
            </AuctionTimeRemaining>
            <BidDetails_Con>
              <AuctionTimeHr mg="5px" wd="100%" />
              <BidDetails>
                {/* <BidDetailsImg_Con> */}
                <BidDetailsImg src={ActiveBidders} alt="ActiveBidders" />
                {/* </BidDetailsImg_Con> */}
                <BidDetailsImgTxt_Con>
                  <BidDetailsImgTxt fw={600} fz="35px">
                    61
                  </BidDetailsImgTxt>
                  <BidDetailsImgTxt fw={400} fz="13px">
                    Active Bidders
                  </BidDetailsImgTxt>
                </BidDetailsImgTxt_Con>
              </BidDetails>
              <BidDetails>
                {/* <BidDetailsImg_Con> */}
                <BidDetailsImg src={watching} alt="watching" />
                {/* </BidDetailsImg_Con> */}
                <BidDetailsImgTxt_Con>
                  <BidDetailsImgTxt fw={600} fz="35px">
                    203
                  </BidDetailsImgTxt>
                  <BidDetailsImgTxt fw={400} fz="13px">
                    Watching
                  </BidDetailsImgTxt>
                </BidDetailsImgTxt_Con>
              </BidDetails>
              <BidDetails>
                {/* <BidDetailsImg_Con> */}
                <BidDetailsImg src={ActiveBidders} alt="ActiveBidders" />
                {/* </BidDetailsImg_Con> */}
                <BidDetailsImgTxt_Con>
                  <BidDetailsImgTxt fw={600} fz="35px">
                    82
                  </BidDetailsImgTxt>
                  <BidDetailsImgTxt fw={400} fz="13px">
                    TotalBid
                  </BidDetailsImgTxt>
                </BidDetailsImgTxt_Con>
              </BidDetails>
            </BidDetails_Con>
          </ProductInfoRight_Con>
          <UseFullLinks>
            <ShippingLink>View Shipping, </ShippingLink>
            <PoliciesLink> Payment & Auction Policies</PoliciesLink>
          </UseFullLinks>
        </ProductInfoRight>
      </ProductInfo_Con>
    </Product_HomeSectionCon>
  );
}

export default Product_HomeSection;
