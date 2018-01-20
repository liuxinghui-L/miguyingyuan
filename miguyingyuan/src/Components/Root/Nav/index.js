import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id='Nav'>
            <ul>
                <li>
                    <NavLink to="/seefilm" activeClassName='active'>
                        <i className="iconfont icon-all"></i>
                        <p>看片</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/buyticket" activeClassName='active'>
                        <i className="iconfont icon-cart"></i>
                        <p>购票</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/find" activeClassName='active'>
                        <i className="iconfont icon-search"></i>
                        <p>发现</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mine" activeClassName='active'>
                        <i className="iconfont icon-account"></i>
                        <p>我的</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    }
}

export default Nav;