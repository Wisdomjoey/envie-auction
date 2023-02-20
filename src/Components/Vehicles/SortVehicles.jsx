import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
// import { Vehi_cles } from "../../data";
import Vehicles from "./Vehicles";
import { useSelector } from "react-redux";

const SortVehiclesC = styled.div`
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const SortVehiclesCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid #eee;
  flex: 1;
  height: 110px;
  padding: 0 3vw;
  margin-bottom: 15px;
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
`;
const SortProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;
const SortForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Sortselect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  outline: none;
  border-radius: 16px;
  padding: 8px;
  width: 80px;
`;
const Sortoption = styled.option``;
const P = styled.p`
  font-size: 14px;
  margin-right: 5px;
`;
const SearchProductsCon = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

function SortVehicles() {
  const Show = [
    { label: "All", value: "All" },
    { label: "09", value: "09" },
    { label: "21", value: "21" },
    { label: "30", value: "30" },
    { label: "39", value: "39" },
    { label: "60", value: "60" },
  ];

  const [Value, setValue] = React.useState();
  const [filter, setFilter] = useState([]);
  const { auctions } = useSelector((state) => state.auction);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add default value on page load
  useEffect(() => {
    setFilter(auctions);
  }, [auctions]);

  // Avoid duplicate function calls with useMemo
  var filteredList = React.useMemo(() => filter, [filter]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);

    if (event.target.value === 'All' || parseInt(event.target.value) > auctions.length || event.target.value === '') {
      setFilter(auctions);
    } else {
      var list = [].slice(0, parseInt(event.target.value));

      setFilter(list);
    }
  }
  function handleSearchChange(event) {
    setValue(event.target.value);

    var list = auctions.filter((item) => item.name.includes(event.target.value));

    setFilter(list);
  }

  return (
    <SortVehiclesC className="SortVehicles ">
      <SortVehiclesCon>
        <SortProducts>
          <SortForm>
            <P>Show : </P>
            <Sortselect
              name="show"
              onChange={handleCategoryChange}
            >
              {Show.map((option, ind) => (
                <Sortoption key={ind} value={option.value}>{option.label}</Sortoption>
              ))}
            </Sortselect>
          </SortForm>
        </SortProducts>
        <SearchProductsCon>
          <SearchProducts>
            <Input
              onChange={handleSearchChange}
              placeholder="Item Name"
              type="text"
            />
            <Search className="pointer" />
          </SearchProducts>
        </SearchProductsCon>
      </SortVehiclesCon>
      <Vehicles filteredList={filteredList} />
    </SortVehiclesC>
  );
}

export default SortVehicles;
