import {
  FacebookRounded,
  Google,
  Lock,
  Person,
  Room,
  AttachFile,
  MailOutlined,
  RemoveRedEye,
} from "@mui/icons-material";
import styled from "styled-components";
import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Footer from "../../Components/Home/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Firebase Actions/auth";
import { setuser } from "../../redux/reducers/authSlice";
import { createUser } from "../../Firebase Actions/userActions";
import Spinner from "../../Components/utils/Spinner";
import { useAlert } from "react-alert";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Container = styled.div`
  background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  margin-bottom: 500px;
  height: 90vh;
`;
const SignUpCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 5vh;
  height: 1100px;
  margin-top:50px;
  margin-bottom:120px;
  `;

const Wrapper = styled.div`
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
`;
const LeftCon = styled.div`
  padding: 1vh 5vh;
  flex: 2;
  background-color: white;
  box-sizing: border-box;
  height: 100%;
`;

const LeftConHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin: 50px 0;
`;
const LeftConText = styled.p`
  color: black;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  margin: ${(props) => props.m};
  color: black;
`;

const SignUpMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.cl};
  margin-right: 5px;
`;

const LogInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 100%;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 16px 40px;
  color: black;
  flex: 1;
  margin: 0 5px;
  cursor: pointer;
  background-color: white;
  font-size:17px;
  font-weight:300;

  &:hover ${IconContainer} {
    color: white;
  }

  &:hover {
    color: white;
    background-color: #ee4730;
  }
`;

const OtherMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
`;
const OtherMethodsText = styled.p`
  margin: 0 10px;
`;
const Hr = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #eee;
`;
const SignUpForm = styled.form`
  width: 100%;
`;
const SignUpInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const SignUpInputCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  flex: 1;
  padding: 0 30px;
  height: 60px;
  color: grey;
  margin: 20px 0;
`;
const SignUpInput = styled.input`
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 10px;

  &::placeholder {
    font-size: 17px;
  }
`;
const IconTxt = styled.span`
  color: grey;
  font-weight: 500;
  font-size: 18px;
`
const TermsAndPolicy = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
`;
const TermsAndPolicyInput = styled.input`
  border: 1px solid red;
  padding: 15px;
  margin-right: 10px;
`;
const TermsAndPolicyTxt = styled.div`

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
`;

const RightCon = styled.div`
  background:-webkit-linear-gradient(90deg, #5140fe 0%, #7757f7 56%, #9d6ef0 100%);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const RightConTxtCon = styled.div`
  background: -webkit-linear-gradient(
    90deg,
    #5140fe 0%,
    #7757f7 56%,
    #9d6ef0 100%
  );
  height: 60%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RightConTxt = styled.p`
  color: white;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px 0;
`;

const RightConButton = styled.button`
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: 1px solid white;
  color: white;
  padding: 15px 50px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  background:transparent;

  .login {
    text-decoration: none;
    color: white;
  }
`;

function SignUp() {
  const ToggleVisibility = () => {
    if (document.getElementById("SignUp_Password").type === "password") {
      document.getElementById("visiblePassword_Icon").style.color = "grey";
      document.getElementById("SignUp_Password").type = "text";
    } else {
      document.getElementById("SignUp_Password").type = "password";
      // document.getElementById("visiblePassword_Icon").style.color = "black";
    }
  };

  const [userdata, setdata] = useState({});
  const [isLoading, setloading] = useState(false);
  const navigate = useNavigate();
  const {loading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleChange = (e) => {
    e.preventDefault();
    setdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });

    // console.log(userdata.file.name);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    let list = ['', undefined];

    if (list.includes(userdata?.name) || list.includes(userdata?.username) || list.includes(userdata?.email) || list.includes(userdata?.address) || list.includes(userdata?.password) || list.includes(userdata?.phone) || list.includes(userdata?.file) || list.includes(userdata?.utility)) {
      alert.error(<p style={{ textTransform: 'none' }}>Field should not be empty</p>);
    } else {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (userdata.email.match(pattern)) {
        if (userdata.file.type.includes('image')) {
          setloading(true);

          await registerUser(userdata.email, userdata.password).then(async (value) => {
            if (value.status) {
              dispatch(setuser(value.result));

              await createUser(value.result.uid, userdata.name, userdata.phone, userdata.address, userdata.username, userdata.file, userdata.email, userdata.utility).then(async (value1) => {
                if (value1.status) {
                  alert.success(<p style={{ textTransform: 'none' }}>Registration Successfull</p>);

                  await signOut(auth).then(() => {
                    navigate('/login');
                  });
                } else {
                  console.log(value1.result);
                }
              });
            } else {
              console.log(value.result);
            }

            setloading(false);
          });
          // dispatch(register({ ...userdata })).then(() => console.log(user));
        } else {
          alert.error(<p style={{ textTransform: 'none' }}>Please upload only images</p>);
        }
      } else {
        alert.error(<p style={{ textTransform: 'none' }}>Email address provided is invalid</p>);
      }
    }
  }

  return (
      <>
      <Spinner show={loading || isLoading} />
        <Container>
          <HeaderSection SingleRoute={false} Page="Pages" CurrentPage="Sign Up" />
          <SignUpCon>
            <Wrapper>
              <LeftCon>
                <LeftConHeader>
                  <LeftConText m="10px 0 " fz="40px" fw={600}>
                    SIGN UP
                  </LeftConText>
                  <LeftConText m="10px 0 " cl="grey">
                    We're happy you're here!
                  </LeftConText>
                </LeftConHeader>
                <SignUpMethod>
                  <LogInButton className="LogInHover" fw={400}>
                    <IconContainer cl="#3b5998">
                      <FacebookRounded />
                    </IconContainer>
                    Log in with Facebook
                  </LogInButton>
                  <LogInButton className="LogInHover" fw={400}>
                    <IconContainer cl="#db4a39">
                      <Google sx={{ fontSize: "15px" }} />
                    </IconContainer>
                    Log in with Google
                  </LogInButton>
                </SignUpMethod>
                <OtherMethods>
                  <Hr />
                  <OtherMethodsText m="10px">Or</OtherMethodsText>
                  <Hr />
                </OtherMethods>
                <SignUpForm method="post">
                  <SignUpInputGroup>
                    <SignUpInputCon>
                      <Person />
                      <SignUpInput placeholder="Username" type="text" name="username" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                    <SignUpInputCon>
                      <Person />
                      <SignUpInput placeholder="Full Name" type="text" name="name" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                  </SignUpInputGroup>
                  <SignUpInputGroup>
                    <SignUpInputCon>
                      <MailOutlined />
                      <SignUpInput placeholder="Email Address" type="email" name="email" validate onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                    <SignUpInputCon>
                      <Room />
                      <SignUpInput placeholder="Address" type="text" name="address" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                  </SignUpInputGroup>

                  <SignUpInputGroup>
                    <SignUpInputCon>
                      <Lock />
                      <SignUpInput
                        id="SignUp_Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                      />
                      <RemoveRedEye
                        sx={{ cursor: "pointer" }}
                        onClick={ToggleVisibility}
                        id="visiblePassword_Icon"
                      />
                    </SignUpInputCon>
                    <SignUpInputCon>
                      <IconTxt>+234</IconTxt>
                      <SignUpInput placeholder="Phone" type="text" name="phone" onChange={(e) => handleChange(e)} />
                    </SignUpInputCon>
                  </SignUpInputGroup>
                  <br />
                  <p>Import ID - Voter's card, NIN, Drivers license</p>
                  <SignUpInputCon>
                    <AttachFile />
                    <SignUpInput placeholder="Voter's card, NIN, Drivers license" type="file" accept="image/*" name="file" onChange={(e) => setdata({ ...userdata, [e.target.name]: e.target.files[0] })} />
                  </SignUpInputCon>
                  <br />
                  <p>Import Utility - Utility Bill</p>
                  <SignUpInputCon>
                    <AttachFile />
                    <SignUpInput placeholder="Utility bill - Light bill, Lawma bill..." type="file" accept="image/*" name="utility" onChange={(e) => setdata({ ...userdata, [e.target.name]: e.target.files[0] })} />
                  </SignUpInputCon>
                  <TermsAndPolicy>
                    <TermsAndPolicyInput type="checkbox" />
                    <TermsAndPolicyTxt>
                      I agree with attic terms and conditions
                    </TermsAndPolicyTxt>
                  </TermsAndPolicy>
                  <SubmitCon>
                    {/* <Submit onClick={(e) => { e.preventDefault(); alert.success(<p style={{textTransform: 'none'}}>registration successfull</p>);}}>Register</Submit> */}
                    <Submit onClick={(e) => handleRegister(e)}>Register</Submit>
                  </SubmitCon>
                </SignUpForm>
              </LeftCon>

              <RightCon>
                <RightConTxtCon>
                  <RightConTxt fz="40px" fw={600}>ALREADY HAVE AN ACCOUNT?</RightConTxt>
                  <RightConTxt>Log in and go to your Dashboard.</RightConTxt>
                  <Link className='login' to='/login'><RightConButton>Log In</RightConButton></Link>
                </RightConTxtCon>
              </RightCon>
            </Wrapper>
          </SignUpCon>
          <Footer />
        </Container>
      </>
  );
}

export default SignUp;
