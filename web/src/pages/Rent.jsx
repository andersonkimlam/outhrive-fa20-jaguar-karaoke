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


              Come study at Jaguar! Our rooms are now open for group study and meeting spaces.


              Bring the party to your home! Our karaoke machines are ready to rent. Delivery services available.
        </div>


        <div className = "calendarButton">
            <a href="/calendar"><button> View Calendar </button> </a>

        </div>



        <div className="GoogleForm"> 


        </div>
      
      </div>

    );

  }
}

export default Rent;
