import { Dashboard } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import dashboard from "../Assests/dashboard.png";
import AddIcon from "@mui/icons-material/Add";

export const Hrm = () => {
  const theme = useTheme();

  const accordionStyle = {
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <>
      <Box sx={{ bgcolor: "#F9F8FE", pt: 7, pb: 10 }}>
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={12}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ width: "80%" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "42px",
                      letterSpacing: "-1%",
                      color: "#272D37",
                    }}
                  >
                    Everything You Need For a Successful HRM - In One Place
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-left">
                <Box sx={{ width: "80%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "24px",
                      letterSpacing: "0.1px",
                      color: "#5F6D7E",
                    }}
                  >
                    This feature makes it easier for a company to maintain a
                    record of an employee’s personal, company, and Bank details
                    along with their essential documentation. Employees could
                    view and manage their profiles.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={12}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ mt: 5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion
                        sx={{ p: 5, borderRadius: "20px" }}
                        style={accordionStyle}
                      >
                        <AccordionSummary
                          expandIcon={
                            <AddIcon
                              sx={{
                                color: "#5ADA5F",

                                p: "10px",
                                bgcolor: "#f7f7ff",
                                borderRadius: "10px",
                              }}
                            />
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
                            When did Webflow was founded?
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion
                        sx={{ p: 5, borderRadius: "12px" }}
                        style={accordionStyle}
                      >
                        <AccordionSummary
                          expandIcon={
                            <AddIcon
                              sx={{
                                color: "#5ADA5F",

                                p: "10px",
                                bgcolor: "#f7f7ff",
                                borderRadius: "10px",
                              }}
                            />
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
                            Is NoCode the future of the web?
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion
                        sx={{ p: 5, borderRadius: "12px" }}
                        style={accordionStyle}
                      >
                        <AccordionSummary
                          expandIcon={
                            <AddIcon
                              sx={{
                                color: "#5ADA5F",

                                p: "10px",
                                bgcolor: "#f7f7ff",
                                borderRadius: "10px",
                              }}
                            />
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
                            Is NoCode the future of the web?
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-left">
                <Box>
                  <img src={dashboard}></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
