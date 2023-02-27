import { Gavel, ShoppingBagRounded } from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FBottomCard = styled.div`
    flex: 1;
    height: 470px;
    border-radius: 10px;
    box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
    background: white;
    padding: 13px;
    display: flex;
    flex-direction: column;
`
const CardTop = styled.div`
    height: 275px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`
const CardTopImg = styled.img`
    width: 100%;
    object-fit: cover;
`
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
`
const CardBottom = styled.div`
    height: 275px;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const BottomTop = styled.div`
    width: 100%;
    padding: 15px 0;
  text-overflow: ellipsis;
`
const BottomSpan = styled.span`
    font-size: 22px;
    font-weight: 500;
    width: 100%;
    color: #171D1C;
  text-overflow: ellipsis;
`
const BottomMiddle = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 0;
    border-top: 3px dotted #deddf5;
    border-bottom: 3px dotted #deddf5;
`
const Middle = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        width: ${props => props.w};
        left: 0;
        height: 100%;
        top: 15px;
        bottom: 15px;
        background: #bfbee8;
    }
`
const MiddleCon = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const MiddleText = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.color};
`
const MiddlePrice = styled.span`
    font-size: 20px;
    color: #171D1C;
`
const MiddleLeft = styled.div`
    display: flex;
    justify-content: flex-end;
`
const MiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`
const BottomBottom = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
`
const BBTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
`
const BBTopSpan = styled.span`
    color: ${props => props.color};
    font-size: 17px;
`
const BBTopLeft = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 2;
`
const BBTopLeftCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
`
const BBTopRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-left: 1px solid #bfbee8;
    flex: 1;
`
const BBTopRightCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
`
const BBbottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
`
const BBbottomBtn = styled.button`
    background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
    box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
    border: none;
    color: white;
    padding: 12px 65px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
`

export default function FeaturedSection({ item }) {
    const [days, setdays] = useState();
    const [hours, sethours] = useState();
    const [minutes, setminutes] = useState();
    const [seconds, setseconds] = useState();

    const getTime = (ms) => {
        const time = ms - Date.now();

        if(!(time < 0)) {
            setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
            sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setminutes(Math.floor((time / 1000 / 60) % 60));
            setseconds(Math.floor((time / 1000) % 60));
        }
    }

    var amt = 0;

    for (let index = 0; index < item.bids.length; index++) {
        if (item.bids[index].amount > amt) {
            amt = item.bids[index].amount;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(item.bidEndTime), 1000);

        if (item.bidEndTime - Date.now() < 0) clearInterval(interval);

        return () => clearInterval(interval);
    }, [item.bidEndTime])


    return (
        <FBottomCard className="fBottom__card">
            <CardTop className="card__top">
                <Link to={`/item-details/${item.id}`}><CardTopImg className="card__topImg" src={item.images[0]} /></Link>
                <Link to={`/item-details/${item.id}`}>
                    <CardTopIcon className="card__topIcon">
                        <Gavel sx={{ fontSize: 20, color: 'white' }} />
                    </CardTopIcon>
                </Link>
            </CardTop>
            <CardBottom className="card__bottom">
                <BottomTop className="bottom__top">
                    <BottomSpan>{item.name}</BottomSpan>
                </BottomTop>
                <BottomMiddle className="bottom__middle">
                    <Middle w='1px' className="middle">
                        <MiddleCon className="middle__con">
                            <MiddleLeft className="middle__left">
                                <Gavel sx={{ color: '#43b055', fontSize: 30 }} />
                            </MiddleLeft>
                            <MiddleRight className="middle__right">
                                <MiddleText color='#43b055'>Current Bid</MiddleText>
                                <MiddlePrice>₦{amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</MiddlePrice>
                            </MiddleRight>
                        </MiddleCon>
                    </Middle>
                    <Middle className="middle">
                        <MiddleCon className="middle__con">
                            <MiddleLeft className="middle__left">
                                <ShoppingBagRounded sx={{ color: '#ee4730', fontSize: 30 }} />
                            </MiddleLeft>
                            <MiddleRight className="middle__right">
                                <MiddleText color='#ee4730'>Buy Now</MiddleText>
                                <MiddlePrice>₦{item.buyNowAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</MiddlePrice>
                            </MiddleRight>
                        </MiddleCon>
                    </Middle>
                </BottomMiddle>
                <BottomBottom className="bottom__bottom">
                    <BBTop className="bb__top">
                        <BBTopLeft className="bb__topLeft">
                            <BBTopLeftCon className="bb__topLeftCon">
                                <BBTopSpan className="bb__topSpan" color="#f5317f">{days}d : {hours}h : {minutes}m : {seconds}s</BBTopSpan>
                            </BBTopLeftCon>
                        </BBTopLeft>
                        <BBTopRight className="bb_topRight">
                            <BBTopRightCon className="bb__topRight">
                                <BBTopSpan className="bb__topSpan" color="#43b055">{item.bids.length}</BBTopSpan>
                            </BBTopRightCon>
                        </BBTopRight>
                    </BBTop>
                    <BBbottom className="bb__bottom">
                        <Link to={`/item-details/${item.id}`}>
                            <BBbottomBtn className="bb__bottomBtn">Submit A Bid</BBbottomBtn>
                        </Link>
                    </BBbottom>
                </BottomBottom>
            </CardBottom>
        </FBottomCard>
    )
}
