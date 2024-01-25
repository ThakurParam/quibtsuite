import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import sign1 from "../Assests/support/sign1.png";

export const Support = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#F9F8FE", pt: 7, pb: 5 }}>
        <Container maxwidth="xl">
          <Box>
            <Grid container spacing={10}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "43.57px",
                    }}
                  >
                    How we support our partner all over the world
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "30px",
                      color: "#A6A6A6",
                    }}
                  >
                    SaaS become a common delivery model for many business
                    application, including office software, messaging software,
                    payroll processing software, DBMS software, management
                    software
                  </Typography>
                </Box>
                <Box></Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        height: "60px",
                        width: "60px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img style={{ textAlign: "center" }} src={sign1}></img>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        Free & Open Source
                      </Typography>
                      <Box sx={{ width: "81%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          Plan, collaborate, and publishing your contetn that
                          drivees meaningful engagement and growth for your
                          barnd
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        height: "60px",
                        width: "60px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img style={{ textAlign: "center" }} src={sign1}></img>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        Guaranteed to Grow Your Business
                      </Typography>
                      <Box sx={{ width: "85%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          Analyze your performance and create goegeous report
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        height: "60px",
                        width: "60px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img style={{ textAlign: "center" }} src={sign1}></img>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        24/7 Support
                      </Typography>
                      <Box sx={{ width: "85%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          Quickly navigate you anda engage with your adience
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
