import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import screen from "../Assests/BarBox/Screen.png";

export const LaravelBackend = () => {
  return (
    <>
      <Box sx={{}}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#E4F6EE",
              textAlign: "center",
              borderRadius: "22.24px",
              pt: 8,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "46.8px",
                letterSpacing: "-2%",
                textAlign: "center ",
                color: "#191A15",
              }}
            >
              A style theme, together with a dedicated Laravel backend and an
              intuitive mobile app
            </Typography>
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
              and vendor. You get access to all essential information through a
              well-maintained format.
            </Typography>
            <Box sx={{}}>
              <Button
                sx={{
                  borderRadius: "6px",
                  padding: "12px, 18px, 12px, 18px ",
                  gap: "6px",
                  bgcolor: "#5ADA5F",
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
                  Get the Package
                </Typography>
              </Button>
              <Button
                sx={{
                  borderRadius: "1px",
                  padding: "12px, 18px, 12px, 18px ",
                  gap: "6px",
                  bgcolor: "#FFFFFF",
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
                  View Live Demo
                </Typography>
              </Button>
            </Box>
            <Box>
              <img src={screen}></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
