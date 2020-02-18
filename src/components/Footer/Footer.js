import React from 'react';
// import Img from 'react-image';
import "./Footer.css"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Privacypolicy from './Privacypolicy';
// import { NavLink } from 'react-router-dom';



class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="footer-area" style={{ marginLeft: "15px", marginRight: "15px" }}>
          <div class="container-fluid">
            <div class="row section_gap">
              <div class="col-md-3 text-center">
                <img class="img-fluid" src={"images/mandeeLogo.png"} alt="#" style={{ height: "70px", background: "#4c4c4e" }} />

                <div>
                  <a href="https://www.facebook.com/MandeeOnline"><FontAwesomeIcon class="icons" icon={faFacebook} /></a>
                  <a href="https://twitter.com/MandeeOnline"><FontAwesomeIcon class="icons" icon={faTwitter} /></a>
                  <a href="https://www.linkedin.com/company/mandee-online"><FontAwesomeIcon class="icons" icon={faLinkedin} /></a>
                  <a href="https://www.youtube.com/channel/UClKe9znc6rQaP1j2wP1xRkw?view_as=subscriber"><FontAwesomeIcon class="icons" icon={faYoutube} /></a>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="single-footer-widget tp_widgets">
                  <h5 class="footer_title">ABOUT</h5>
                  <ul class="list">
                    <li><a href="/Contactus">Contact us</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="\">Careers</a></li>
                    <li><a href="/Newspage">News</a></li>
                    
                  </ul>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <div class="single-footer-widget tp_widgets">
                  <h5 class="footer_title">HELP </h5>
                  <ul class="list">
                    {/* <li><a href="/WorkWithUS">Work with us</a></li> */}
                    <li><a href="/">Payments</a></li>
                    <li><a href="/">Shipping</a></li>
                    <li><a href="/">Cancellation & Returns</a></li>
                    <li><a href="/">FAQs</a></li>

                    
                  </ul>
                </div>
              </div>
              <div class="col-md-3 text-left">
                <div class="single-footer-widget tp_widgets">
                  <div>
                    <h5 class="footer_title">POLICY </h5>
                    <ul class="list">
                    <li><a href="\Termsandcondition">Terms of use</a></li>
                    <li><a href="/Privacypolicy">Privacy & policy</a></li>
                    <li><a href="/">Security</a></li>
                    {/* <li><a href="/"></a></li> */}
                  </ul>
                    {/* <h5 class="footer_title">Mandee HO</h5>
                    <p>Brigade Software Park, No. 42, Ground Floor, B Block, 27th Cross<br />
                      Rd, Banashankari Stage II, Banashankari,<br />
                      Bangalore<br />
                      Karnataka<br />
                      560070</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;