import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const url = process.env.URL_TEST;
  return (
    <div className="App">
     {url}
    </div>
  );
}

export default App;
