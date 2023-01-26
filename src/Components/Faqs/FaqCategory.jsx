import { ChevronRight, East, PlayCircleFilled } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  flex: 1;
  margin-left: 50px;
  max-width: 350px;
`;

const RaqCategories_Con = styled.div`
  background: url(./faq-menu.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  padding: 40px 40px;
  flex: 1;
  max-width: 100%;
  max-height: 500px;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
const RaqCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  width: 100%;
  border-radius: 10px;
  padding: 10px 7px;
  cursor: pointer;
  margin: 10px 0;
`;

const VideoTour = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 300px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
  background-color: white;
`;

const VideoLink = styled.div`
  background: url(./video.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
`;

const VideoLinkText_Con = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;
const VideoLink_Text = styled.h2`
  font-weight: 400;
`;
const PopularArticles = styled.div``;
const PopularArticles_Header = styled.div`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
const PopularArticles_Headerxt = styled.h2`
  font-size: 30px;
`;
const PopularArticles_Con = styled.div`
  width: 100%;
  margin-top: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  margin-bottom: 30px;
  padding: 20px 10px;
  background-color: white;
`;

const Icon = styled.div`
  border-radius: 50%;
  width: 22px;
  height: 22px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PopularArticles_ConHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const PopularArticles_ConHeaderTxt = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
const PopularArticles_Text = styled.p`
  color: grey;
  font-weight: 400;
`;

const Iframe = styled.iframe`
width:100vw;
height:100vh;
position:absolute;
`

function FaqCategory() {
  const [active, SetActive] = useState("");

  return (
    <Container>
{/* <Iframe
  name="youtube_popup"
></Iframe> */}
      <RaqCategories_Con>
        <RaqCategories style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <ChevronRight />
          For Companies
        </RaqCategories>
        <RaqCategories
          onMouseLeave={() => {
            SetActive("");
          }}
          onMouseEnter={() => {
            SetActive("Freelancers");
          }}
          style={
            active === "Freelancers"
              ? { backgroundColor: "rgba(255,255,255,0.2)" }
              : {}
          }
        >
          {active === "Freelancers" && <ChevronRight />}
          For Freelancers
        </RaqCategories>
        <RaqCategories
          onMouseLeave={() => {
            SetActive("");
          }}
          onMouseEnter={() => {
            SetActive("Account");
          }}
          style={
            active === "Account"
              ? { backgroundColor: "rgba(255,255,255,0.2)" }
              : {}
          }
        >
          {active === "Account" && <ChevronRight />}
          Your Account
        </RaqCategories>
        <RaqCategories
          onMouseLeave={() => {
            SetActive("");
          }}
          onMouseEnter={() => {
            SetActive("Pricing_Plan");
          }}
          style={
            active === "Pricing_Plan"
              ? { backgroundColor: "rgba(255,255,255,0.2)" }
              : {}
          }
        >
          {active === "Pricing_Plan" && <ChevronRight />}
          Pricing Plans
        </RaqCategories>
        <RaqCategories
          onMouseLeave={() => {
            SetActive("");
          }}
          onMouseEnter={() => {
            SetActive("Technical");
          }}
          style={
            active === "Technical"
              ? { backgroundColor: "rgba(255,255,255,0.2)" }
              : {}
          }
        >
          {active === "Technical" && <ChevronRight />}
          Technical
        </RaqCategories>
        <RaqCategories
          onMouseLeave={() => {
            SetActive("");
          }}
          onMouseEnter={() => {
            SetActive("Security");
          }}
          style={
            active === "Security"
              ? { backgroundColor: "rgba(255,255,255,0.2)" }
              : {}
          }
        >
          {active === "Security" && <ChevronRight />}
          Security
        </RaqCategories>
      </RaqCategories_Con>
      <VideoTour>
        <VideoLink>
          {/* <a
            target="youtube_popup"
            href="https://www.youtube.com/watch?v=Mj3QejzYZ70"
          > */}
            {/* <div width="420px" height="350px"> */}
            <PlayCircleFilled sx={{ color: "blue", fontSize: "50px",position:'absolute' }} />
            <div className="VideoLink_Animation">
                <span className=' vl_Animation one'></span>
                <span className=' vl_Animation two'></span>
                <span className=' vl_Animation three'></span>
                <span className=' vl_Animation four'></span>
              </div>
            {/* </div> */}
          {/* </a> */}
        </VideoLink>
        <VideoLinkText_Con>
          <VideoLink_Text>Watch Video Tour</VideoLink_Text>
        </VideoLinkText_Con>
      </VideoTour>
      <PopularArticles>
        <PopularArticles_Header>
          <PopularArticles_Headerxt>
            Most Popular Articles
          </PopularArticles_Headerxt>
        </PopularArticles_Header>
        <PopularArticles_Con>
          <PopularArticles_ConHeader>
            <PopularArticles_ConHeaderTxt>
              Tips for winning
            </PopularArticles_ConHeaderTxt>
            <Icon>
              <East
                sx={{ fontSize: "14px", fontWeight: 200, color: "lightGreen" }}
              />
            </Icon>
          </PopularArticles_ConHeader>
          <PopularArticles_Text>
            Found an item you love? Here are some tips for winning your next
            item
          </PopularArticles_Text>
        </PopularArticles_Con>
        <PopularArticles_Con>
          <PopularArticles_ConHeader>
            <PopularArticles_ConHeaderTxt>
              How to bid at an Auction
            </PopularArticles_ConHeaderTxt>
            <Icon>
              <East
                sx={{ fontSize: "14px", fontWeight: 200, color: "lightGreen" }}
              />
            </Icon>
          </PopularArticles_ConHeader>
          <PopularArticles_Text>
            Bidding at auction can be terrifying, especially your first time.
          </PopularArticles_Text>
        </PopularArticles_Con>
        <PopularArticles_Con>
          <PopularArticles_ConHeader>
            <PopularArticles_ConHeaderTxt>
              Bid increments
            </PopularArticles_ConHeaderTxt>
            <Icon>
              <East
                sx={{ fontSize: "14px", fontWeight: 200, color: "lightGreen" }}
              />
            </Icon>
          </PopularArticles_ConHeader>
          <PopularArticles_Text>
            Each auction house sets their own bidding increments
          </PopularArticles_Text>
        </PopularArticles_Con>
      </PopularArticles>
    </Container>
  );
}

export default FaqCategory;
