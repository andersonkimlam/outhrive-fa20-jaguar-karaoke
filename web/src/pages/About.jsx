import React from 'react';

class About extends React.Component {

  render() {
      return (
        <div className="about-page">
            <h1>About Us</h1>
            <div className="row">
            <p>For over 5 Years, Jaguar Karaoke has been a central part of the lives and experiences of the Berkeley and Oakland community. We are not just a karaoke lounge - we pride ourselves on the welcoming and entertaining environment that we have provided to our patrons. As a host for UC Berkeley orientations, we have become an important core of memories for students and university organizations. Our goal is to continue to foster our values of community and bonding in the delivery of our exceptional service, superb facilities, and welcoming environment. </p> 
            <img id="sign" src={require("../images/about-image.png")} style={{height: "40vh"}}/>
            </div>
        </div>
      );
  }
}

export default About;
