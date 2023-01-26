import styled from "styled-components";
import faqImage from "../../images/faq.png";
import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { AccordionSummary, AccordionDetails, Accordion } from "@mui/material";

const Container = styled.div`
flex:2;
`;


const Faqs = styled.div`
  // margin-top: 40px;
`;

const AccordionCon = styled.div`
  border-radius: 5px;
  border: 1px solid #c2c5ef;
  margin-bottom: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 6%);
`;

const IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  // font-weight:600;
  font-size: 45px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
`;
const Faq_ImgCon = styled.div`
  margin-right: 10px;
`;
const Faq_Img = styled.img``;
const Faq_Name = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;
const HrCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
`;
const Hr = styled.hr`
  border: none;
  width: 90%;
  background-color: #c2c5ef;
  height: 1px;
`;
const Faq_NameText = styled.p`
  font-size: 19px;
  white-space: nowrap;
`;

function Faq() {

  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };
  return (
    <Container>
      
        <Faqs>
          {/* How to start bidding */}
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel1"}
              onChange={handleAccordionChange("panel1")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel1" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel1" ? { color: "#EE4730" } : {}
                    }
                  >
                    How to start bidding
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>

          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel2"}
              onChange={handleAccordionChange("panel2")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel2" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel2" ? { color: "#EE4730" } : {}
                    }
                  >
                    Delivery time to the destination port
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>

          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel3"}
              onChange={handleAccordionChange("panel3")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel3" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel3" ? { color: "#EE4730" } : {}
                    }
                  >
                    How to register to bid in an auction?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>

          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel4"}
              onChange={handleAccordionChange("panel4")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel4" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel4" ? { color: "#EE4730" } : {}
                    }
                  >
                    How will I know if my bid was successful?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel5"}
              onChange={handleAccordionChange("panel5")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel5" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel5" ? { color: "#EE4730" } : {}
                    }
                  >
                    What happens if I bid on the wrong lot?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel6"}
              onChange={handleAccordionChange("panel6")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel6" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel6" ? { color: "#EE4730" } : {}
                    }
                  >
                    Security Deposit / Bidding Power
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel7"}
              onChange={handleAccordionChange("panel7")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel7" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel7" ? { color: "#EE4730" } : {}
                    }
                  >
                    How to leave an absentee bid
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel8"}
              onChange={handleAccordionChange("panel8")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel8" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel8" ? { color: "#EE4730" } : {}
                    }
                  >
                    How do I know if I won an item?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel9"}
              onChange={handleAccordionChange("panel9")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel9" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel9" ? { color: "#EE4730" } : {}
                    }
                  >
                    How do I know if I`m the high bidder?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel0"}
              onChange={handleAccordionChange("panel0")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel0" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel0" ? { color: "#EE4730" } : {}
                    }
                  >
                    Can I bid using my mobile device?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel11"}
              onChange={handleAccordionChange("panel11")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel11" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel11" ? { color: "#EE4730" } : {}
                    }
                  >
                    Where do I access my saved items?
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel12"}
              onChange={handleAccordionChange("panel12")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel12" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel12" ? { color: "#EE4730" } : {}
                    }
                  >
                    Cancellations and returns
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel13"}
              onChange={handleAccordionChange("panel13")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel13" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel13" ? { color: "#EE4730" } : {}
                    }
                  >
                    Security Deposit / Bidding Power
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel14"}
              onChange={handleAccordionChange("panel14")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel14" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel14" ? { color: "#EE4730" } : {}
                    }
                  >
                    How to start bidding
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel16"}
              onChange={handleAccordionChange("panel16")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel16" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel16" ? { color: "#EE4730" } : {}
                    }
                  >
                    Delivery time to the destination port
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
          <AccordionCon>
            <Accordion
              sx={{ border: "none", backgroundColor: "#EBF2FF" }}
              expanded={expandedPanel === "panel17"}
              onChange={handleAccordionChange("panel17")}
            >
              <AccordionSummary
                sx={{ border: "none" }}
                expandIcon={
                  expandedPanel === "panel17" ? (
                    <IconCon>
                      <Remove sx={{ fontSize: "30px" }} />
                    </IconCon>
                  ) : (
                    <IconCon>
                      <Add sx={{ fontSize: "30px" }} />
                    </IconCon>
                  )
                }
              >
                <Faq_Name>
                  <Faq_ImgCon>
                    <Faq_Img src={faqImage} alt="faq Image" />
                  </Faq_ImgCon>
                  <Faq_NameText
                    style={
                      expandedPanel === "panel17" ? { color: "#EE4730" } : {}
                    }
                  >
                    How to register to bid in an auction
                  </Faq_NameText>
                </Faq_Name>
              </AccordionSummary>
              <HrCon>
                <Hr />
              </HrCon>

              <AccordionDetails sx={{ border: "none" }}>
                All successful bidders can confirm their winning bid by checking
                the “Sbidu”. In addition, all successful bidders will receive an
                email notifying them of their winning bid after the auction
                closes.
              </AccordionDetails>
            </Accordion>
          </AccordionCon>
        </Faqs>
    </Container>
  );
}

export default Faq;
