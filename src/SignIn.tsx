import React from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/joy';

interface SignInFormProps {
  // Add any props you might need for the form
}

const SignInForm: React.FC<SignInFormProps> = () => {
  // State variables for email and password
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" component="h1" align="center">
          Welcome to Boardx!
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="solid" onClick={handleSubmit}>
          Sign In
        </Button>
        <Typography variant="body2" align="center">
          Forgot Password
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
