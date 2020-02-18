import React, { Component } from 'react'
import CPRCTabs from './CPRCTabs'
import Footer from '../Footer/Footer'

export default class CurrentOrders extends Component {

    render() {
        return (
            <div>
                <CPRCTabs />
                <h1> CurrentOrder component</h1>
                <Footer />
            </div>
        )
    }
}

