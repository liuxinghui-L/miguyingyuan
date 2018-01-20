import React,{Component} from "react";
import "./index.scss";
import { Accordion, List } from 'antd-mobile';
import "@/assets/iconfont/iconfont.css";
import { ActivityIndicator} from 'antd-mobile';


class DetailBuyTicketNavbar extends Component{
    constructor(){
        super();
    
       
    }
    componentDidMount(){   
    	
    }
    render(){
        return <div id="detailbar">
                 <ul>
                     <li><i className="iconfont icon-favorite"></i> 收藏</li>
                     <li><i className="iconfont icon-edit"></i> 写影评</li>
                     <li>选座购票</li>
                 </ul>
        </div>
    }
    
}

export default DetailBuyTicketNavbar;