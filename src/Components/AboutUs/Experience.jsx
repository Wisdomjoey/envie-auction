import styled from "styled-components";
import about from '../../images/about.png'
import award from "../../images/01 (5).png";
import affilations from "../../images/02 (5).png";
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:0 5vh;
`
const ExperienceTop_Con = styled.div`
  background-color: white;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vh;
  border-radius:15px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 6%);
`;
const ExperienceTopText_Con = styled.div``;
const Top_ConImage = styled.img`
  width:50%;
`
const ExperienceTopText = styled.p`
   font-size:${props=>props.fz};
   font-weight:${props=>props.fw};
   color:${props=>props.cl};
   margin-top:10px;
`;

const Award_AffilateCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px 0;
`;
const Award_AffilateImg = styled.img``;
const Award_Affilate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;


const ExperienceBottom_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  margin-top:30px;
`;
const InfoCon = styled.div`
  flex: 1;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 50px;
  margin-right: ${(props) => props.mr};
`;
const InfoText = styled.div`
white-space:nowrap;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
`;

function Experience() {
  return (
    <Container>
      <ExperienceTop_Con>
        <ExperienceTopText_Con>
          <ExperienceTopText fz="40px" fw={500}>
            ABOUT US
          </ExperienceTopText>
          <ExperienceTopText fz="40px" fw={600} cl="red">
            OVER 60
          </ExperienceTopText>
          <ExperienceTopText fz="40px" fw={600}>
            YEARS EXPERIENCE
          </ExperienceTopText>
          <ExperienceTopText fz="18px">
            Innovation have made us leaders in auctions platform
          </ExperienceTopText>
          <Award_AffilateCon>
            <Award_Affilate>
              <Award_AffilateImg src={award} />
              <ExperienceTopText>AWARD-WINNING TEAM</ExperienceTopText>
            </Award_Affilate>
            <Award_Affilate>
              <Award_AffilateImg src={affilations} />
              <ExperienceTopText>AWARD-WINNING TEAM</ExperienceTopText>
            </Award_Affilate>
          </Award_AffilateCon>
        </ExperienceTopText_Con>
        <Top_ConImage src={about} />
      </ExperienceTop_Con>
      <ExperienceBottom_Con>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            62M
          </InfoText>
          <InfoText fw={300}>ITEMS AUCTIONED</InfoText>
        </InfoCon>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            $887M
          </InfoText>
          <InfoText fw={300}>IN SECURE BIDS</InfoText>
        </InfoCon>
        <InfoCon mr='5vh'>
          <InfoText fz="40px" fw={500}>
            63M
          </InfoText>
          <InfoText fw={300}>ITEMS AUCTIONED</InfoText>
        </InfoCon>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            05K
          </InfoText>
          <InfoText fw={300}>AUCTION EXPERTS</InfoText>
        </InfoCon>
      </ExperienceBottom_Con>
    </Container>
  );
}

export default Experience