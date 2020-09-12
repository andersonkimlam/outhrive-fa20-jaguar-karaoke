import React from 'react';
import Popup from "reactjs-popup";
import Content from "../Content.js";
function HomePage(props) {

  return (
    <div>
      <div>
    <Popup open={true} modal>
            {close => <Content close={close} />}
          </Popup>
      </div>


      <body>
          <div class="v7_0">
              <div class="v70_15">
                  <div class="v19_55"></div><span class="v18_71">COVID-19 Notice:</span><span class="v18_73">For the safety of
                      our employees and the Berkeley</span>
              </div>
              <div class="v70_16"><span class="v18_85">Welcome to Jaguar Karaoke -- Bay Area’s premier karaoke business. For
                      years, we have provided an exciting and safe environment for local communities to enjoy Karaoke and we
                      are excited to continue offering our services to help create memorable experiences!</span><span
                      class="v18_104">Whether it’s hosting a club event or having the perfect Saturday night out with friends,
                      Jaguar Karaoke is the go-to place for any occasion! Pick from our [#] rooms, which come equipped with
                      karaoke machines, flat screen TVs, HDMI ports, high-speed wifi, and more!

                      On our website, you’ll find all necessary information regarding our rental services, mission, store
                      hours, and FAQs.</span> <span class="v18_76">Welcome!</span>   </div>
              <div class="v18_101"></div>
              <div class="v43_1"><span class="v18_47">Berkeley</span>
                  <div class="v18_64"></div><span class="v18_58">Address</span><span class="v18_68">2516 Durant Ave, Berkeley,
                      CA 94704</span><span class="v18_59">Hours</span><span class="v18_70">Sun - Sat: 6PM - 2AM</span><span
                      class="v18_48">Oakland</span>
                  <div class="v18_65"></div><span class="v18_75">Address</span><span class="v18_66">4390 Telegraph Ave,
                      Oakland, CA 94609</span><span class="v18_62">Hours</span><span class="v18_67">Sun - Sat: 6PM -
                      2AM</span>
                  <div class="v18_81"></div><span class="v18_46">Locations</span>
              </div><span class="v119_2">community, we have decided to temporarily limit our in-store karaoke operations.
                  Select services including our karaoke machine rental service and room rentals are still in operation, but
                  have been modified to follow safety regulations from local health and government officials.</span>
              <div class="v148_190"></div>
              <div class="v148_191">
                  <div class="v148_192"></div>
                  <div class="v148_193"></div><span class="v148_194">Follow us on social media!</span>
                  <div class="v148_195">
                      <div class="v148_196"></div>
                      <div class="v148_197"></div>
                      <div class="v148_198"></div>
                  </div>
                  <div class="v148_199"><span class="v148_200">Berkeley Location <br /> <br />
                          <strong>Address</strong> &nbsp; 2516 Durant Ave, Berkeley, CA 94704 <br />
                          <strong>Hours</strong> &nbsp; &nbsp; &nbsp; &nbsp;Sun - Sat: 6PM - 2AM</span>

                      <span class="v148_201">Oakland Location

                          <strong>Address</strong> &nbsp; 4390 Telegraph Ave, Oakland, CA 95609<br />
                          <strong>Hours</strong> &nbsp; &nbsp; &nbsp; &nbsp;Sun - Sat: 6PM - 2AM
                          </span>

                  </div><span class="v148_202">© 2020 Jaguar Karaoke</span><span class="v148_203"><strong>Contact us:</strong>
                      (Paul’s phone
                      #)</span><span class="v148_204"><strong>Support us:</strong> (link to
                      Gofundme)</span>
              </div>
              <div class="v71_9">
                  <div class="v19_40"></div>
                  <div class="v82_0"></div>
                  <div class="v19_0"></div>
                  <div class="v71_4"></div>
                  <div class="v71_5"></div>
                  <div class="v71_6"></div>
                  <div class="v71_7"></div><span class="v19_7">FAQ</span>
                  <div class="v19_8"></div>
                  <div class="name"></div><span class="v18_0">JAGUAR KARAOKE</span><span class="v71_8">HOME</span><a href="/about"><span class="v19_4">ABOUT</span></a><a
                      href="/rooms"><span class="v19_5">ROOMS</span></a><span class="v19_6">RENT</span>
              </div>
          </div>
      </body>


  </div>


  );

}

export default HomePage;
