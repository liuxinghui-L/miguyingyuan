import React, {Component} from "react";
import "./index.scss";

// import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { ActivityIndicator} from 'antd-mobile';

class Cinema extends Component {
    constructor() {
        super();
        this.state={
        	datalist:[],
          show:true
        }
    }
    componentDidMount(){
    	// http://movie.miguvideo.com/mta-service/data/migu/validCinemaes.jsp
    	axios.post('/mta-service/data/migu/validCinemaes.jsp',
    		'cityCode=4729'
			// orderType:1
			// longitude:
			// latitude:
    	).then(res=>{
    		console.log(res.data)
    		this.setState({
		    	datalist:res.data.cinemaes,
          show:false
		    })		   
    	})
    }

    render() {
        return <div id="cinema">
        <ActivityIndicator toast text="正在加载" animating={this.state.show}/>
        <ul>

           {	

           		this.state.datalist.map(item=>         		
                    <li key={item.cinemaId}>
           					<h2>{item.cinemaName}</h2>
           					<p>{item.cinemaAdd}</p>
           			</li>
            	)

           }
          </ul>

        </div>
    }
}

export default Cinema;