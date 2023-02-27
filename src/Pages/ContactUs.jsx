import {
  AllInboxOutlined,
  MailOutline,
  PermIdentityOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import contactimg from '../images/contact.png';
import Footer from '../Components/Home/Footer'
import { useSelector } from "react-redux";
import Spinner from "../Components/utils/Spinner";
import bg from '../images/hero-bg.png';

const Container = styled.div`
  // background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
  // width:100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-bottom:100px;
  padding: 0 5vh;
`;
const ContactUsCardCon = styled.div`
  margin-top: 100%;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  padding: 70px 25px;
  margin-top: 80px;
  background-color: white;
`;

const ContactUsCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContactUsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContactUsTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  margin: ${(props) => props.mg};
`;

const ContactUsInputs = styled.div`
flex:2;
width:100%;
`;
const InputsCon = styled.div`
flex:1;
width:100%;
   display:flex;
   align-items:center;
   justify-content:flex-start;
    padding-bottom:${(props) => props.pb};
   border-bottom:1px solid #BCCAEA;
   margin:20px;
      margin-bottom:50px;
   height:${(props) => props.h}
   `;
const InputDetails = styled.div``;
const InputIcon = styled.div`
     border-radius: 50%;
     height: 30px;
     width: 30px;
     background: linear-gradient(to right,#A72CC6,#E42985);
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right:30px;
     margin-bottom:20px;
     position:absolute;
     z-index:30;
     box-sizing-border-box;
   `;

const Input = styled.input`
  outline: none;
  border: none;
  height: 100%;
  padding-left: 40px;
  padding-bottom: ${(props) => props.pb};
  height: ${(props) => props.h};
  //  padding:20px;
  width: 100%;
  //  height: 100%;
  //  border-bottom: 1px solid #BCCAEA;

  &:focus {
    border-bottom: 1px solid #3f22b3;
  }
`;

const TextareaCon = styled.div`
flex:1;
  // margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: ${(props) => props.pb};
  border-bottom: 1px solid #bccaea;
  margin: 20px;
`;
const TextareaIcon = styled.div`
    border-radius: 50%;
     height: 30px;
     width: 30px;
     background: linear-gradient(to right,#A72CC6,#E42985);
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right:20px;
    //  margin-bottom:20px;
     z-index:30;
     box-sizing-border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  resize: none;

  &:placeholder {
    margin-left: 10px;
  }
`;

const ContactUsImgCon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ContactUsImg = styled.img`
width:90%;
`

const ButtonCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left:150px;
  // background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
`;
const Button = styled.button`
  border: 1px solid #e0e0f1;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  white-space:nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: white;
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
`;


function ContactUs() {
  const { loading } = useSelector((state) => state.auth);
  window.scrollTo(0, 0);

  return (
    <>
      <Spinner show={loading} />
      <Container style={{ background: `url(${bg})` }}>
      <HeaderSection SingleRoute={true} CurrentPage="Contact us" />
        <Wrapper>
      <ContactUsCardCon>
        <ContactUsHeader>
          <ContactUsTxt fz="25px" fw={600} mg="7px" cl="#4A2FB7">
            Contact Us
          </ContactUsTxt>
          <ContactUsTxt fz="30px" mg="7px" fw={500}>
            Get In Touch
          </ContactUsTxt>
          <ContactUsTxt fz="14px" mg="5px">
            We`d love to hear from you! Let us know how we can help.
          </ContactUsTxt>
        </ContactUsHeader>
          <ContactUsCard>
            <ContactUsInputs>
              <InputsCon>
                <InputIcon>
                  <PermIdentityOutlined sx={{ fontSize: 17 }} />
                </InputIcon>
                <Input pb="10px" placeholder="Your Name" type="text" />
              </InputsCon>
              <InputsCon>
                <InputIcon>
                  <AllInboxOutlined sx={{ fontSize: 17 }} />
                </InputIcon>
                <Input
                  pb="10px"
                  placeholder="Enter Your Email Id"
                  type="text"
                />
              </InputsCon>
              <TextareaCon>
                <TextareaIcon mb="">
                  <MailOutline sx={{ fontSize: 17 }} />
                </TextareaIcon>
                <Textarea
                  placeholder="Enter Your Message"
                  name="message"
                  rows="12"
                ></Textarea>
              </TextareaCon>
            </ContactUsInputs>
            <ContactUsImgCon>
              <ContactUsImg src={contactimg} />
            </ContactUsImgCon>
          </ContactUsCard>
          <ButtonCon>
            <Button>SEND MESSAGE</Button>
          </ButtonCon>
      </ContactUsCardCon>
        </Wrapper>
        <Footer/>
        </Container>
    </>
  );
}

export default ContactUs;
