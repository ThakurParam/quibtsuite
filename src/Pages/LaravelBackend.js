import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import screen from "../Assests/BarBox/device.png";
import tab from "../Assests/BarBox/devicetab.png";
import speaker from "../Assests/BarBox/topspeakercam.png";
import laravel from "../Assests/laravel.png";
export const LaravelBackend = () => {
  return (
    <>
      <Box sx={{ pt: 9 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#E4F6EE",
              textAlign: "center",
              borderRadius: "22.24px",
              pt: 8,
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "75%", mx: "auto" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "46.8px",
                  letterSpacing: "-2%",
                  textAlign: "center ",
                  color: "#191A15",
                }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                A style theme, together with a dedicated Laravel backend and an
                intuitive mobile app
              </Typography>
            </Box>
            <Box
              sx={{ mx: "auto", width: "60%", mt: 3 }}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.1 px",
                  textAlign: "center ",
                  color: "#191A15",
                }}
              >
                POS allows you to create and maintain the data of each customer
                and vendor. You get access to all essential information through
                a well-maintained format.
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button
                sx={{
                  borderRadius: "6px",
                  padding: "12px",
                  gap: "6px",
                  bgcolor: "#5ADA5F",
                  textTransform: "none",
                  mr: 1,
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
                  Get the Package
                </Typography>
              </Button>
              <Button
                sx={{
                  borderRadius: "4px",
                  padding: "12px ",
                  gap: "6px",
                  bgcolor: "#FFFFFF",
                  textTransform: "none",
                  ml: 1,
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
                  View Live Demo
                </Typography>
              </Button>
            </Box>
            <Box sx={{ mt: 6, position: "relative" }}>
              <img src={screen} style={{ position: "relative" }}></img>
              <img
                src={speaker}
                style={{ position: "absolute", top: "7px", left: 650 }}
              ></img>
              <img
                src={tab}
                style={{ position: "absolute", top: "20px", left: 230 }}
              ></img>
              <img
                src={laravel}
                style={{ position: "absolute", top: 50, left: 230 }}
              ></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
