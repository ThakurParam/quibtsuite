import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Assests/BarBox/Logo.png";
import dashboard from "../Assests/quibtsuite.png";
import vector from "../Assests/BarBox/Vector 32.png";
import screen from "../Assests/BarBox/Screen.png";
export const TopBar = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <img src={dashboard}></img>
            </Box>
            <Box sx={{ display: "flex", gap: "6px" }}>
              <Button
                sx={{
                  height: "22px",
                  width: "44px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography>Home</Typography>
              </Button>
              <Button
                sx={{
                  height: "22px",
                  width: "44px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography>Add-On</Typography>
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
                <Typography>Pricing</Typography>
              </Button>
              <Button
                sx={{
                  height: "22px",
                  width: "44px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <Typography>About Us</Typography>
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: "6px" }}>
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
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Box>
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
                <Box>
                  <img src={vector}></img>
                </Box>
                <Box>
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
                <Box>
                  <Button
                    sx={{
                      width: "Hug (165px)",
                      height: "Hug (62px)",
                      borderRadius: "40px",
                      padding: "20px, 30px, 20px, 30px",
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
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img src={screen}></img>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 8 }}>
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
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <img src={logo}></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
