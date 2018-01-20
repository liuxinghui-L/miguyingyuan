import React, {Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";

class SeeFilmNav extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id='SeeFilmNav'>
            <div className='box'>
                <p className='l'>
                    <NavLink to="/login">
                        <i className="iconfont icon-folder"></i>0元
                    </NavLink>
                </p>
                <div>
                    <NavLink to="/search" className='r'>
                        <i className="iconfont icon-search"></i>
                    </NavLink>
                    <NavLink to="/login" className='r'>
                        <i className="iconfont icon-clock"></i>
                    </NavLink>
                </div>
            </div>
            <ul>
                <li><NavLink to="/seefilm/recommended" activeClassName='active'>推荐</NavLink></li>
                <li><NavLink to="/seefilm/watching" activeClassName='active'>免费看片</NavLink></li>
                <li><NavLink to="/seefilm/alone" activeClassName='active'>影单</NavLink></li>
                <li><NavLink to="/seefilm/asmallvideo" activeClassName='active'>小视频</NavLink></li>
                <li><NavLink to="/ranking" activeClassName='active'>排行榜</NavLink></li>
                <li className='i'>
                    <NavLink to="/libraries"><i className="iconfont icon-navlist"></i></NavLink>
                </li>
            </ul>
        </div>
    }
}

export default SeeFilmNav;