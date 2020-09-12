import React from 'react';
import './App.css';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import Rooms from './pages/Rooms.jsx';
import Rent from './pages/Rent.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';

// import Popup from "reactjs-popup";
// import PopupContent from "./components/PopupContent.jsx";


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      current:"home",
      currentPath: [
        { current: "home", path: "/"},
        { current: "about", path: "/about"}
      ],

    }
    
  }

  currentTab(tab) {
    this.setState({current: tab})
    console.log("hi")
  }

  render() {
    return (

        <Router id ="site-container">


      
          <Header currentTab={this.state.current} onEnter={this.state.currentPath.current}/>

        <Switch id = "site-content">

          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/home" render={() => <Home />}/>

          <Route exact path="/about" render={() => <About />}/>
          <Route exact path="/rooms" render={() => <Rooms />}/>
          <Route exact path="/rent" render={() => <Rent />}/>
          <Route exact path="/faq" render={() => <FAQ />}/>


          <Route component={Error}/>

          </Switch>
          <Footer id ="footer"/>

        </Router>






    );
  }

}

export default App;
