import React, { PureComponent } from 'react'
import Footer from './Footer'

class WorkWithUS extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <a><img src={"/images/workwithus.png"} style={{ width: "auto", height: "800px", marginRight: "20px" }} class="logo" alt="Mandee logo" /></a>
                </div>

                <div className="workwith">

                    <div className="col-md-3">
                        <h3>Passionate</h3>
                        <p>We are passionate about leading food commerce into the next generation and revolutionizing the food industry. If you are oriented towards making a large impact, then Mandee is the place for you! We focus on working fast and hard to achieve scale.</p>
                    </div>

                    <div className="col-md-3">
                        <h3>Perks and Benefits</h3>
                        <p>We offer great perks such as flexi-work hours and work from home option for a great work-life balance. Benefits also include term insurance and medical insurance for all, among others.</p>
                    </div>

                    <div className="col-md-3">
                        <h3>Beliefs</h3>
                        <p>We believe in a culture of transparency, empathy, humility, collaboration and trust. There is never a dull moment at Mandee, we are constantly ideating, innovating and deliberating. Added to that, we strive to create a workplace full of warmth.</p>
                    </div>

                    <div className="col-md-3">
                        <h3>Write to us at</h3>
                        <p>careers@mandeeonline.com</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default WorkWithUS