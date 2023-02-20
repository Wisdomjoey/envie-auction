import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div``;
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;

const TableBody = styled.tbody``;

const TableTr = styled.tr`
  text-align: left;
  margin-right: 8px;
  width: 100%;

  &:nth-child(n) {
    border-bottom: 1px solid #e0e0f1;
    // background-color: #e0e0f1;
  }
`;
const TableTh = styled.th`
  margin: 8px;
  padding: 10px;
  text-align: left;
`;
const TableTd = styled.td`
  padding: 10px;
  margin: 8px;
  text-align: left;
`;

function History({ data }) {
  const [auctions, setauctions] = useState([]);
  const [loading, setloading] = useState(true);
  const { userAuctions } = useSelector((state) => state.auction);

  useEffect(() => {
    var list = [];

    for (let index = 0; index < data.length; index++) {
      list.push(userAuctions.filter((item) => item.id === data[index].auctionId)[0]);
    }

    setauctions(list);
    setloading(false);
  }, [data, userAuctions]);

  return (
    <Container>
      <Table>
        <TableBody>
          <TableTr>
            <TableTh>item</TableTh>
            <TableTh>Bid Price</TableTh>
            <TableTh>Highest Bid</TableTh>
            <TableTh>Lowest Bid</TableTh>
            <TableTh>Expires</TableTh>
          </TableTr>
          {data.map((val, ind) => {
            return <TableTr key={ind}>
              <TableTd>{auctions[ind].name}</TableTd>
              <TableTd> ₦{val.amount}</TableTd>
              <TableTd> ₦0</TableTd>
              <TableTd> ₦0</TableTd>
              <TableTd> 0 days</TableTd>
            </TableTr>;
          })}
        </TableBody>
      </Table>
    </Container>
  );
}

export default History;
