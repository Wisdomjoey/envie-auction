import React from 'react'
import styled from 'styled-components'

const RightWrapper = styled.div`
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height:100%;
`;

const PersonalProfile_Wrapper = styled.div`
  width: 100%;
  padding: 60px 40px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  // margin-top:30px;
  gap:30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const PersonalProfile_HeaderCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const PersonalProfile_Header = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
const PersonalProfile_Details = styled.div`
  justify-content: flex-start;
  text-align: left;
  box-sizing: border-box;
  flex-direction: column;
`;

const PersonalProfile_TxtConLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  width: 200px;
`;
const PersonalProfile_TxtConRight = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  text-align: right;
  justify-content: flex-start;
  // padding-left: 10px;
`;
const PersonalProfile_TxtCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const PersonalProfile_Txt = styled.p`
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 15px;
`;



function PersonalProfile() {
  return (
    // <Wrapper>
    <RightWrapper>
      <PersonalProfile_Wrapper>
        <PersonalProfile_HeaderCon>
          <PersonalProfile_Header>Personal Details</PersonalProfile_Header>
          <PersonalProfile_Header>.</PersonalProfile_Header>
        </PersonalProfile_HeaderCon>
        <PersonalProfile_Details>
          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Name</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>Albert Owen</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>

          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Date of Birth</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>15-03-1974</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>

          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Address</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>
                8198 Fieldstone Dr.La Crosse, WI 54601
              </PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>
        </PersonalProfile_Details>
      </PersonalProfile_Wrapper>

      <PersonalProfile_Wrapper>
        <PersonalProfile_HeaderCon>
          <PersonalProfile_Header>Account Setting</PersonalProfile_Header>
          <PersonalProfile_Header>.</PersonalProfile_Header>
        </PersonalProfile_HeaderCon>
        <PersonalProfile_Details>
          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Time Zone</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>English (United States)</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>

          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Date of Birth</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>
                (GMT-06:00) Central America
              </PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>

          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Status</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>Active</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>
        </PersonalProfile_Details>
      </PersonalProfile_Wrapper>

      <PersonalProfile_Wrapper>
        <PersonalProfile_HeaderCon>
          <PersonalProfile_Header>Email Address</PersonalProfile_Header>
          <PersonalProfile_Header>.</PersonalProfile_Header>
        </PersonalProfile_HeaderCon>
        <PersonalProfile_Details>
          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Email </PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>albert349@gmail.com</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>
        </PersonalProfile_Details>
      </PersonalProfile_Wrapper>

      <PersonalProfile_Wrapper>
        <PersonalProfile_HeaderCon>
          <PersonalProfile_Header>Phone</PersonalProfile_Header>
          <PersonalProfile_Header>.</PersonalProfile_Header>
        </PersonalProfile_HeaderCon>
        <PersonalProfile_Details>
          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Mobile</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>+1 234-567-8925</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>
        </PersonalProfile_Details>
      </PersonalProfile_Wrapper>
      <PersonalProfile_Wrapper>
        <PersonalProfile_HeaderCon>
          <PersonalProfile_Header>Security</PersonalProfile_Header>
          <PersonalProfile_Header>.</PersonalProfile_Header>
        </PersonalProfile_HeaderCon>
        <PersonalProfile_Details>
          <PersonalProfile_TxtCon>
            <PersonalProfile_TxtConLeft>
              <PersonalProfile_Txt>Password</PersonalProfile_Txt>
              <PersonalProfile_Txt>:</PersonalProfile_Txt>
            </PersonalProfile_TxtConLeft>
            <PersonalProfile_TxtConRight>
              <PersonalProfile_Txt>xxxxxxxxxxxxxxxx</PersonalProfile_Txt>
            </PersonalProfile_TxtConRight>
          </PersonalProfile_TxtCon>

          
        </PersonalProfile_Details>
      </PersonalProfile_Wrapper>
    </RightWrapper>
    // </Wrapper>
  );
}

export default PersonalProfile