import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActiveBids from "../../images/active_bids.png";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
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
const RightWrapperTop = styled.div`
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
const ActivityImg = styled.img`
  //    flex:1;
  width: 70%;
`;
const ActivityTxtCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ActivityTxt = styled.div`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
`;
const RightWrapperBottom = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 40px 30px;
  margin-left: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
`;

const Purchasing = styled.div``;
const Purchasingtxt = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PurchasingTableCon = styled.div``;
const PurchasingTableHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  // padding-bottom: 10px;
`;

const PurchasingTableHeaderTxtCon = styled.div`
  // padding:3px;
  margin-right: 15px;
  cursor: pointer;
  `;
  
  const PurchasingTableHeaderTxt = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin-bottom:10px;
`;

const TableDetailsCon = styled.div``;
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;
const TableTr = styled.tr`
  text-align: left;
  margin-right: 8px;
  width: 100%;

  &:nth-child(n) {
    border-bottom: 1px solid #e0e0f1;
  }
`;
const TableTh = styled.th`
  margin: 8px;
  padding: 10px;
  text-align: left;
`;
const TableTd = styled.td`
  padding: 10px;
  margin: 8px;
  text-align: left;
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
          <RightWrapper>
            <RightWrapperTop>
              <MyActivity>
                <MyActivityTxt>My Activty</MyActivityTxt>
              </MyActivity>
              <HR m="30px 0" />
              <Activities>
                <Activity>
                  <ActivityImgCon>
                    <ActivityImg src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxtCon>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxtCon>
                </Activity>
                <Activity>
                  <ActivityImgCon>
                    <ActivityImg src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxtCon>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxtCon>
                </Activity>
                <Activity>
                  <ActivityImgCon>
                    <ActivityImg src={ActiveBids} alt="ActiveBids" />
                  </ActivityImgCon>
                  <ActivityTxtCon>
                    <ActivityTxt fz="39px" fw={500}>
                      80
                    </ActivityTxt>
                    <ActivityTxt fz="19px" fw={500}>
                      Active Bids
                    </ActivityTxt>
                  </ActivityTxtCon>
                </Activity>
              </Activities>
            </RightWrapperTop>
            <RightWrapperBottom>
              <Purchasing>
                <Purchasingtxt>Purchasing</Purchasingtxt>
              </Purchasing>
              <PurchasingTableCon>
                <PurchasingTableHeader>
                  <PurchasingTableHeaderTxtCon
                    style={
                      activePurchase === "Current"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("Current");
                    }}
                  >
                    <PurchasingTableHeaderTxt>
                      Current
                    </PurchasingTableHeaderTxt>
                  </PurchasingTableHeaderTxtCon>

                  <PurchasingTableHeaderTxtCon
                    style={
                      activePurchase === "Pending"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("Pending");
                    }}
                  >
                    <PurchasingTableHeaderTxt>
                      Pending
                    </PurchasingTableHeaderTxt>
                  </PurchasingTableHeaderTxtCon>

                  <PurchasingTableHeaderTxtCon
                    style={
                      activePurchase === "History"
                        ? { borderBottom: "3px solid red" }
                        : {}
                    }
                    onClick={() => {
                      SetActivePurchase("History");
                    }}
                  >
                    <PurchasingTableHeaderTxt>
                      History
                    </PurchasingTableHeaderTxt>
                  </PurchasingTableHeaderTxtCon>
                </PurchasingTableHeader>
                <HR />
                <TableDetailsCon>
                  {activePurchase === "Current" && <CurrentBids />}
                  {activePurchase === "Pending" && <PendingBids />}
                  {activePurchase === "History" && <History />}
                </TableDetailsCon>
              </PurchasingTableCon>
            </RightWrapperBottom>
          </RightWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </DashBoardCon>
  );
}

export default DashBoard;
