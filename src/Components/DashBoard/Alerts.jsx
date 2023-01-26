import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
  width: 100%;
  padding: 25px;
//   background-color: green;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;

const AlertsCon = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:flex-start;
   flex-direction:column;
`

const CheckBoxCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top:15px;
`;

const LabelCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align:center;
  margin-left:55px;
`;

const LabelTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  text-align: left;
  margin-bottom:10px;
`;

function Alerts() {
  return (
    <Container>
      <AlertsCon>
        <CheckBoxCon>
          <input
            type="checkbox"
            id="AlertCheck1"
            name="AlertCheck1"
            value="AlertCheck1"
          />
          <label for="AlertCheck1" id="label"></label>
          <LabelCon>
            <LabelTxt fz="23px" fw={400}>
              Bid Notifications
            </LabelTxt>
            <LabelTxt fz="15px">
              Receive an email notifying you if someone else bids on an item on
              which you have already placed a bid.
            </LabelTxt>
          </LabelCon>
        </CheckBoxCon>
        <CheckBoxCon>
          <input
            type="checkbox"
            id="AlertCheck2"
            name="AlertCheck2"
            value="AlertCheck2"
          />
          <label for="AlertCheck2" id="label"></label>
          <LabelCon>
            <LabelTxt fz="23px" fw={400}>
              Live Auction Reminder
            </LabelTxt>
            <LabelTxt fz="15px">
              Get a reminder that a live auction you've registered for is about
              to begin.
            </LabelTxt>
          </LabelCon>
        </CheckBoxCon>
        <CheckBoxCon>
          <input
            type="checkbox"
            id="AlertCheck3"
            name="AlertCheck3"
            value="AlertCheck3"
          />
          <label for="AlertCheck3" id="label"></label>
          <LabelCon>
            <LabelTxt fz="23px" fw={400}>
              Saved Items Going Live
            </LabelTxt>
            <LabelTxt fz="15px">
              Get a reminder that items you've saved are going live in an
              auction..
            </LabelTxt>
          </LabelCon>
        </CheckBoxCon>
        <CheckBoxCon>
          <input
            type="checkbox"
            id="AlertCheck4"
            name="AlertCheck4"
            value="AlertCheck4"
          />
          <label for="AlertCheck4" id="label"></label>
          <LabelCon>
            <LabelTxt fz="23px" fw={400}>
              Bids Ending Soon
            </LabelTxt>
            <LabelTxt fz="15px">
              Get a reminder when items you've bid on are going live in the next
              couple days
            </LabelTxt>
          </LabelCon>
        </CheckBoxCon>
        <CheckBoxCon>
          <input
            type="checkbox"
            id="AlertCheck5"
            name="AlertCheck5"
            value="AlertCheck5"
          />
          <label for="AlertCheck5" id="label"></label>
          <LabelCon>
            <LabelTxt fz="23px" fw={400}>
              Rate Your Experience
            </LabelTxt>
            <LabelTxt fz='15px'>
              Receive an email notifying you if someone else bids on an item on
              which you have already placed a bid.
            </LabelTxt>
          </LabelCon>
        </CheckBoxCon>
      </AlertsCon>
    </Container>
  );
}

export default Alerts;
