import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import php from "../Assests/BoxFashion-image/php-image.png";
import base from "../Assests/BoxFashion-image/codebase-image.png";
import integration from "../Assests/BoxFashion-image/integration-image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const BoxFashion = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ width: { lg: "80%", md: "80%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { lg: "36px", md: "36px", xs: "30px" },
                      lineHeight: "40px",
                      letterSpacing: "-2%",
                    }}
                  >
                    Why Choose a Dedicated Fashion Theme for Your Business?
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
                <Box sx={{ width: { lg: "70%", md: "70%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "19.85px",
                      lineHeight: "33.08px",
                      color: "#A6A6A6",
                    }}
                  >
                    We offer a variety of interesting features that you can help
                    increase yor productivity at work and manage your projrct
                    esaly
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4} data-aos="fade-right">
                <Box>
                  <Box>
                    <img src={php}></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      High-Performing, Secure PHP Framework
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        Unlike many frameworks that come and go, the framework
                        stood the test of time. Over the years, it grew to
                        become one of the fastest and most secure frameworks in
                        the market.
                      </Typography>
                      <Button sx={{ textTransform: "none", mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
                            textAlign: "center",
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForwardIcon
                          sx={{ color: "#5ADA5F", fontSize: "large" }}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Box>
                  <Box>
                    <img src={base}></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      Stable Codebase
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        Unlike many frameworks that come and go, the framework
                        stood the test of time. Over the years, it grew to
                        become one of the fastest and most secure frameworks in
                        the market.
                      </Typography>
                      <Button sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
                            textAlign: "center",
                            textTransform: "none",
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForwardIcon
                          sx={{ color: "#5ADA5F", fontSize: "large" }}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                //  data-aos="fade-left"
              >
                <Box>
                  <Box>
                    <img src={integration}></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      Secure Integrations
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        Unlike many frameworks that come and go, the framework
                        stood the test of time. Over the years, it grew to
                        become one of the fastest and most secure frameworks in
                        the market.
                      </Typography>
                      <Button sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
                            textAlign: "center",
                            textTransform: "none",
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForwardIcon
                          sx={{ color: "#5ADA5F", fontSize: "large" }}
                        />
                      </Button>
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
