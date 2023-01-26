import styled from "styled-components";
import overview from "../../images/overview-bg.png";
import RTA from "../../images/01 (4).png";
import SMC from "../../images/02 (4).png";
import SMC2 from "../../images/04 (5).png";
import WA from "../../images/03 (4).png";
import SABH from "../../images/05 (3).png";
import ATW from "../../images/06 (2).png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  margin-bottom:150px;
  width: 100%;
  color: black;
`;
const Left_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;
const LeftCon_Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`;
const LeftCon_HeaderText = styled.p`
  margin: 5px 0;
  font-size: ${(props) => props.fz};
  color: ${(props) => props.clr};
  font-weight: ${(props) => props.fw};
`;
const WhatTo_ExpectCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const WhatTo_Expect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 40px;
  width: 150px;
  flex: 1;
`;
const WhatTo_Expect_Img = styled.img`
  width: 30%;
`;
const WhatTo_ExpectText = styled.p`
  font-weight: 500;
  font-size: 19px;
  margin-top: 15px;
  white-space: nowrap;
`;
const Right_Con = styled.div`
  flex: 1;
  width: 100%;
  background: url(./overview-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  min-height: 500px;
  background-color: red;
`;

const Right_ConImage = styled.img`
  height: 100%;
  flex: 1;
`;

function WhatToExpect() {
  return (
    <Container>
      <Left_Con>
        <LeftCon_Header>
          <LeftCon_HeaderText fz="40px" fw={600}>
            What Can You Expect?
          </LeftCon_HeaderText>
          <LeftCon_HeaderText clr="grey">
            Voluptate aut blanditiis accusantium officiis expedita dolorem
            inventore odio reiciendis obcaecati quod nisi quae
          </LeftCon_HeaderText>
        </LeftCon_Header>
        <WhatTo_ExpectCon>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={RTA} />
            <WhatTo_ExpectText>Real-Time Auction</WhatTo_ExpectText>
          </WhatTo_Expect>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={SMC} />
            <WhatTo_ExpectText>Supports Multiple Currency</WhatTo_ExpectText>
          </WhatTo_Expect>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={WA} />
            <WhatTo_ExpectText>Winner Announcement</WhatTo_ExpectText>
          </WhatTo_Expect>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={SMC2} />
            <WhatTo_ExpectText>Real-Time Auction</WhatTo_ExpectText>
          </WhatTo_Expect>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={RTA} />
            <WhatTo_ExpectText>Supports Multiple Currency</WhatTo_ExpectText>
          </WhatTo_Expect>
          <WhatTo_Expect>
            <WhatTo_Expect_Img src={ATW} />
            <WhatTo_ExpectText>Add To Watchlist</WhatTo_ExpectText>
          </WhatTo_Expect>
        </WhatTo_ExpectCon>
      </Left_Con>
      <Right_Con></Right_Con>
    </Container>
  );
}

export default WhatToExpect;
