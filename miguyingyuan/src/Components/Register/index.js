import React,{Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";

class Register extends Component{
    constructor(){
        super();
    }
  
    render(){
        return <div id="register">
          <div className="logo">
             <NavLink to="/home"></NavLink>
          </div>
           
        	<div className="center">
              		<h2><i className="iconfont icon-supplierfeatures"></i> 用户注册</h2>
              		<div className="wen">
                  			<h3>您正在使用手机号码注册咪咕账号。</h3>
                  			<h3>您可以使用该账号登录咪咕音乐,咪咕视频,咪咕阅读,咪咕游戏,咪咕圈圈等业务。</h3>
                  			<h3>中国移动用户已默认注册和通行证账号,可直接登录咪咕业务。</h3>
                  			<ul>
                  				<li></li>
                  				<li></li>
                  				<li></li>
                  			</ul>
                  			<ul>
                  				<li></li>
                  				<li></li>                  				
                  			</ul>
              		</div>
        
               	   <div className="tel">
          	       	   <p>手机号码</p>
          	           <input type="text" placeholder="请输入手机号码" ref='username' className="input1"/>
                       <p className="ti1"></p>
                   </div>
                   <div className="pas">
          	       	   <p>设置密码</p>
          	           <input type="password" placeholder="请输入密码" ref='password' className="input2"/>
      
                        
                   </div>
                   <div className="ti2 mi">密码长度为6-16位字符</div>
                    <p className="p1"><input type="checkbox" ref='checked'/>我已阅读并同意相关服务条款</p>
                    <button onClick={this.handleClick.bind(this)}>注册</button>
                     
                     
                     
             </div>
           
        </div>
    }
    handleClick(){
       var reg1 = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
      var input1 = document.querySelector('.input1').value;
      var t1 = document.querySelector('.ti1');
      var inp1 = document.querySelector('.input1');

      var reg2 =/^\w{6,20}$/;
      var input2 = document.querySelector('.input2').value;
      var t2 = document.querySelector('.ti2');
      var inp2 = document.querySelector('.input2')

     
            if(reg1.test(input1)!=true){
              t1.innerHTML = "用户名错误"
          } else{
              t1.innerHTML = ""
          }

     
          if(reg2.test(input2)!=true){
            t2.innerHTML= "密码错误"
          }else{
            t2.innerHTML="密码长度为6-16位字符"
          }
   

      if(reg1.test(input1)==true && reg2.test(input2)==true){
           axios.post('/apiB/register',{username:this.refs.username.value,password:this.refs.password.value}).then(res=>{
          if(res.data.result){
            this.props.history.push('/login')
          }else{
            this.isshow = true;
            this.message=res.data.message
          }
      })

       }else{
        console.log("cuo")
       }
     
    }
    
}

export default Register;