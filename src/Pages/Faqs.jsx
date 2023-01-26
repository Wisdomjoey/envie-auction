import styled from "styled-components";
import Faq from "../Components/Faqs/Faq";
import FaqCategory from "../Components/Faqs/FaqCategory";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import Footer from "../Components/Home/Footer";
const Container = styled.div`
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
`;

const Header = styled.div`
padding:0 5vh;
  margin: 55px 0;
`;

const HeaderTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  color: white;
  margin: 8px 0;
`;

const Faqs_Con = styled.div`
padding:0 5vh;
display:flex;
align-items:flex-start;
justify-content:flex-start;
margin-bottom:100px;`
;

function Faqs() {
  return (
    <Container>
      <HeaderSection SingleRoute={false} Page="Pages" CurrentPage="Faqs" />
      <Header>
        <HeaderTxt fz="35px" fw={600}>
          FAQ
        </HeaderTxt>
        <HeaderTxt fw={300}>
          Do not hesitate to send us an email if you can't find what you're
          looking for.
        </HeaderTxt>
      </Header>
      <Faqs_Con>
        <Faq />
        <FaqCategory />
      </Faqs_Con>
      <Footer/>
    </Container>
  );
}

export default Faqs;
