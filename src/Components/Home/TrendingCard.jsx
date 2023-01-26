import styled from 'styled-components';
import { Gavel } from '@mui/icons-material';
import {TrendingItems} from '../../data'

const TrendingCardC= styled.div `
    width: 100%;
`

const TrendingCardCon = styled.div`
    width: 100%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
    background: white;
    height: 300px;
    align-items: center;
    gap: 30px;
    margin-bottom:30px;
    padding: 13px 0;
`
const TrendingCardLeft = styled.div`
    width: 360px;
    height: 100%;
    background: #f6f6ff;
    border-radius: 10px;
    position: relative;
    margin-left: 13px;
`
const TrendingCardImgLink = styled.a`
    cursor: pointer;
`
const TrendingCardImg = styled.img`
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
    z-index: 100;
    background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
    box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
`
const TrendingCardMiddle = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
`
const TrendingCardMiddleTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #bccaea;
    padding: 10px 0;
`
const TopLink = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
        color: #ee4730;
    }
`
const TopSpan = styled.span`
    font-weight: 500;
    font-size: 28px;
`
const TrendingCardMiddleBottom = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
`
const BottomLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`
const BottomRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`
const BottomSpan = styled.span`
    font-size: 20px;
    display: flex;
    gap: 5px;
    font-weight:300;

    p {
        color: #717185;
    }
`
const P = styled.p`
     color: #717185;
`

const TrendingCardRight = styled.div`
    width: 280px;
    height: 100%;
    background: #f6f6ff;
    border-radius: 10px;
    margin-right: 13px;
    /* padding: 13px; */
`
const TrendingCardRightCon = styled.div`
    border-radius: 10px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TimerCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    border-bottom: 3px dotted #deddf5;
`
const Timer = styled.span`
    color: #ee4730;
    font-size: 18px;
`
const MiddleCon = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px 0;
    border-bottom: 3px dotted #deddf5;
    width: 100%;
`
const MiddleText = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${ props => props.color };
`
const MiddlePrice = styled.span`
    font-size: 22px;
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
const TotalBidCon = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TotalBidSpan = styled.span`
    display: flex;
    gap: 5px;
    color: #52606d;
    font-size: 20px;

    p {
        color: #43b055;
    }
`

const TotalBidP = styled.p`
    color: #43b055;
`

const BBbottomBtn = styled.button`
    background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
    box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
    border: none;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
`

export default function TrendingCard() {
  return (
    <TrendingCardC>
    {TrendingItems.map ( (item, ind) => (
    <TrendingCardCon className='trending__cardCon' key={ind}>
        <TrendingCardLeft className='trending__cardLeft'>
            <TrendingCardImgLink className='trending__cardImgLink'>
                <TrendingCardImg src={ item.img } className='trending__cardImg' />
                <CardTopIcon className="card__topIcon">
                    <Gavel sx={{ fontSize: 20, color: 'white' }} />
                </CardTopIcon>
            </TrendingCardImgLink>
        </TrendingCardLeft>
        <TrendingCardMiddle className='trending__cardMiddle'>
            <TrendingCardMiddleTop className='trending__middleTop'>
                <TopLink href="/">
                    <TopSpan className='top__span'>{item.name}</TopSpan>
                </TopLink>
            </TrendingCardMiddleTop>
            <TrendingCardMiddleBottom className='trending__middleBottom'>
                <BottomLeft className='bottom__left'>
                    <BottomSpan className='bottom__span'>
                        <P>Number</P>
                        <P>:</P>
                        {item.Number}
                    </BottomSpan>
                    <BottomSpan className='bottom__span'>
                        <P>Vin</P>
                        <P>:</P>
                        {item.Vin}
                    </BottomSpan>
                    <BottomSpan className='bottom__span'>
                        <P>Millage</P>
                        <P>:</P>
                        {item.Milage}
                    </BottomSpan>
                    <BottomSpan className='bottom__span'>
                        <P>Location</P>
                        <P>:</P>
                        {item.Location}
                    </BottomSpan>
                </BottomLeft>
                <BottomRight className='bottom__right'>
                    <BottomSpan className='bottom__span'>
                        <P>Engine</P>
                        <P>:</P>
                        {item.Engine}
                    </BottomSpan>
                    <BottomSpan className='bottom__span'>
                        <P>Transmission</P>
                        <P>:</P>
                        {item.Transmission}
                    </BottomSpan>
                    <BottomSpan className='bottom__span'>
                        <P>Body</P>
                        <P>:</P>
                        {item.Body}
                    </BottomSpan>
                </BottomRight>
            </TrendingCardMiddleBottom>
        </TrendingCardMiddle>
        <TrendingCardRight className='trending__cardRight'>
            <TrendingCardRightCon className='trending__cardRightCon'>
                <TimerCon className='timer__con'>
                    <Timer className='timer'>{item.TimeRemaining}</Timer>
                </TimerCon>
                <MiddleCon className="middle__con">
                    <MiddleLeft className="middle__left">
                        <Gavel sx={{ color: '#43b055', fontSize: 40 }} />
                    </MiddleLeft>
                    <MiddleRight className="middle__right">
                        <MiddleText color='#43b055'>Current Bid</MiddleText>
                        <MiddlePrice>${item.CurrentBid}</MiddlePrice>
                    </MiddleRight>
                </MiddleCon>
                <TotalBidCon className='total__bidCon'>
                    <TotalBidSpan className='total__bidSpan'>
                        Total Bids :
                        <TotalBidP>{item.TotalBids}</TotalBidP>
                    </TotalBidSpan>
                </TotalBidCon>
                <BBbottomBtn className="bb__bottomBtn">Submit A Bid</BBbottomBtn>
            </TrendingCardRightCon>
        </TrendingCardRight>
    </TrendingCardCon>
    ))}
    </TrendingCardC>
  )
}
