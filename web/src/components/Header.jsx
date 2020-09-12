import React from 'react';

import Error from '../pages/Error.jsx';
import About from '../pages/About.jsx';
import Rooms from '../pages/Rooms.jsx';
import Rent from '../pages/Rent.jsx';
import FAQ from '../pages/FAQ.jsx';
import Home from '../pages/Home.jsx';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Header extends React.Component {
    render() {
  return(
    <div>
    <div className="nav_title">
        {/* TITLE */}
        <p className="title">JAGUAR</p>
        <img id="logo"src={require("../images/logo.png")} width="150px" height="121.15px"/>
        <p className="title"> KARAOKE</p>
    </div>

    {/* TABS */}
    <Router>
    <div className="nav-tabs">
        <div className="nav-tab">
        <a href="/"><p className="nav-tab-name">HOME</p></a>
        {/* <Link className="nav-tab-name" to='/'>Home</Link> */}
        </div>

        <div className="nav-tab">
        <a href="/about"><p className="nav-tab-name">ABOUT</p></a>
        </div>

        <div className="nav-tab">
        <a href="/rooms"><p className="nav-tab-name">ROOMS</p></a>
        </div>

        <div className="nav-tab">
        <a href="/rent"><p className="nav-tab-name">RENT</p></a>
        </div>

        <div className="nav-tab">
        <a href="/faq"><p className="nav-tab-name">FAQ</p></a>
        </div>


    </div>

    </Router>



  </div>
  );

}}

export default Header;
