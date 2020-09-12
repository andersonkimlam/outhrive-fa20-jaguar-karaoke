import React from 'react';


class Footer extends React.Component {
    render() {
  return(
    <footer className="mt-5" id ="footer">

        <div className="row border-top justify-content-between p-3">
          <div className='col p-0' md={3} sm={12}>
            
          <div className ="Contacts">
            Contact us: (Paul's Phone #) <br/>
            Support us: (link to Gofundme) <br/> <br/>

            © 2020 Jaguar Karaoke

          </div>

          <div className ="BerkeleyLocation">
            <p><strong>Berkeley Location</strong> <br/> <br/>

            <strong> Address </strong> 2516 Durant Ave, Berkeley, CA 94704  <br/>
            <strong> Hours </strong> Sun - Sat. 6PM - 2AM

            </p>
          </div>

          <div className ="OaklandLocation">

          <p><strong>Oakland Location</strong> <br/> <br/>

          <strong> Address </strong> 4390 Telegraph Ave, Oakland, CA 95609 <br/>
          <strong> Hours </strong> Sun - Sat. 6PM - 2AM
          </p>
          </div> 


          <div className ="SocialMedia">
          <p>
            Follow us on social media! <br/>

            <img src="./logo.png" ></img>
            <img src="./logo.png" ></img>
            <img src="./logo.png" ></img>
            </p>
          </div>





            </div>

        </div>

      <div className = "footerBottom"> </div>
    </footer>
  );

}}

export default Footer;
