import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import sign1 from "../Assests/support/sign1.png";
import star1 from "../Assests/support/star1.png";
import star2 from "../Assests/support/star2.png";
import axios from "axios";
export const Support = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://qbitsuit-trainee.onrender.com/get-collab/"
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
      <Box sx={{ bgcolor: "#F9F8FE", pt: 7, pb: 8 }}>
        <Container maxwidth="xl">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} data-aos="zoom-in">
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "43.57px",
                    }}
                  >
                    {data?.collabSubheading}{" "}
                  </Typography>
                </Box>
                <Box sx={{ mt: { lg: 10, md: 10, xs: 4 }, width: "100%" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "30px",
                      color: "#A6A6A6",
                    }}
                  >
                    {data?.collabParagraph}{" "}
                  </Typography>
                </Box>
                <Box sx={{ gap: 10, display: "flex", mt: 9 }}>
                  <Box>
                    <img src={star1}></img>
                  </Box>
                  <Box>
                    <img src={star2}></img>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} data-aos="zoom-in-up">
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Card
                      elevation={4}
                      sx={{
                        p: 2,
                        height: "30px",
                        width: "40px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img
                        style={{ textAlign: "center" }}
                        src={data.checkPointUrl}
                      ></img>
                    </Card>
                    <Box sx={{ width: "100%", ml: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        {data?.checkPointHeading}{" "}
                      </Typography>
                      <Box sx={{ width: "90%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          {data?.checkPointParagraph}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 6 }}>
                    <Card
                      elevation={4}
                      sx={{
                        p: 2,
                        height: "30px",
                        width: "40px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img
                        style={{ textAlign: "center" }}
                        src={data.checkPointUrl}
                      ></img>
                    </Card>
                    <Box sx={{ width: "100%", ml: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        {data?.checkPointHeading}
                      </Typography>
                      <Box sx={{ width: "85%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          {data?.checkPointParagraph}{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 6 }}>
                    <Card
                      elevation={4}
                      sx={{
                        p: 2,
                        height: "30px",
                        width: "40px",
                        bgcolor: "white",
                        textAlign: "center",
                      }}
                    >
                      <img
                        style={{
                          textAlign: "center",
                          width: "100%",
                          height: "auto",
                        }}
                        src={sign1}
                      ></img>
                    </Card>
                    <Box sx={{ width: "100%", ml: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "33.89px",
                          color: "#191A15",
                        }}
                      >
                        {data?.checkPointHeading}{" "}
                      </Typography>
                      <Box sx={{ width: "85%" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "30px",
                            color: "#A6A6A6",
                          }}
                        >
                          {data?.checkPointParagraph}{" "}
                        </Typography>
                      </Box>
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
