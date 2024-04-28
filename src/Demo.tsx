
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Email from "./components/Email";
import Password from "./components/Password";
import AspectRatio from "@mui/joy/AspectRatio";
import LogInButton from "./components/LogInButton";
import ForgotPassword from "./components/ForgotPassword";
import { extendTheme } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";

const theme = extendTheme({colorSchemes: {
  light: {
    shadowChannel: '12 12 12',
  },
  dark: {
    shadowChannel: '0 0 0',
  },
},
});

export default function SignInSheet() {

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);

    }
  };

  return (
    <div
      style={{
        margin: -8,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Card
        variant="solid"
        sx={(theme) => ({
          width: 450,
          height: 406,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Adjusted boxShadow value
        })}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src="https://www.boardx.us/content/images/2023/11/BoardX-Logo.png" alt="BoardX Logo" />
          <div
            style={{
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: "40px",
              fontSize: "30px",
              color: "rgb(255,255,255)"
            }}
          >
            <Typography sx = {{ color: "rgb(255,255,255)"}} level = "h3">Welcome to BoardX!</Typography>
          </div>
              <FormControl>
          <div style={{ margin: "20px 0" }}>
            <Email />
          </div>
          <div style={{ margin: "20px 0" }}>
            <Password />
          </div>
          <div style={{ margin: "20px 0" }}>
            <LogInButton />
          </div>
          <div style={{ margin: "20px 0" }}>
            <ForgotPassword />
          </div>
                </FormControl>
        </div>
      </Card>
    </div>
  );
}



  
        
