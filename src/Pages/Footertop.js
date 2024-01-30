import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

export const Footertop = () => {
  const initialText = ` An effective fashion theme should be visually appealing and
    easy to navigate. A good theme makes it easy for customers to
    find and buy the items they’re interested in. The theme should
    also be responsive so that it looks good on all devices.With
    the Style theme, you get all of the above - and more. The
    theme gives you everything you need to sell your products and
    keep your audience coming back for more. Easily customize the
    theme and adjust its design to your branding needs. Add
    products, polish product pages, and start growing your online
    business.`;

  const [showFullText, setShowFullText] = useState(false);
  const isSmallScreen = useMediaQuery("(min-width:600px)");

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };
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
            <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
              <Box sx={{ width: { lg: "80%", md: "80%", xs: "100%" } }}>
                <Typography
                  sx={{
                    fontSize: { lg: "36px", md: "36px", xs: "30px" },
                    //   fontFamily: "Inter",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Start an Online Fashion Business with a Complete eCommerce
                  Package
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { lg: "73%", md: "73%", xs: "100%" },
                  mt: { lg: 7, md: 7, xs: 2 },
                }}
              >
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
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              //  data-aos="fade-left"
            >
              <Box sx={{ width: { lg: "80%", md: "80%", xs: "100%" } }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    //   fontFamily: "Inter",
                    fontWeight: 500,
                    color: "#A6A6A6",
                  }}
                >
                  {isSmallScreen || showFullText ? (
                    <>
                      {initialText}{" "}
                      <span
                        onClick={handleReadMoreClick}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        Read Less...
                      </span>
                    </>
                  ) : (
                    <>
                      {initialText.slice(0, 100)}{" "}
                      <span
                        onClick={handleReadMoreClick}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        Read More...
                      </span>
                    </>
                  )}
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
              <Box sx={{ width: { lg: "75%", md: "75%", xs: "100%" }, mt: 3 }}>
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};
