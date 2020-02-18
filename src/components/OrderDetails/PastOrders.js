import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Flours } from '../../data';
import Axios from 'axios';
import CPRCTabs from './CPRCTabs';

export default function PastOrders() {
    // const [History, setHistory] = useState([])

    // useEffect(() => {
    //     Axios.get('Flours')
    //         .then(response => {
    //             if (response.data.success) {
    //                 setHistory(response.data.Flours)
    //             } else {
    //                 alert("invalid data")
    //             }
    //         })
    // }, [])
    return (
        <div>
            <CPRCTabs />
            <div style={{ width: "80%", margin: "3rem auto" }}>
                <h1>History</h1>
            </div><br />
            {/* <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {History.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.dateOfPurchase}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <Footer />
        </div>
    )
}