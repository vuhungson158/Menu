import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './component/mainMenu';
import Navbar from './component/navbar';
import './styles/App.scss'
import './styles/Reset.css'

function App({isDark}) {
  return (
    <div className="App">
      <Navbar />
      <MainMenu />
    </div>
  );
}

const mapStateToProps = state => ({
  isDark: state.theme.dark
});

export default connect(mapStateToProps)(App)
