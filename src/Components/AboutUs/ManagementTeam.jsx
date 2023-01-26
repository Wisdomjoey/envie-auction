import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { ManageMent_Team } from "../../data";
import team1 from '../../images/team1.png'

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color:#F1F3Fd;
  margin:100px 0;
  height:90vh;
  padding:30px 5vh;
  box-sizing:border-box;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  margin-bottom:150px;
`;
const HeaderTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
//   color: ${(props) => props.clr};
  margin:5px 0;
`;

const Teams_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:100%;
//   padding:0 5vh;

`;
const Team = styled.div`
  flex: 1;
  margin-right: ${(props) => props.mgr};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  height:180px;
  max-width:200px;
  border-radius:15px;
`;
const TeamImg_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  flex:1;
`;
const Team_Img = styled.img`
   position:absolute;
//    margin-bottom:10px;
   margin-top:-60px;
   width:13%;
   `
const Team_Name = styled.p`
font-size:20px;
font-weight:500;
margin:10px 0;
color:black
`
const TeamDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  flex-direction:column;
  flex:1;
  width:100%;
`;
const Team_Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SocialIcon = styled.div`
font-size:15px;
font-weight:200;
margin:5px;
  &:hover {
    color: #EE4730;
  }
`;

function ManagementTeam() {
  return (
    <Container>
      <Header>
        <HeaderTxt fz="40px" fw={600}>
          Meet The Management Team
        </HeaderTxt>
        <HeaderTxt clr="grey">
          Our team consists of passionate and talented individuals invested in
          your success.
        </HeaderTxt>
      </Header>
      <Teams_Container>
        {ManageMent_Team.map((item)=>(
        <Team mgr="5vh">
          <TeamImg_Con>
            <Team_Img src={item.img} />
          </TeamImg_Con>
          <TeamDetails>
            <Team_Name>{item.name}</Team_Name>
            <Team_Social>
              <SocialIcon>
                <FacebookRounded sx={{ fontWeight: 200, fontSize: "21px" }} />
              </SocialIcon>
              <SocialIcon>
                <Twitter
                  sx={{ color: "#EE4730", fontWeight: 200, fontSize: "21px" }}
                />
              </SocialIcon>
              <SocialIcon>
                <Instagram sx={{ fontWeight: 200, fontSize: "21px" }} />
              </SocialIcon>
            </Team_Social>
          </TeamDetails>
        </Team>
        ))}
             </Teams_Container>
    </Container>
  );
}

export default ManagementTeam