import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import dashboard from "../Assests/dashboard.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
export const Account = () => {
  const [data, setData] = useState([]);
  const [cord, setCord] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-account/"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const accorddata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-accordian/"
      );
      setCord(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    accorddata();
  }, []);
  console.log(data);
  console.log(data);
  const [expandedAccordion1, setExpandedAccordion1] = useState(false);
  const [expandedAccordion2, setExpandedAccordion2] = useState(false);
  const [expandedAccordion3, setExpandedAccordion3] = useState(false);

  const handleChangeAccordion1 = () => {
    setExpandedAccordion1((prevExpanded) => !prevExpanded);
    setExpandedAccordion2(false);
    setExpandedAccordion3(false);
  };

  const handleChangeAccordion2 = () => {
    setExpandedAccordion1(false);
    setExpandedAccordion2((prevExpanded) => !prevExpanded);
    setExpandedAccordion3(false);
  };

  const handleChangeAccordion3 = () => {
    setExpandedAccordion1(false);
    setExpandedAccordion2(false);
    setExpandedAccordion3((prevExpanded) => !prevExpanded);
  };
  const theme = useTheme();

  const accordionStyle = {
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #FFD6D6, #FFFFFF)",
          pb: 12,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Box>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ width: { lg: "80%", md: "80%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { lg: "32px", md: "32px", xs: "28px" },
                      lineHeight: "42px",
                      letterSpacing: "-1%",
                      color: "#272D37",
                    }}
                  >
                    {data?.accountHeading}{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                // data-aos="fade-left"
              >
                <Box
                  sx={{
                    width: { lg: "80%", md: "80%", xs: "100%" },
                    mt: { lg: 0, md: 0, xs: -7 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "24px",
                      letterSpacing: "0.1px",
                      color: "#5F6D7E",
                    }}
                  >
                    {data?.accountSubheading}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Box>
                        <Accordion
                          sx={{ p: 5, borderRadius: "12px" }}
                          style={accordionStyle}
                          expanded={expandedAccordion1}
                          onChange={handleChangeAccordion1}
                        >
                          <AccordionSummary
                            expandIcon={
                              expandedAccordion1 ? (
                                <RemoveIcon
                                  sx={{
                                    color: "black",
                                    p: "10px",
                                    bgcolor: "#5ADA5F",
                                    borderRadius: "10px",
                                  }}
                                />
                              ) : (
                                <AddIcon
                                  sx={{
                                    color: "#5ADA5F",
                                    p: "10px",
                                    bgcolor: "#f7f7ff",
                                    borderRadius: "10px",
                                  }}
                                />
                              )
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "20.68px",
                                lineHeight: "26.32px",
                                color: "#170F49",
                              }}
                            >
                              {cord?.accordianHeading}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              fontWeight: 400,
                              fontSize: "16.92px",
                              lineHeight: "28.2px",
                              color: "#6F6C90",
                            }}
                          >
                            {cord?.accordianParagraph}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion
                        sx={{ p: 5, borderRadius: "12px" }}
                        style={accordionStyle}
                        expanded={expandedAccordion2}
                        onChange={handleChangeAccordion2}
                      >
                        <AccordionSummary
                          expandIcon={
                            expandedAccordion2 ? (
                              <RemoveIcon
                                sx={{
                                  color: "black",
                                  p: "10px",
                                  bgcolor: "#5ADA5F",
                                  borderRadius: "10px",
                                }}
                              />
                            ) : (
                              <AddIcon
                                sx={{
                                  color: "#5ADA5F",
                                  p: "10px",
                                  bgcolor: "#f7f7ff",
                                  borderRadius: "10px",
                                }}
                              />
                            )
                          }
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "20.68px",
                              lineHeight: "26.32px",
                              color: "#170F49",
                            }}
                          >
                            {cord?.accordianHeading}{" "}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            fontWeight: 400,
                            fontSize: "16.92px",
                            lineHeight: "28.2px",
                            color: "#6F6C90",
                          }}
                        >
                          {cord?.accordianParagraph}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion
                        sx={{ p: 5, borderRadius: "12px" }}
                        style={accordionStyle}
                        expanded={expandedAccordion3}
                        onChange={handleChangeAccordion3}
                      >
                        <AccordionSummary
                          expandIcon={
                            expandedAccordion3 ? (
                              <RemoveIcon
                                sx={{
                                  color: "black",
                                  p: "10px",
                                  bgcolor: "#5ADA5F",
                                  borderRadius: "10px",
                                }}
                              />
                            ) : (
                              <AddIcon
                                sx={{
                                  color: "#5ADA5F",
                                  p: "10px",
                                  bgcolor: "#f7f7ff",
                                  borderRadius: "10px",
                                }}
                              />
                            )
                          }
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "20.68px",
                              lineHeight: "26.32px",
                              color: "#170F49",
                            }}
                          >
                            {cord?.accordianHeading}{" "}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            fontWeight: 400,
                            fontSize: "16.92px",
                            lineHeight: "28.2px",
                            color: "#6F6C90",
                          }}
                        >
                          {cord?.accordianParagraph}
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                //  data-aos="fade-left"
              >
                <Box>
                  <img
                    src={data?.accountImageUrl}
                    style={{
                      width: "100%",
                      height: "560px",
                      borderRadius: "30px",
                    }}
                  ></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
