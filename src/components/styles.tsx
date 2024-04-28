// joyUI_Interface1/src/components/styles.tsx
// styles.tsx
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const ForgotPasswordLink = styled.a`
  width: 450px;
  color: #D8819E;
  display: inline-block;
  padding: 12px;
  border: 1px solid #D8819E;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #430A1F;
  }
`;

export const globalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
    `}
  />
);

