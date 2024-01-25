import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import dashboard from "../Assests/dashboard.png";
import AddIcon from "@mui/icons-material/Add";
export const AccountingBilling = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#FFD6D6" }}>
        <Box
          sx={{
            textAlign: "center",
            pt: 7,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "40px",
              letterSpacing: "-2%",
            }}
          >
            Why choose dedicated modules for Your Business?
          </Typography>
          <Box sx={{ justifyItems: "center" }}>
            {/* <Box sx={{ width: "32%" }}> */}
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "-0.1px",
                color: "#5F6D7E",
              }}
            >
              With qbitsuite, you can conveniently manage all your business
              functions from a single location.
            </Typography>
          </Box>
          {/* </Box> */}
        </Box>
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "42px",
                      letterSpacing: "-1%",
                      color: "#272D37",
                    }}
                  >
                    Account Helps You Simplify Your Accounting and Billing
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
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
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion sx={{ p: 5, borderRadius: "12px" }}>
                        <AccordionSummary
                          expandIcon={<AddIcon sx={{ color: "#5ADA5F" }} />}
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
                            Why is Webflow the best nocode tool?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion sx={{ p: 5, borderRadius: "12px" }}>
                        <AccordionSummary
                          expandIcon={<AddIcon sx={{ color: "#5ADA5F" }} />}
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
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Accordion sx={{ p: 5, borderRadius: "12px" }}>
                        <AccordionSummary
                          expandIcon={<AddIcon sx={{ color: "#5ADA5F" }} />}
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
                        <AccordionDetails>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
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
