





import * as React from "react";
import Input from "@mui/joy/Input";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';


export default function PasswordInput() {
  return (
    <FormControl>
      <FormLabel htmlFor="email-input">Team name (e.g. ACME Product Team) </FormLabel>
      <Input
        id="email-input"
        type="email" 
        variant="outlined"
        color="neutral"
        sx={{ backgroundColor: "white"}} //, "--Input-focusedHighlight": "gray" }}
        placeholder="" 
      />
    </FormControl>
  );
}