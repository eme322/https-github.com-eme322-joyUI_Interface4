import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './demo';
import SignIn from './SignIn';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(

//  ReactDOM.render(<SignIn />, document.querySelector('#app'));
/*ReactDOM.createRoot(document.querySelector("#root")!).render(*/
  <React.StrictMode>
    
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <Demo />
        <SignIn />
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
