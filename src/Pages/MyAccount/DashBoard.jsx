import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActiveBids from "../../images/active_bids.png";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Dash_Board from "../../Components/myaccount/dashboard/dashboard";
import DashBoard_Menu from "../../Components/myaccount/DashBoard_Menu";
import Footer from "../../Components/Home/Footer";
import CurrentBids from "../../Components/myaccount/dashboard/CurrentBids";
import History from "../../Components/myaccount/dashboard/History";
import PendingBids from "../../Components/myaccount/dashboard/PendingBids";
import img from "../../images/user.png";
import dashboard from "../../images/dashboard.png";
import MyBids from "../../images/MyBids.png";
import itemsWon from "../../images/itemsWon.png";
import MyAlerts from "../../images/MyAlerts.png";
import MyFavorites from "../../images/MyFavorites.png";
import Referrals from "../../images/Referrals.png";
import personalProfile from "../../images/personalProfile.png";

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

  z-index: 100;
  box-sizing: border-box;
`;
const LeftWrapper = styled.div`
  background-color: red;
  // flex: 1;
  width: 100%;
`;
const RightWrapper = styled.div`
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 3;
  width: 100%;
  //   background-color:blue;
  width: 400px;
`;
const RightWrapper_Top = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 40px 30px;
  margin-left: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-top: 20px;
  margin-bottom: 20px;
`;
const MyActivity = styled.div`
  flex: 1;
`;
const MyActivityTxt = styled.p`
  font-size: 25px;
`;
const HR = styled.hr`
  margin: ${(props) => props.m};
  background-color: #e0e0f1;
  height: 1px;
  border: none;
`;
const Activities = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
const Activity = styled.div`
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
`;
const ActivityImgCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 150px;
  max-height: 100px;
  //    background-color:red;
`;
const Activity_Img = styled.img`
  //    flex:1;
  width: 70%;
`;
const ActivityTxt_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ActivityTxt = styled.div`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
`;
const RightWrapper_Bottom = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 40px 30px;
  margin-left: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
`;

const Purchasing = styled.div``;
const Purchasing_txt = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PurchasingTable_Con = styled.div``;
const PurchasingTable_Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  // padding-bottom: 10px;
`;

const PurchasingTable_Header_TxtCon = styled.div`
  // padding:3px;
  margin-right: 15px;
  cursor: pointer;
  `;
  
  const PurchasingTable_Header_Txt = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin-bottom:10px;
`;

const TableDetails_Con = styled.div``;
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;
const Table_Tr = styled.tr`
  text-align: left;
  margin-right: 8px;
  width: 100%;

  &:nth-child(n) {
    border-bottom: 1px solid #e0e0f1;
  }
`;
const Table_Th = styled.th`
  margin: 8px;
  padding: 10px;
  text-align: left;
`;
const Table_Td = styled.td`
  padding: 10px;
  margin: 8px;
  text-align: left;
`;

const DashBoard_MenuCon = styled.div`
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
  // margin-top: 30px;
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
  max-width: 10%;
`;

const DashBoard_Txt = styled.p`
  font-weight: 400;
`;

function DashBoard({ Home, Page, CurrentPage, DashBoard }) {
  const [activePurchase, SetActivePurchase] = useState("Current");
  const [active, setActive] = useState(DashBoard);

  useEffect(() => {
    console.log(activePurchase);
  }, [activePurchase]);

  return (
    <DashBoard_Con>
      <Container>
        <HeaderSection Home="Home" Page="MyAccount" CurrentPage="Dashboard" />
        <Wrapper>
          <DashBoard_MenuCon ClassName="sticky top">
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
                style={
                  active === DashBoard
                    ? { backgroundColor: "whitesmoke" }
                    : { backgroundColor: "whitesmoke" }
                }
              >
                <DashBoardImg src={dashboard} alt="dashboard" />
                <DashBoard_Txt>Dashboard</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink
                style={
                  active === DashBoard ? { backgroundColor: "whitesmoke" } : {}
                }
              >
                <DashBoardImg src={personalProfile} alt="PersonalProfile" />
                <DashBoard_Txt>Personal Profile</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink>
                <DashBoardImg src={MyBids} alt="MyBids" />
                <DashBoard_Txt>My Bids</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink>
                <DashBoardImg src={itemsWon} alt="WinningBids" />
                <DashBoard_Txt>Winning Bids</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink>
                <DashBoardImg src={MyAlerts} alt="MyAlerts" />
                <DashBoard_Txt>My Alerts</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink>
                <DashBoardImg src={MyFavorites} alt="MyFavorites" />
                <DashBoard_Txt>MyFavorites</DashBoard_Txt>
              </DashBoard_MenuLink>
              <DashBoard_MenuLink>
                <DashBoardImg src={Referrals} alt="Referrals" />
                <DashBoard_Txt>Referrals</DashBoard_Txt>
              </DashBoard_MenuLink>
            </DashBoard_MenuLinks>
          </DashBoard_MenuCon>
          <RightWrapper>
            <RightWrapper_Top>
              <MyActivity>
                <MyActivityTxt>My Activty</MyActivityTxt>
              </MyActivity>
              <HR m="30px 0" />
              <Activities>
                <Activity>
                  <ActivityImgCon>
                    <Activity_Img src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxt_Con>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxt_Con>
                </Activity>
                <Activity>
                  <ActivityImgCon>
                    <Activity_Img src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxt_Con>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxt_Con>
                </Activity>
                <Activity>
                  <ActivityImgCon>
                    <Activity_Img src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxt_Con>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxt_Con>
                </Activity>
              </Activities>
            </RightWrapper_Top>
            <RightWrapper_Bottom>
              <Purchasing>
                <Purchasing_txt>Purchasing</Purchasing_txt>
              </Purchasing>
              <PurchasingTable_Con>
                <PurchasingTable_Header>
                  <PurchasingTable_Header_TxtCon
                    style={
                      activePurchase === "Current"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("Current");
                    }}
                  >
                    <PurchasingTable_Header_Txt>
                      Current
                    </PurchasingTable_Header_Txt>
                  </PurchasingTable_Header_TxtCon>

                  <PurchasingTable_Header_TxtCon
                    style={
                      activePurchase === "Pending"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("Pending");
                    }}
                  >
                    <PurchasingTable_Header_Txt>
                      Pending
                    </PurchasingTable_Header_Txt>
                  </PurchasingTable_Header_TxtCon>

                  <PurchasingTable_Header_TxtCon
                    style={
                      activePurchase === "History"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("History");
                    }}
                  >
                    <PurchasingTable_Header_Txt>
                      History
                    </PurchasingTable_Header_Txt>
                  </PurchasingTable_Header_TxtCon>
                </PurchasingTable_Header>
                <HR />
                <TableDetails_Con>
                  {activePurchase === "Current" && <CurrentBids />}
                  {activePurchase === "Pending" && <PendingBids />}
                  {activePurchase === "History" && <History />}
                </TableDetails_Con>
              </PurchasingTable_Con>
            </RightWrapper_Bottom>
          </RightWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </DashBoard_Con>
  );
}

export default DashBoard;
