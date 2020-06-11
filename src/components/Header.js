import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav>
            <h1 id= "project-title"> Tabula Aurea</h1>
            <ul className="navbar">
                <Link to={'/month'}><li className="navbtn">Monthly Budget</li></Link>
                <Link to={'/asli'}><li className="navbtn">Balance Sheet</li></Link>
                <Link to={'/goals'}><li className="navbtn">Goals & Wishlist</li></Link>
                <Link to={'/invest'}><li className="navbtn">Investment Tracker</li></Link>
                {/* {user is logged in  */}
                {/* ?  */}
                <button onClick={ props.logout } id="logout">Logout</button>
                {/* :  */}
                <button onClick={ props.register } id="register">Register</button>
                <button onClick={ props.login } id="login">Login</button>
                {/* } */}
            </ul>
        </nav>
    );
}

export default Header;
