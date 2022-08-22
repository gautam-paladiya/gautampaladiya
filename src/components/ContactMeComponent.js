import { Box, Button, Input, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import TitleComponent from "./TitleComponent";

function ContactMeComponent() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} id="section_contact">
      <TitleComponent text="Get In Touch" />
      <Box
        container
        component="form"
        validate
        autoComplete="false"
        sx={{
          mt: 5,
          mx: 3,
          gap: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            gap: 5,
            width: "100%",
          }}
        >
          <Input placeholder="Name" fullWidth margin="dense" />
          <Input placeholder="Subject" fullWidth />
        </Box>
        <Input placeholder="Email" fullWidth />
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          multiline
          rows={2}
          //   value={value}
          //   onChange={handleChange}
          variant="standard"
          sx={{ width: "100%" }}
        />
        <Button variant="outlined" color="secondary" size="large">
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default ContactMeComponent;
