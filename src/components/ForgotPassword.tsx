import * as React from 'react';

export default function BasicButtons() {
  return (
    <a href="/forgot-password" style={{ textDecoration: 'none' }}>
      <span style={{ width: 450, color: '#D8819E', display: 'inline-block', padding: '12px', border: '1px solid #D8819E', borderRadius: '4px', textAlign: 'center', cursor: 'pointer', '&:hover': { backgroundColor: '#430A1F' } }}>
        Forgot Password
      </span>
    </a>
  );
}
