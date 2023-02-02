import Footer from "../Components/Home/Footer";
import ProductHomeSection from "../Components/Product/ProductHomeSection";
import styled from "styled-components";
import HeaderSection from "../Components/HeaderSection/HeaderSection";
import ProductDSelection from "../Components/Product/ProductDSelection";

const ProductDCon = styled.div`
  width: 100%;
`;
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

function ProductD() {
  return (
    <ProductDCon>
      <Container>
        <HeaderSection SingleRoute={false} Page="Page" CurrentPage="Product Details" />
        <ProductHomeSection />
        <ProductDSelection />
      <Footer/>
      </Container>
    </ProductDCon>
  );
}

export default ProductD;
