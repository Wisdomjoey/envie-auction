import { useState } from "react";
import styled from "styled-components";
import Alerts from "./Alerts";
import NewsLetter from "./NewsLetter";
const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  gap: 30px;
`;

const PersonalProfile_Wrapper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;

const PersonalProfile_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-height: 200px;
`;

const PersonalProfile_HeaderTxtCon = styled.div`
  //   flex: 1;
  white-space: nowrap;
`;

const PersonalProfile_HeaderTxt = styled.p`
  white-space: nowrap;
  font-size: 25px;
  font-weight: 600;
`;

const WrapperButtons = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
const Alerts_BtnCon = styled.div``;
const Alerts_Btn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin: 10px;
`;
const Newsletter_BtnCon = styled.div``;
const Newsletter_Btn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

const Components = styled.div`
  dsiplay: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex:3;
`;

function MyAlerts() {
      const [alerts, setAlerts] = useState("Alerts");

  return (
    <Container>
      <PersonalProfile_Wrapper>
        <PersonalProfile_Header>
          <PersonalProfile_HeaderTxtCon>
            <PersonalProfile_HeaderTxt>My Bids</PersonalProfile_HeaderTxt>
          </PersonalProfile_HeaderTxtCon>
        </PersonalProfile_Header>
        <WrapperButtons>
          <Alerts_Btn
            onClick={() => {
              setAlerts("Alerts");
            }}
          >
            Alerts
          </Alerts_Btn>
          <Newsletter_Btn
            onClick={() => {
              setAlerts("NewsLetter");
            }}
          >
            Newletter
          </Newsletter_Btn>
        </WrapperButtons>
      </PersonalProfile_Wrapper>
      <Components>
        {alerts === "Alerts" && <Alerts />}
        {alerts === "NewsLetter" && <NewsLetter />}
        </Components>
    </Container>
  );
}

export default MyAlerts;
