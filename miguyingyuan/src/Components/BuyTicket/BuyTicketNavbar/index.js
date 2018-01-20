import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id='Navbar'>
            <div className="upnav">
                <ul>
                    <li><NavLink to="/city">大连<i className="iconfont icon-moreunfold"></i></NavLink></li>
                    <li>
                        <span><NavLink to="/buyticket/film" activeClassName="active1">影片</NavLink></span>
                        <span><NavLink to="/buyticket/cinema" activeClassName="active1">影院</NavLink></span>
                    </li>
                    <li> </li>
                </ul>
            </div>
        </div>
    }
}

export default Navbar;