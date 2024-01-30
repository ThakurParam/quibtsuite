import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

export const Drawers = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label="Home"
            sx={{
              textTransform: "none",
              color: "black ",
              fontWeight: 600,
            }}
          />
          <Tab
            label="Add-On"
            sx={{ textTransform: "none", color: "black", fontWeight: 600 }}
          />
          <Tab
            label="Pricing"
            sx={{ textTransform: "none", color: "black", fontWeight: 600 }}
          />
          <Tab
            label="About Us"
            sx={{ textTransform: "none", color: "black", fontWeight: 600 }}
          />
        </Tabs>
        <Button
          sx={{
            mx: "auto",
            mt: 3,
            height: "46px",
            width: "80px",
            borderRadius: "6px",
            padding: "12px, 18px, 12px, 18px",
            bgcolor: "#fffff",
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
            Sign Up
          </Typography>
        </Button>
        <Button
          sx={{
            mx: "auto",
            mt: 3,
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
      </Drawer>
    </>
  );
};
