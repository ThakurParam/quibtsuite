import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import screen from "../Assests/BarBox/device.png";
import tab from "../Assests/BarBox/devicetab.png";
import speaker from "../Assests/BarBox/topspeakercam.png";
import laravel from "../Assests/laravel.png";
import axios from "axios";
export const LaravelBackend = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-laravel/"
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
            <Box
              sx={{ width: { lg: "75%", md: "75%", xs: "100%" }, mx: "auto" }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { lg: "36px", md: "36px", xs: "30px" },
                  lineHeight: "46.8px",
                  letterSpacing: "-2%",
                  textAlign: "center ",
                  color: "#191A15",
                }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                {data?.laravelHeading}
              </Typography>
            </Box>
            <Box
              sx={{
                mx: "auto",
                width: { lg: "60%", md: "60%", xs: "100%" },
                mt: 3,
              }}
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
                {data?.laravelSubheading}
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
            <Box sx={{ mt: 9, position: "relative" }}>
              <img
                src={screen}
                style={{ position: "relative", width: "72% ", height: "auto" }}
              ></img>
              <img
                src={speaker}
                style={{
                  position: "absolute",
                  top: "1.5%",
                  left: "45%",
                  height: "auto",
                }}
              ></img>
              <img
                src={tab}
                style={{
                  position: "absolute",
                  top: "5%",
                  left: " 16%",
                  height: "auto",
                  width: "68%",
                }}
              ></img>
              <img
                src={data?.laravelUrl}
                style={{
                  position: "absolute",
                  top: "11%",
                  left: "15.5%",
                  height: "450px",
                  width: "69%",
                  borderRadius: "30px",
                }}
              ></img>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
