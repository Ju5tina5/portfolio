import React from 'react';
import './header.css';
import logo from './Me.jpg';


function Head() {
    return (
        <div className ="header">
           <img src={logo} alt="It's me"></img>
           <div className="social">
                <i href="#" className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-rss"></i>
           </div>
        </div>
    );
}


export default Head;