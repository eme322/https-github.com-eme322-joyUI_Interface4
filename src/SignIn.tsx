// SignIn.tsx
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Typography from '@mui/joy/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/joy/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const SignIn: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted', values);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography level="h4" component="h1" gutterBottom>
        Welcome to Boardx!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          value={values.email}
          onChange={handleChange('email')}
          sx={{ width: '100%', my: 2 }}
          inputProps={{
            placeholder: 'Email Address',
            id: 'email',
            name: 'email',
            autoComplete: 'email',
            autoFocus: true
          }}
        />
        <TextField
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          sx={{ width: '100%', mb: 2 }}
          inputProps={{
            placeholder: 'Password',
            id: 'password',
            name: 'password',
            autoComplete: 'current-password'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          sx={{ textTransform: 'none' }}
        >
          Forgot Password
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
