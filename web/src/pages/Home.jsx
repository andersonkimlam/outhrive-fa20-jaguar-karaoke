import React from 'react';
import '../App.css';
import Popup from "reactjs-popup";
import PopupContent from "../components/PopupContent.jsx";

class Home extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (

      <div>

        <div>
          <Popup open={true} modal>
            {close => <PopupContent close={close} />}

          </Popup>
        </div>

      <div id="home">


        <div className="row">
            <div className="col" style={{width: "30%"}}>
              <h1 id="locations">Locations</h1>

              <h2 className="city">Berkeley</h2>
              <br/>
              <iframe className = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6809834049027!2d-122.26032924863442!3d37.86775427964323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c2f1441bb1d%3A0xc974342904e7c6f4!2sJaguar%20Karaoke%20Berkeley!5e0!3m2!1sen!2sus!4v1599936983018!5m2!1sen!2sus"   frameborder= '0' allowfullscreen= 'true' aria-hidden='false' tabindex= '0'></iframe>
                <div className="row">
                  <p className="loc-bold">Address</p> <p className="loc-info">2516 Durant Ave, <br/> Berkeley, CA 94704</p>
                </div>
                <div className="row">
                  <p className="loc-bold">Hours</p> <p className="loc-info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun - Sat: 6PM - 2AM</p>
                </div>
              <h2 className="city">Oakland</h2>
              <br/>
              <iframe className = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.2073673137943!2d-122.26547704863519!3d37.83203097964974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857de257000673%3A0x34f03697e548dca5!2sJaguar%20Karaoke%20Oakland!5e0!3m2!1sen!2sus!4v1599937512604!5m2!1sen!2sus"   frameborder= '0' allowfullscreen= 'true' aria-hidden='false' tabindex= '0'></iframe>
                <div className="row">
                  <p className="loc-bold">Address</p> <p className="loc-info">4390 Telegraph Ave, <br/>Oakland, CA 94609</p>
                </div>
                <div className="row">
                    <p className="loc-bold">Hours</p> <p className="loc-info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sun - Sat: 6PM - 2AM</p>
                  </div>
            </div>

            {/* LINE DIVIDER */}
            <hr style={{width:"1", size:"961px"}}/>


            <div className="col" style={{width:"70%"}}>
                <div id="notice-box">
                  <p> <span id="covid">COVID-19 Notice: </span>  For the safety of our employees and the Berkeley community, we have decided to temporarily limit our in-store karaoke operations. Select services including our karaoke machine rental service and room rentals are still in operation, but have been modified to follow safety regulations from local health and government officials.</p>
                </div>

                <h2 id="welcome">Welcome!</h2>
                <p> Welcome to Jaguar Karaoke -- Bay Area’s premier karaoke business. For years, we have provided an exciting and safe environment for local communities to enjoy Karaoke and we are excited to continue offering our services to help create memorable experiences!</p>
                <div className="row">
                  <img id="mic" src={require("../images/mic.png")}/>
                  <p>
                  Whether it’s hosting a club event or having the perfect Saturday night out with friends, Jaguar Karaoke is the go-to place for any occasion! Pick from our rooms, which come equipped with karaoke machines, flat screen TVs, HDMI ports, high-speed wifi, and more!

On our website, you’ll find all necessary information regarding our rental services, mission, store hours, and FAQs.
                  </p>

                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
