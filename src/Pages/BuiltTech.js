import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import icon1 from "../Assests/buiittech/Icon1.png";
import icon2 from "../Assests/buiittech/Icon2.png";
import icon3 from "../Assests/buiittech/Icon3.png";
import icon4 from "../Assests/buiittech/Icon4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const BuiltTech = () => {
  return (
    <>
      <Box sx={{ mt: 12 }}>
        <Container maxWidth="false">
          <Box
            sx={{
              bgcolor: "#E6F7EF",
              p: { lg: 7, md: 7, xs: 2 },
              borderRadius: "22.24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "45px",
                letterSpacing: "-2%",
                textAlign: "center",
              }}
            >
              Built with Technology You Can Trust
            </Typography>
            <Box
              sx={{
                width: { lg: "37%", md: "37%", xs: "100%" },
                mx: "auto",
                mt: 3,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "21px",
                  // width: "47%",
                  textAlign: "center",
                  color: "#A6A6A6",
                }}
              >
                Our backend is built with Laravel - one of the most popular and
                highest-rated web development frameworks. Find out why we chose
                it - and how it benefits your business.
              </Typography>
            </Box>
            <Box sx={{ p: { lg: 2, md: 2, xs: 0 } }}>
              <Grid
                container
                spacing={4}
                sx={{ mt: 4, justifyContent: "center" }}
              >
                <Grid item xs={12} md={4} lg={4} data-aos="fade-right">
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: { lg: 3, md: 3, xs: 3 },
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img src={icon1}></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          Sell More Than Your Competitors
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            Your online store has one goal - to sell your
                            products. Thanks to years of experience in the
                            industry, we know the ins and outs of online sales.
                            And we put that knowledge into every package that we
                            offer. With the Style eCommerce package, you get a
                            store that’s
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  //  data-aos="fade-left"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 3,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img src={icon2}></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          Get a Headstart over Your Competitors
                        </Typography>
                        <Box sx={{ width: "90%", mt: 1.5 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "20px",
                            }}
                          >
                            In business, you have to act fast. By choosing our
                            Style theme package, you can get everything you need
                            to start selling right away. Hit the market with
                            your product sooner, attract early sales, and build
                            an audience from day one.
                          </Typography>
                        </Box>
                        <Button sx={{ mt: 1 }}>
                          <Typography
                            sx={{
                              color: "#5ADA5F",
                              fontWeight: 500,
                              fontSize: "15px",
                              lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={4}
                sx={{ mt: 3, justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  sx={{ p: 0 }}
                  data-aos="fade-right"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img src={icon3}></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          Front-end Avoid Design Mistakes
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            When you get a ready-made package, you avoid common
                            design mistakes that could cost your business a
                            fortune. Not only that. Thanks to a higher
                            conversion rate, you can achieve better ROI on your
                            marketing expenses.
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  //  data-aos="fade-left"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img src={icon4}></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          Build a Long-Term Asset
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            The key to success in eCommerce is to scale your
                            store and build an audience of loyal, recurring
                            customers. With our package, you get more than just
                            a store. You get an asset that’s ready for you to
                            take care of it and grow it for years to come.
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
