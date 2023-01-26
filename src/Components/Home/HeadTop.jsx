import styled from 'styled-components';

const FeaturedTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
const FTopLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const FTopLeftBtn = styled.button`
    background: transparent;
    font-weight: 400;
    font-family: Roboto;
    font-size: 15px;
    padding: 10px 40px;
    border-radius: 30px;
    border: 1px solid #b59ce4;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
        box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
        border: none;
        color: white;
    }
`
const TopHeading = styled.h1`
    font-size: 38px;
    color: #171D1C;
`
const TopSpan = styled.span`
    color: #52606D;
    font-size: 16px;
    margin-top: 13px;
`
const FTopRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export default function HeadTop({ txtHead, txtSpan, showBtn }) {
  return (
    <FeaturedTop className="featured__top" tAlign>
        <FTopLeft className="fTop__left">
            <TopHeading>{ txtHead }</TopHeading>
            <TopSpan>{ txtSpan }</TopSpan>
        </FTopLeft>
        { showBtn && (
            <FTopRight className="fTop__right">
                <FTopLeftBtn className="fTop__leftBtn">View All</FTopLeftBtn>
            </FTopRight>
        ) }
    </FeaturedTop>
  )
}
