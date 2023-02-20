import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import { signOutUser } from '../../Firebase Actions/auth';
import { setloading, setsigned, setuser } from '../../redux/reducers/authSlice';

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

const PersonalProfileWrapper = styled.div`
  width: 100%;
  padding: 60px 40px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 50px;
  gap:30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const PersonalProfileHeaderCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const PersonalProfileHeader = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
const PersonalProfileDetails = styled.div`
  justify-content: flex-start;
  text-align: left;
  box-sizing: border-box;
  flex-direction: column;
`;

const PersonalProfileTxtConLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  width: 200px;
`;
const PersonalProfileTxtConRight = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  text-align: right;
  justify-content: flex-start;
  // padding-left: 10px;
`;
const PersonalProfileTxtCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const PersonalProfileTxt = styled.p`
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 15px;
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



function PersonalProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    
      dispatch(setloading(true));
      
      await signOutUser().then(() => {
        dispatch(setuser({}));
        dispatch(setloading(false));
        dispatch(setsigned(false));
        navigate('/login');
        window.location.reload(true);
      });
  }

  return (
    // <Wrapper>
    <RightWrapper>
      <PersonalProfileWrapper>
        <PersonalProfileHeaderCon>
          <PersonalProfileHeader>Personal Details</PersonalProfileHeader>
          <PersonalProfileHeader>.</PersonalProfileHeader>
        </PersonalProfileHeaderCon>
        <PersonalProfileDetails>
          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Name</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>{user.name}</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>

          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>DOB</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>---</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>

          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Address</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>
                {user.address}
              </PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>
        </PersonalProfileDetails>
      </PersonalProfileWrapper>

      <PersonalProfileWrapper>
        <PersonalProfileHeaderCon>
          <PersonalProfileHeader>Account Setting</PersonalProfileHeader>
          <PersonalProfileHeader>.</PersonalProfileHeader>
        </PersonalProfileHeaderCon>
        <PersonalProfileDetails>
          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Language</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>English (United States)</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>

          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Time Zone</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>
                {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>

          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Status</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>Verified</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>
        </PersonalProfileDetails>
      </PersonalProfileWrapper>

      <PersonalProfileWrapper>
        <PersonalProfileHeaderCon>
          <PersonalProfileHeader>Email Address</PersonalProfileHeader>
          <PersonalProfileHeader>.</PersonalProfileHeader>
        </PersonalProfileHeaderCon>
        <PersonalProfileDetails>
          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Email </PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>{user.email}</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>
        </PersonalProfileDetails>
      </PersonalProfileWrapper>

      <PersonalProfileWrapper>
        <PersonalProfileHeaderCon>
          <PersonalProfileHeader>Phone</PersonalProfileHeader>
          <PersonalProfileHeader>.</PersonalProfileHeader>
        </PersonalProfileHeaderCon>
        <PersonalProfileDetails>
          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Mobile</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>+234 {user.phoneNumber}</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>
        </PersonalProfileDetails>
      </PersonalProfileWrapper>
      <PersonalProfileWrapper>
        <PersonalProfileHeaderCon>
          <PersonalProfileHeader>Security</PersonalProfileHeader>
          <PersonalProfileHeader>.</PersonalProfileHeader>
        </PersonalProfileHeaderCon>
        <PersonalProfileDetails>
          <PersonalProfileTxtCon>
            <PersonalProfileTxtConLeft>
              <PersonalProfileTxt>Password</PersonalProfileTxt>
              <PersonalProfileTxt>:</PersonalProfileTxt>
            </PersonalProfileTxtConLeft>
            <PersonalProfileTxtConRight>
              <PersonalProfileTxt>xxxxxxxxxxxx</PersonalProfileTxt>
            </PersonalProfileTxtConRight>
          </PersonalProfileTxtCon>
          
        </PersonalProfileDetails>
      </PersonalProfileWrapper>
      <SubmitCon>
        <Submit onClick={(e) => handleSignOut(e)}>Logout</Submit>
      </SubmitCon>
    </RightWrapper>
    // </Wrapper>
  );
}

export default PersonalProfile