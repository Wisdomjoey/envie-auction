import styled from "styled-components";
import Navbar from "../Components/Home/Navbar";
import bimg from '../images/bottomimg.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import HeaderSection from "../Components/Home/HeaderSection";
import HowToSection from "../Components/Home/HowToSection";
import FeaturedSection from "../Components/Home/FeaturedSection";
import TrendingSection from "../Components/Home/TrendingSection";
import ClosingSoonSection from "../Components/Home/ClosingSoonSection";
import RegisterAndStart from "../Components/Home/RegisterAndStart";
import OurReviews from "../Components/Home/OurReviews";
import Footer from "../Components/Home/Footer";

const HomeContainer = styled.div`
    width: 100%;
`
const Header = styled.div`
    width: 100%;
    height: 100%;
    height: 900px;
    background: url(./headerbg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    /* padding-top:85px; */
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
  return (
    <HomeContainer className='home__con'>
        <Header className='header'>
            <BottomMaskCon className="bottom__maskCon">
                <BottomMask className="bottom__mask" alt='' src={ bimg } />
            </BottomMaskCon>
            <Navbar />
            <HeaderSection />
        </Header>
        <HowToSection />
        <FeaturedSection />
        <TrendingSection />
        <ClosingSoonSection />
        <RegisterAndStart/>
        <OurReviews/>
        <Footer/>
    </HomeContainer>
  )
}
