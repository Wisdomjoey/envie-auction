import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Experience from "../Components/AboutUs/Experience";
import WhatToExpect from "../Components/AboutUs/WhatToExpect";
import RegisterAndStart from "../Components/Home/RegisterAndStart";
import ManagementTeam from "../Components/AboutUs/ManagementTeam";
import OurReviews from "../Components/Home/OurReviews";
import Footer from "../Components/Home/Footer";
import { useSelector } from "react-redux";
import Spinner from "../Components/utils/Spinner";
import bg from '../images/hero-bg.png';

const DashBoardCon = styled.div`
  // background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
  color: #37406f;
`;
const AboutUsCon = styled.div`
  padding: 0 5vh;
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0;
`;

function AboutUs() {
  const { loading } = useSelector((state) => state.auth);
  window.scrollTo(0, 0);

  return (
    <>
      <Spinner show={loading} />
    <DashBoardCon style={{background: `url(${bg})`}}>
      <HeaderSection SingleRoute={false} Page="Page" CurrentPage="About us" />
      <AboutUsCon>
        <Experience />
        <WhatToExpect />
      </AboutUsCon>
      <RegisterAndStart />
      <ManagementTeam />
      <OurReviews />
      <Footer />
        </DashBoardCon>
    </>
  );
}

export default AboutUs;
