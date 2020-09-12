import React from 'react';

class Rent extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1>Rental</h1>
        <p>Currently, we are offering rental services in the form of karaoke machines for personal use, and study spaces at our 
physical locations. To rent, please (insert text about how to rent each - via Google Form below, calling Paul, etc.)</p>
        
        <div className="row">
              <div> 
              <p>Study spaces  </p>
              <p>Karaoke Machines </p>
                <img src={require("../images/study.png")}/> 
                

                <img src={require("../images/mic 2.png")}/>

              </div>
        </div>
      
      </div>

    );

  }
}

export default Rent;
