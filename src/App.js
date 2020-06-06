import React, { useState } from 'react';

import Header from './components/Header';
import Routes from './config/routes';
import Footer from './components/Footer';
import UserModel from './models/User';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] =useState(
    localStorage.getItem('userid'))

  const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('userid', userId)
  }

  // const logout = (event) => {
  //   event.preventDefault()
  //   localStorage.removeItem('userid')
  //   UserModel.logout()
  //   .then(res => {
  //     console.log(res)
  //     setCurrentUser({ currentUser: null })
  //     props.history.push('./login')
  //   })
  // }

  return (
    <div className="App">
      <Header 
        currentUser= { currentUser }
        // logout={ logout }
      />
      {/* <Routes
        currentUser={ currentUser }
        storeUser={ storeUser }
      /> */}
      <Footer />
    </div>
  );
}

export default App;
