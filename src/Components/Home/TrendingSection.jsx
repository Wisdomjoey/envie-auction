import styled from 'styled-components';
import HeadTop from './HeadTop';
// import tImg1 from '../../images/auction-1.png';
// import tImg2 from '../../images/auction-2.png';
// import tImg3 from '../../images/auction-3.png';
// import tImg4 from '../../images/auction-4.png';
import TrendingCard from './TrendingCard';
// import { TrendingItems } from '../../data';

const TrendingContainer = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TrendingCon = styled.div`
    width: 100%;
    max-width: 1260px;
  margin: 0px 30px;
`
const Trending = styled.div`
  margin: 0px 30px;
`
const TrendingProducts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    gap: 30px;
`

export default function TrendingSection() {
  return (
    <TrendingContainer className='trending__container'>
      <TrendingCon className='trending__con'>
        <Trending>
          <HeadTop className='head__top' txtHead='Trending Items' txtSpan='Bid on 1,000’s of vehicles from more than 25 countries' />
          <TrendingProducts className='trending__products'>
            <TrendingCard />
          </TrendingProducts>
        </Trending>
      </TrendingCon>
    </TrendingContainer>
  )
}
