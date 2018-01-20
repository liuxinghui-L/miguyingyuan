import React,{Component} from "react";
import "./index.scss";

import {connect} from "react-redux";
import { ActivityIndicator} from 'antd-mobile';

class ComingSoon extends Component{
    constructor(){
        super();
        // this.state={
        //     datalist:[]
        // }
    }
     componentDidMount(){
    	// axios.post("/lovev/miguMovie/data/indexFilmComing_data.jsp",{
    	// 	cityCode:4729
    	// }).then(res=>{
    	// 	console.log(res)
    	// })
    	// http://movie.miguvideo.com/lovev/miguMovie/data/indexFilmComing_data.jsp
    // 	axios.post('/lovev/miguMovie/data/indexFilmComing_data.jsp', {
		  //   cityCode:4729
		  // }).then(res=>{
		  //   console.log(res);
    //          this.setState({
    //             datalist:res.data.movies
    //         })
		  // })
          if(this.props.datalist.length == 0){
            this.props.getListPromise();
            this.props.getshowPromise();
          }
          
		  
    }

    render(){
        return <div id="comingsoon">
            <ActivityIndicator toast text="正在加载" animating={this.props.newbshow}/>
            {
                this.props.datalist.map(item=>              
                    <dl key={item.contentId} onClick={this.hendclick.bind(this,item.contentId)}>
                        <dt><img src={'http://movie.miguvideo.com'+item.picAddr}/></dt>
                        <dd>
                            <h2>{item.filmName}</h2>
                           
                            <p>导演:{item.director}</p>
                            <p>{item.actor}</p>
                            {item.isPreSale==0?                               
                            <span className="r see">想看</span>
                            :<span className="r yu">预售</span>
                            }
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
    (state)=>{
        console.log(state.changeList4Reducer)
        return{
            datalist:state.changeList2Reducer,
            newbshow:state.changeList4Reducer
        }
    },
    {

        // promise方式解决异步问题
        getListPromise:()=>{
            return axios.post('/lovev/miguMovie/data/indexFilmComing_data.jsp', {
            cityCode:4729
             }).then(res=>{
                return {
                    type:"CHANGE_LISTB",
                    payload:res.data.movies                  
                }
             })
        },
        getshowPromise:()=>{
            return axios.post('/lovev/miguMovie/data/indexFilmComing_data.jsp', {
            cityCode:4729
             }).then(res=>{
                return {
                    type:"CHANGE_SHOWB",
                    payload:false
                   
                }
             })
        }
            // thunk 方式解决异步问题
        //     getListPromise:()=>{
        //     return (dispach)=>{
        //         axios.post('/lovev/miguMovie/data/indexFilmComing_data.jsp', {
        //     cityCode:4729
        //      }).then(res=>{
        //         dispach( {
        //             type:"CHANGE_LISTB",
        //             payload:res.data.movies,
        //         }),
        //         dispach( {
        //             type:"CHANGE_SHOWB",
        //             payload:false
        //         })
        //      })
        //    } 
        // }
        
    }


    )(ComingSoon);