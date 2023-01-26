import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Experience from "../Components/AboutUs/Experience";
import WhatToExpect from "../Components/AboutUs/WhatToExpect";
import RegisterAndStart from "../Components/Home/RegisterAndStart";
import ManagementTeam from "../Components/AboutUs/ManagementTeam";
import OurReviews from "../Components/Home/OurReviews";
import Footer from "../Components/Home/Footer";
const DashBoard_Con = styled.div`
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
  color: #37406f;
`;
const AboutUs_Con = styled.div`
  padding: 0 5vh;
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0;
`;

function AboutUs() {
  return (
    <DashBoard_Con>
      <HeaderSection SingleRoute={false} Page="Page" CurrentPage="About us" />
      <AboutUs_Con>
        <Experience />
        <WhatToExpect />
      </AboutUs_Con>
      <RegisterAndStart />
      <ManagementTeam />
      <OurReviews />
      <Footer />
    </DashBoard_Con>
  );
}

export default AboutUs;
