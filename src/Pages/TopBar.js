import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Assests/BarBox/Logo.png";
import dashboard from "../Assests/quibtsuite.png";
import vector from "../Assests/BarBox/Vector 32.png";
import screen from "../Assests/BarBox/Screen.png";
import play from "../Assests/BarBox/Play.svg";
import dashimage from "../Assests/dashboard2.png";
import cam from "../Assests/iMac.png";
export const TopBar = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#FFFFFF", pb: 12, pt: 2 }}>
        <Container maxWidth="xl">
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            data-aos="fade-right"
          >
            <Box>
              <img src={dashboard}></img>
            </Box>
            <Box sx={{ display: "flex", gap: "20px", pt: 1 }}>
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
            <Box sx={{ display: "flex", gap: "20px" }}>
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
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-up-right">
                <Box sx={{ width: "75%" }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: " 48px",
                      lineHeight: "60px",
                      letterSpacing: "-1%",
                      color: "#272D37",
                    }}
                  >
                    With Qbit Suite, you can take care of each need of your
                    business functions in.one place
                  </Typography>
                </Box>
                <Box sx={{ mt: 7 }}>
                  <img src={vector}></img>
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
                    Lay a solid foundation for your brand. Grab a
                    high-converting web powered by a secure backend coupled with
                    an intuitive eCommerce.
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
                data-aos="fade-up-left"
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
                  src={dashimage}
                  style={{
                    position: "absolute",
                    top: "6.5%",
                    left: "4.5%",
                    width: "93%",
                    height: "auto",
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
              <img src={logo}></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
