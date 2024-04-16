import React from 'react';
import './App.css';
import SignIn from './SignIn'; // Make sure the path matches where you placed your file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Other content */}
        <SignIn />
      </header>
    </div>
  );
}

export default App;
