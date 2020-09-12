import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main-kg.css';

import Popup from "reactjs-popup";
import Content from "./Content.js";


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutPage from './pages/AboutPage.js';
import ErrorPage from './pages/ErrorPage.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: "Jaguar Karaoke",
        headerLinks: [
          { title: "Home", path: "/"},
          { title: "Projects", path: "/projects"},
          { title: "About", path: "/about"}
          // { title: "Contact", path: "/contact"}
        ],
        home: {
          title: 'Home'
        },
        about: {
          title: "About"
        }

      };
    }


  render() {return (
    <Router>
      <Container className='p-0' fluid={true}>
        <Header />
          <Switch>

          <Route exact path="/" render={() => <HomePage title={this.state.home.title}/>} />
          <Route exact path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
          <Route component={ErrorPage}/>

          </Switch>

          <Footer />
      </Container>
    </Router>

  );
}}

export default App;
