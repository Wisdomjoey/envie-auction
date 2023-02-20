import { Input } from '@mui/material';
import styled from 'styled-components';
import footerTopShape from '../../images/footer-top-shape.png';
import newsletter from '../../images/newslater.png'


const NewsLetterC = styled.div`
   width: 100%;
`
const Container = styled.div`
   width: 100%;
`
const BGImgContainer = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
   width: 100%;
`

const ContainerImg = styled.img`
    width:100%;
    height:400px;
`
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    `
const NewsLetterCon = styled.div`
    height:300px;
    box-shadow: 0px 9px 60px 0px rgb(22 26 57 / 96%);
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80%;
    margin-top:-300px;
    border-radius:10px;
`

const LeftContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:3;
`

const LeftContainerIMG = styled.img`
   width:70%;
`

const RightContainer = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   flex-direction:column;
   flex:3;
`

const NewsLetterTxtCon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const NewsLetterTxt = styled.div`
   font-size:${props => props.fz};
   font-weight:${props => props.fw};
   color:${props => props.color};
   margin-top:${props => props.mt};
   margin-bottom:${props => props.mb};
`
const InputCon = styled.div`
   padding-left:10px;
   width:90%;
   border:1px solid #eee ;
   display:flex;
   align-items:center;
   justify-content:space-between;
   border-radius:30px;
`
const INPUT = styled.input`
   border:none;
   height:100%;
   outline:none;
   width:100%;
`
const ButtonCon = styled.div`
   
`
const Button = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
   box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
   border-radius:16px;
   border: none;
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
`

function NewsLetter() {
    return (
        <NewsLetterC>
            <Container>
                <BGImgContainer>
                    <ContainerImg src={footerTopShape} alt='footerTopShape' />
                </BGImgContainer>
                <Wrapper>
                    <NewsLetterCon>
                        <LeftContainer>
                            <LeftContainerIMG src={newsletter} />
                        </LeftContainer>
                        <RightContainer>
                            <NewsLetterTxtCon>
                                <NewsLetterTxt fz='25px' fw={400} color='#693FF5'>Subscribe to Attic</NewsLetterTxt>
                            </NewsLetterTxtCon>
                            <NewsLetterTxtCon>
                                <NewsLetterTxt fz='40px' fw={700} mt='15px' mb='15px'>To Get Exclusive Benefits</NewsLetterTxt>
                            </NewsLetterTxtCon>
                            <InputCon>
                                <INPUT placeholder='Enter Your Email' />
                                <Button>SUBSCRIBE</Button>
                            </InputCon>
                        </RightContainer>
                    </NewsLetterCon>
                </Wrapper>
            </Container>
        </NewsLetterC>
    )
}

export default NewsLetter