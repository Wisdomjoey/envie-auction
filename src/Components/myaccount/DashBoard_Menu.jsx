import styled from "styled-components";
import img from "../../images/user.png";
import dashboard from "../../images/dashboard.png";
import MyBids from "../../images/MyBids.png";
import itemsWon from "../../images/itemsWon.png";
import MyAlerts from "../../images/MyAlerts.png";
import MyFavorites from "../../images/MyFavorites.png";
import Referrals from "../../images/Referrals.png";
import personalProfile from "../../images/personalProfile.png";
import { useState } from "react";

const DashBoard_MenuCon = styled.div`
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
  color:#37406F;
`;
const Container = styled.div``;
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
  padding-right:20px;
margin-top:30px;
`;

const DashBoard_MenuLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 21px;
  padding:15px;
  margin:1px;
  width:100%;
  cursor:pointer;

  &:hover{
    background-color:whitesmoke;
  }

`;

const DashBoardImg = styled.img`
  max-width: 10%;
`;

const DashBoard_Txt = styled.p`
  font-weight: 400;
`;

function DashBoard_Menu({DashBoard}) {

   const [active,setActive]=useState(DashBoard);

  return (
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
          style={active === DashBoard ? { backgroundColor: "whitesmoke" } : {}}
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
  );
}

export default DashBoard_Menu;
