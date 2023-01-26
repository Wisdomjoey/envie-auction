import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
   
`
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;

const Table_Body = styled.tbody`
  
`

const Table_Tr = styled.tr`
  text-align: left;
  margin-right: 8px;
  width: 100%;

  &:nth-child(n) {
    border-bottom: 1px solid #e0e0f1;
    // background-color: #e0e0f1;
  }
`;
const Table_Th = styled.th`
  margin: 8px;
  padding: 10px;
  text-align: left;
`;
const Table_Td = styled.td`
  padding: 10px;
  margin: 8px;
  text-align: left;
`;

function CurrentBids() {
  return (
    <Container>
      <Table>
        <Table_Body>
          <Table_Tr>
            <Table_Th>item</Table_Th>
            <Table_Th>Bid Price</Table_Th>
            <Table_Th>Highest Bid</Table_Th>
            <Table_Th>Lowest Bid</Table_Th>
            <Table_Th>Expires</Table_Th>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
          <Table_Tr>
            <Table_Td>2018 Hyundai Sonata</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
            <Table_Td> $1,775.00</Table_Td>
          </Table_Tr>
        </Table_Body>
      </Table>
    </Container>
  );
}

export default CurrentBids