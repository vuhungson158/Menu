import React from 'react';
import MainMenu from './component/mainMenu';
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

const mapStateToProps = state => ({
  theme: state.theme.dark
});

export default connect(mapStateToProps)(App)
