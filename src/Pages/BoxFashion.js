import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import php from "../Assests/BoxFashion-image/php-image.png";
import base from "../Assests/BoxFashion-image/codebase-image.png";
import integration from "../Assests/BoxFashion-image/integration-image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
export const BoxFashion = () => {
  const [data, setData] = useState([]);
  const [cases, setCases] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-fashionBox/"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const casedata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-fashionBox-cases/"
      );
      setCases(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
    casedata();
  }, []);
  console.log(data);
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} data-aos="fade-right">
                <Box sx={{ width: { lg: "80%", md: "80%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { lg: "36px", md: "36px", xs: "30px" },
                      lineHeight: "40px",
                      letterSpacing: "-2%",
                    }}
                  >
                    {data?.fashionBoxHeading}{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                // data-aos="fade-left"
              >
                <Box sx={{ width: { lg: "70%", md: "70%", xs: "100%" } }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "19.85px",
                      lineHeight: "33.08px",
                      color: "#A6A6A6",
                    }}
                  >
                    {data?.fashionBoxSubheading}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4} data-aos="fade-right">
                <Box>
                  <Box>
                    <img
                      src={cases?.fashionBoxUrl}
                      style={{
                        width: "80%",
                        height: "350px",
                        borderRadius: "25px",
                      }}
                    ></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      {cases?.heading}
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        {cases?.paragraph}
                      </Typography>
                      <Button sx={{ textTransform: "none", mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
                            textAlign: "center",
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForwardIcon
                          sx={{ color: "#5ADA5F", fontSize: "large" }}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Box>
                  <Box>
                    <img
                      src={cases?.fashionBoxUrl}
                      style={{
                        width: "80%",
                        height: "350px",
                        borderRadius: "25px",
                      }}
                    ></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      {cases?.heading}
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        {cases?.paragraph}
                      </Typography>
                      <Button sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
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
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                //  data-aos="fade-left"
              >
                <Box>
                  <Box>
                    <img
                      src={cases?.fashionBoxUrl}
                      style={{
                        width: "80%",
                        height: "350px",
                        borderRadius: "25px",
                      }}
                    ></img>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "26.84px",
                        lineHeight: "32.48px",
                        color: "#272D37",
                        letterSpacing: "-1%",
                      }}
                    >
                      {cases?.heading}
                    </Typography>
                    <Box sx={{ width: "80%", mt: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "17.25px",
                          lineHeight: "21px",
                          color: "#A6A6A6",
                          letterSpacing: "-0.09 px",
                        }}
                      >
                        {cases?.paragraph}
                      </Typography>
                      <Button sx={{ mt: 1 }}>
                        <Typography
                          sx={{
                            color: "#5ADA5F",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "37.01px",
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
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
