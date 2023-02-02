import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;
const HeaderTxt = styled.h1``;
const ProductTable = styled.div`
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
const TbodyTr = styled.div`
  display: flex;
  align-items: center;
  // flex-wrap: wrap;
  // flex-direction:column;
  justify-content: center;
`;
const Tbody = styled.tbody`
  // display: flex;
  width: 100%;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Tr = styled.tr`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;
`;
const Th = styled.th`
  font-weight: 400;
  margin-left: 5px;
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Td = styled.td`
  flex: 1;

  &:before {
    content: " :";
    margin-right: 10px;
  }
`;

const ProductInfoCon = styled.div``;
const ProductInfo = styled.div`
  margin:20px 0;
`;
const InfoHeaderText = styled.h2`
   font-size:23px;
   font-weight:500;
`;
const InfoText = styled.p`
  margin:20px 0;
   color:grey;
`;

function ProductDescription() {
  return (
    <Container>
      <Header>
        <HeaderTxt>2012 Ford Escape Hybrid (Brooklyn, NY 11214)</HeaderTxt>
      </Header>
      <ProductTable>
        <Table className="product-info-Table">
          <Tbody>
            <TbodyTr>
              <Tr>
                <Th>Condition </Th>
                <Td>New</Td>
              </Tr>
              <Tr>
                <Th>Mileage </Th>
                <Td>15,000 miles</Td>
              </Tr>
            </TbodyTr>
            <TbodyTr>
              <Tr className="ev">
                <Th>Year</Th>
                <Td>09-2017</Td>
              </Tr>
              <Tr className="ev">
                <Th>Engine </Th>
                <Td>I-4 1,5 l</Td>
              </Tr>
            </TbodyTr>
            <TbodyTr>
              <Tr>
                <Th>Fuel </Th>
                <Td>Regular</Td>
              </Tr>
              <Tr>
                <Th>Transmission </Th>
                <Td>Automatic</Td>
              </Tr>
            </TbodyTr>
            <TbodyTr>
              <Tr className="ev">
                <Th>Color </Th>
                <Td>Blue</Td>
              </Tr>
              <Tr className="ev">
                <Th>Doors </Th>
                <Td>5</Td>
              </Tr>
            </TbodyTr>
          </Tbody>
        </Table>
      </ProductTable>
      <ProductInfoCon>
        <ProductInfo>
          <InfoHeaderText>
            NYC Fleet / DCAS units may be located at either of two locations:
          </InfoHeaderText>
          <InfoText>Brooklyn, NY (1908 Shore Parkway)</InfoText>
          <InfoText>Medford, NY (66 Peconic Ave)</InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>This unit is located at:</InfoHeaderText>
          <InfoText>Kenben Industries Ltd.</InfoText>
          <InfoText>1908 Shore Parkway</InfoText>
          <InfoText>Brooklyn, NY 11214</InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>
            Acceptance of condition - buyer inspection/preview
          </InfoHeaderText>
          <InfoText>
            Vehicles and equipment often display significant wear and tear.
            Assets are sold AS IS with no warranty, express or implied, and we
            highly recommend previewing them before bidding. The preview period
            is the only opportunity to inspect an asset to verify condition and
            suitability. No refunds, adjustments or returns will be entertained
          </InfoText>
          <InfoText>
            Vehicle preview inspections of the vehicle can be done at the below
            location on Monday and Tuesday from 10am - 2pm. See Preview Rules
            Here.
          </InfoText>
          <InfoText>Kenben Industries Ltd.</InfoText>
          <InfoText>1908 Shore Parkway</InfoText>
          <InfoText>Brooklyn, NY 11214</InfoText>
          <InfoText>
            BUYER is responsible for all storage fees at time of pick-up. See
            above under IMPORTANT PICK-UP TIMES for specific requirements for
            this asset, but generally assets must be picked up within 2 business
            days of payment otherwise additional storage fees will be applied.
          </InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>Legal Notice</InfoHeaderText>
          <InfoText>
            Vehicles may not be driven off the lot except with a dealer plate
            affixed. By law, vehicles are not permitted to be parked on or to
            drive on the streets of New York without registration and plates
            registered to the vehicle. If the buyer cannot obtain the required
            registration and plates prior to pick up, they should have the
            vehicle towed at their own expense. The buyer should have the
            vehicle towed at their own expense
          </InfoText>
          <InfoText>Condition: Untested - Sold As-Is</InfoText>
          <InfoText>
            Employees of Sbidu, its subcontractors and affiliated companies,
            employees of the NYC Government and those bidding on behalf of
            PropertyRoom.com, its subcontractors and affiliated companies and
            employees of the NYC Government are not permitted to bid on or
            purchase NYC Fleet/DCAS assets
          </InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>Condition</InfoHeaderText>
          <InfoText>
            This ASSET is being listed on behalf of a law enforcement agency or
            other partner ("SELLER") by PropertyRoom.com on a Sold AS IS, WHERE
            IS, WITH ALL FAULTS basis, with no representation or warranty from
            PropertyRoom.com or SELLER. In many cases, the car, boat, truck,
            motorcycle, aircraft, mowers/tractors, etc. ("ASSET") sold on
            PropertyRoom.com comes from seizure or forfeiture, and the SELLER
            typically does not possess use-based knowledge of the ASSET.
            Further, PropertyRoom.com does not physically inspect the ASSET and
            cannot attest to actual working conditions. PropertyRoom.com and
            SELLER gather information about the ASSET from authoritative
            sources; still, errors may appear from time to time in the listing.
            PropertyRoom.com cautions any website user, shopper, bidder, etc.
            ("BUYER") to attempt to confirm, with us, information material to a
            bidding/purchasing decision.
          </InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>Bidding</InfoHeaderText>
          <InfoText>
            At this time Sbidu only accepts bidders from the United States,
            Canada and Mexico on Vehicles and Heavy Industrial Equipment. The
            Bid Now button will appear on auctions where you are qualified to
            place a bid
          </InfoText>
        </ProductInfo>
        <ProductInfo>
          <InfoHeaderText>Buyer Responsibility</InfoHeaderText>
          <InfoText>
            The BUYER will receive an email notification from PropertyRoom.com
            following the close of an auction. After fraud verification and
            payment settlement, we will email the BUYER instructions for
            retrieving the ASSET from the Will-Call Location listed above.
          </InfoText>
          <InfoText>
            All applicable shipping, logistics, transportation, customs, fees,
            taxes, export/import activities and all associated costs are the
            sole responsibility of the BUYER. No shipping, customs, export or
            import assistance is available from Sbidu
          </InfoText>
          <InfoText>
            When applicable for a given ASSET, BUYER bears responsibility for
            determining motor vehicle registration requirements in the
            applicable jurisdiction as well as costs, including any fees,
            registration fees, taxes, etc., owed as a result of BUYER
            registering an ASSET; for example, BUYER bears sole responsibility
            for all title/registration/smog and other such fees
          </InfoText>
          <InfoText>
            BUYER is responsible for all storage fees at time of pick-up. See
            above under IMPORTANT PICK-UP TIMES for specific requirements for
            this asset, but generally assets must be picked up within 2 business
            days of payment otherwise additional storage fees will be applied
          </InfoText>
        </ProductInfo>
      </ProductInfoCon>
    </Container>
  );
}

export default ProductDescription;
