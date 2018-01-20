import React, {Component} from "react";
import "./index.scss";
import Navbar from '@/Components/BuyTicket/BuyTicketNavbar';

class BuyTicket extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id='BuyTicket'>
            <Navbar></Navbar>
            {this.props.children}
        </div>
    }
}

export default BuyTicket;