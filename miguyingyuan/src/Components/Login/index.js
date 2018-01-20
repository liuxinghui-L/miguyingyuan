import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state={
            isshow : false
        }
    }

    render() {
        return <div id="login">

            <div className="up">
                <div className="logo">
                    <NavLink to="/home"></NavLink>
                    <span>咪咕账号登录</span>
                </div>
            </div>


            <div className="buttom">
                <div className="tel">
                    <i className="iconfont icon-account"></i>
                    <input type="text" placeholder="手机号码" ref="username"/>
                </div>
                <div className="pas">
                    <i className="iconfont icon-component"></i>
                    <input type="password" placeholder="密码" ref="password"/>
                </div>
                {
                    this.state.isshow ? <p>用户名或密码输入不正确！</p> : ''
                }
                <button onClick={this.handleClick.bind(this)}>登录</button>

                <NavLink to="" className="r">忘记密码</NavLink>
                <NavLink to="/register" className="a2 r">注册新账号</NavLink>

            </div>
        </div>
    }

    handleClick() {
        axios.post('/apiB/login', {
            username: this.refs.username.value,
            password: this.refs.password.value
        }).then(res => {
            if (res.data.result) {
                this.props.history.push('/seefilm')
            } else {
                this.setState({
                    isshow : true
                });
            }
        })
    }
}

export default Login;