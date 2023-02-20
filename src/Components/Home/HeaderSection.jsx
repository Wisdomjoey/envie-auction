import styled from 'styled-components';
import swipe1 from '../../images/1.png';
import swipe2 from '../../images/2.png';
import swipe3 from '../../images/3.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import { Gavel } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderContentCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 30;
`
const HeaderContent = styled.div`
    width: 100%;
    max-width: 1260px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 200px;
`
const RightContent = styled.div`
    flex: 1;
    padding-right: 30px;
`
const RightText = styled.h1`
    color: white;
    font-size: 47px;
    letter-spacing: 3px;
`
const RightSpan = styled.span`
    color: #00F7FF;
    font-size: 20px;
    line-height: 50px;
`
const RightBtn = styled.button`
    height: 50px;
    width: 220px;
    border-radius: 30px;
    border: none;
    outline: none;
    background: linear-gradient(1deg, #ff8359 0%, #ffdf40 100%);
    box-shadow: 0px 19px 56px 0px rgb(0 0 0 / 20%);
    color: white;
    font-family: Roboto;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
    z-index: 40;
`
const SlideImg = styled.img`
    width: 120%;
    object-fit: contain;
`
const LeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 30px;

    .get__started {
    width: 220px;
    }
`
const SphereOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    margin-right: -200px;
    position: relative;
`
const SphereTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    width: 575px;
    height: 575px;
    border-radius: 50%;
`
const SphereThree = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background: white;
    overflow: hidden;
`
const SwiperCon = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-slide {
        background-color: transparent;
    }
`
const BidLink = styled.div`
    width: 100px;
    height: 100px;
    background: linear-gradient(325deg, #f5317f 0%, #ff7c6e 100%);
    box-shadow: 0px 5px 3px 0px rgb(245 49 127 / 20%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 30;
    border-radius: 50%;
    top: 6rem;
    left: 0;
    cursor: pointer;
    text-decoration: none;
`
const BidText = styled.span`
    color: white;
    font-size: 16px;
    margin-top: 10px;
`

export default function HeaderSection() {
    const { signed } = useSelector((state) => state.auth);
    console.log(signed)

  return (
    <HeaderContentCon className="header__contentCon">
        <HeaderContent className="header__content">
            <LeftContent className="left__content">
                <RightText className="right__text">Convenient,</RightText>
                <RightText className="right__text">Exclusive &</RightText>
                <RightText className="right__text">Real-Time</RightText>
                <RightText className="right__text">Bidding</RightText>
                <RightSpan className="right__span">Your Desired Space Is Right Here...</RightSpan>
                  <Link className='get__started' to='/register'><RightBtn className="right__btn">Get Started</RightBtn></Link>
            </LeftContent>
            <RightContent className="right__content">
                <SphereOne className="sphere__one">
                    <SphereTwo className="sphere__two">
                        <SphereThree className="sphere__three">
                              <Link to={signed ? '/auctions' : '/register'}>
                                  <BidLink className="bid__link">
                                      <Gavel sx={{ fontSize: 30, color: 'white' }} />
                                      <BidText className="bid__text">Bid Now</BidText>
                                  </BidLink>
                            </Link>
                            <SwiperCon>
                                <Swiper modules={[ EffectCoverflow, Autoplay ]} spaceBetween={ 100 } autoplay={{ delay: 3000 }} effect='coverflow'>
                                    {[swipe1, swipe2, swipe3].map((val, ind) => {
                                        return <SwiperSlide key={ ind }>
                                            <SlideImg className="slide__img"  src={ val } />
                                        </SwiperSlide>;
                                    })}
                                </Swiper>
                            </SwiperCon>
                        </SphereThree>
                    </SphereTwo>
                </SphereOne>
            </RightContent>
        </HeaderContent>
    </HeaderContentCon>
  )
}
