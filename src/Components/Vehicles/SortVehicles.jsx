import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import { Gavel, Search, ShoppingBagRounded } from "@mui/icons-material";
// import { Vehi_cles } from "../../data";
import axios from "axios";
import Vehi_cles from "./Vehicles";
import { Vehicles } from "../../data";

const Sort_Vehicles = styled.div`
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const SortVehicles_Con = styled.div`
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
const Sort_Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Sort_select = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  const Sorts = [
    { label: "All", value: "All" },
    { label: "Bike", value: "Bike" },
    { label: "Car", value: "Car" },
    { label: "Suv", value: "Suv" },
    { label: "Truck", value: "Truck" },
  ];
  const Show = [
    { label: "09", value: "09" },
    { label: "21", value: "21" },
    { label: "30", value: "30" },
    { label: "39", value: "39" },
    { label: "60", value: "60" },
  ];

  const [Value, setValue] = React.useState();
  const [filter, setFilter] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add default value on page load
  useEffect(() => {
    setFilter(Vehicles);
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
  var filteredList = React.useMemo(getFilteredList, [selectedCategory, filter]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setValue(event.target.value);
  }

  return (
    <Sort_Vehicles className="Sort_Vehicles ">
      <SortVehicles_Con>
        <SortProducts>
          <Sort_Form>
            <P>Sort By : </P>
            <Sort_select name="sort by" onChange={handleCategoryChange}>
              {Sorts.map((option) => (
                <Sort_option value={option.value}>{option.label}</Sort_option>
              ))}
            </Sort_select>
          </Sort_Form>
          <Sort_Form>
            <P>Show : </P>
            <Sort_select
              name="show"
              onChange={handleCategoryChange}
            >
              {Show.map((option) => (
                <Sort_option value={option.value}>{option.label}</Sort_option>
              ))}
            </Sort_select>
          </Sort_Form>
        </SortProducts>
        <SearchProducts_Con>
          <SearchProducts>
            <Input
              onChange={handleSearchChange}
              placeholder="Item Name"
              type="text"
            />
            <Search className="pointer" />
          </SearchProducts>
        </SearchProducts_Con>
      </SortVehicles_Con>
      <Vehi_cles filteredList={filteredList} />
    </Sort_Vehicles>
  );
}

export default SortVehicles;
