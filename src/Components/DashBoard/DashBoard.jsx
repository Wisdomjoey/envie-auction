import { useState } from "react";
import styled from "styled-components";
import CurrentBids from "../myaccount/dashboard/CurrentBids";
import PendingBids from "../myaccount/dashboard/PendingBids";
import ActiveBids from "../../images/active_bids.png";
import itemsWon from "../../images/itemsWon.png";
import favorites from "../../images/favorites.png";
import History from "../../Components/myaccount/dashboard/History";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 3vw;
  box-sizing:border-box;
`;
const LeftWrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
const RightWrapper_Top = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  padding: 40px 30px;
  margin-left: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
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

function DashBoard() {
    const [activePurchase, SetActivePurchase] = useState("Current");

  return (
    <Wrapper>
      <Container>
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
                <Activity_Img src={itemsWon} alt="ActiveBids" />
              </ActivityImgCon>
              <ActivityTxt_Con>
                <ActivityTxt fz="39px" fw={500}>
                  15
                </ActivityTxt>
                <ActivityTxt fz="19px" fw={500}>
                  items Won
                </ActivityTxt>
              </ActivityTxt_Con>
            </Activity>
            <Activity>
              <ActivityImgCon>
                <Activity_Img src={favorites} alt="ActiveBids" />
              </ActivityImgCon>
              <ActivityTxt_Con>
                <ActivityTxt fz="39px" fw={500}>
                  115
                </ActivityTxt>
                <ActivityTxt fz="19px" fw={500}>
                  Favorites
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
                <PurchasingTable_Header_Txt>Current</PurchasingTable_Header_Txt>
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
                <PurchasingTable_Header_Txt>Pending</PurchasingTable_Header_Txt>
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
                <PurchasingTable_Header_Txt>History</PurchasingTable_Header_Txt>
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
      </Container>
    </Wrapper>
  );
}

export default DashBoard


