import React, {Component} from "react";
import "./index.scss";
import ReactSwipe from 'react-swipe';
import {NavLink} from "react-router-dom";
import "@/assets/iconfont3/iconfont.css";

class Find extends Component {
    constructor() {
        super();
        this.state = {
            looplist: [],
            pnglist: [],

            main: [],
            maintalk: [],
            picname: [],
            num: [],
            show: true,
            main1: [],


            qiwj: []

        }
    }

    componentDidMount() {
        // http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp
        // axios.get('/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp').then(res=>{
        // 	console.log(res.data)
        // 	this.setState({
        // 		looplist:res.data.list
        // 	})
        // })
        // http://movie.miguvideo.com/publish/image/70/253/715.jpg
        //轮播
        axios.post('publish/i_www/resource/lovev/miguMovie/data/find_index.jsp').then(res => {
            // console.log(res.data[0].list.imgSrc)
            this.setState({
                looplist: res.data[0].list
            })
        })

        //电影卡
        //http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp
        axios.post('/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp').then(res => {
            this.setState({
                picname: res.data[2].list
            })
            this.state.picname.map(item => {
                var str = item.name;
                var str2 = str.match(/(\S*)元/)[1];
                this.setState({
                    num: [...this.state.num, str2]
                })
            })
            // console.log(this.state.num)


            this.setState({

                pnglist: res.data[2].list

            })
        })

        //时间 资讯
        axios.post('/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp').then(res => {
            // console.log(res.data[3].list[0].name)


            // date=date.substr(0,4)+'年'+date.substr(5,6)+'月'+date.substr('7，8')+'日'


            this.setState({
                main: res.data[3].list

            })

            console.log(this.state.main)


            // this.state.main.map(item=>{
            // 	item.picList[0].list.map(item=>{
            // 		this.setState({
            // 			maintalk:[...this.state.maintalk,item]
            // 		})
            // 	})
            // })
            // console.log(this.state.maintalk)

            // this.state.main.map(item=>{

            //  		 		this.setState({
            //  		 			maintalk:item.picList[0]
            //  		 		})

            // 		 	})
            // 		 	console.log(this.state.maintalk)


            // this.state.main.map(item=>{
            // 	item.picList[1].list.map(item=>{
            // 		var qiweijie = [];
            // 		qiweijie.push(item.imgSrcH)
            // 		this.setState({
            // 			qiwj:qiweijie
            // 		})
            // 	})
            // })
            // console.log(this.state.qiwj)

        })


    }


    render() {
        return <div id="find">
            <div className="list1">
                <h2 className="left">发现</h2>
                <NavLink to="/search">
                    <i className="iconfont icon-search right"></i>
                </NavLink>
            </div>


            <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 2000}}
                        key={this.state.looplist.length}>
                {
                    this.state.looplist.map(item =>
                        <img src={'http://movie.miguvideo.com/publish' + item.imgSrc}
                             key={item.name}/>
                    )
                }
            </ReactSwipe>

            <div className="list2">

                <ul>
                    <li>
                        <div><i className="iconfont icon-zixun"></i></div>
                        <p>资讯</p>
                    </li>
                    <li>
                        <div><i className="iconfont icon-Coffee"></i></div>
                        <p>话题</p>
                    </li>
                    <li>
                        <NavLink to="/buyticket">
                            <div><i className="iconfont icon-piaofang"></i></div>
                            <p>约票</p>
                        </NavLink>
                    </li>
                    <li>
                        <div><i className="iconfont icon-icon-test"></i></div>
                        <p>商城</p>
                    </li>
                    <li>
                        <div><i className="iconfont icon-huodong-copy"></i></div>
                        <p>活动</p>
                    </li>
                </ul>
            </div>

            <div className="list3">
                <img className="png"
                     src={"http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png"}/>
                <h4 className="left">商城</h4>
                <i className="iconfont icon-more right"></i>
            </div>
            <div className="list4">
                    <ul>
                        {
                            this.state.pnglist.map((ipp, index) =>
                                <li key={index}>
                                    <img src={'http://movie.miguvideo.com/publish' + ipp.imgSrc}/>
                                    <p>{ipp.name}</p>
                                    {
                                        this.state.num.map((itemb, index2) =>
                                            index2 === index ?
                                                <span key={index2}>￥{itemb}</span>
                                                : null
                                        )
                                    }

                                </li>
                            )
                        }
                    </ul>
            </div>
            <div className="list5">

                {
                    this.state.main.map(times =>
                        <div key={times.name} className="times">
                            <p>{times.name}</p>
                            {
                                times.picList.map((i, index) =>
                                    index == 0 ?
                                        <div key={i.name}>
                                            <div className="talk">
                                                <img className="png"
                                                     src={"http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png"}/>
                                                <h4 className="left">{i.name}</h4>
                                                <i className="iconfont icon-more right"></i>
                                            </div>
                                            {
                                                i.list.map(j =>
                                                    <div key={j.REDREICT_ID} className="talktu">
                                                        <img
                                                            src={'http://movie.miguvideo.com/publish' + j.imgSrc}/>
                                                        <div className="opacity">
                                                            <p className="p1">话题讨论</p>
                                                            <h3>{j.name}</h3>
                                                            <p className="p2">已有0位小伙伴围观</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        : null
                                )

                            }

                            {
                                times.picList.map((a, index) =>
                                    index == 1 ?
                                        <div key={a.name}>
                                            <div className="information">
                                                <img className="png"
                                                     src={"http://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png"}/>
                                                <h4 className="left">{a.name}</h4>
                                                <i className="iconfont icon-more right"></i>
                                            </div>
                                            {


                                                a.list.map(t =>
                                                    <div key={t.name} className="zixun">
                                                        <div className="introduce l">
                                                            <p>{t.name}</p>
                                                            <span>来源：时光网</span>
                                                        </div>
                                                        <div className="r">
                                                            <img
                                                                src={'http://movie.miguvideo.com' + t.imgSrcH}/>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                        : null
                                )
                            }
                        </div>
                    )
                }


            </div>


        </div>
    }


}

export default Find;