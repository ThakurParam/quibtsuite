import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import fb from "../Assests/footerimage/facebook.png";
import google from "../Assests/footerimage/google.png";
import apple from "../Assests/footerimage/apple.png";
import insta from "../Assests/footerimage/insta.png";
import quibtsuite from "../Assests/quibtsuite.png";
export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: " #161C28",
          color: "white",
          pt: 18,
          pb: 12,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} lg={5} data-aos="fade-right">
              <Box>
                <img src={quibtsuite}></img>
                <Box sx={{ width: "50%", mt: 2 }}>
                  <Typography sx={{ color: "#A5ACBA" }}>
                    We build modern web tools to help you jump-start your daily
                    business work.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ color: "#A5ACBA" }}>
                    All Rights Reserved to
                    <span
                      style={{
                        color: "#5ADA5F",
                        marginLeft: "3px",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      quantmhill.com
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={2.2} lg={2.2} data-aos="zoom-in">
              <Typography>Company</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 2 }}>About us</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>Freebies</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>Premium</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>Blog</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Affiliate Program
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Get Coupan
              </Typography>
            </Grid>
            <Grid item xs={12} md={2.2} lg={2.2} data-aos="zoom-in">
              <Typography>Help and Support</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 2 }}>
                Knowledge Center
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Contact Us
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Premium Support
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Sponsorship
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Custom Development
              </Typography>
            </Grid>
            <Grid item xs={12} md={2.2} lg={2.2} data-aos="fade-right">
              <Typography>Support</Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 2 }}>
                Terms & Conditions
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ color: "#A5ACBA", pt: 1 }}>
                Liceneses
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{ borderTop: "1px solid gray ", pt: 3, mt: 9 }}
            data-aos="zoom-out-right"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    letterSpacing: "-01px",
                    color: "#A5ACBA",
                  }}
                >
                  © 2023 Lookscout. All Rights Reserved.
                </Typography>
              </div>

              <div style={{ display: "flex", gap: "30px" }}>
                <div>
                  <img src={fb}></img>
                </div>
                <div>
                  <img src={google}></img>
                </div>
                <div>
                  <img src={apple}></img>
                </div>
                <div>
                  <img src={insta}></img>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
};
