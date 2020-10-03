import React, { Component} from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import '../App.css'
class Footer extends React.Component {



    render() {
  return(
    <footer id ="footer">


      <div className ="container-fluid">
        <div class="row2 m-row justify-content-between">


        <div className ="Contacts col-sm-2 col-sm-push-4">
          <p><strong>Contact us</strong><br/><br/>
           415-577-2196 <br/>
          </p>
        </div>





        <div className ="BerkeleyLocation col-sm-4 col-sm-push-2"  md={8} sm={12}>

                    <p><strong>Berkeley Location</strong> <br/> <br/>

                    <strong> Address </strong> &nbsp; &nbsp;2516 Durant Ave, Berkeley, CA 94704  <br/>
                    <strong> Hours </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Sun - Sat: 6PM - 2AM

                    </p>
          </div>

      <div className ="OaklandLocation col-sm-2 col-sm-push-4">

                  <p><strong>Oakland Location</strong> <br/> <br/>

                  <strong> Address </strong> &nbsp; &nbsp;4390 Telegraph Ave, Oakland, CA 94609 <br/>
                  <strong> Hours </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Sun - Sat: 6PM - 2AM
                  </p>
        </div>




                  <div className ="fbdiv col-sm-4 col-sm-push-2"  md={3} sm={12}>
                    <p><strong> Connect with us</strong></p>


                   <iframe className = "facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fofficialjaguarkaraoke&tabs&width=340&height=120&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" border="none"overflow="hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

                   <div className ="gfmdiv">
                    <iframe className = "gofundme" src="https://www.gofundme.com/f/qz56ca-stop-jaguar-karaoke-from-closing-forever/widget/medium/support"  scrolling="no"  height = "200px" frameborder= '0' allowfullscreen= 'true' aria-hidden='false' tabindex= '0' ></iframe>
                    </div>

                </div>



          <p div class="copyright">  © 2020 Jaguar Karaoke</p>
          </div>


</div>


        <div className = "footerBottom"> </div>
    </footer>
  );

}}

export default Footer;
