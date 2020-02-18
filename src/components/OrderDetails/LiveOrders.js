import React, { Component } from 'react';
import CPRCTabs from './CPRCTabs';
import Footer from '../Footer/Footer';

export default class LiveOrders extends Component {

    render() {
        return (
            <div className="">
                <CPRCTabs />
                <h1>LiveOrders Component</h1>
                <Footer />
            </div>
        )
    }

}
