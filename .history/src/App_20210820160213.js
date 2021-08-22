import React from 'react';
import MainMenu from './component/mainMenu';
import PaymentScreen from './component/payment-container';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {payment ? <PaymentScreen /> : <MainMenu />}
    </div>
  );
}

export default App;
