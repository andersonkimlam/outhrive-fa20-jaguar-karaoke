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

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      current: window.location.pathname,
    }

    // if (this.state.current === "/") {
    //   this.currentTab("home")
    // }

  }



  currentTab = (tab) => {
    this.setState({current: tab})
    // console.log("hi")

  }



  render() {
    console.log(this.state.current)
      return(
        <div id = "header">
            {/* <Navbar className="border-bottom" bg='transparent' expand = 'lg'>

            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav> */}



        <div className="nav_title">
            {/* TITLE */}
            <p className="title">JAGUAR</p>
            <a href = "/">


            <img id="logo"src={require("../images/logo.png")} width="150px" height="121.15px"/>
            </a>
            <p className="title"> KARAOKE</p>
        </div>


        {/* TABS */}
        <Router>


          <div className="nav-tabs">
            <div className={(this.state.current === "/") ? "current-tab" : "nav-tab"}>
              <Link to="/" onClick={() => this.currentTab("/")} ><p className="nav-tab-name">HOME</p></Link>
            </div>





            <div className={(this.state.current === "/about") ? "current-tab" : "nav-tab"}>
              <Link to="/about" onClick={() => this.currentTab("/about")}><p className="nav-tab-name">ABOUT</p></Link>
            </div>

            <div className={(this.state.current === "/rooms") ? "current-tab" : "nav-tab"}>
              <Link to="/rooms" onClick={() => this.currentTab("/rooms")} ><p className="nav-tab-name">ROOMS</p></Link>
            </div>

            <div className={(this.state.current === "/rent") ? "current-tab" : "nav-tab"}>
              <Link to="/rent" onClick={() => this.currentTab("/rent")} ><p className="nav-tab-name">RENT</p></Link>
            </div>

            <div className={(this.state.current === "/faq") ? "current-tab" : "nav-tab"}>
              <Link to="/faq" onClick={() => this.currentTab("/faq")} ><p className="nav-tab-name">FAQ</p></Link>
            </div>


        </div>

        <Switch id = "site-content">


          <Route exact path="/" render={() => <Home />} />


          <Route exact path="/about" render={() => <About />}/>
          <Route exact path="/rooms" render={() => <Rooms />}/>
          <Route exact path="/rent" render={() => <Rent />}/>
          <Route exact path="/faq" render={() => <FAQ />}/>




          <Route component={Error}/>

          </Switch>


        </Router>

          {/* </Nav>
        </Navbar.Collapse>
          </Navbar> */}
  </div>
  );

}}

export default Header;
