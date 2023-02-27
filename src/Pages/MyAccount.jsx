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
import myBids from "../images/MyBids.png";
import itemsWon from "../images/itemsWon.png";
import myAlerts from "../images/MyAlerts.png";
import myFavorites from "../images/MyFavorites.png";
import referrals from "../images/Referrals.png";
import personalProfile from "../images/personalProfile.png";
import Footer from "../Components/Home/Footer";
import MyFavorites from "../Components/DashBoard/MyFavorites";
import Referrals from "../Components/DashBoard/Referrals";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Spinner from "../Components/utils/Spinner";
import { Person } from "@mui/icons-material";
import bg from '../images/hero-bg.png';

const Container = styled.div`
  // background: url(./hero-bg.png);
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
  z-index: 30;
  box-sizing: border-box;
  // height:1500px;
`;

const DashBoardMenuCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 450px;
  width: 350px;
  border-radius: 10px;
  background-color: white;
  padding: 70px 40px;
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
const Userdashboardcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
const UserImgcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
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
  margin-top: 30px;
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
  width: 8%;
`;

const DashBoardTxt = styled.p`
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
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

function MyAccount() {
  const [activeDashBoard, SetActiveDashBoard] = useState("DashBoard");
  const [sticky, SetSticky] = useState(true);
  const navigate = useNavigate();
  const { signed, loading } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  window.scrollTo(0, 0);

  useEffect(() => {
    if (!loading) {
      if (!signed) {
        navigate('/login');
      }
    }
  }, [loading, navigate, signed]);

  return (
    <>
      {loading ? <Spinner show={loading} /> :
        signed &&
        <Container style={{background: `url(${bg})`}}>
          <HeaderSection
            SingleRoute={false}
            Page="MyAccount"
            CurrentPage={activeDashBoard}
          />
          <Wrapper>
            {/* <LeftWrapper> */}
            <DashBoardMenuCon
              className={sticky ? "sticky_Dashboard" : " "}
            >
              <UserDetails>
                <UserImgcon>
                  <Person sx={{ fontSize: '45px' }} />
                </UserImgcon>
                <UserDetailsTxtCon>
                  <UerDetailsTxtName>{user.name}</UerDetailsTxtName>
                  <UerDetailsTxtEmail>{user.email}</UerDetailsTxtEmail>
                </UserDetailsTxtCon>
              </UserDetails>
              <DashBoardMenuLinks>
                <DashBoardMenuLink
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
                  <DashBoardTxt>Dashboard</DashBoardTxt>
                </DashBoardMenuLink>
                <DashBoardMenuLink
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
                  <DashBoardTxt>Personal Profile</DashBoardTxt>
                </DashBoardMenuLink>
                <DashBoardMenuLink
                  onClick={() => {
                    SetActiveDashBoard("Auctions");
                    SetSticky(true);

                  }}
                  style={
                    activeDashBoard === "Auctions"
                      ? { backgroundColor: "whitesmoke" }
                      : {}
                  }
                >
                  <DashBoardImg src={myBids} alt="Referrals" />
                  <DashBoardTxt>Auctions</DashBoardTxt>
                </DashBoardMenuLink>
                <DashBoardMenuLink
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
                  <DashBoardImg src={myAlerts} alt="MyAlerts" />
                  <DashBoardTxt>My Alerts</DashBoardTxt>
                </DashBoardMenuLink>
                <DashBoardMenuLink
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
                  <DashBoardImg src={myFavorites} alt="MyFavorites" />
                  <DashBoardTxt>My Favorites</DashBoardTxt>
                </DashBoardMenuLink>
                {/* <DashBoardMenuLink
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
              <DashBoardTxt>Referrals</DashBoardTxt>
            </DashBoardMenuLink> */}
              </DashBoardMenuLinks>
            </DashBoardMenuCon>
            {/* </LeftWrapper> */}
            <Components>
              {activeDashBoard === "DashBoard" && <DashBoard />}
              {activeDashBoard === "PersonalProfile" && <PersonalProfile />}
              {activeDashBoard === "MyAlerts" && <MyAlerts />}
              {activeDashBoard === "MyFavorites" && <MyFavorites />}
              {activeDashBoard === "Auctions" && <Referrals />}
            </Components>
          </Wrapper>
          <Footer />
        </Container>
      }
    </>
  );
}

export default MyAccount;
