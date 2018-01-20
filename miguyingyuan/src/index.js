import React from "react";
import ReactDOM  from "react-dom";

import router from "./Router";

ReactDOM.render(router,document.getElementById("box"));

import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';

document.documentElement.style.fontSize=window.innerWidth/375*100+"px"