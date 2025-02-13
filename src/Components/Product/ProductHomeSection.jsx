import {
  Facebook,
  Instagram,
  LinkedIn,
  StarOutlined,
  Twitter,
} from "@mui/icons-material";
import React, { useState } from "react";
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
import ActiveBidders from "../../images/ActiveBidders.png";
import watching from "../../images/watching.png";
import searchIcon from "../../images/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { createBid, getUserBids, updateBid } from "../../Firebase Actions/userActions";
import { getAllAuctions, updateAuction } from "../../Firebase Actions/auctionActions";
import { setauctions, setuserauctions } from "../../redux/reducers/auctionSlice";
import { getAllBids } from "../../Firebase Actions/bidActions";
import { setbids, setuserbids } from "../../redux/reducers/bidSlice";
import Spinner from "../utils/Spinner";
import { useEffect } from "react";


const ProductHomeSectionCon = styled.div`
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

const ImageSliderCon = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;
const MainImgCon = styled.div`
  width: 800px;
`;
const MainImg = styled.img`
  box-shadow: 0px 9px 30px 0px rgb(22 26 57 / 16%);
  max-width: 100%;
`;
const PagImgCon = styled.div`
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

const ProductInfoCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap:wrap;
  flex-direction:column;
  width: 80%;
  margin-top: 50px;
`;

const ProductInfoLeftCon = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductName = styled.h1`
  white-space: nowrap;
  font-size: 42px;
`;
const ProductInfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px 0;
`;
const ListingId = styled.p`
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
const ItemId = styled.p`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
`;

const ProductPrice = styled.div`
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

const ProductPriceLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const ProductPriceRight = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  items-align: left;
  text-align: right;
  flex-direction: column;
`;
const ProductPriceRightTxtCon = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProductPriceLeftTxt = styled.p`
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
const ProductInfoRightCon = styled.div`
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

const BidDetailsCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-right: 8px;
`;
const BidDetailsConC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BidDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  margin-top: 20px;
  // flex-direction: column;
`;

const BidDetailsImgCon = styled.div``;
const BidDetailsImg = styled.img`
  max-width: 21%;
`;
const BidDetailsImgTxtCon = styled.div``;
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

const SubmitBidImgCon = styled.div`
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

const SubmitBidButtonCon = styled.div`
  margin-left: 10px;
  flex: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SubmitBidButton = styled.button`
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

const BuyProductCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

const BuyNowBtnCon = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const BuyBtn = styled.button`
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

const WishListBtnCon = styled.div`
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

const ShareCon = styled.div`
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



const ProductHomeSection = ({ data }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [amount, setamount] = useState(0);
  const [isLoading, setloading] = useState(false);
  const { signed } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  var amt = 0;
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  const getTime = (ms) => {
    const time = ms - Date.now();

    if (!(time < 0)) {
      setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
      sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setminutes(Math.floor((time / 1000 / 60) % 60));
      setseconds(Math.floor((time / 1000) % 60));
    }
  }

  for (let index = 0; index < data.bids.length; index++) {
    if (data.bids[index].amount > amt) {
      amt = data.bids[index].amount;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signed) {
      if (data.bidEndTime - Date.now() <= 0) {
        alert.error(<p style={{ textTransform: 'none' }}>Sorry this auction has ended already</p>);
      } else {
        if (amount === '') {
          alert.error(<p style={{ textTransform: 'none' }}>Field should not be empty</p>);
        } else {
          if (parseFloat(amount) >= parseFloat(data.minBidAmount)) {
            if (parseFloat(amount) > amt) {
              setloading(true);
              const isBidded = data.bids.filter(item => item.userId === user.id)[0];

              if (isBidded !== undefined) {
                const index = data.bids.indexOf(isBidded);
                let bids = [...data.bids];

                await updateBid(user.id, bids[index].bidId, parseFloat(amount)).then(async (value) => {
                  if (value.status) {
                    bids.splice(index, 1);
                    bids.push({
                      userId: user.id,
                      bidId: value.result,
                      userName: user.name,
                      date: Date.now(),
                      amount: parseFloat(amount)
                    });

                    await updateAuction(data.id, {
                      bids: bids
                    }).then(async () => {
                      await getAllAuctions().then(async (value1) => {
                        dispatch(setauctions(value1.result));
                        dispatch(setuserauctions(value1.result.filter((item) => item.userId === user.id)));

                        await getUserBids(user.id).then((value2) => {
                          if (value2.status) {
                            dispatch(setuserbids(value2.result));
                            alert.success(<p style={{ textTransform: 'none' }}>Bid has been updated</p>);
                            setamount(0);
                          } else {
                            alert.error(<p style={{ textTransform: 'none' }}>An Error occurred</p>);
                            console.log(value2.result);
                          }
                        })
                      });
                    })
                  } else {
                    alert.error(<p style={{ textTransform: 'none' }}>An Error occurred</p>);
                    console.log(value.result);
                  }
                });
              } else {
                await createBid(user.id, data.id, parseFloat(amount)).then(async (value) => {
                  if (value.status) {
                    await updateAuction(data.id, {
                      bids: [...data.bids, {
                        userId: user.id,
                        bidId: value.result,
                        userName: user.name,
                        date: Date.now(),
                        amount: parseFloat(amount)
                      }]
                    }).then(async () => {
                      await getAllAuctions().then(async (value1) => {
                        dispatch(setauctions(value1.result));
                        dispatch(setuserauctions(value1.result.filter((item) => item.userId === user.id)));

                        await getUserBids(user.id).then((value2) => {
                          if (value2.status) {
                            dispatch(setuserbids(value2.result));
                            alert.success(<p style={{ textTransform: 'none' }}>Bid has been uploaded</p>);
                            setamount(0);
                          } else {
                            alert.error(<p style={{ textTransform: 'none' }}>An Error occurred</p>);
                            console.log(value2.result);
                          }
                        })
                      });
                    })
                  } else {
                    alert.error(<p style={{ textTransform: 'none' }}>An error occurred</p>);
                    console.log(value.result);
                  }
                });
              }

              setloading(false);
            } else {
              alert.error(<p style={{ textTransform: 'none' }}>Your bid amount is lower than the current highest bid</p>);
            }
          } else {
            alert.error(<p style={{ textTransform: 'none' }}>Bid amount cannot be lower than the minimum amount</p>);
          }
        }
      }
    } else {
      alert.error(<p style={{ textTransform: 'none' }}>You are not logged in</p>);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(data.bidEndTime), 1000);

    if (data.bidEndTime - Date.now() < 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [data.bidEndTime]);

  return (
    <>
      <Spinner show={isLoading} />
      <ProductHomeSectionCon>
        <ImageSliderCon>
          <MainImgCon>
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
              {data.images.map((val, ind) => {
                return <SwiperSlide key={ind}>
                  <img alt='' src={val} />
                </SwiperSlide>;
              })}
            </Swiper>
          </MainImgCon>
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
            {data.images.map((val, ind) => {
              return <SwiperSlide key={ind}>
                <img alt='' src={val} />
              </SwiperSlide>;
            })}
          </Swiper>
        </ImageSliderCon>

        {/* End of Image Slider */}

        <ProductInfoCon>
          <ProductInfoLeftCon>
            <ProductInfo>
              <ProductInfoTop>
                <ProductName>{data.name}</ProductName>
              </ProductInfoTop>
              <ProductInfoBottom>
                <ListingId>Listing ID: 14076242</ListingId>
                <HR />
                <ItemId>Item #: 7300-335686</ItemId>
              </ProductInfoBottom>
            </ProductInfo>
            <ProductPrice>
              <ProductPriceLeft>
                <ProductPriceLeftTxt fz="35px" mb="39px" mt="20px" fw={400}>
                  Current Price
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                  Minimum Bidding
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="15px" fz="19px" fw={300}>
                  Bid Increment (US)
                </ProductPriceLeftTxt>
              </ProductPriceLeft>
              {/* <AuctionTimeHr/> */}
              <ProductPriceRight>
                {/* <ProductPriceRightTxtCon> */}
                <ProductPriceLeftTxt
                  cl="#43B055"
                  fw={600}
                  fz="35px"
                  mb="20px"
                  mt="20px"
                >
                  ₦{amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="10px" fz="19px">
                  ₦{data.minBidAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt mt="10px" mb="10px" fz="19px">
                  ₦10,000.00
                </ProductPriceLeftTxt>
                {/* </ProductPriceRightTxtCon> */}
              </ProductPriceRight>
            </ProductPrice>
            <AuctionTimeHr mg="25px" wd="95%" />

            <SubmitBid id='submitbid'>
              <SubmitBidImgCon>
                <SubmitBidImg src={searchIcon} alt="searchIcon" />
              </SubmitBidImgCon>
              <InputContainer>
                <Input type='number' onChange={(e) => setamount(e.target.value)} placeholder="Enter Your Bid Amount" />
              </InputContainer>
              <SubmitBidButtonCon>
                <SubmitBidButton onClick={(e) => handleSubmit(e)}>Submit A Bid</SubmitBidButton>
              </SubmitBidButtonCon>
            </SubmitBid>
            <BuyProductCon>
              <BuyNowBtnCon>
                <BuyBtn>BUY NOW: ₦{data.buyNowAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</BuyBtn>
              </BuyNowBtnCon>
              <WishListBtnCon>
                <WishListButton>
                  <StarOutlined sx={{ color: "darkOrange" }} />
                  Add To Wishlist
                </WishListButton>
              </WishListBtnCon>
              <ShareCon>
                <ShareTxt>Share to :</ShareTxt>
                <Facebook id="ShareTxtIcon" />
                <Twitter id="ShareTxtIcon" />
                <LinkedIn id="ShareTxtIcon" />
                <Instagram id="ShareTxtIcon" />
              </ShareCon>
            </BuyProductCon>
          </ProductInfoLeftCon>
          {/* End Of ProductInfoLeftCon */}
          <br />
          <br />
          <ProductInfoRight>
            <ProductInfoRightCon>
              <AuctionTimeRemaining>
                <AunctionTimeTxt fz="20px" cl="black" fw={400}>
                  This Auction Ends in
                </AunctionTimeTxt>
                <AunctionTimeTxt fz="30px" cl="#FC6677" fw={500}>
                  {days}d : {hours}h : {minutes}m : {seconds}s
                </AunctionTimeTxt>
              </AuctionTimeRemaining>
              <BidDetailsCon>
                <AuctionTimeHr mg="5px" wd="100%" />
                <BidDetailsConC>
                  <BidDetails>
                    {/* <BidDetailsImgCon> */}
                    <BidDetailsImg src={ActiveBidders} alt="ActiveBidders" />
                    {/* </BidDetailsImgCon> */}
                    <BidDetailsImgTxtCon>
                      <BidDetailsImgTxt fw={600} fz="35px">
                        {data.bids.length}
                      </BidDetailsImgTxt>
                      <BidDetailsImgTxt fw={400} fz="13px">
                        Active Bidders
                      </BidDetailsImgTxt>
                    </BidDetailsImgTxtCon>
                  </BidDetails>
                  <BidDetails>
                    {/* <BidDetailsImgCon> */}
                    <BidDetailsImg src={watching} alt="watching" />
                    {/* </BidDetailsImgCon> */}
                    <BidDetailsImgTxtCon>
                      <BidDetailsImgTxt fw={600} fz="35px">
                        0
                      </BidDetailsImgTxt>
                      <BidDetailsImgTxt fw={400} fz="13px">
                        Watching
                      </BidDetailsImgTxt>
                    </BidDetailsImgTxtCon>
                  </BidDetails>
                  <BidDetails>
                    {/* <BidDetailsImgCon> */}
                    <BidDetailsImg src={ActiveBidders} alt="ActiveBidders" />
                    {/* </BidDetailsImgCon> */}
                    <BidDetailsImgTxtCon>
                      <BidDetailsImgTxt fw={600} fz="35px">
                        {data.bids.length}
                      </BidDetailsImgTxt>
                      <BidDetailsImgTxt fw={400} fz="13px">
                        TotalBid
                      </BidDetailsImgTxt>
                    </BidDetailsImgTxtCon>
                  </BidDetails>
                </BidDetailsConC>
              </BidDetailsCon>
            </ProductInfoRightCon>
            <UseFullLinks>
              <ShippingLink>View Shipping, </ShippingLink>
              <PoliciesLink> Payment & Auction Policies</PoliciesLink>
            </UseFullLinks>
          </ProductInfoRight>
        </ProductInfoCon>
      </ProductHomeSectionCon>
    </>
  );
}

export default ProductHomeSection;
