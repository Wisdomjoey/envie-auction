import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
   
`
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;

const TableBody = styled.tbody`
  
`

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

    a {
        text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
        color: #ee4730;
    }
    }
`;

function CurrentBids({ data }) {
  const [auctions1, setauctions] = useState([]);
  const [loading, setloading] = useState(true);
  const { auctions } = useSelector((state) => state.auction);

  useEffect(() => {
    var list = [];

    for (let index = 0; index < data.length; index++) {
      const auc = auctions.filter((item) => item.id === data[index].auctionId && item.bidEndTime - Date.now() > 0)[0]
      
      if(auc !== undefined) {
        list.push(auc);
      }
    }

    setauctions(list);
    setloading(false);
  }, [data, auctions]);

  return (
    <>
      {!loading &&
        <Container>
          <Table>
            <TableBody>
              <TableTr>
                <TableTh>Item</TableTh>
                <TableTh>Bid Price</TableTh>
                <TableTh>Highest Bid</TableTh>
                <TableTh>Lowest Bid</TableTh>
                <TableTh>Expires</TableTh>
              </TableTr>
              {auctions1.length !== 0 && data.map((val, ind) => {
                var amtH = 0;
                var date = '';

                for (let index = 0; index < auctions1[ind].bids.length; index++) {
                  if (auctions1[ind].bids[index].amount > amtH) {
                    amtH = auctions1[ind].bids[index].amount;
                  }
                }
                var amtL = amtH;

                for (let index = 0; index < auctions1[ind].bids.length; index++) {
                  if (auctions1[ind].bids[index].amount < amtL) {
                    amtL = auctions1[ind].bids[index].amount;
                  }
                }

                const time = auctions1[ind].bidEndTime - Date.now();

                const day = Math.floor(time / (1000 * 60 * 60 * 24));
                const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
                const minute = Math.floor((time / 1000 / 60) % 60);
                const second = Math.floor((time / 1000) % 60);

                if (day > 0) {
                  date = `${day} days`;
                } else if (hour > 0) {
                  date = `${hour} hours`;
                } else if (minute > 0) {
                  date = `${minute} minutes`;
                } else if (second > 0) {
                  date = `${second} seconds`;
                } else {
                  date = '0';
                }

                return <TableTr key={ind}>
                  <TableTd>
                    <Link to={`/item-details/${auctions1[ind].id}`}>{auctions1[ind].name}</Link>
                  </TableTd>
                  <TableTd> ₦{val.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
                  <TableTd> ₦{amtH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
                  <TableTd> ₦{amtL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableTd>
                  <TableTd>{date}</TableTd>
                </TableTr>;
              })}
            </TableBody>
          </Table>
        </Container>
      }
    </>
  );
}

export default CurrentBids