import { Delete, Gavel, ShoppingBagRounded } from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { MyBids__Upcomming } from "../../data";
import { deleteAuction, getAllAuctions } from "../../Firebase Actions/auctionActions";
import { setauctions, setuserauctions } from "../../redux/reducers/auctionSlice";
import { setloading } from "../../redux/reducers/authSlice";

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
  z-index: 30;
  background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
  box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
  cursor: pointer;
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


function Upcomming({ item }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const alert = useAlert();
  const [days, setdays] = useState();
  const [hours, sethours] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();

  const getTime = (ms) => {
    const time = ms - Date.now();

    setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
    sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setminutes(Math.floor((time / 1000 / 60) % 60));
    setseconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(item.bidEndTime), 1000);

    return () => clearInterval(interval);
  }, [item.bidEndTime])

  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(setloading(true));

    await deleteAuction(id).then(async () => {
      await getAllAuctions().then((value) => {
        dispatch(setauctions(value.result));
        dispatch(setuserauctions(value.result.filter((item) => item.userId === user.id)));
        alert.success(<p style={{ textTransform: 'none' }}>Auction deleted successfully</p>);
      });
    });
  }

  var amt = 0;

  for (let index = 0; index < item.bids.length; index++) {
    if (item.bids[index].amount > amt) {
      amt = item.bids[index].amount;
    }
  }

  return (
    <FBottomCard className="fBottom__card">
      <CardTop className="card__top">
        <CardTopImg className="card__topImg" src={item.images[0]} />
        <CardTopIcon onClick={(e) => handleDelete(e, item.id)} className="card__topIcon">
          <Delete sx={{ fontSize: 20, color: "white" }} />
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
                <MiddlePrice>₦{amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</MiddlePrice>
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
                <MiddlePrice>₦{item.buyNowAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</MiddlePrice>
              </MiddleRight>
            </MiddleCon>
          </Middle>
        </BottomMiddle>
        <BottomBottom className="bottom__bottom">
          <BBTop className="bb__top">
            <BBTopLeft className="bb__topLeft">
              <BBTopLeftCon className="bb__topLeftCon">
                <BBTopSpan className="bb__topSpan" color="#f5317f">
                  {days}d : {hours}h : {minutes}m : {seconds}s
                </BBTopSpan>
              </BBTopLeftCon>
            </BBTopLeft>
            <BBTopRight className="bb_topRight">
              <BBTopRightCon className="bb__topRight">
                <BBTopSpan className="bb__topSpan" color="#43b055">
                  {item.bids.length} Bids
                </BBTopSpan>
              </BBTopRightCon>
            </BBTopRight>
          </BBTop>
          <BBbottom className="bb__bottom">
            Status: {item.reviewStatus}
          </BBbottom>
        </BottomBottom>
      </CardBottom>
    </FBottomCard>
  );
}

export default Upcomming;
