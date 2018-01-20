import React, {Component} from "react";
import "./index.scss";
import InfiniteScroll from 'react-infinite-scroller';

class Libraries extends Component {
    constructor() {
        super();
        this.state = {
            order: ['2', '4', '0'],
            mediaType: ['类型', '剧情', '爱情', '动作', '喜剧', '惊悚', '科幻'],
            mediaArea: ['地区', '内地', '美国', '香港', '韩国', '日本', '台湾'],
            mediaYear: ['不限', '2018', '2017', '2016', '2015', '2014', '2013'],
            limitDate: ['全部', '免费', '收费'],
            filmData: [],
            orderName: '',
            mediaYearName: '',

        };
        this.currentPage = 1;
        this.loading= true
    }

    componentDidMount() {
        //http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/data/searchData.jsp?currentPage=1
        axios.post(`/publish/i_www/resource/lovev/miguMovie/data/searchData.jsp?currentPage=${this.currentPage}`
        ).then(res => {
            this.setState({
                filmData: [...this.state.filmData, ...res.data.searchResult],
            });
        });

    }


    render() {
        return <div id='Libraries'>
            <h2><i className="icon iconfont icon-back" onClick={this.returnClick.bind(this)}></i>片库
            </h2>
            <div className='type'>
                <ul>
                    {
                        this.state.order.map((item, index) => <li key={index}
                                                                  onClick={this.orderClick.bind(this, item)}>
                            {
                                item == 2 ? '最热' : ''
                            }
                            {
                                item == 4 ? '最新' : ''
                            }
                            {
                                item == 0 ? '好评' : ''
                            }
                        </li>)
                    }
                </ul>
                <ul>
                    {
                        this.state.mediaType.map((item, index) => <li key={index}>
                            {item}
                        </li>)
                    }
                </ul>
                <ul>
                    {
                        this.state.mediaArea.map((item, index) => <li key={index}>
                            {item}
                        </li>)
                    }
                </ul>
                <ul>
                    {
                        this.state.mediaYear.map((item, index) => <li key={index}
                                                                      onClick={this.mediaYearClick.bind(this, item)}>
                            {item}
                        </li>)
                    }
                </ul>
                <ul>
                    {
                        this.state.limitDate.map((item, index) => <li key={index}>
                            {item}
                        </li>)
                    }
                </ul>
            </div>
            <div className='film'>
                <InfiniteScroll
                    initialLoad={false}
                    threshold={20}
                    loadMore={this.loaderMoreFunc.bind(this)}
                    hasMore={this.loading}
                >
                    <ul>
                        {
                            this.state.filmData.map((item, index) => <li key={index}
                                                                         onClick={this.headleClick.bind(this, item.contentId)}>
                                <img src={item.img}/>
                                <h3>{item.contentName}</h3>
                                <p>{item.Detail}</p>
                                <span>{item.contentScore}</span>
                            </li>)
                        }
                    </ul>
                </InfiniteScroll>
            </div>
        </div>
    }

    returnClick() {
        this.props.history.goBack();
    }

    orderClick(name) {
        this.loading = true;
        this.currentPage = 1;
        this.setState({
            orderName: name
        });
        axios.post(`/publish/i_www/resource/lovev/miguMovie/data/searchData.jsp?currentPage=${this.currentPage}`,
            `order=${encodeURIComponent(name)}&mediaType=&mediaArea=&mediaYear=${encodeURIComponent(this.state.mediaYearName)}&limitDate=`
        ).then(res => {
            this.setState({
                filmData: res.data.searchResult
            });
        });
    }

    mediaYearClick(name) {
        this.loading = true;
        this.currentPage = 1;
        var newname = '';
        if (name == '不限') {
            newname = '';
        } else {
            newname = name
        }
        this.setState({
            mediaYearName: newname
        });
        axios.post(`/publish/i_www/resource/lovev/miguMovie/data/searchData.jsp?currentPage=${this.currentPage}`,
            `order=${encodeURIComponent(this.state.orderName)}&mediaType=&mediaArea=&mediaYear=${encodeURIComponent(newname)}&limitDate=`
        ).then(res => {
            this.setState({
                filmData: res.data.searchResult
            });
        });
    }

    headleClick(id) {
        this.props.history.push(`/detail/${id}`);
    }

    loaderMoreFunc() {
        this.currentPage++;
        axios.post(`/publish/i_www/resource/lovev/miguMovie/data/searchData.jsp?currentPage=${this.currentPage}`,
            `order=${encodeURIComponent(this.state.orderName)}&mediaType=&mediaArea=&mediaYear=${encodeURIComponent(this.state.mediaYearName)}&limitDate=`
        ).then(res => {
            this.setState({
                filmData: [...this.state.filmData, ...res.data.searchResult]
            });
            // this.loading = false;
        });
    }
}

export default Libraries;