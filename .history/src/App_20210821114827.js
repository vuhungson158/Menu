import React from 'react';
import MainMenu from './component/mainMenu';
import PaymentScreen from './component/payment-container';
import Navbar from './component/navbar';
import './styles/App.scss'
import './styles/Reset.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainMenu />
    </div>
  );
}

export default App;
