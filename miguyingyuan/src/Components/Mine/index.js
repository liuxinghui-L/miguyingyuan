import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";
import "@/assets/iconfont2/iconfont.css";

class Mine extends Component {
    constructor() {
        super();
    }

    render() {
        return <div id="mine">
            <div className="lost1">
                <h2 className="left">我的</h2>
                <i className="iconfont icon-set right"></i>
            </div>
            <div className="lost2">
                <i className="iconfont icon-atm left"></i>
                <NavLink to="/login" className="left1">点击登录</NavLink>
                <i className="iconfont icon-more right"></i>
            </div>
            <div className="lost3">

                <ul>
                    <li>
                        <i className="iconfont icon-favoritesfilling"></i>
                        <p>收藏</p>
                    </li>
                    <li>
                        <i className="iconfont icon-color-filling"></i>
                        <p>影评</p>
                    </li>
                    <li>
                        <i className="iconfont icon-creditlevelfilling"></i>
                        <p>播放历史</p>
                    </li>
                </ul>
            </div>
            <div className="lost4">
                <ul>
                    <li className="up">
                        <i className="iconfont icon-emailfilling left"></i>
                        <NavLink to="/seefilm" className="left1">我的订单</NavLink>
                        <i className="iconfont icon-more right"></i>
                    </li>
                    <li className="down">
                        <i className="iconfont icon-piaofang left"></i>
                        <NavLink to="/seefilm" className="left1">我的钱包</NavLink>
                        <i className="iconfont icon-more right"></i>
                        <span className="right">电影卡 票券 权益 积分</span>

                    </li>
                </ul>
            </div>
            <div className="lost5">
                <ul>
                    <li className="up">
                        <i className="iconfont icon-wenti left"></i>
                        <NavLink to="/seefilm" className="left1">常见问题</NavLink>
                        <i className="iconfont icon-more right"></i>
                    </li>
                    <li className="down">
                        <i className="iconfont icon-kefu left"></i>
                        <NavLink to="/seefilm" className="left1">在线客服</NavLink>
                        <i className="iconfont icon-more right"></i>
                    </li>
                </ul>
            </div>
            <div className="lost6">
                <ul>
                    <li className="up">
                        <i className="iconfont icon-icon-test left"></i>
                        <NavLink to="/seefilm" className="left1">商城</NavLink>
                        <i className="iconfont icon-more right"></i>
                    </li>
                </ul>
            </div>


        </div>
    }
}

export default Mine;