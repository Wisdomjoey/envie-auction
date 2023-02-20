import React from 'react';
import styled from 'styled-components';
import NewsLetter from './NewsLetter';
import paypal from '../../images/paypal.png'
import visa from '../../images/visa.png'
import img from './footer-bg.jpg'
import mastercard from '../../images/mastercard.png'
import discover from '../../images/discover.png'
import { LocalPhone, AllInbox, Send, LinkedIn, Instagram, Twitter, Fax, FacebookRounded } from '@mui/icons-material';


const FooterCon = styled.div`
  //  background:url(./footer-bg.jpg);
   background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
   height:auto;
   display:flex;
   align-items:center;
`;
const Container = styled.div`
   width: 100%;
`
const Wrapper = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   flex-direction:column;
   `
const TopFooter = styled.div`
   margin-top:100px;
   width:80%;
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex:3;
    height:850px;
    margin-bottom:100px;
`
const FooterDivisions = styled.div`
     flex:1;
     color:white;
     display:flex;
     align-items:flex-start;
     justify-content:space-between;
     flex-direction:column; 
`
const FooterLinksTxtHeader = styled.h3`
    font-size:21px;
    cursor:pointer;

    &:hover{
      color:orange;
    }   
`

const FooterLinksTxt = styled.p`
    margin-top:15px;
    color:whitesmoke;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;

    &:hover{
      color:orange;
    }
`
const FooterSocial = styled.div`
    margin-top:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex:1;
`
const SocialIcon = styled.div`
    margin-right:5px;
    padding:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.bgc};
    border-radius:50%;
    height:45px;
    width:45px;
    color:gray;
    &:hover{
      background-color:#EE4730;
      color:white;
    }
`
const HR = styled.hr`
    border:none;
    background-color:whitesmoke;
    height:1px;
    width:80%;
    margin-bottom:50px
`
const BottomFooter = styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;
     flex:1;
     height:300px;
     margin-bottom:50px;
     width:80%;
`
const BottomFooterLeft = styled.div`
      display:flex;
      align-items:flex-start;
      justify-content:flex-start;
`

const Brand = styled.span`
  flex: 1;
  font-size: 40px;
  font-weight: 800;
  color: white;
`

const BottomFooterMiddle = styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;
`

const PaymentLinks = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
`
const PaymentLinksImg = styled.img`
   width:100%;
   margin:5px;
`

const BottomFooterRight = styled.div`
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const FooterCopyrightTxt = styled.p`
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:${props => props.color};
  margin:2px;
`

function Footer() {
  return (
    <FooterCon style={{background: `url(${img})`}}>
      <Container>
        <NewsLetter />
        <Wrapper>
          <TopFooter>
            <FooterDivisions>
              <FooterLinksTxtHeader>Auction Categories</FooterLinksTxtHeader>
              <FooterLinksTxt>Ending Now</FooterLinksTxt>
              <FooterLinksTxt>Vehicles</FooterLinksTxt>
              <FooterLinksTxt>Watches</FooterLinksTxt>
              <FooterLinksTxt>Electronics</FooterLinksTxt>
              <FooterLinksTxt>Real Estate</FooterLinksTxt>
              <FooterLinksTxt>Jewelry</FooterLinksTxt>
              <FooterLinksTxt>Art</FooterLinksTxt>
              <FooterLinksTxt>Sports & Outdoor</FooterLinksTxt>
            </FooterDivisions>

            <FooterDivisions>
              <FooterLinksTxtHeader>About Us</FooterLinksTxtHeader>
              <FooterLinksTxt>About Company</FooterLinksTxt>
              <FooterLinksTxt>Help</FooterLinksTxt>
              <FooterLinksTxt>Affiliates</FooterLinksTxt>
              <FooterLinksTxt>Jobs</FooterLinksTxt>
              <FooterLinksTxt>Press</FooterLinksTxt>
              <FooterLinksTxt>Our blog</FooterLinksTxt>
              <FooterLinksTxt>Collector`s portal </FooterLinksTxt>
              <FooterLinksTxt></FooterLinksTxt>
            </FooterDivisions>

            <FooterDivisions>
              <FooterLinksTxtHeader>We`re Here to Help</FooterLinksTxtHeader>
              <FooterLinksTxt>Your Account</FooterLinksTxt>
              <FooterLinksTxt>Safe and Secure</FooterLinksTxt>
              <FooterLinksTxt>Shipping Information</FooterLinksTxt>
              <FooterLinksTxt>Contact Us</FooterLinksTxt>
              <FooterLinksTxt>Help & FAQ</FooterLinksTxt>
            </FooterDivisions>

            <FooterDivisions ht=''>
              <FooterLinksTxtHeader>Follow Us</FooterLinksTxtHeader>
              <FooterLinksTxt><LocalPhone id='FooterLinksTxt_Icon' />(646) 663-4574</FooterLinksTxt>
              <FooterLinksTxt> <Fax id='FooterLinksTxt_Icon' /> (646) 968-0608 </FooterLinksTxt>
              <FooterLinksTxt>  <AllInbox id='FooterLinksTxt_Icon' />  help@engotheme.com </FooterLinksTxt>
              <FooterLinksTxt>  <Send id='FooterLinksTxt_Icon' />  1201 BroadWay Suite </FooterLinksTxt>
              <FooterSocial>

                <SocialIcon bgc='#EE4730'>
                  <FacebookRounded />
                </SocialIcon>

                <SocialIcon bgc='white'>
                  <Twitter />
                </SocialIcon>

                <SocialIcon bgc='white'>
                  <Instagram />
                </SocialIcon>

                <SocialIcon bgc='white'>
                  <LinkedIn />
                </SocialIcon>

              </FooterSocial>
            </FooterDivisions>
          </TopFooter>
          <HR />
          <BottomFooter>
            <BottomFooterLeft>
              <Brand className="brand">LOGO</Brand>
            </BottomFooterLeft>
            <BottomFooterMiddle>
              <PaymentLinks>
                <PaymentLinksImg src={paypal} alt='paypal' />
              </PaymentLinks>
              <PaymentLinks>
                <PaymentLinksImg src={visa} alt='visa' />
              </PaymentLinks>
              <PaymentLinks>
                <PaymentLinksImg src={discover} alt='discover' />
              </PaymentLinks>
              <PaymentLinks>
                <PaymentLinksImg src={mastercard} alt='mastercard' />
              </PaymentLinks>
            </BottomFooterMiddle>
            <BottomFooterRight>
              <FooterCopyrightTxt>© Copyright 2021 | </FooterCopyrightTxt>
              <FooterCopyrightTxt color='#EE4730'>{" "} Attic </FooterCopyrightTxt>
              <FooterCopyrightTxt > {" By "} </FooterCopyrightTxt>
              <FooterCopyrightTxt color='#EE4730'> Uiaxis </FooterCopyrightTxt>
            </BottomFooterRight>
          </BottomFooter>
        </Wrapper>
      </Container>
    </FooterCon>
  )
}

export default Footer