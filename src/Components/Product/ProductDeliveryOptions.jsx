import styled from "styled-components";

const Container = styled.div`
  width:100%;
`;

const Text = styled.h2`
   font-weight:500;
   margin-bottom:15px ;
`

const TableCon = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
`;
const Table = styled.table`
  flex-wrap: wrap;
  width: 70%;
  border: 1px solid #eaeaea;
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Tbody = styled.tbody`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Tr = styled.tr`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;

  &:nth-child(even) {
     background-color: #ebf2ff; 
  }
`;
const Th = styled.th`
  font-weight: 400;
  margin-left: 5px;
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
`;
const Td = styled.td`
  flex: 1;
  white-space:nowrap;
  &:before {
    content: " :";
    margin-right: 10px;
  }
`;

const Notes = styled.div`
  margin:30px 0;  
`
const Notes_HeaderTxt = styled.h2`
font-weight:500;
margin-bottom:10px;
`
const Notes_Txt = styled.p`
color:grey;
`


function ProductDeliveryOptions() {
  return (
    <Container>
      <Text>Shipping</Text>
      <TableCon>
        <Table className="product-info-Table">
          <Tbody>
            <Tr>
              <Th>Available Delivery Methods </Th>
              <Td>Price</Td>
            </Tr>
            <Tr className="ev">
              <Th>Customer Pick-up (within 10 days) </Th>
              <Td>$0.00</Td>
            </Tr>
            <Tr className="ev">
              <Th>Standard Shipping (5-7 business days) </Th>
              <Td>Not Applicable</Td>
            </Tr>
            <Tr>
              <Th>Expedited Shipping (2-4 business days) </Th>
              <Td>Not Applicable</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableCon>
      <Notes>
        <Notes_HeaderTxt>Notes</Notes_HeaderTxt>
        <Notes_Txt>
          Please carefully review our shipping and returns policy before
          committing to a bid. From time to time, and at its sole discretion,
          Sbidu may change the prevailing fee structure for shipping and
          handling.
        </Notes_Txt>
      </Notes>
    </Container>
  );
}

export default ProductDeliveryOptions;
