import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../Assests/BarBox/Logo.png";
import dashboard from "../Assests/quibtsuite.png";
import vector from "../Assests/BarBox/Vector 32.png";
import screen from "../Assests/BarBox/Screen.png";
import play from "../Assests/BarBox/Play.svg";
import dashimage from "../Assests/dashboard2.png";
import cam from "../Assests/iMac.png";
import { Drawers } from "../Components/Drawers";
import axios from "axios";
export const TopBar = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-banner/"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);
  return (
    <>
      <Box
        sx={{
          // background: `linear-gradient(to right,#52BDAA,#FFFFFF), linear-gradient(to bottom,#F9F8FE, #FFFFFF), linear-gradient(to bottom,#F9F8FE , #FFFFFF)`,
          pb: 12,
          pt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            data-aos="fade-right"
          >
            <Box>
              <img src={dashboard}></img>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                gap: "20px",
                pt: 1,
              }}
            >
              <Button
                sx={{
                  height: "22px",
                  width: "44px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Home</Typography>
              </Button>
              <Button
                sx={{
                  height: "22px",
                  width: "auto",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Add-On</Typography>
              </Button>
              <Button
                sx={{
                  height: "22px",
                  width: "44px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                  p: 1,
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Pricing</Typography>
              </Button>
              <Button
                sx={{
                  height: "22px",
                  width: "auto",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontWeight: 600,
                  }}
                >
                  About Us
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  height: "22px",
                  width: "auto",
                  borderRadius: "5px",
                  color: "none",
                  textTransform: "none",
                  padding: "12px, 18px, 12px, 18px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#000000",
                    mt: 3,
                  }}
                >
                  Sign Up
                </Typography>
              </Button>
              <Button
                sx={{
                  height: "46px",
                  width: "80px",
                  borderRadius: "6px",
                  padding: "12px, 18px, 12px, 18px",
                  bgcolor: "#5ADA5F",
                  color: "none",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#272D37",
                  }}
                >
                  Log In
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{ display: { xs: "block", md: "none", lg: "none" }, mt: 1 }}
            >
              <Drawers />
            </Box>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-up-right">
                <Box sx={{ width: { lg: "75%", md: "75%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { lg: " 48px", md: " 48px", xs: "40px" },
                      lineHeight: "60px",
                      letterSpacing: "-1%",
                      color: "#272D37",
                    }}
                  >
                    {data?.bannerHeading}
                  </Typography>
                </Box>
                <Box sx={{ mt: 7 }}>
                  <img src={vector} style={{ width: "65%" }}></img>
                </Box>
                <Box sx={{ mt: 7, width: "70%" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: " 18px",
                      lineHeight: "26px",
                      letterSpacing: "0.1px",
                      color: "#5F6D7E",
                    }}
                  >
                    {data?.bannerParagraph}
                  </Typography>
                </Box>
                <Box sx={{ mt: 7 }}>
                  <Button
                    sx={{
                      width: "Hug (165px)",
                      height: "Hug (62px)",
                      borderRadius: "40px",
                      padding: "20px",
                      gap: "10px",
                      bgcolor: "#54BD95",
                      textTransform: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "21.78px",
                      }}
                    >
                      Try free trial
                    </Typography>
                  </Button>
                  <Button sx={{ ml: 4 }}>
                    <img src={play}></img>
                    <Typography
                      sx={{
                        textTransform: "none",
                        color: "black",
                        fontWeight: 500,
                        ml: 2,
                      }}
                    >
                      View Demo
                    </Typography>
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                // data-aos="fade-up-left"
                sx={{ position: "relative" }}
              >
                <img
                  src={screen}
                  style={{ position: "relative", width: "100%" }}
                ></img>
                <img
                  src={cam}
                  style={{
                    position: "absolute",
                    top: "4.5%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "2%",
                    height: "auto",
                  }}
                ></img>
                <img
                  src={data?.imageUrls}
                  style={{
                    position: "absolute",
                    top: "6.%",
                    left: "4.7%",
                    width: "93%",
                    height: "520px",
                    borderRadius: "20px",
                  }}
                ></img>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 14 }} data-aos="flip-left">
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "48.41px",
                textAlign: "center",
                color: "black",
              }}
            >
              More than 25,000 teams use Collabs
            </Typography>
            <Box sx={{ textAlign: "center", mt: 7 }} data-aos="flip-right">
              <img src={logo} style={{ width: "100%", height: "auto" }}></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
