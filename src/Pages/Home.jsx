import styled from "styled-components";
import Navbar from "../Components/Home/Navbar";
import bimg from '../images/bottomimg.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import HeaderSection from "../Components/Home/HeaderSection";
import FeaturedSection from "../Components/Home/FeaturedSection";
import HowToSection from "../Components/Home/HowToSection";
import TrendingSection from "../Components/Home/TrendingSection";
import ClosingSoonSection from "../Components/Home/ClosingSoonSection";
import RegisterAndStart from "../Components/Home/RegisterAndStart";
import OurReviews from "../Components/Home/OurReviews";
import Footer from "../Components/Home/Footer";
import { useSelector } from "react-redux";
import Spinner from "../Components/utils/Spinner";
import bg from './headerbg.png';
import { useState, useEffect } from "react";
import HeadTop from '../Components/Home/HeadTop';
import feat from '../images/feat.png';

const HomeContainer = styled.div`
    width: 100%;
`
const Header = styled.div`
    width: 100%;
    height: 100%;
    height: 900px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    /* padding-top:85px; */
`
const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const FeaturedImg = styled.img`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
`
const FeaturedCon = styled.div`
    width: 100%;
	width: calc(100% - 60px);
    max-width: calc(1260px - 60px);
    margin: 100px 0 120px;
`
const Featured = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const FeaturedBottom = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    padding-top: 70px;
`
const BottomMaskCon = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
const BottomMask = styled.img`
    width: 100%;
`

export default function Home() {
    const [data, setdata] = useState([]);
    const { auctions } = useSelector((state) => state.auction);
    const { loading } = useSelector((state) => state.auth);
    window.scrollTo(0, 0);

    useEffect(() => {
        const list = auctions.filter((item) => item.status === 'featured');
        const list1 = auctions.filter((item) => item.status === 'trending');
        // const interval = setInterval(() => getTime(), 1000);

        setdata(list);
    }, [auctions])

    return (
        <>
            <Spinner show={loading} />
    <HomeContainer className='home__con'>
        <Header style={{background: `url(${bg})`}} className='header'>
            <BottomMaskCon className="bottom__maskCon">
                <BottomMask className="bottom__mask" alt='' src={ bimg } />
            </BottomMaskCon>
            <Navbar />
            <HeaderSection />
        </Header>
                <HowToSection /><FeaturedContainer className="featured__container">
                    <FeaturedImg className="featured__img" src={feat} />
                    <FeaturedCon className="featured__con">
                        <Featured className="featured">
                            <HeadTop txtHead='Featured Items' txtSpan='Start Winning Cars With Comfort' showBtn={true} />
                            <FeaturedBottom className="featured__bottom">
                                {data.map((item, ind) => {
                                    return <FeaturedSection item={item} key={ind} />;
                                })}
                            </FeaturedBottom>
                        </Featured>
                    </FeaturedCon>
                </FeaturedContainer>
                <TrendingSection />
        <ClosingSoonSection />
        <RegisterAndStart/>
        <OurReviews/>
        <Footer/>
        </HomeContainer>
      </>
  )
}
