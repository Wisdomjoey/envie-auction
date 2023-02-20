import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Footer from "../../Components/Home/Footer";
import img from "../../images/user.png";
import dashboard from "../../images/dashboard.png";
import MyBids from "../../images/MyBids.png";
import itemsWon from "../../images/itemsWon.png";
import MyAlerts from "../../images/MyAlerts.png";
import MyFavorites from "../../images/MyFavorites.png";
import Referrals from "../../images/Referrals.png";
import personalProfile from "../../images/personalProfile.png";

const DashBoardCon = styled.div`
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

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 18vh;
  margin-top: 150px;
  margin-bottom: 150px;

  z-index: 30;
  box-sizing: border-box;
`;

const DashBoardMenuCon = styled.div`
position:sticky;
top:0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 450px;
  width: 300px;
  border-radius: 10px;
  //   height: 400px;
  background-color: white;
  padding: 20px 40px;
  background-color: white;
  flex: 1;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  color: #37406f;
`;
// const Container = styled.div``;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Userdashboardcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
const UserImgcon = styled.div``;

const UserImg = styled.img`
  width: 100%;
`;

const UserDetailsTxtCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const UerDetailsTxtName = styled.p`
  font-size: 23px;
  font-weight: 500;
`;
const UerDetailsTxtEmail = styled.p`
  font-size: 16px;
`;

const DashBoardMenuLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-right: 20px;
  // margin-top: 30px;
`;

const DashBoardMenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 21px;
  padding: 15px;
  margin: 1px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;

const DashBoardImg = styled.img`
  max-width: 10%;
`;

const DashBoardTxt = styled.p`
  font-weight: 400;
`;

function DashBoard({ Home, Page, CurrentPage, DashBoard }) {
  const [activePurchase, SetActivePurchase] = useState("Current");
  const [active,] = useState(DashBoard);
  window.scrollTo(0, 0);

  useEffect(() => {
    console.log(activePurchase);
  }, [activePurchase]);

  return (
    <DashBoardCon>
      <Container>
        <HeaderSection Home="Home" Page="MyAccount" CurrentPage="Dashboard" />
        <Wrapper>
          <DashBoardMenuCon ClassName="sticky top">
            <UserDetails>
              <UserImgcon>
                <UserImg src={img} />
              </UserImgcon>
              <UserDetailsTxtCon>
                <UerDetailsTxtName>Percy Reed</UerDetailsTxtName>
                <UerDetailsTxtEmail>john@gmail.com</UerDetailsTxtEmail>
              </UserDetailsTxtCon>
            </UserDetails>
            <DashBoardMenuLinks>
              <DashBoardMenuLink
                style={
                  active === DashBoard
                    ? { backgroundColor: "whitesmoke" }
                    : { backgroundColor: "whitesmoke" }
                }
              >
                <DashBoardImg src={dashboard} alt="dashboard" />
                <DashBoardTxt>Dashboard</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink
                style={
                  active === DashBoard ? { backgroundColor: "whitesmoke" } : {}
                }
              >
                <DashBoardImg src={personalProfile} alt="PersonalProfile" />
                <DashBoardTxt>Personal Profile</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink>
                <DashBoardImg src={MyBids} alt="MyBids" />
                <DashBoardTxt>My Bids</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink>
                <DashBoardImg src={itemsWon} alt="WinningBids" />
                <DashBoardTxt>Winning Bids</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink>
                <DashBoardImg src={MyAlerts} alt="MyAlerts" />
                <DashBoardTxt>My Alerts</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink>
                <DashBoardImg src={MyFavorites} alt="MyFavorites" />
                <DashBoardTxt>MyFavorites</DashBoardTxt>
              </DashBoardMenuLink>
              <DashBoardMenuLink>
                <DashBoardImg src={Referrals} alt="Referrals" />
                <DashBoardTxt>Referrals</DashBoardTxt>
              </DashBoardMenuLink>
            </DashBoardMenuLinks>
          </DashBoardMenuCon>
        </Wrapper>
      </Container>
      <Footer />
    </DashBoardCon>
  );
}

export default DashBoard;
