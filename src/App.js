import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './config/routes';
import Footer from './components/Footer';
import UserModel from './models/User';
import './index.css';

function App(props) {

  const [currentUser, setCurrentUser] =useState(
    localStorage.getItem('userid'))

  const storeUser = (userId) => {
    // setCurrentUser({ currentUser: userId })
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('userid', userId)
  }

  const logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('userid')
    UserModel.logout()
    .then(res => {
      console.log(res)
      // setCurrentUser({ currentUser: null })
      setCurrentUser(null)
      props.history.push('./login')
    })
  }

  const login = (event) => {
    event.preventDefault()
    props.history.push('./login')
  }

  const register = (event) => {
    event.preventDefault()
    props.history.push('./register')
  }

  return (
    <div className="App">
      <Header 
        currentUser= { currentUser }
        logout={ logout }
        login={ login }
        register={ register }

      />
      <hr className="tophr" />
      <Routes
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
      <Footer />
    </div>
  );
}

export default withRouter (App);
