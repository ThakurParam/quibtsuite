import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material";

export const SwiitchB = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const theme = useTheme();

  const accordionStyle = {
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Accordion
      sx={{ p: 5, borderRadius: "12px" }}
      style={accordionStyle}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveIcon
              sx={{
                color: "black",
                p: "10px",
                bgcolor: "#5ADA5F",
                borderRadius: "10px",
              }}
            />
          ) : (
            <AddIcon
              sx={{
                color: "#5ADA5F",
                p: "10px",
                bgcolor: "#f7f7ff",
                borderRadius: "10px",
              }}
            />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20.68px",
            lineHeight: "26.32px",
            color: "#170F49",
          }}
        >
          Is NoCode the future of the web?
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          fontWeight: 400,
          fontSize: "16.92px",
          lineHeight: "28.2px",
          color: "#6F6C90",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};
