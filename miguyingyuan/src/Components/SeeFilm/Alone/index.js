import React, {Component} from "react";
import "./index.scss";
import ReactSwipe from 'react-swipe';
import InfiniteScroll from 'react-infinite-scroller';

class Alone extends Component {
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
            bottomData: [],
            bottomDataList: [],
            abnormalData: [],
            abnormalDataList: [],
            tearData: [],
            tearDataList: [],
            crimeData: [],
            crimeDataList: [],
            fantasyData: [],
            fantasyDataList: [],
            buddhaData: [],
            buddhaDataList: [],
        };
        this.pageidx = 1;
        this.obj = {'marginBottom': '.1rem'}
    }

    componentDidMount() {
        //http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
        axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
            `nodeId=70035127&pagesize=3&pageidx=${this.pageidx}`
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
        return <div id='Alone'>
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
                            this.state.autoSwiperDataLast.map(item => <li key={item.name}>
                                <img src={'http://movie.miguvideo.com/publish/i_www' + item.imgSrc}/>
                                <p>{item.name}</p>
                            </li>)
                        }
                    </ReactSwipe>
                </ul>
                <div className='vessel' style={this.obj}>
                    <h1>{this.state.nowPlayingData.name}</h1>
                    <ul className='dataList'>
                        {
                            this.state.nowPlayingDataList.map(item => <li key={item.SRC_CONT_ID}
                                                                          onClick={this.headleClick.bind(this, item.SRC_CONT_ID)}>
                                <img src={item.imgSrcV}/>
                                <p>{item.name}</p>
                                <p className='last'>{item.LONG_NAME}</p>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='rubikCube' style={this.obj}>
                    <h1>{this.state.comingSoonData.name}</h1>
                    <ul>
                        {
                            this.state.comingSoonDataList.map(item => <li key={item.REDREICT_ID}>
                                {item.name}
                            </li>)
                        }
                    </ul>
                </div>
                {
                    this.state.ActivitiesData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.ActivitiesData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.ActivitiesDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.recommendationData.length == 0 ? '' : <div className='vessel' style={this.obj}>
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
                }
                {
                    this.state.originalMallData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.originalMallData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.originalMallDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.bottomData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.bottomData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.bottomDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.abnormalData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.abnormalData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.abnormalDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.tearData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.tearData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.tearDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.crimeData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.crimeData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.crimeDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.fantasyData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.fantasyData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.fantasyDataList.map(item => <li key={item.SRC_CONT_ID}
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
                    this.state.buddhaData.length == 0 ? '' : <div className='vessel' style={this.obj}>
                        <h1>{this.state.buddhaData.name}</h1>
                        <ul className='dataList'>
                            {
                                this.state.buddhaDataList.map(item => <li key={item.SRC_CONT_ID}
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
        this.props.history.push(`/detail/${id}`);
    }

    loaderMoreFunc() {
        this.setState({
            loading: false
        });
        this.pageidx++;
        if (this.pageidx == 2) {
            axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
                `nodeId=70035127&pagesize=3&pageidx=${this.pageidx}`
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
                `nodeId=70035127&pagesize=3&pageidx=${this.pageidx}`
            ).then(response => {
                this.setState({
                    bottomData: response.data[0],
                    bottomDataList: response.data[0].list,
                    abnormalData: response.data[1],
                    abnormalDataList: response.data[1].list,
                    tearData: response.data[2],
                    tearDataList: response.data[2].list,
                    loading: true
                });
            });
        } else if (this.pageidx == 4) {
            axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
                `nodeId=70035127&pagesize=3&pageidx=${this.pageidx}`
            ).then(response => {
                this.setState({
                    crimeData: response.data[0],
                    crimeDataList: response.data[0].list,
                    fantasyData: response.data[1],
                    fantasyDataList: response.data[1].list,
                    buddhaData: response.data[2],
                    buddhaDataList: response.data[2].list,
                    loading: true
                });
            });
        }
    }
}

export default Alone;