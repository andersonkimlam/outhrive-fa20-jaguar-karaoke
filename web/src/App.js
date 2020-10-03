import React from 'react';
import './App.css';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import Rooms from './pages/Rooms.jsx';
import Rent from './pages/Rent.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';

// import Popup from "reactjs-popup";
// import PopupContent from "./components/PopupContent.jsx";


import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      current:"/",
      // currentPath: [
      //   { current: "home", path: "/"},
      //   { current: "about", path: "/about"}
      // ],

    }

  }

  currentTab = (tab) => {
    this.setState({current: tab})
    console.log("hi")
  }

  render() {
    return (

        <div className ="wholeSite">
<meta name="viewport" content="width=device-width, initial-scale=1"/>





      <Header/>




          <Footer id ="footer"/>

        </div>






    );
  }

}

export default App;
