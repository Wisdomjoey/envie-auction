import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyAlerts from "../../images/MyAlerts.png";
import Past from "./Past";
import Upcomming from "./Upcomming";

const Container = styled.div`
  height:100%;
  margin-bottom:50px;
`;
const PersonalProfileWrapper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;

const PersonalProfileHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-height:200px;
`;

const PersonalProfileHeaderTxtCon = styled.div`
  white-space: nowrap;
`;
  
  const PersonalProfileHeaderTxt = styled.p`
  white-space:nowrap;
  font-size: 25px;
  font-weight: 600;
`;
const PersonalProfileHeaderImgCon = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
const PersonalProfileHeaderImg = styled.img`
  width: 4%;
`;
const ManageNoficicationTxt = styled.p``;

const WrapperButtons = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
const UpcommingBtnCon = styled.div``;
const UpcommingBtn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin:10px;
`;
const PastBtnCon = styled.div``;
const PastBtn = styled.button`
  background: linear-gradient(2deg, #FFD643 0%, #FF8858 100%);
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
  justify-content: space-between;
  height:100%;
`;
function MyBids() {
  const [bids, setBids] = useState("Upcomming");
  useEffect(()=>{
    console.log(bids)
},[bids]);



  return (
    <Container>
      <PersonalProfileWrapper>
        <PersonalProfileHeader>
          <PersonalProfileHeaderTxtCon>
            <PersonalProfileHeaderTxt>My Bids</PersonalProfileHeaderTxt>
          </PersonalProfileHeaderTxtCon>

          <PersonalProfileHeaderImgCon>
            <PersonalProfileHeaderImg src={MyAlerts} alt="MyBids" />
            <ManageNoficicationTxt>Manage Notification</ManageNoficicationTxt>
          </PersonalProfileHeaderImgCon>
        </PersonalProfileHeader>
        <WrapperButtons>
          <UpcommingBtn
            onClick={() => {
              setBids("Upcomming");
            }}
            style={
              bids === "Upcomming"
                ? { boxShadow: " 0px 9px 20px 0px rgb(22 26 57 / 36%)" }
                : {}
            }
          >
            Upcomming
          </UpcommingBtn>
          <PastBtn
            onClick={() => {
              setBids("Past");
            }}
            
            style={
              bids === "Past"
                ? { boxShadow: " 0px 9px 20px 0px rgb(22 26 57 / 36%)" }
                : {}
            }
          >
            Past
          </PastBtn>
        </WrapperButtons>
      </PersonalProfileWrapper>
      <Components>
        {bids === "Upcomming" && <Upcomming />}
        {bids === "Past" && <Past />}
      </Components>
    </Container>
  );
}

export default MyBids;
