import React from 'react';
import './stylies/style.css';
import './stylies/style_article.css';
import logo from './images/logo.png';
import {Link} from "react-router-dom";

const Top = () => {
    return (
        <header>
            <div className="header">
                <div className="menu" >
                    <div style={{textAlign: 'center'}}>
                        <img src={logo} alt="Logo"  style={{maxHeight: '220px', maxWidth: '200px', paddingTop:'10px'}}/>
                    </div>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        maxHeight: '100px'
                    }}>
                        <li><Link id="News" to="/">Latest Posts</Link></li>
                        <li><Link id="About" to="/about-us">About us</Link></li>
                        <li><Link id="Account" to="/account">Your Account</Link></li>
                        <li><Link id="Register" to="/sign">Sign Up</Link></li>
                        <li><Link id="LogIn" to="/login">Log In</Link></li>
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Top;
