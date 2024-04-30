





import * as React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const ForgotPasswordLink = styled.a`
  color: #F21D6B;
  text-decoration: none; // No underline by default
  cursor: pointer;
  &:hover {
    text-decoration: underline; // Underline on hover to indicate interactivity
    color: darken(#D8819E, 10%);
  }
`;

// Define global styles
export const globalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }

      #logo {      
        margin-top: 20px;
        width: 100px; /* Adjust width as needed */
        height: auto; /* This will maintain the aspect ratio */
      }

      .centered-label {
        text-align: center;
      }
    `}
  />
);
