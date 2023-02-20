import { useState } from "react";
import styled from "styled-components";
import CurrentBids from "../myaccount/dashboard/CurrentBids";
import PendingBids from "../myaccount/dashboard/PendingBids";
import ActiveBids from "../../images/active_bids.png";
import itemsWon from "../../images/itemsWon.png";
import favorites from "../../images/favorites.png";
import History from "../../Components/myaccount/dashboard/History";
import { useSelector } from "react-redux";

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
const RightWrapperTop = styled.div`
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

function DashBoard() {
  const [activePurchase, SetActivePurchase] = useState("Current");
  const { userBids } = useSelector((state) => state.bid);

  return (
    <Wrapper>
      <Container>
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
                  {userBids.length}
                </ActivityTxt>
                <ActivityTxt fz="19px" fw={500}>
                  Active Bids
                </ActivityTxt>
              </ActivityTxtCon>
            </Activity>
            <Activity>
              <ActivityImgCon>
                <ActivityImg src={itemsWon} alt="ActiveBids" />
              </ActivityImgCon>
              <ActivityTxtCon>
                <ActivityTxt fz="39px" fw={500}>
                  {userBids.filter((item) => item.bidStatus === 'won').length}
                </ActivityTxt>
                <ActivityTxt fz="19px" fw={500}>
                  items Won
                </ActivityTxt>
              </ActivityTxtCon>
            </Activity>
            <Activity>
              <ActivityImgCon>
                <ActivityImg src={favorites} alt="ActiveBids" />
              </ActivityImgCon>
              <ActivityTxtCon>
                <ActivityTxt fz="39px" fw={500}>
                  0
                </ActivityTxt>
                <ActivityTxt fz="19px" fw={500}>
                  Favorites
                </ActivityTxt>
              </ActivityTxtCon>
            </Activity>
          </Activities>
        </RightWrapperTop>
        <RightWrapperBottom>
          <Purchasing>
            <Purchasingtxt>My Bids</Purchasingtxt>
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
                <PurchasingTableHeaderTxt>Current</PurchasingTableHeaderTxt>
              </PurchasingTableHeaderTxtCon>

              <PurchasingTableHeaderTxtCon
                style={
                  activePurchase === "Won"
                    ? { borderBottom: "3px solid red" }
                    : {}
                }
                onClick={() => {
                  SetActivePurchase("Won");
                }}
              >
                <PurchasingTableHeaderTxt>Pending</PurchasingTableHeaderTxt>
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
                <PurchasingTableHeaderTxt>History</PurchasingTableHeaderTxt>
              </PurchasingTableHeaderTxtCon>
            </PurchasingTableHeader>
            <HR />
            <TableDetailsCon>
              {activePurchase === "Current" && <CurrentBids data={userBids.filter((item) => item.bidStatus === 'ongoing')} />}
              {activePurchase === "Won" && <PendingBids data={userBids.filter((item) => item.bidStatus === 'won')} />}
              {activePurchase === "History" && <History data={userBids.filter((item) => item.bidStatus !== 'ongoing')} />}
            </TableDetailsCon>
          </PurchasingTableCon>
        </RightWrapperBottom>
      </Container>
    </Wrapper>
  );
}

export default DashBoard


