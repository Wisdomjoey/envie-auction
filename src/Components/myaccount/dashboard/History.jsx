import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setbidwon } from "../../../redux/reducers/bidSlice";
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
  const [auction, setauctions] = useState([]);
  const [loading, setloading] = useState(true);
  const { auctions } = useSelector((state) => state.auction);
  const dispatch = useDispatch();

  useEffect(() => {
    var list = [];

    for (let index = 0; index < data.length; index++) {
      const auc = auctions.filter((item) => item.id === data[index].auctionId && item.bidEndTime - Date.now() <= 0)[0]

      if (auc !== undefined) {
        list.push(auc);
      }
    }

    setauctions(list);
    setloading(false);
  }, [data, auctions]);

  return !loading && (
    <Container>
      <Table>
        <TableBody>
          <TableTr>
            <TableTh>Item</TableTh>
            <TableTh>Bid Price</TableTh>
            <TableTh>Highest Bid</TableTh>
            <TableTh>Lowest Bid</TableTh>
            <TableTh>Status</TableTh>
          </TableTr>
          {auction.length !== 0 && data.map((val, ind) => {
            var amtH = 0;

            for (let index = 0; index < auction[ind].bids.length; index++) {
              if (auction[ind].bids[index].amount > amtH) {
                amtH = auction[ind].bids[index].amount;
              }
            }
            var amtL = amtH;

            for (let index = 0; index < auction[ind].bids.length; index++) {
              if (auction[ind].bids[index].amount < amtL) {
                amtL = auction[ind].bids[index].amount;
              }
            }

            if (val.amount >= amtH) dispatch(setbidwon())

            return <TableTr key={ind}>
              <TableTd>{auction[ind].name}</TableTd>
              <TableTd>₦{val.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
              <TableTd>₦{amtH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
              <TableTd>₦{amtL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
              <TableTd>{val.amount < amtH ? 'Lost' : 'Won'}</TableTd>
            </TableTr>;
          })}
        </TableBody>
      </Table>
    </Container>
  );
}

export default History;
