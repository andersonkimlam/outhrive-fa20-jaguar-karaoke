import React from 'react';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {

  return(

    <div>
              <Navbar className="border-bottom" bg='transparent' expand = 'lg'>
                <Navbar.Brand><a href="/" className="title">Jaguar Karaoke</a></Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-toggle' />
                <Navbar.Collapse id='navbar-toggle'>

                  <Nav className="ml-auto">
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/about'>About</Link>



                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              
    </div>


  );

}

export default Header;
