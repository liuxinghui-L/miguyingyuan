import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";

class NavbarB extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id='NavbarB'>
          
            <div className="downnav">
               <p><NavLink to="/buyticket/film/nowplaying" activeClassName="active2">正在热映</NavLink></p>
               <p><NavLink to="/buyticket/film/comingsoon"  activeClassName="active2">即将上映</NavLink></p>
            </div>
        </div>
    }
}

export default NavbarB;