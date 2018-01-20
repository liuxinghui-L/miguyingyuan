import React,{Component} from "react";
import "./index.scss";

import {connect} from "react-redux";
import { ActivityIndicator} from 'antd-mobile';

class NowPlaying extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
		// axios.post('/lovev/miguMovie/data/indexFilm_data.jsp', 
		//     'cityCode=4729'
		//   ).then(res=>{
		//     console.log(res.data.movies);
		//     this.setState({
		//     	datalist:res.data.movies
		//     })
		//     console.log(this.state.datalist)
		//   })
		if(this.props.datalist.length == 0){
			this.props.getList();
		}

	
    }
    render(){
        return <div id="nowplaying">
         	<ActivityIndicator toast text="正在加载" animating={this.props.newshow}/>
            {
            	// this.state.datalist.map(item=>
            	this.props.datalist.map(item=>         		
            		<dl key={item.contentId} onClick={this.hendclick.bind(this,item.contentId)}>
            			<dt><img src={'http://movie.miguvideo.com'+item.picAddr}/></dt>
            			<dd>
            				<h2>{item.filmName}</h2>            				
            				<p>导演:{item.director}</p>
            				<p>{item.actor}</p>
            				<span className="r">购票</span>
            				
            			</dd>
            		</dl>
            	)
            }

        </div>
    }
    hendclick(id){
    	// console.log(id);
    	this.props.history.push(`/detail/${id}`);
    }
}


export default connect(
	(state) =>{
		// console.log(state.changeList3Reducer)
		return {
			datalist:state.changeListReducer,
			newshow:state.changeList3Reducer
			
		}
	},
	{
		// changeListReducer:(name)=>{
		// 	console.log(name);
		// 	return{
		// 		type:"CHANGE_",
		// 		payload:name
		// 	}
		// }
		getList:()=>{
			return (dispach)=>{
		axios.post('/lovev/miguMovie/data/indexFilm_data.jsp', 
		    'cityCode=4729'
		  ).then(res=>{
		   
		   	// return {
		   	// 	type:"CHANGE_LIST",
		   	// 	payload:res.data.movies
		   	// }
		   	dispach({
		   		type:"CHANGE_LIST",
		   		payload:res.data.movies,
		   		
		   	}),
		   	dispach({
		   		type:"CHANGE_SHOW",
		   		payload:false,
		   		
		   	})
		  })
		}
	  }
	}
	)(NowPlaying);


