import { Gavel, Search, ShoppingBagRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { My__Favorites } from "../../data";
const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  gap: 30px;
`;
const WinningBids_Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
`;

const WinningBids_Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-height: 200px;
`;

const WinningBids_HeaderTxtCon = styled.div`
  //   flex: 1;
  white-space: nowrap;
`;

const WinningBids_HeaderTxt = styled.p`
  white-space: nowrap;
  font-size: 25px;
  font-weight: 600;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sort_Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  //   border: 1px solid grey;
  width: 90%;
  flex: 1;
  height: 110px;
  padding: 0 3vw;
`;
const Sort_select = styled.select`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #eee;
  outline: none;
  border-radius: 16px;
  padding: 8px;
  width: 80px;
`;
const Sort_option = styled.option``;
const P = styled.p`
  font-size: 14px;
  margin-right: 5px;
`;
const SearchProducts_Con = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const SearchProducts = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // flex: 1;
  height: 25px;
  border: 1px solid #eee;
  border-radius: 16px;
  color: grey;
  padding: 8px;
`;
const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  width: 100%;
`;

const MyFavorites__Products = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  gap: 30px;
  background-color:blue;
`;

const FBottomCard = styled.div`
  flex: 1;
  height: 570px;
  border-radius: 10px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  background: white;
  padding: 13px;
  display: flex;
  flex-direction: column;
`;
const CardTop = styled.div`
  height: 275px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const CardTopImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const CardTopIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
  box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
`;
const CardBottom = styled.div`
  height: 275px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BottomTop = styled.div`
  width: 100%;
  padding: 15px 0;
`;
const BottomSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #171d1c;
`;
const BottomMiddle = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-top: 3px dotted #deddf5;
  border-bottom: 3px dotted #deddf5;
`;
const Middle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: ${(props) => props.w};
    left: 0;
    height: 100%;
    top: 15px;
    bottom: 15px;
    background: #bfbee8;
  }
`;
const MiddleCon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const MiddleText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.color};
`;
const MiddlePrice = styled.span`
  font-size: 22px;
  color: #171d1c;
`;
const MiddleLeft = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const BottomBottom = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
`;
const BBTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const BBTopSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 19px;
`;
const BBTopLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
`;
const BBTopLeftCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;
const BBTopRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-left: 1px solid #bfbee8;
  flex: 1;
`;
const BBTopRightCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;
const BBbottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;
const BBbottomBtn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 70px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
`;

function MyFavorites() {


      const handleChange = (event) => {
        setValue(event.target.value);
      };

            const [Value, setValue] = useState("All");
            const [filter, setFilter] = useState([]);

            const [selectedCategory, setSelectedCategory] = useState("All");

            // Add default value on page load
            useEffect(() => {
              setFilter(My__Favorites);
            }, []);

            // Function to get filtered list
            function getFilteredList() {
              // Avoid filter when selectedCategory is null
              if (selectedCategory === "All") {
                return filter;
              }
              return filter.filter((item) => item.Cat === selectedCategory);
            }

            // Avoid duplicate function calls with useMemo
            var filteredList = React.useMemo(getFilteredList, [
              selectedCategory,
              filter,
            ]);

            function handleCategoryChange(event) {
              setSelectedCategory(event.target.value);
            }
            function handleSearchChange(event) {
              setValue(event.target.value);
            }

            const Sorts = [
              { label: "All", value: "All" },
              { label: "Truck", value: "Truck" },
              { label: "Suv", value: "Suv" },
            ];


  return (
    <Container>
      <WinningBids_Wrapper>
        <WinningBids_Header>
          <WinningBids_HeaderTxtCon>
            <WinningBids_HeaderTxt>My Favorites</WinningBids_HeaderTxt>
          </WinningBids_HeaderTxtCon>
        </WinningBids_Header>
        <SortContainer>
          <SearchProducts_Con>
            <SearchProducts>
              <Input placeholder="Item Name" type="text" />
              <Search className="pointer" />
            </SearchProducts>
          </SearchProducts_Con>
          <Sort_Form>
            <P>Sort By : </P>
            <Sort_select  onChange={handleCategoryChange}>
              {Sorts.map((option) => (
                <Sort_option value={option.value}>{option.label}</Sort_option>
              ))}
            </Sort_select>
          </Sort_Form>
        </SortContainer>
      </WinningBids_Wrapper>
      <MyFavorites__Products>
        {filteredList.map((item) => (
          <FBottomCard className="fBottom__card">
            <CardTop className="card__top">
              <CardTopImg className="card__topImg" src={item.img} />
              <CardTopIcon className="card__topIcon">
                <Gavel sx={{ fontSize: 20, color: "white" }} />
              </CardTopIcon>
            </CardTop>
            <CardBottom className="card__bottom">
              <BottomTop className="bottom__top">
                <BottomSpan>{item.Name}</BottomSpan>
              </BottomTop>
              <BottomMiddle className="bottom__middle">
                <Middle w="1px" className="middle">
                  <MiddleCon className="middle__con">
                    <MiddleLeft className="middle__left">
                      <Gavel sx={{ color: "#43b055", fontSize: 40 }} />
                    </MiddleLeft>
                    <MiddleRight className="middle__right">
                      <MiddleText color="#43b055">Current Bid</MiddleText>
                      <MiddlePrice>${item.CurrentBid}</MiddlePrice>
                    </MiddleRight>
                  </MiddleCon>
                </Middle>
                <Middle className="middle">
                  <MiddleCon className="middle__con">
                    <MiddleLeft className="middle__left">
                      <ShoppingBagRounded
                        sx={{ color: "#ee4730", fontSize: 40 }}
                      />
                    </MiddleLeft>
                    <MiddleRight className="middle__right">
                      <MiddleText color="#ee4730">Buy Now</MiddleText>
                      <MiddlePrice>${item.CurrentPrice}</MiddlePrice>
                    </MiddleRight>
                  </MiddleCon>
                </Middle>
              </BottomMiddle>
              <BottomBottom className="bottom__bottom">
                <BBTop className="bb__top">
                  <BBTopLeft className="bb__topLeft">
                    <BBTopLeftCon className="bb__topLeftCon">
                      <BBTopSpan className="bb__topSpan" color="#f5317f">
                        1d : 12h : 12m : 60s
                      </BBTopSpan>
                    </BBTopLeftCon>
                  </BBTopLeft>
                  <BBTopRight className="bb_topRight">
                    <BBTopRightCon className="bb__topRight">
                      <BBTopSpan className="bb__topSpan" color="#43b055">
                        {item.Bids} Bids
                      </BBTopSpan>
                    </BBTopRightCon>
                  </BBTopRight>
                </BBTop>
                <BBbottom className="bb__bottom">
                  <BBbottomBtn className="bb__bottomBtn">
                    Submit A Bid
                  </BBbottomBtn>
                </BBbottom>
              </BottomBottom>
            </CardBottom>
          </FBottomCard>
        ))}
      </MyFavorites__Products>
    </Container>
  );
}

export default MyFavorites