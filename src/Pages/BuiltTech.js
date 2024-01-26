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
              p: 7,
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
            <Box sx={{ width: "37%", mx: "auto", mt: 3 }}>
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
            <Box sx={{ p: 2 }}>
              <Grid
                container
                spacing={2}
                sx={{ mt: 4, justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={5}
                  sx={{ p: 3 }}
                  data-aos="fade-right"
                >
                  <Card sx={{ bgcolor: "white", borderRadius: "16px", p: 5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={3} md={3} lg={3}>
                        <img src={icon1}></img>
                      </Grid>
                      <Grid item xs={9} md={9} lg={9}>
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
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "12.75px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid item xs={12} md={5} lg={5} data-aos="fade-left">
                  <Card
                    sx={{ bgcolor: "white", borderRadius: "15.94px", p: 5 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3} md={3} lg={3}>
                        <img src={icon2}></img>
                      </Grid>
                      <Grid item xs={9} md={9} lg={9}>
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
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "12.75px",
                            color: "#5F6D7E",
                            lineHeight: "19.13px",
                          }}
                        >
                          In business, you have to act fast. By choosing our
                          Style theme package, you can get everything you need
                          to start selling right away. Hit the market with your
                          product sooner, attract early sales, and build an
                          audience from day one.
                        </Typography>
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{ mt: 4, justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={5}
                  sx={{ p: 1 }}
                  data-aos="fade-right"
                >
                  <Card
                    sx={{ bgcolor: "white", borderRadius: "15.94px", p: 5 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3} md={3} lg={3}>
                        <img src={icon3}></img>
                      </Grid>
                      <Grid item xs={9} md={9} lg={9}>
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
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "12.75px",
                            color: "#5F6D7E",
                            lineHeight: "19.13px",
                          }}
                        >
                          When you get a ready-made package, you avoid common
                          design mistakes that could cost your business a
                          fortune. Not only that. Thanks to a higher conversion
                          rate, you can achieve better ROI on your marketing
                          expenses.
                        </Typography>
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid item xs={12} md={5} lg={5} data-aos="fade-left">
                  <Card
                    sx={{ bgcolor: "white", borderRadius: "15.94px", p: 5 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3} md={3} lg={3}>
                        <img src={icon4}></img>
                      </Grid>
                      <Grid item xs={9} md={9} lg={9}>
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
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "12.75px",
                            color: "#5F6D7E",
                            lineHeight: "19.13px",
                          }}
                        >
                          The key to success in eCommerce is to scale your store
                          and build an audience of loyal, recurring customers.
                          With our package, you get more than just a store. You
                          get an asset that’s ready for you to take care of it
                          and grow it for years to come.
                        </Typography>
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
