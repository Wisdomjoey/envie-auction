import styled from "styled-components";
import Cli from "../../images/01 (3).png"

const Container = styled.div`
width:100%;
`;


const BidHistoryCon = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  background-color: #ebf2ff;
`;
const BidHistoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;
const BidHistoryImg = styled.img`
   border-radius:50%;
   height:50px;
   width:50px;
`
const BidHistoryTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

const Clients_BidHistory = styled.div`
width:100%;
`;
const Clients = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 0;
`;
const Clients_Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex:1;
`;
const Clients_BidDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right:30px;
  flex: 1;
`;
const Clients_BidDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left:40px;
  flex: 1;
`;
const Clients_Referrals = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
`;
const Button = styled.button`
  border: 1px solid grey;
  color: grey;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  background-color: #ebf2ff;

  &:hover {
    background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
    box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  }
`;

function ProductBidHistory() {
  return (
    <Container>
      <BidHistoryCon>
        <BidHistoryHeader>
          <BidHistoryTxt fz="20px">Bidder</BidHistoryTxt>
          <BidHistoryTxt fz="20px">Date</BidHistoryTxt>
          <BidHistoryTxt fz="20px">Time</BidHistoryTxt>
          <BidHistoryTxt fz="20px">Unit Price</BidHistoryTxt>
        </BidHistoryHeader>
        <Clients_BidHistory>
          <Clients>
            <Clients_Details>
              <BidHistoryImg src={Cli} />
              <BidHistoryTxt>Moses Watts</BidHistoryTxt>
            </Clients_Details>
            <Clients_BidDetails cl="black" fz="15px">
              <BidHistoryTxt>06/16/2021 </BidHistoryTxt>
            </Clients_BidDetails>
            <Clients_BidDate cl="black" fz="15px">
              <BidHistoryTxt>02:45:25 PM </BidHistoryTxt>
            </Clients_BidDate>
            <Clients_Referrals cl="black" fz="15px">
              <BidHistoryTxt>$900.00</BidHistoryTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Details>
              <BidHistoryImg src={Cli} />
              <BidHistoryTxt>Moses Watts</BidHistoryTxt>
            </Clients_Details>
            <Clients_BidDetails cl="black" fz="15px">
              <BidHistoryTxt>06/16/2021 </BidHistoryTxt>
            </Clients_BidDetails>
            <Clients_BidDate cl="black" fz="15px">
              <BidHistoryTxt>02:45:25 PM </BidHistoryTxt>
            </Clients_BidDate>
            <Clients_Referrals cl="black" fz="15px">
              <BidHistoryTxt>$900.00</BidHistoryTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Details>
              <BidHistoryImg src={Cli} />
              <BidHistoryTxt>Moses Watts</BidHistoryTxt>
            </Clients_Details>
            <Clients_BidDetails cl="black" fz="15px">
              <BidHistoryTxt>06/16/2021 </BidHistoryTxt>
            </Clients_BidDetails>
            <Clients_BidDate cl="black" fz="15px">
              <BidHistoryTxt>02:45:25 PM </BidHistoryTxt>
            </Clients_BidDate>
            <Clients_Referrals cl="black" fz="15px">
              <BidHistoryTxt>$900.00</BidHistoryTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Details>
              <BidHistoryImg src={Cli} />
              <BidHistoryTxt>Moses Watts</BidHistoryTxt>
            </Clients_Details>
            <Clients_BidDetails cl="black" fz="15px">
              <BidHistoryTxt>06/16/2021 </BidHistoryTxt>
            </Clients_BidDetails>
            <Clients_BidDate cl="black" fz="15px">
              <BidHistoryTxt>02:45:25 PM </BidHistoryTxt>
            </Clients_BidDate>
            <Clients_Referrals cl="black" fz="15px">
              <BidHistoryTxt>$900.00</BidHistoryTxt>
            </Clients_Referrals>
          </Clients>
          <Clients>
            <Clients_Details>
              <BidHistoryImg src={Cli} />
              <BidHistoryTxt>Moses Watts</BidHistoryTxt>
            </Clients_Details>
            <Clients_BidDetails cl="black" fz="15px">
              <BidHistoryTxt>06/16/2021 </BidHistoryTxt>
            </Clients_BidDetails>
            <Clients_BidDate cl="black" fz="15px">
              <BidHistoryTxt>02:45:25 PM </BidHistoryTxt>
            </Clients_BidDate>
            <Clients_Referrals cl="black" fz="15px">
              <BidHistoryTxt>$900.00</BidHistoryTxt>
            </Clients_Referrals>
          </Clients>
                 </Clients_BidHistory>
                 <ButtonCon>
        <Button>LOAD MORE</Button>
                 </ButtonCon>
      </BidHistoryCon>
    </Container>
  );
}

export default ProductBidHistory;
