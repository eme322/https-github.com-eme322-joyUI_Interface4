import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './demo';
import SignIn from './SignIn';



ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <Demo />
        <SignIn />
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
