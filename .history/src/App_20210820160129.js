import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      {payment ? <PaymentScreen /> : <MainMenu />}
    </div>
  );
}

export default App;
