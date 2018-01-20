import React,{Component} from "react";
import "./index.scss";
import ComingSoon from '@/Components/BuyTicket/Film/ComingSoon';
import NowPlaying from '@/Components/BuyTicket/Film/NowPlaying';
import NavbarB from '@/Components/BuyTicket/BuyTicketNavbar2';

class Film extends Component{
    constructor(){
        super();
    }

    render(){
        return <div>
        <NavbarB></NavbarB>
        {this.props.children}
        </div>
    }
}

export default Film;