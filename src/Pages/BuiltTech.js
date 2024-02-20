import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import icon1 from "../Assests/buiittech/Icon1.png";
import icon2 from "../Assests/buiittech/Icon2.png";
import icon3 from "../Assests/buiittech/Icon3.png";
import icon4 from "../Assests/buiittech/Icon4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

export const BuiltTech = () => {
  const [data, setData] = useState([]);
  const [cases, setCases] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-builtech/"
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
        "https://qbitsuit-trainee.onrender.com/get-builtTechCards/"
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
      <Box sx={{ mt: 12 }}>
        <Container maxWidth="false">
          <Box
            sx={{
              bgcolor: "#E6F7EF",
              p: { lg: 7, md: 7, xs: 2 },
              borderRadius: "22.24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "45px",
                letterSpacing: "-2%",
                textAlign: "center",
              }}
            >
              {data?.builtHeading}
            </Typography>
            <Box
              sx={{
                width: { lg: "37%", md: "37%", xs: "100%" },
                mx: "auto",
                mt: 3,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "21px",
                  // width: "47%",
                  textAlign: "center",
                  color: "#A6A6A6",
                }}
              >
                {data?.builtSubheading}
              </Typography>
            </Box>
            <Box sx={{ p: { lg: 2, md: 2, xs: 0 } }}>
              <Grid
                container
                spacing={4}
                sx={{ mt: 4, justifyContent: "center" }}
              >
                <Grid item xs={12} md={4} lg={4} data-aos="fade-right">
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: { lg: 3, md: 3, xs: 3 },
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img
                          src={cases?.cardUrl}
                          style={{
                            height: "70px",
                            width: "70px",
                            borderRadius: "20px",
                          }}
                        ></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          {cases?.cardheading}{" "}
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            {cases?.cardParagraph}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  //  data-aos="fade-left"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 3,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img
                          src={cases?.cardUrl}
                          style={{
                            height: "70px",
                            width: "70px",
                            borderRadius: "20px",
                          }}
                        ></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          {cases?.cardheading}{" "}
                        </Typography>
                        <Box sx={{ width: "90%", mt: 1.5 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "20px",
                            }}
                          >
                            {cases?.cardParagraph}
                          </Typography>
                        </Box>
                        <Button sx={{ mt: 1 }}>
                          <Typography
                            sx={{
                              color: "#5ADA5F",
                              fontWeight: 500,
                              fontSize: "15px",
                              lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={4}
                sx={{ mt: 3, justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  sx={{ p: 0 }}
                  data-aos="fade-right"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img
                          src={cases?.cardUrl}
                          style={{
                            height: "70px",
                            width: "70px",
                            borderRadius: "20px",
                          }}
                        ></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          {cases?.cardheading}{" "}
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            {cases?.cardParagraph}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  //  data-aos="fade-left"
                >
                  <Card
                    sx={{
                      bgcolor: "white",
                      borderRadius: "15.94px",
                      p: 3,
                      pt: 4,
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={2} md={2} lg={2}>
                        <img
                          src={cases?.cardUrl}
                          style={{
                            height: "70px",
                            width: "70px",
                            borderRadius: "20px",
                          }}
                        ></img>
                      </Grid>
                      <Grid item xs={10} md={10} lg={10}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "19.13px",
                            color: "#061C3D",
                            lineHeight: "25.51px",
                          }}
                        >
                          {cases?.cardheading}{" "}
                        </Typography>
                        <Box sx={{ width: "98%", mt: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              color: "#5F6D7E",
                              lineHeight: "19.13px",
                            }}
                          >
                            {cases?.cardParagraph}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Button>
                            <Typography
                              sx={{
                                color: "#5ADA5F",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "19.13px",
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
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
