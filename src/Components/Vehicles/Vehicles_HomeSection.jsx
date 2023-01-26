import { ArrowForwardRounded } from "@mui/icons-material"
import styled from "styled-components";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useEffect } from "react";
import FeaturedAuction from './FeaturedAuction'


const Container = styled.div`
     padding: 0 3vw ;
     box-sizing:border-box;
     width:100%;
     height:100%;
`
const RouteLinks_Con = styled.div`
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

    &:hover{
        cursor:${props=>props.cp};
        color:${props=>props.hv};
    }
`

function Vehicles_HomeSection() {

  return (
       <Container>
        {/* <Navbar/> */}
        <RouteLinks_Con id='RouteLinks_Con'>
            <RouteLinks >
                <RouteLink hv='orange' cp='pointer'>
                    Home
                </RouteLink>
                 <ArrowForwardRounded id='ArrowForward_Icon'/>

                <RouteLink hv='orange' cp='pointer'>
                    Pages
                </RouteLink>
                 <ArrowForwardRounded id='ArrowForward_Icon'/>

                <RouteLink>
                    Vehicles
                </RouteLink>
            </RouteLinks>
        </RouteLinks_Con>
        <FeaturedAuction/>

       </Container>
    )
}

export default Vehicles_HomeSection