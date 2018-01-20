import React, {Component} from "react";
import "./index.scss";
import ReactSwipe from 'react-swipe';
import InfiniteScroll from 'react-infinite-scroller';

class Watching extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
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
            originalMallDataList: [],
            netWorkData: [],
            netWorkDataList: [],
        };
        this.pageidx = 1;
        this.obj = {'marginBottom': '.1rem'}
    }

    componentDidMount() {
        //http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
        axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
            `nodeId=70022795&pagesize=3&pageidx=${this.pageidx}`
        ).then(response => {
            this.setState({
                autoSwiperDataLast: response.data[0].list,
                nowPlayingData: response.data[1],
                nowPlayingDataList: response.data[1].list,
                comingSoonData: response.data[2],
                comingSoonDataList: response.data[2].list,
            });
        });
    }

    render() {
        return <div id='Watching'>
            <InfiniteScroll
                initialLoad={false}
                threshold={20}
                loadMore={this.loaderMoreFunc.bind(this)}
                hasMore={this.state.loading}
            >
                <ul className='autoSwiper'>
                    <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 2000}}
                                key={this.state.autoSwiperDataLast.length}>
                        {
                            this.state.autoSwiperDataLast.map(item => <li key={item.name}
                                                                          onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                <img src={item.imgSrcH}/>
                                <p>{item.name}</p>
                            </li>)
                        }
                    </ReactSwipe>
                </ul>
                <div className='grid' style={this.obj}>
                    <h1>{this.state.nowPlayingData.name}</h1>
                    <ul className='dataList'>
                        {
                            this.state.nowPlayingDataList.map((item, index) => <li key={index}
                                                                                   onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                <img src={item.imgSrcV}/>
                                <div>
                                    <p>{item.name}</p>
                                    <p className='last'>{item.LONG_NAME}</p>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='vessel' style={this.obj}>
                    <h1>{this.state.comingSoonData.name}</h1>
                    <ul className='dataList'>
                        {
                            this.state.comingSoonDataList.map((item, index) => <li key={index}
                                                                                   onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                <img src={item.imgSrcV}/>
                                <p>{item.name}</p>
                                <p className='last'>{item.LONG_NAME}</p>
                            </li>)
                        }
                    </ul>
                </div>
                {
                    this.state.ActivitiesData.length == 0 ? '' :
                        <div className='vessel' style={this.obj}>
                            <h1>{this.state.ActivitiesData.name}</h1>
                            <ul className='dataList'>
                                {
                                    this.state.ActivitiesDataList.map((item, index) => <li
                                        key={index}
                                        onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                        <img src={item.imgSrcV}/>
                                        <p>{item.name}</p>
                                        <p className='last'>{item.LONG_NAME}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                }
                {
                    this.state.recommendationData.length == 0 ? '' :
                        <div className='vessel' style={this.obj}>
                            <h1>{this.state.recommendationData.name}</h1>
                            <ul className='dataList'>
                                {
                                    this.state.recommendationDataList.map((item, index) => <li
                                        key={item.SRC_CONT_ID}
                                        onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                        <img src={item.imgSrcV}/>
                                        <p>{item.name}</p>
                                        <p className='last'>{item.LONG_NAME}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                }
                {
                    this.state.originalMallData.length == 0 ? '' :
                        <div className='vessel' style={this.obj}>
                            <h1>{this.state.originalMallData.name}</h1>
                            <ul className='dataList'>
                                {
                                    this.state.originalMallDataList.map((item, index) => <li
                                        key={index}
                                        onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                        <img src={item.imgSrcV}/>
                                        <p>{item.name}</p>
                                        <p className='last'>{item.LONG_NAME}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                }
                {
                    this.state.netWorkData.length == 0 ? '' :
                        <div className='vessel' style={this.obj}>
                            <h1>{this.state.netWorkData.name}</h1>
                            <ul className='dataList'>
                                {
                                    this.state.netWorkDataList.map((item, index) => <li
                                        key={index}
                                        onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                        <img src={item.imgSrcV}/>
                                        <p>{item.name}</p>
                                        <p className='last'>{item.LONG_NAME}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                }
            </InfiniteScroll>
        </div>
    }

    headleClick(id) {
        console.log('111')
        this.props.history.push(`/detail/${id}`);
    }

    loaderMoreFunc() {
        this.setState({
            loading: false
        });
        this.pageidx++;
        if (this.pageidx == 2) {
            axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
                `nodeId=70022795&pagesize=3&pageidx=${this.pageidx}`
            ).then(response => {
                this.setState({
                    ActivitiesData: response.data[0],
                    ActivitiesDataList: response.data[0].list,
                    recommendationData: response.data[1],
                    recommendationDataList: response.data[1].list,
                    originalMallData: response.data[2],
                    originalMallDataList: response.data[2].list,
                    loading: true
                });
            });
        } else if (this.pageidx == 3) {
            axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
                `nodeId=70022795&pagesize=3&pageidx=${this.pageidx}`
            ).then(response => {
                this.setState({
                    netWorkData: response.data[0],
                    netWorkDataList: response.data[0].list,
                    loading: true
                });
            });
        }
    }
}

export default Watching;