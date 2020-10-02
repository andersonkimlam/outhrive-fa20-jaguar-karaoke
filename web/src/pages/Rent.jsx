import React from 'react';

class Rent extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1>Rental</h1>
        <p>Do you miss singing your heart out? We are offering karaoke rentals delivered straight to your home. Start your party today by filling out the Google form below or call at 415-577-2196.</p>

        <div class="container">
          <div class="pics_in_a_row">
            <div class="img1"><h1>Karaoke Machines</h1>

            <img src={require("../images/mic 2.png")}/>
            <p>Bring the party to your home! Our karaoke machines are ready to rent. Delivery services available.
            </p>
            </div>
            <div class="img2"><h1>Study Spaces</h1>
            <img src={require("../images/study.png")}/>
            <p>Come back to our locations when we open rooms for group study and meeting spaces!
            </p>
            </div>
         </div>
         </div>

        <div>
        <iframe className = "googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSd9lOod0B9muY8nI-iSsfRcw8Rv53PSfCUF3GG4LJYtm25hOg/viewform?embedded=true" frameborder ='0' marginheight= '0' marginwidth= '0'>Loading…</iframe>
        </div>
      </div>


            );

          }
          }

          export default Rent;
