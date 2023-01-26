import styled from "styled-components";
import { useEffect, useState } from "react";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import DashBoard from "../Components/DashBoard/DashBoard";
import PersonalProfile from "../Components/DashBoard/PersonalProfile";
import WinningBids from "../Components/DashBoard/WinningBids";
import MyAlerts from "../Components/DashBoard/MyAlerts";
import MyBids from "../Components/DashBoard/MyBids";
import img from "../images/user.png";
import dashboard from "../images/dashboard.png";
import My_Bids from "../images/MyBids.png";
import itemsWon from "../images/itemsWon.png";
import My_Alerts from "../images/MyAlerts.png";
import My_Favorites from "../images/MyFavorites.png";
import referrals from "../images/Referrals.png";
import personalProfile from "../images/personalProfile.png";
import Footer from "../Components/Home/Footer";
import MyFavorites from "../Components/DashBoard/MyFavorites";
import Referrals from "../Components/DashBoard/Referrals";

const Container = styled.div`
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  height: 90vh;
  width: 100%;
  color: #37406f;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 5vh;
  margin-top: 150px;
  z-index: 100;
  box-sizing: border-box;
  height:1500px;
`;

const DashBoard_MenuCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 450px;
  width: 350px;
  border-radius: 10px;
  background-color: white;
  padding: 10px 40px;
  //   flex: 2;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  color: #37406f;
  margin-right: 20px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Userdashboard_con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
const UserImg_con = styled.div``;

const UserImg = styled.img`
  width: 100%;
`;

const UserDetailsTxt_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const UerDetailsTxt_Name = styled.p`
  font-size: 23px;
  font-weight: 500;
`;
const UerDetailsTxt_Email = styled.p`
  font-size: 16px;
`;

const DashBoard_MenuLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-right: 20px;
  margin-top: 30px;
`;

const DashBoard_MenuLink = styled.div`
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
  width: 8%;
`;

const DashBoard_Txt = styled.p`
  font-weight: 400;
  font-size:18px;
  margin:0 5px;
`;

const Components = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 3;
  margin-bottom: 150px;
  height:100%;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

function MyAccount() {
  const [activeDashBoard, SetActiveDashBoard] = useState("DashBoard");
  const [sticky, SetSticky] = useState(true);
  useEffect(() => {
    console.log(activeDashBoard);
  }, [activeDashBoard]);
  return (
    <Container>
      <HeaderSection
        SingleRoute={false}
        Page="MyAccount"
        CurrentPage={activeDashBoard}
      />
      <Wrapper>
        {/* <LeftWrapper> */}
        <DashBoard_MenuCon
          className={sticky ? "sticky_Dashboard" : " "}
        >
          <UserDetails>
            <UserImg_con>
              <UserImg src={img} />
            </UserImg_con>
            <UserDetailsTxt_Con>
              <UerDetailsTxt_Name>Percy Reed</UerDetailsTxt_Name>
              <UerDetailsTxt_Email>john@gmail.com</UerDetailsTxt_Email>
            </UserDetailsTxt_Con>
          </UserDetails>
          <DashBoard_MenuLinks>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("DashBoard");
                SetSticky(false);
              }}
              style={
                activeDashBoard === "DashBoard"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={dashboard} alt="dashboard" />
              <DashBoard_Txt>Dashboard</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("PersonalProfile");
                SetSticky(true);

              }}
              style={
                activeDashBoard === "PersonalProfile"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={personalProfile} alt="PersonalProfile" />
              <DashBoard_Txt>Personal Profile</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("MyBids");
                 SetSticky(true);

              }}
              style={
                activeDashBoard === "MyBids"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={My_Bids} alt="MyBids" />
              <DashBoard_Txt>My Bids</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("WinningBids");
                SetSticky(true);

              }}
              style={
                activeDashBoard === "WinningBids"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={itemsWon} alt="WinningBids" />
              <DashBoard_Txt>Winning Bids</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("MyAlerts");
                                SetSticky(false);

              }}
              style={
                activeDashBoard === "MyAlerts"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={My_Alerts} alt="MyAlerts" />
              <DashBoard_Txt>My Alerts</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("MyFavorites");
                SetSticky(true);

              }}
              style={
                activeDashBoard === "MyFavorites"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={My_Favorites} alt="MyFavorites" />
              <DashBoard_Txt>My Favorites</DashBoard_Txt>
            </DashBoard_MenuLink>
            <DashBoard_MenuLink
              onClick={() => {
                SetActiveDashBoard("Referrals");
                SetSticky(true);

              }}
              style={
                activeDashBoard === "Referrals"
                  ? { backgroundColor: "whitesmoke" }
                  : {}
              }
            >
              <DashBoardImg src={referrals} alt="Referrals" />
              <DashBoard_Txt>Referrals</DashBoard_Txt>
            </DashBoard_MenuLink>
          </DashBoard_MenuLinks>
        </DashBoard_MenuCon>
        {/* </LeftWrapper> */}
        <Components>
          {activeDashBoard === "DashBoard" && <DashBoard />}
          {activeDashBoard === "PersonalProfile" && <PersonalProfile />}
          {activeDashBoard === "MyBids" && <MyBids />}
          {activeDashBoard === "WinningBids" && <WinningBids />}
          {activeDashBoard === "MyAlerts" && <MyAlerts />}
          {activeDashBoard === "MyFavorites" && <MyFavorites />}
          {activeDashBoard === "Referrals" && <Referrals />}
        </Components>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default MyAccount;
