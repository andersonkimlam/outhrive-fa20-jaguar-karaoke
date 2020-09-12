import React from 'react';


class Footer extends React.Component {
    render() {
  return(
    <footer className="mt-5" id ="footer">

        <div className="row border-top justify-content-between p-3">
          
          <div className='col p-0' md={3} sm={12}>
            
            
          <div className ="Contacts"> 
            <p>Contact us: (Paul's Phone #) <br/>
            Support us: (link to Gofundme) <br/> <br/>

            © 2020 Jaguar Karaoke
            </p>
          </div>

          <div className ="BerkeleyLocation">
            <p><strong>Berkeley Location</strong> <br/> <br/>

            <strong> Address </strong> 2516 Durant Ave, Berkeley, CA 94704  <br/>
            <strong> Hours </strong> Sun - Sat: 6PM - 2AM

            </p>
          </div>

          <div className ="OaklandLocation">

          <p><strong>Oakland Location</strong> <br/> <br/>

          <strong> Address </strong> 4390 Telegraph Ave, Oakland, CA 95609 <br/>
          <strong> Hours </strong> Sun - Sat: 6PM - 2AM
          </p>
          </div> 


          <div className ="SocialMedia">
          <p>
            Follow us on social media! <br/>
            <div className = "mediaImages">
            <a href = "https://www.google.com">
            <img src={require("../images/instagram.png")}/>
            </a>

            <a href = "https://www.google.com">
            <img src={require("../images/facebook.png")}/>
             </a>

             <a href = "https://www.google.com">
            <img src={require("../images/twitter.png")} /> 
            </a>

            </div>
            </p>
            
          </div>





            </div>

        </div>

      <div className = "footerBottom"> </div>
    </footer>
  );

}}

export default Footer;
