import Footer from "../Components/Home/Footer";
import ProductHomeSection from "../Components/Product/ProductHomeSection";
import styled from "styled-components";
import img from './hero-bg.png';
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import ProductDSelection from "../Components/Product/ProductDSelection";
import { useSelector } from "react-redux";
import Spinner from "../Components/utils/Spinner";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

const ProductDCon = styled.div`
  width: 100%;
`;
const Container = styled.div`
  // background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding-top: 85px;
  margin-bottom: 500px;
  height: 90vh;
`;

function ProductD() {
  const { loading } = useSelector((state) => state.auth);
  const {id} = useParams();
  const [data, setdata] = useState({});
  const { auctions } = useSelector((state) => state.auction);
  const navigate = useNavigate();
  const [isLoading, setloading] = useState(true);
  window.scrollTo(0, 0);

  useEffect(() => {
    const list = auctions.filter((item) => item.id === id);

    if (list.length === 0) {
      navigate('/404')
    } else {
      setdata(list[0]);
    }
    setloading(false);
  }, [auctions, id]);

  return (
    <>
      {loading || isLoading ? <Spinner show={loading || isLoading} /> :
    <ProductDCon>
      <Container style={{background: `url(${img})`}}>
        <HeaderSection SingleRoute={false} Page="Page" CurrentPage="Auction Details" />
        <ProductHomeSection data={data} />
        <ProductDSelection data={data} />
      <Footer/>
      </Container>
        </ProductDCon>
}
    </>
  );
}

export default ProductD;
