import React from 'react';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';
class Header extends React.Component{
  constructor() {
    super();
  }
  render() {return(
    <div>
            <div className="nav_title">

                <p className="title">JAGUAR</p>
                <img id="logo"src={require("../images/v1_443-Logo.png")} width="150px" height="121.15px"/>
                <p className="title"> KARAOKE</p>
            </div>


            <div className="nav-tabs">
                <div className="nav-tab">
                  <p className="nav-tab-name">HOME</p>
                </div>

                <div className="nav-tab">
                  <p className="nav-tab-name">ABOUT</p>
                </div>

                <div className="nav-tab">
                  <p className="nav-tab-name">ROOMS</p>
                </div>

                <div className="nav-tab">
                  <p className="nav-tab-name">RENT</p>
                </div>

                <div className="nav-tab">
                  <p className="nav-tab-name">FAQ</p>
                </div>
            </div>

          </div>


    // <div>
    //           <Navbar className="border-bottom" bg='transparent' expand = 'lg'>
    //             <Navbar.Brand><a href="/" className="title">Jaguar Karaoke</a></Navbar.Brand>
    //             <Navbar.Toggle aria-controls='navbar-toggle' />
    //             <Navbar.Collapse id='navbar-toggle'>
    //
    //               <Nav className="ml-auto">
    //                 <Link className="nav-link" to='/'>Home</Link>
    //                 <Link className="nav-link" to='/about'>About</Link>
    //
    //
    //
    //               </Nav>
    //             </Navbar.Collapse>
    //           </Navbar>
    //
    //
    // </div>


  );

}}

export default Header;
