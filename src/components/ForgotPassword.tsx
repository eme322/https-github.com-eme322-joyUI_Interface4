import * as React from 'react';
import Button from '@mui/joy/Button';

export default function BasicButtons() {
  return (
    <Button sx = {{ width: 450, color: '#D8819E','&:hover': {
          backgroundColor: '#430A1F',},}} variant = "plain" >Forgot Password</Button>
    );
}
