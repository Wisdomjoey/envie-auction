import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyAlerts from "../../images/MyAlerts.png";
import Spinner from "../utils/Spinner";
import Past from "./Past";
import Upcomming from "./Upcomming";

const Container = styled.div`
  // height:100%;
  margin-bottom:50px;
`;
const PersonalProfileWrapper = styled.div`
  // width: 100%;
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
  // height:100%;
`;
const SubmitCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Submit = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 50px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-top:20px;
  margin-bottom:20px;
`;

function Referrals() {
  const { userAuctions, loading } = useSelector((state) => state.auction);
  console.log(userAuctions);

  return (
        <>
      <Spinner show={loading} />
    <Container>
      <PersonalProfileWrapper>
        <PersonalProfileHeader>
          <PersonalProfileHeaderTxtCon>
            <PersonalProfileHeaderTxt>My Auctions</PersonalProfileHeaderTxt>
          </PersonalProfileHeaderTxtCon>
        </PersonalProfileHeader>
      </PersonalProfileWrapper>
      <Components>
      <Upcomming data={userAuctions} />
      </Components>
      <Link to='/create-auction'>
        <SubmitCon>
          <Submit>Logout</Submit>
        </SubmitCon>
      </Link>
        </Container>
    </>
  );
}

export default Referrals