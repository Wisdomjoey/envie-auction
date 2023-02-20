import { ArrowForwardRounded } from "@mui/icons-material"
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeaturedAuction from './FeaturedAuction'


const Container = styled.div`
     padding: 0 3vw ;
     box-sizing:border-box;
     width:100%;
     height:100%;
`
const RouteLinksCon = styled.div`
     width:100;
     display:flex;
     align-items:center;
     justify-content:center;
     padding-top:30px;
     position: relative;
     top:150px;
`
const RouteLinks = styled.div`
     width:100%;
     display:flex;
     align-items:flex-start;
     justify-content:flex-start;
`
const RouteLink = styled.p`
    color:white;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;

  .homeRL {
    text-decoration: none;
    color: white;

    &:hover {
      cursor: ${(props) => props.cp};
      color: ${(props) => props.hv};
    }
  }
`

function VehiclesHomeSection() {

  return (
       <Container>
        {/* <Navbar/> */}
        <RouteLinksCon id='RouteLinks_Con'>
            <RouteLinks >
                <RouteLink hv='orange' cp='pointer'>
                      <Link className='homeRL' to='/'>Home</Link>
                </RouteLink>
                 <ArrowForwardRounded id='ArrowForward_Icon'/>

                <RouteLink hv='orange' cp='pointer'>
                    Pages
                </RouteLink>
                 <ArrowForwardRounded id='ArrowForward_Icon'/>

                <RouteLink>
                    Auctions
                </RouteLink>
            </RouteLinks>
        </RouteLinksCon>
        <FeaturedAuction/>
       </Container>
    )
}

export default VehiclesHomeSection