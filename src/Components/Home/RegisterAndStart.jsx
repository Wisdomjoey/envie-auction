import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
   width:100%;
   border-radius:5px;
   display:flex;
   align-items:center;
   justify-content:center;
   margin-bottom:30px;
   `
const RegisterAndStartCon = styled.div`
    padding-top:70px;
    padding-bottom:70px;
    background:url("./call-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display:flex;
    align-items:center;
    justify-content:space-between;
	width: calc(100% - 60px);
    max-width: calc(1260px - 60px);
    border-radius:10px;
`

const ContainerLeft = styled.div`
     display:flex;
     align-items:flex-start;
     justify-content:center;
     padding-left:30px;
     flex-direction:column;
     text-align:left;
     flex:1;
     box-sizing:border-box;
     padding-left:80px;
`
const ContainerTxt = styled.div`
   font-size: ${props => props.fz} ;
   font-weight: ${props => props.fw} ;
   margin-top: ${props => props.mt} ;
   color:white;
`

const ContainerRight = styled.div` 
     flex:1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
`
const ButtonCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    margin-bottom:20px;
`
const Button = styled.button`
     
    box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
    background-color:white;
    color: #693FF5;
    padding: 10px 50px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    border:none;
    transition-duration: 1s ;
    
    &:hover{
        transform:scale(1.01);
        color:white;
        background-color:#3F21B3;
    }
`

function RegisterAndStart() {
  return (
    <Container className='RegisterAndStart_Con' imgUrl='./call-bg.png'>
      <RegisterAndStartCon className='RegisterAndStart'>
        <ContainerLeft className='RegisterAndStart_Left'>
          <ContainerTxt className='RegisterAndStart_Txt' fw={700} fz='40px'>Register For Free & Start</ContainerTxt>
          <ContainerTxt className='RegisterAndStart_Txt' mt='5px' fw={700} fz='40px'>Bidding Now</ContainerTxt>
          <ContainerTxt className='RegisterAndStart_Txt' mt='8px' fz='19px' >From cars to diamonds to iPhones, we have it all.</ContainerTxt>
        </ContainerLeft>
        <ContainerRight className='RegisterAndStart_Right'>
          <ButtonCon>
            <Link to='/register'><Button >REGISTER</Button></Link>
          </ButtonCon>
        </ContainerRight>
      </RegisterAndStartCon>
    </Container>
  )
}


export default RegisterAndStart