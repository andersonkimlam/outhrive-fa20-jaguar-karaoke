import React from 'react';
import '../App.css';

class Home extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div id="home">
        <div className="row">
            <div className="col" style={{width: "30%"}}>
              <h1 id="locations">Locations</h1>

              <h2 className="city">Berkeley</h2>
                <div className="row">
                  <p className="loc-bold">Address</p> <p className="loc-info">2516 Durant Ave, Berkeley, CA 94704</p>
                </div>
                <div className="row">
                  <p className="loc-bold">Hours</p> <p className="loc-info">Sun - Sat: 6PM - 2AM</p>
                </div>
              <h2 className="city">Oakland</h2>
                <div className="row">
                  <p className="loc-bold">Address</p> <p className="loc-info">4390 Telegraph Ave, Oakland, CA 94609</p>
                </div>
                <div className="row">
                    <p className="loc-bold">Hours</p> <p className="loc-info">Sun - Sat: 6PM - 2AM</p>
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
                  Whether it’s hosting a club event or having the perfect Saturday night out with friends, Jaguar Karaoke is the go-to place for any occasion! Pick from our [#] rooms, which come equipped with karaoke machines, flat screen TVs, HDMI ports, high-speed wifi, and more!

On our website, you’ll find all necessary information regarding our rental services, mission, store hours, and FAQs.
                  </p>
                  
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
