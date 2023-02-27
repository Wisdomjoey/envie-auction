import { Gavel } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Closing_Soon_Products } from '../../data';

const EndingContainer = styled.div`
    width: 100%;
    margin-top: 150px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom:200px;
    `
const EndingContentCon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
`

const EndingContentConBackGround = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    // position:absolute;
    background: url(./maxbg.png);
    width:100%;
    height:600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    // margin-top:122px:
`

const ContentSpan = styled.span`
    color: white;
    font-size: ${props => props.fz};
    font-weight: ${props => props.fw};
    margin-bottom: ${props => props.mb};
`
const ClosingProducts = styled.div`
	width: calc(100% - 60px);
    max-width: calc(1260px - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    margin-top: -300px;
    background-color:white;
    border-radius:10px;
    box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
    gap: 30px;
`
const ClosingProductsCon = styled.div`
    display:flex;
    width: calc(50% - 55px);
    align-items:center;
    justify-content:center;
    gap: 30px;
    padding: 20px;
`
const ClosingProductsLeft = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;
`
const ClosingProductsImgCon = styled.div`
    // background-color:whitesmoke;
     width: 100%;
     display:flex;
     align-items:center;
     justify-content:center;
     border-radius:5px;
     position: relative;

 `
const BidLink = styled.div`
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    height:40px;
    width:40px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index:30;
    background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
`
const ClosingProductsImg = styled.img`
    width:100%;
`

const ClosingProductsRight = styled.div`
    position:relative;
    flex:1;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
`
const ClosingSoonProductsNameCon = styled.div`
    border-bottom: 2px dotted #deddf5;
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: 100%;

    a {
        text-decoration: none;
        color: black;
    }
`
const ClosingSoonProductsName = styled.p`
     font-size:22px;
    cursor: pointer;

    &:hover {
        color: #ee4730;
    }
`

const ClosingSoonProductsCurBidCon = styled.div`
     width:100%;
     border-bottom: 2px dotted #deddf5;
     display:flex;
    padding-bottom: 10px;
     align-items:center;
     justify-content: center;
     gap: 20px;
`
const ClosingSoonProductsBidLogo = styled.div``
const ClosingSoonProductsCurBidLeft = styled.div``
const ClosingSoonProductsCurBidRight = styled.div``
const ClosingSoonProductsBidDetailsTxt = styled.p`
     font-size: ${props => props.fz};
     color: ${props => props.color};
     white-space:nowrap;
`
const ClosingSoonProductsTotBidCon = styled.div`
     padding-top:10px;    
     width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
`
const ClosingSoonProductsTotBid = styled.div`
     width: 100%;
     display:flex;
     align-items:center;
     justify-content:center;
`

const ButtonCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    margin-bottom:20px;
`
const Button = styled.button`
    // background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%) ;
    // box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
    border: 1px solid #43b055;
    background-color:transparent;
    color: black;
    padding: 15px 70px;
    border-radius: 30px;
    font-weight: 300;
    font-size: 18px;
    cursor: pointer;
`


export default function ClosingSoonSection() {
    const [data, setdata] = useState([]);
    const { auctions } = useSelector((state) => state.auction);

    useEffect(() => {
        var day = 24 * 60 * 60 * 1000;

        const list = auctions.filter((item) => item.bidEndTime - Date.now() < day);

        setdata(list);
    }, [auctions])

    return (
        <EndingContainer className='ending__container'>
            <EndingContentCon className='ending__contentCon'>
                <EndingContentConBackGround>
                    <ContentSpan className='content__span' fw={500} fz='27px' mb='15px'>Closing Within 24 Hours</ContentSpan>
                    <ContentSpan className='content__span' fw={700} fz='47px' mb='15px'>Auctions Ending Soon</ContentSpan>
                    <ContentSpan className='content__span' fw={300} fz='19px' mb='50px'>Bid and win great deals,Our auction process is simple, efficient, and transparent.</ContentSpan>
                </EndingContentConBackGround>
                <ClosingProducts className='closing__products'>
                    {data.map((item, ind) => {
                        var amt = 0;

                        for (let index = 0; index < item.bids.length; index++) {
                            if (item.bids[index].amount > amt) {
                                amt = item.bids[index].amount;
                            }
                        }

                        return <ClosingProductsCon className='closing__productsCon' key={ind}>
                            <ClosingProductsLeft>
                                <ClosingProductsImgCon className='ClosingSoonProducts'>
                                    <ClosingProductsImg className='ClosingSoonProductsImage' src={item.images[0]} alt='closing soon products' />
                                    <Link to={`/item-details/${item.id}`}>
                                        <BidLink className='BidLink'>
                                            <Gavel sx={{ color: 'white', fontSize: 22 }} />
                                        </BidLink>
                                    </Link>
                                </ClosingProductsImgCon>
                            </ClosingProductsLeft>
                            <ClosingProductsRight>
                                <ClosingSoonProductsNameCon>
                                    <Link to={`/item-details/${item.id}`}>
                                        <ClosingSoonProductsName>{item.name}</ClosingSoonProductsName>
                                    </Link>
                                </ClosingSoonProductsNameCon>

                                <ClosingSoonProductsCurBidCon>
                                    <ClosingSoonProductsCurBidLeft>
                                        <ClosingSoonProductsBidLogo>
                                            <Gavel sx={{ color: '#43b055', fontSize: 30 }} />
                                        </ClosingSoonProductsBidLogo>
                                    </ClosingSoonProductsCurBidLeft>
                                    <ClosingSoonProductsCurBidRight>
                                        <ClosingSoonProductsBidDetailsTxt fz="15px" color='#43b055' >
                                            Current Bid
                                        </ClosingSoonProductsBidDetailsTxt>
                                        <ClosingSoonProductsBidDetailsTxt fz='20px' >
                                            ₦{amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </ClosingSoonProductsBidDetailsTxt>
                                    </ClosingSoonProductsCurBidRight>
                                </ClosingSoonProductsCurBidCon>
                                <ClosingSoonProductsTotBidCon>
                                    <ClosingSoonProductsTotBid>
                                        <ClosingSoonProductsBidDetailsTxt>Total Bids:</ClosingSoonProductsBidDetailsTxt>
                                        <ClosingSoonProductsBidDetailsTxt color='#43b055' >{item.bids.length}</ClosingSoonProductsBidDetailsTxt>
                                    </ClosingSoonProductsTotBid>
                                </ClosingSoonProductsTotBidCon>
                            </ClosingProductsRight>
                        </ClosingProductsCon>
                    })}
                    <ButtonCon>
                        <Link to='/auctions'>
                            <Button>See All Auctions</Button>
                        </Link>
                    </ButtonCon>
                </ClosingProducts>
            </EndingContentCon>
        </EndingContainer>
    )
}
