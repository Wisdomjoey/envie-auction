import { FacebookOutlined, Instagram, LinkedIn, MilitaryTech, Twitter } from "@mui/icons-material";
import styled from "styled-components"
const Container = styled.div`
   width:100%;
`

const Referrals_Header = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`

const Referrales_HeaderTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin:5px;
`;

const ReferralsLinkCon = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;
const ReferralsLink_Txt = styled.p`
   font-size:20px;
     font-size: ${(props) => props.fz};
     font-weight: ${(props) => props.fw};
     flex: ${(props) => props.fx};
     opacity: ${(props) => props.op};
     margin: ${(props) => props.mg};

`;
const ReferralsLink = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   border-radius:30px;
   border:2px solid whitesmoke;
   padding-left:15px;
   margin-top:15px;
`;
const ReferralsLink_Button = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  flex:1;
`;

const ShareContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-start;
   margin-top:20px;
`
const ShareIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: ${(props) => props.bgc};
  color: ${(props) => props.cl};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid whitesmoke;
  margin: 5px;

  &:hover {
    background-color: linear-gradient(to right, #E94C51, #ee6d4e);
    background: linear-gradient(135deg, #E94C51 0%, #ee6d4e 100%);

    color: white;
  }
`;

const Promotions_RewardsCon = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction:column;
  text-align:left;
`;

const Promotions_RewardsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff63de 0%, #d843e2 44%, #b122e6 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
`;

const LeaderBoardCon = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;
const LeaderBoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  margin-bottom:15px;
`;
const LeaderBoardTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin-top:${props=>props.mt};
  margin-bottom:${props=>props.mb};
`;

const Clients_LeaderBoard = styled.div`
   
`
const Clients = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:2px solid whitesmoke;
  padding:15px 0;
`;
const Clients_Rank = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Clients_Name = styled.div``;
const Clients_Referrals = styled.div``;
const Stats = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;
const StatsHeader = styled.div`
   margin-bottom:10px;
`;
const User_Stats = styled.div``;
const B = styled.span`
   font-size:27px;
   font-weight:600;
`;

function Referrals() {
  return (
    <Container>
      <Referrals_Header>
        <Referrales_HeaderTxt fz="30px" fw={500}>
          Welcome to the Sbidu Referral program.
        </Referrales_HeaderTxt>
        <Referrales_HeaderTxt>
          Have friends sign up using your unique link and earn rewards.
        </Referrales_HeaderTxt>
      </Referrals_Header>
      <ReferralsLinkCon>
        <ReferralsLink_Txt fz="27px">
          Share your unique referral link
        </ReferralsLink_Txt>
        <ReferralsLink>
          <ReferralsLink_Txt fz="17px" fw={400} fx={3} op={0.6}>
            https://Sbidu.com?grsf=y4wyd8
          </ReferralsLink_Txt>
          <ReferralsLink_Button>Copy Link</ReferralsLink_Button>
        </ReferralsLink>
        <ShareContainer>
          <ReferralsLink_Txt fz="17px">Share:</ReferralsLink_Txt>
          <ShareIcon
            bgc="linear-gradient(135deg, #E94C51 0%, #ee6d4e 100%)"
            cl="white"
          >
            <FacebookOutlined />
          </ShareIcon>
          <ShareIcon bgc="white">
            <Twitter />
          </ShareIcon>
          <ShareIcon bgc="white">
            <Instagram />
          </ShareIcon>
          <ShareIcon bgc="white">
            <LinkedIn />
          </ShareIcon>
        </ShareContainer>
      </ReferralsLinkCon>
      <Promotions_RewardsCon>
        <ReferralsLink_Txt fz="26px" mg="10px">
          Promotions & Rewards
        </ReferralsLink_Txt>
        <ReferralsLink_Txt fz="15px" mg="10px">
          Give $5 off to a friend and get $5 credit after they make a purchase
        </ReferralsLink_Txt>
        <Promotions_RewardsButton>
          <MilitaryTech />1 Referrals Required
        </Promotions_RewardsButton>
      </Promotions_RewardsCon>
      <LeaderBoardCon>
        <LeaderBoardHeader>
          <LeaderBoardTxt fz="20px">Rank</LeaderBoardTxt>
          <LeaderBoardTxt fz="20px">Sbidu Bidder</LeaderBoardTxt>
          <LeaderBoardTxt fz="20px">Referrals</LeaderBoardTxt>
        </LeaderBoardHeader>
        <Clients_LeaderBoard>
          <Clients>
            <Clients_Rank>
              <LeaderBoardTxt cl="black" fz="15px">
                #01
              </LeaderBoardTxt>
            </Clients_Rank>
            <Clients_Name cl="black" fz="15px">
              <LeaderBoardTxt>jo@m************</LeaderBoardTxt>
            </Clients_Name>
            <Clients_Referrals cl="black" fz="15px">
              <LeaderBoardTxt>01</LeaderBoardTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Rank>
              <LeaderBoardTxt cl="black" fz="15px">
                #02
              </LeaderBoardTxt>
            </Clients_Rank>
            <Clients_Name cl="black" fz="15px">
              <LeaderBoardTxt>ma********@y************</LeaderBoardTxt>
            </Clients_Name>
            <Clients_Referrals cl="black" fz="15px">
              <LeaderBoardTxt>02</LeaderBoardTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Rank>
              <LeaderBoardTxt cl="black" fz="15px">
                #03
              </LeaderBoardTxt>
            </Clients_Rank>
            <Clients_Name cl="black" fz="15px">
              <LeaderBoardTxt>ho*******@y************</LeaderBoardTxt>
            </Clients_Name>
            <Clients_Referrals cl="black" fz="15px">
              <LeaderBoardTxt>03</LeaderBoardTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Rank>
              <LeaderBoardTxt cl="black" fz="15px">
                #04
              </LeaderBoardTxt>
            </Clients_Rank>
            <Clients_Name cl="black" fz="15px">
              <LeaderBoardTxt>ma*********@y************</LeaderBoardTxt>
            </Clients_Name>
            <Clients_Referrals cl="black" fz="15px">
              <LeaderBoardTxt>04</LeaderBoardTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Rank>
              <LeaderBoardTxt cl="black" fz="15px">
                #05
              </LeaderBoardTxt>
            </Clients_Rank>
            <Clients_Name cl="black" fz="15px">
              <LeaderBoardTxt>ru@f************</LeaderBoardTxt>
            </Clients_Name>
            <Clients_Referrals cl="black" fz="15px">
              <LeaderBoardTxt>05</LeaderBoardTxt>
            </Clients_Referrals>
          </Clients>
        </Clients_LeaderBoard>
      </LeaderBoardCon>
      <Stats>
        <StatsHeader>
          <LeaderBoardTxt fz="22px" fw={500}>
            Your Stats
          </LeaderBoardTxt>
        </StatsHeader>
        <User_Stats>
          <LeaderBoardTxt>
            <B>08</B> referrals made
          </LeaderBoardTxt>
        </User_Stats>
      </Stats>
    </Container>
  );
}

export default Referrals