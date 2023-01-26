import styled from 'styled-components';
import HeadTop from './HeadTop';
import abs from '../../images/car2.png';
import how1 from '../../images/how1.png';
import how2 from '../../images/how2.png';
import how3 from '../../images/how3.png';

const HowToContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 150px;
`
const HowToAbsImg = styled.img`
    position: absolute;
    width: 350px;
    top: 0;
    right: 0;
`
const HowToCon = styled.div`
    width: 100%;
	width: calc(100% - 60px);
    max-width: calc(1260px - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`
const HowToBottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HowToBottomCon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px;
`
const HowToContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContentImg = styled.img`
    margin-bottom: 50px;
    transform: scale(.9);
`
const ContentHeading = styled.h1`
    color: #171D1C;
    margin-bottom: 20px;
`
const ContentSpan = styled.span`
    color: #52606D;
    font-size: 16px;
`

export default function HowToSection() {
  return (
    <HowToContainer className="how__toContainer">
        <HowToCon className="how__toCon">
            <HeadTop txtHead='How It Works' txtSpan='Three Easy Steps to Follow' />
            <HowToBottom className="how__toBottom">
                <HowToBottomCon className="how__toBottomCon">
                    <HowToContent className="how__toContent">
                        <ContentImg className="content__img" src={ how1 } />
                        <ContentHeading className="content__heading">Sign Up</ContentHeading>
                        <ContentSpan className="content__span">No Credit Card Required</ContentSpan>
                    </HowToContent>
                    <HowToContent className="how__toContent">
                        <ContentImg className="content__img" src={ how2 } />
                        <ContentHeading className="content__heading">Bid</ContentHeading>
                        <ContentSpan className="content__span">Bidding is Free Only Pay If You Win</ContentSpan>
                    </HowToContent>
                    <HowToContent className="how__toContent">
                        <ContentImg className="content__img" src={ how3 } />
                        <ContentHeading className="content__heading">Win</ContentHeading>
                        <ContentSpan className="content__span">Fun - Excoitement - Great Deals</ContentSpan>
                    </HowToContent>
                </HowToBottomCon>
            </HowToBottom>
        </HowToCon>
        <HowToAbsImg className="how__toAbsImg" src={ abs } />
    </HowToContainer>
  )
}
