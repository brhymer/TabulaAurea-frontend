import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>Project title</h1>
            <ul className="navbar">
                <Link to={'/month'}><li className="navbtn">Monthly Budget</li></Link>
                <Link to={'/asli'}><li className="navbtn">Balance Sheet</li></Link>
                <Link to={'/goals'}><li className="navbtn">Goals & Wishlist</li></Link>
                <Link to={'/invest'}><li className="navbtn">Investment Tracker</li></Link>
            </ul>
        </nav>
    );
}

export default Header;
