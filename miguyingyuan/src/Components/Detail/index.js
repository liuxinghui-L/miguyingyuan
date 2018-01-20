import React,{Component} from "react";
import "./index.scss";
import { Accordion, List } from 'antd-mobile';
import "@/assets/iconfont/iconfont.css";
import { ActivityIndicator} from 'antd-mobile';
import DetailBuyTicketNavbar from '@/components/Detail/DetailBuyTicketNavbar'

class Detail extends Component{
    constructor(){
        super();
        this.state ={
        	info:null,
        	list:[],
        	infoB:[],
            contentlist:null,
            show:true
        }
    }
    componentDidMount(){   
    	// http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=633108457
    	axios.get(`/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=${this.props.match.params.id}`).then(res=>{
    		// console.log(this.props.match.params.id)
    		this.setState({    			
    			info:res.data[0],
    			list:res.data[0].personnel
    		})
    	
    	})
        // http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/detail/relevant_data.jsp
    	axios.get('/publish/i_www/resource/lovev/miguMovie/detail/relevant_data.jsp').then(res=>{
            // console.log(res.data)
            this.setState({
                infoB:res.data
            })
        })
        // http://movie.miguvideo.com/interaction-service/topic/relevancy/MOVIE/634988953
        // http://movie.miguvideo.com/interaction-service/topic/relevancy/MOVIE/633108457
        axios.get(`/interaction-service/topic/relevancy/MOVIE/${this.props.match.params.id}`).then(res=>{
            // console.log(res.data)
            this.setState({
                contentlist:res.data.content[0]
            })
            console.log(this.state.contentlist)
        })

        Promise.all([axios.get(`/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=${this.props.match.params.id}`),
            axios.get('/publish/i_www/resource/lovev/miguMovie/detail/relevant_data.jsp'),
            axios.get(`/interaction-service/topic/relevancy/MOVIE/${this.props.match.params.id}`)]).then(res=>{
                this.setState({
                    show:false
                })
            })

    }
    render(){
        return <div id="detailA">
                <ActivityIndicator toast text="正在加载" animating={this.state.show}/>
            
            {
            	this.state.info?
            		<div className="datailB">            	
	            		<div className="top">
			            		<div className="up">
			            			<img src={'http://movie.miguvideo.com'+this.state.info.imgSrc1} className="img1"/>
			            			<div className="mask"></div>
			            			<p className="back" onClick={this.handleclick.bind(this)}><i className="iconfont icon-back"></i></p>
			            		</div>
		            			<dl className="dl1">
			            			<dt><img src={'http://movie.miguvideo.com'+this.state.info.imgSrc}/></dt>
			            			<dd>
			            				<h3>{this.state.info.name}</h3>
			            				<p className="p1">影片评分: {this.state.info.score}</p>
			            				<p>{this.state.info.DetailType}</p>
			            				<p>{this.state.info.region}</p>
			            				<p>{this.state.info.time}</p>
			            			</dd>
		            			</dl>
		            			<Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
			            			 <Accordion.Panel header={this.state.info.describe} className="pad">
			            			 	<p className="describe">{this.state.info.describe}</p>
			            			 </Accordion.Panel>
		            			  </Accordion>
		            			{/*<p className="describe">{this.state.info.describe}</p>*/}
            			</div>
            			<div className="personnel">
            				<h3>演职人员<i className="iconfont r icon-more"></i></h3>
            				<div className="zhuan">
	            				<ul>
	            				{	this.state.list.map((item,index)=>
	            						<li key={index} className="l">
	            							<img src={'http://movie.miguvideo.com' + item.imgSrc}/>
	            							<p>{item.name}</p>
	            						</li>
	            					)
	            				}
	            				</ul>
	            			</div>
            			</div>

                       { 
                            this.state.contentlist?
                			<div className="content">
                				<h3>话题<i className="iconfont r icon-more"></i></h3>
                                    
                                <div className="conimg">
                                    <img src={this.state.contentlist.summaryImages}/>
                                    <div className="mak">
                                        <p>话题讨论</p>
                                        <p>{this.state.contentlist.title}</p>
                                        <p>已有{this.state.contentlist.commentedCount}位小伙伴围观</p>
                                    </div>
                                </div>
                			</div>
                            :null
                        }



                           <div className="relevant">
                            <h3>影片推荐<i className="iconfont r icon-more"></i></h3>
                            <div className="zhuan">
                                <ul>
                                {   this.state.infoB.map(i=>
                                        <li key={i.contid} className="l">
                                            <img src={'http://movie.miguvideo.com' + i.imgSrc}/>
                                            <p>{i.name}</p>
                                        </li>
                                    )
                                }
                                </ul>
                            </div>
                        </div> 
                     
                        

            		</div>  
            	:null
            }
            <DetailBuyTicketNavbar/>
        </div>
    }
    handleclick(){
    	this.props.history.goBack();
    }
}

export default Detail;