import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Footertop = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: " #161C28",

          mt: 15,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ pt: 10 }}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ width: "80%" }}>
                <Typography
                  sx={{
                    fontSize: "36px",
                    //   fontFamily: "Inter",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Start an Online Fashion Business with a Complete eCommerce
                  Package
                </Typography>
              </Box>
              <Box sx={{ width: "73%", mt: 7 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    //   fontFamily: "Inter",
                    fontWeight: 500,
                    color: "#A6A6A6",
                  }}
                >
                  Get a fashion-themed eCommerce store with a secure backend and
                  convenient mobile app. Build a brand, manage your store
                  wherever you are, and grow an online business.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ width: "80%" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    //   fontFamily: "Inter",
                    fontWeight: 500,
                    color: "#A6A6A6",
                  }}
                >
                  An effective fashion theme should be visually appealing and
                  easy to navigate. A good theme makes it easy for customers to
                  find and buy the items they’re interested in. The theme should
                  also be responsive so that it looks good on all devices.With
                  the Style theme, you get all of the above - and more. The
                  theme gives you everything you need to sell your products and
                  keep your audience coming back for more. Easily customize the
                  theme and adjust its design to your branding needs. Add
                  products, polish product pages, and start growing your online
                  business.
                </Typography>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.1 px",
                    color: "white  ",
                  }}
                >
                  Join Our Community
                </Typography>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.1 px",
                    color: "#A5ACBA",
                  }}
                >
                  We build modern web tools to help you jump-start your daily
                  business work.
                </Typography>
              </Box>
              <Box sx={{ width: "75%", mt: 3 }}>
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ width: "100%" }}>
                    <input
                      placeholder="Enter Email"
                      style={{
                        outline: "none",
                        height: "41px",
                        width: "100%",
                        backgroundColor: "#2E3545",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div>
                    <button
                      style={{
                        backgroundColor: "#5ADA5F",
                        borderRadius: "0px, 6px, 6px, 0px",
                        padding: "12px, 18px, 12px, 18px",
                        gap: "6px",
                        border: "none",
                        height: "43px",
                        color: "white",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                        Submit
                      </Typography>
                    </button>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>{" "}
        </Container>
      </Box>
    </>
  );
};
