import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const url = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
     {url}
    </div>
  );
}

export default App;
