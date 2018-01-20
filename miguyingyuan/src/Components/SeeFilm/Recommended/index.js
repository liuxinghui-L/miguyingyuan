import React, {Component} from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css";
import ReactSwipe from 'react-swipe';

class Recommended extends Component {
    constructor() {
        super();
        this.state = {
            autoSwiperDataLast: [],
            nowPlayingData: [],
            nowPlayingDataList: [],
            comingSoonData: [],
            comingSoonDataList: [],
            ActivitiesData: [],
            ActivitiesDataList: [],
            recommendationData: [],
            recommendationDataList: [],
            originalMallData: [],
            originalMallDataList: []
        }
    }

    componentDidMount() {
        //http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
        axios.post('/lovev/miguMovie/data/seeFilmData.jsp'
        ).then(res => {
            this.setState({
                autoSwiperDataLast: res.data[0].list,
                nowPlayingData: res.data[1],
                nowPlayingDataList: res.data[1].list,
                comingSoonData: res.data[2],
                comingSoonDataList: res.data[2].list,
                ActivitiesData: res.data[3],
                ActivitiesDataList: res.data[3].list,
                recommendationData: res.data[4],
                recommendationDataList: res.data[4].list,
                originalMallData: res.data[6],
                originalMallDataList: res.data[6].list
            });
        });
    }

    render() {
        return <div id='Recommended'>
            <ul className='autoSwiper'>
                <ReactSwipe className="carousel" swipeOptions={{continuous: true,}}
                            key={this.state.autoSwiperDataLast.length}>
                    {
                        this.state.autoSwiperDataLast.map(item => <li key={item.name}>
                            <img src={'http://movie.miguvideo.com/publish/i_www' + item.imgSrc}/>
                            <div><img src={'http://movie.miguvideo.com/publish/i_www' + item.imgSrc}/></div>
                        </li>)
                    }
                </ReactSwipe>
            </ul>
            <div className='vessel'>
                <h1>{this.state.nowPlayingData.name}</h1>
                <ul className='dataList'>
                    {
                        this.state.nowPlayingDataList.map(item => <li key={item.SRC_CONT_ID}
                                                                      onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                            <img src={item.imgSrcV}/>
                            <p>{item.name}</p>
                            <p className='last'>{item.LONG_NAME}</p></li>)
                    }
                </ul>
            </div>
            <div className='vessel'>
                <h1>{this.state.comingSoonData.name}</h1>
                <ul className='dataList'>
                    {
                        this.state.comingSoonDataList.map(item => <li key={item.SRC_CONT_ID}
                                                                      onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                            <img src={item.imgSrcV}/>
                            <p>{item.name}</p>
                            <p className='last'>{item.LONG_NAME}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='swiper'>
                <h1>{this.state.ActivitiesData.name}</h1>
                <ul>
                    <ReactSwipe className="carousel" swipeOptions={{continuous: true}}
                                key={this.state.ActivitiesDataList.length}>
                        {
                            this.state.ActivitiesDataList.map(item => <li key={item.name}>
                                <img src={'http://movie.miguvideo.com/publish/i_www' + item.imgSrc}/>
                            </li>)
                        }
                    </ReactSwipe>
                </ul>
            </div>
            <div className='vessel'>
                <h1>{this.state.recommendationData.name}</h1>
                <ul className='dataList'>
                    {
                        this.state.recommendationDataList.map(item => <li key={item.SRC_CONT_ID}
                                                                          onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                            <img src={item.imgSrcV}/>
                            <p>{item.name}</p>
                            <p className='last'>{item.LONG_NAME}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='mall'>
                <h1>{this.state.originalMallData.name}</h1>
                <ul>
                    {
                        this.state.originalMallDataList.map((item, index) => <li key={index}>
                            <div>
                                <img src={'http://movie.miguvideo.com/publish/i_www' + item.imgSrc}/>
                                <p>{item.name}</p>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    }

    headleClick(id) {
        this.props.history.push(`/detail/${id}`);
    }
}

export default Recommended;