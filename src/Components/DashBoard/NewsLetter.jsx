import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;

const NewsLetterCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const CheckBoxCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 15px;
`;

const LabelCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin-left: 55px;
`;

const LabelTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  text-align: left;
  margin-bottom: 10px;
`;


function NewsLetter() {
return (
  <Container>
    <NewsLetterCon>
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
            Auction News
          </LabelTxt>
          <LabelTxt fz="15px">
            A roundup of the trending news and latest stories in the auction
            world
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
            Auction Calendar
          </LabelTxt>
          <LabelTxt fz="15px">
            A look at upcoming auctions, personalized just for you.
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
            Auction Report
          </LabelTxt>
          <LabelTxt fz="15px">
            An in-depth look at the results from top-performing auctions Once
            per month Auction Reports
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
            Weekly Email
          </LabelTxt>
          <LabelTxt fz="15px">
            Preview the upcoming week's auctions and see the latest auction news
            from around the globe
          </LabelTxt>
        </LabelCon>
      </CheckBoxCon>
    </NewsLetterCon>
  </Container>
);}

export default NewsLetter;
