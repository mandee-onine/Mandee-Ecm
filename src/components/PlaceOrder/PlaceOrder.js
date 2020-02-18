import React from 'react'
import Footer from '../Footer/Footer'


export default class PlaceOrder extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ display: "absolute", border: "150px lightgray solid", marginLeft: "20px", marginRight: "20px", background: "lightgray", padding: "10px", maxWidth: "100%", height: 'auto' }}>
                    <div style={{ marginLeft: "20px" }}>
                        <img src={"/images/OrderPlace/placeOrder.jpg"}
                            style={{
                                display: "relative",
                                border: "1px black solid", padding: "5px",
                                maxWidth: "100%"
                            }} />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

