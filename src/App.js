import React from 'react';

import Header from './components/Header';
import routes from './config/routes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      { routes }
      <Footer />
    </div>
  );
}

export default App;
