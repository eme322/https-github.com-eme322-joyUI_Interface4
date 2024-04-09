import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import demo from './demo';


ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider injectFirst>
        
        <demo />

      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
