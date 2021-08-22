import React from 'react';
import MainMenu from './component/mainMenu';
import Navbar from './component/navbar';
import './styles/App.scss'
import './styles/Reset.css'

function App() {
  return (
    <div className="App">
      <style>
        :root{
          
        }
      </style>
      <Navbar />
      <MainMenu />
    </div>
  );
}

export default App;
