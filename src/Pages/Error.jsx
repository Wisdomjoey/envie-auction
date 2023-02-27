import { useSelector } from "react-redux";
import styled from "styled-components";
import Spinner from "../Components/utils/Spinner";
import errorImg from '../images/error.png';
const Container = styled.div`
   width:100vw;
   height:100%;
   display:flex;
   align-items:center;
   justify-content:center';
   flex-direction:column;
   background-color:#EBF2FF;
`
const ErrorImage = styled.div`
display:flex;
align-items:center;
justify-content:center';
width:100%;
`;

const ErrorImg = styled.img`
margin-top:50px;
width:60%;
`

const ErrorMessage = styled.div`
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center';
   margin-top:50px;
`;
const ErrorTxt = styled.h2``;
const A = styled.a`
  color: red;
  text-decoration: none;
  text-underline:none
  cursor: pointer;
  margin: 0 5px;
`;

function Error() {
  const { loading } = useSelector((state) => state.auth);
  window.scrollTo(0, 0);

  return (
    <>
      <Spinner show={loading} />
    <Container>
      <ErrorImage className="flex acc jcc">
        <ErrorImg src={errorImg} />
      </ErrorImage>
      <ErrorMessage className="flex acc jcc">
        <ErrorTxt>
          Return to the
          <A href="/">homepage</A>
        </ErrorTxt>
      </ErrorMessage>
        </Container>
    </>
  );
}

export default Error 