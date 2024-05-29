import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from './theme';
import Navbar from './navbar';
import Header from './header';
import MainContent from './main';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Header />
          <MainContent />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;