import React, { Component} from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Footer extends React.Component {



    render() {
  return(
    <footer id ="footer">


      <div className ="container-fluid">
        <div class="row2 m-row justify-content-between">


        <div className ="Contacts col-4">
          <p>Contact us: (Paul's Phone #) <br/>
           <br/> <br/>


          © 2020 Jaguar Karaoke
          </p>
        </div>


        <div className ="BerkeleyLocation col-4"  md={3} sm={12}>
                    <p><strong>Berkeley Location</strong> <br/> <br/>

                    <strong> Address </strong> &nbsp; &nbsp;2516 Durant Ave, Berkeley, CA 94704  <br/>
                    <strong> Hours </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Sun - Sat: 6PM - 2AM

                    </p>
          </div>

      <div className ="OaklandLocation col-4">

                  <p><strong>Oakland Location</strong> <br/> <br/>

                  <strong> Address </strong> &nbsp; &nbsp;4390 Telegraph Ave, Oakland, CA 94609 <br/>
                  <strong> Hours </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Sun - Sat: 6PM - 2AM
                  </p>
        </div>





          <div className ="fbdiv col-4"  md={3} sm={12}>
            <p><strong> Connect with us to stay updated!</strong></p>
           <iframe className = "fb" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fofficialjaguarkaraoke&tabs&width=340&height=120&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="120" border="none"overflow="hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

          </div>

          <div className ="gfmdiv col-4">


              <iframe className = "gofundme" src="https://www.gofundme.com/f/qz56ca-stop-jaguar-karaoke-from-closing-forever/widget/medium/support"   frameborder= '0' allowfullscreen= 'true' aria-hidden='false' tabindex= '0' ></iframe>


          </div>








        </div>

        </div>
        <div className = "footerBottom"> </div>
    </footer>
  );

}}

export default Footer;
