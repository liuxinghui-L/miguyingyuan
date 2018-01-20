import React, {Component} from "react";
import "./index.scss";
import Navbar from '@/Components/BuyTicket/BuyTicketNavbar';

class City extends Component {
    constructor() {
        super();
        this.state={
        	city:[]
        }
    }
    componentDidMount(){
    	// http://movie.miguvideo.com/mta-service/data/migu/cities.jsp
    	axios.post('/mta-service/data/migu/cities.jsp').then(res=>{
    		// console.log(res.data.cities)
    		this.setState({
    			city:res.data.cities
    		})
    		// console.log(res.data.cities)
    		var li = document.querySelectorAll("ul li")
    		console.log(li)
    		this.state.city.map((i,index)=>{
    			// console.log(i.cityCode)
    			if(i.cityCode == ""){
    					li[index].style.background = "#dfe2e7";
    					li[index].style.fontSize = 16+"px";
    					
    				}
    		})	
    	
    	})
    }

    render() {
        return <div id="City">
          <ol>
          	<li onClick={this.handleClick.bind(this)}>关闭</li>
          	<li>选择城市</li>
          	<li></li>
          </ol>
          <p>1111</p>
          <ul>
           {
           		this.state.city.map((item,index)=>
           			<li key={index}>{item.cityName}</li>
           			)
           }
           </ul>
        </div>
    }

    handleClick(){
    	this.props.history.goBack();
    }
}

export default City;