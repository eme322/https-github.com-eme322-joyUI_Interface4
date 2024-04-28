import * as React from 'react';
import styled from '@emotion/styled';

const ForgotPasswordLink = styled.a`
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

export default function BasicButtons() {
  return (
    <ForgotPasswordLink href="/forgot-password">
      Forgot Password
    </ForgotPasswordLink>
  );
}
