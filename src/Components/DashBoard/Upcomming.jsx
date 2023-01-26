import { Gavel, ShoppingBagRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { MyBids__Upcomming } from "../../data";
const Container = styled.div`
  dsiplay: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 87%;
  display: flex;
  gap: 30px;
  margin-bottom: 100px;
`;
const FeaturedAuctionsCard = styled.div`
`;
const FeturedProduct = styled.div`
  max-width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 5px;

  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
`;
const ProductImgCon = styled.div`
  width: 100%;
`;
const ProductImg = styled.img`
  height: 100%;
`;
const ProductNameCon = styled.div``;
const ProductName = styled.h3``;

const FBottomCard = styled.div`
  flex: 1;
  height: 570px;
  border-radius: 10px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  background: white;
  padding: 13px;
  display: flex;
  flex-direction: column;
`;
const CardTop = styled.div`
  height: 275px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const CardTopImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const CardTopIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
  box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
`;
const CardBottom = styled.div`
  height: 275px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BottomTop = styled.div`
  width: 100%;
  padding: 15px 0;
`;
const BottomSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #171d1c;
`;
const BottomMiddle = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-top: 3px dotted #deddf5;
  border-bottom: 3px dotted #deddf5;
`;
const Middle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: ${(props) => props.w};
    left: 0;
    height: 100%;
    top: 15px;
    bottom: 15px;
    background: #bfbee8;
  }
`;
const MiddleCon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const MiddleText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.color};
`;
const MiddlePrice = styled.span`
  font-size: 22px;
  color: #171d1c;
`;
const MiddleLeft = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const BottomBottom = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
`;
const BBTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const BBTopSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 19px;
`;
const BBTopLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
`;
const BBTopLeftCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;
const BBTopRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-left: 1px solid #bfbee8;
  flex: 1;
`;
const BBTopRightCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;
const BBbottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;
const BBbottomBtn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 70px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
`;


function Upcomming() {
  return (
    <Container>
      {MyBids__Upcomming.map((item) => (
        <FBottomCard className="fBottom__card">
          <CardTop className="card__top">
            <CardTopImg className="card__topImg" src={item.img} />
            <CardTopIcon className="card__topIcon">
              <Gavel sx={{ fontSize: 20, color: "white" }} />
            </CardTopIcon>
          </CardTop>
          <CardBottom className="card__bottom">
            <BottomTop className="bottom__top">
              <BottomSpan>{item.Name}</BottomSpan>
            </BottomTop>
            <BottomMiddle className="bottom__middle">
              <Middle w="1px" className="middle">
                <MiddleCon className="middle__con">
                  <MiddleLeft className="middle__left">
                    <Gavel sx={{ color: "#43b055", fontSize: 40 }} />
                  </MiddleLeft>
                  <MiddleRight className="middle__right">
                    <MiddleText color="#43b055">Current Bid</MiddleText>
                    <MiddlePrice>${item.CurrentBid}</MiddlePrice>
                  </MiddleRight>
                </MiddleCon>
              </Middle>
              <Middle className="middle">
                <MiddleCon className="middle__con">
                  <MiddleLeft className="middle__left">
                    <ShoppingBagRounded
                      sx={{ color: "#ee4730", fontSize: 40 }}
                    />
                  </MiddleLeft>
                  <MiddleRight className="middle__right">
                    <MiddleText color="#ee4730">Buy Now</MiddleText>
                    <MiddlePrice>${item.CurrentPrice}</MiddlePrice>
                  </MiddleRight>
                </MiddleCon>
              </Middle>
            </BottomMiddle>
            <BottomBottom className="bottom__bottom">
              <BBTop className="bb__top">
                <BBTopLeft className="bb__topLeft">
                  <BBTopLeftCon className="bb__topLeftCon">
                    <BBTopSpan className="bb__topSpan" color="#f5317f">
                      1d : 12h : 12m : 60s
                    </BBTopSpan>
                  </BBTopLeftCon>
                </BBTopLeft>
                <BBTopRight className="bb_topRight">
                  <BBTopRightCon className="bb__topRight">
                    <BBTopSpan className="bb__topSpan" color="#43b055">
                      {item.Bids} Bids
                    </BBTopSpan>
                  </BBTopRightCon>
                </BBTopRight>
              </BBTop>
              <BBbottom className="bb__bottom">
                <BBbottomBtn className="bb__bottomBtn">
                  Submit A Bid
                </BBbottomBtn>
              </BBbottom>
            </BottomBottom>
          </CardBottom>
        </FBottomCard>
      ))}
    </Container>
  );
}

export default Upcomming;
