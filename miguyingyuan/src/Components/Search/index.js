import React, {Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            topSearchData: ['英雄本色', '阿米尔·汗', '勇敢者游戏', '星球大战', ' 娜塔莉·波特曼', '冒险', '金球奖', '章子怡', '青春', '前任'],
            show: false,
            searchRecordStr: [],
        }
    }

    componentDidMount() {
        if (localStorage.getItem('searchRecordStr')) {
            const newSearchRecordStr = localStorage.getItem('searchRecordStr').split(',');
            this.setState({
                searchRecordStr: newSearchRecordStr
            });
        }
    }

    render() {
        return <div id='Search'>
            <div className='search'>
                <i className="iconfont icon-search"></i>
                <input type="text" placeholder='搜影片、找影人' ref='name'
                       onInput={this.input.bind(this)}/>
                {
                    this.state.show ? <span onClick={this.clear.bind(this)}>×</span> : ''
                }
                {
                    this.state.show ?
                        <p className='r' onClick={this.buttonSearch.bind(this)}>搜索</p> :
                        <NavLink to="/seefilm" className='r'>取消</NavLink>
                }
            </div>
            <div className='content'>
                {
                    this.state.searchRecordStr.length && !this.state.show ?
                        <div className='storage'>
                            <h4>历史记录</h4>
                            <ul>
                                {
                                    this.state.searchRecordStr.map((item, index) => <li key={index}>
                                        {item}
                                    </li>)
                                }
                            </ul>
                            <h5 onClick={this.clearStorage.bind(this)}>清楚记录</h5>
                        </div> : ''

                }
                {
                    this.state.show ? '' : <div className='topSearch'>
                        <h4>热门搜索</h4>
                        <ul>
                            {
                                this.state.topSearchData.map((item, index) => <li key={index}
                                                                                  onClick={this.search.bind(this, item)}>
                                    <span>{index + 1}</span>.&nbsp;{item}
                                </li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    }

    input() {
        if (this.refs.name.value) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }

    search(name) {
        //http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/data/searchResultData.jsp
        // axios.post('/publish/i_www/resource/lovev/miguMovie/data/searchResultData.jsp',
        //     `searchVal=+${encodeURIComponent(name)}`
        // ).then(res => {
        // });
        if (localStorage.getItem('searchRecordStr')) {
            if (localStorage.getItem('searchRecordStr').indexOf(name) == -1) {
                localStorage.setItem('searchRecordStr', [...this.state.searchRecordStr, name]);
                this.setState({
                    searchRecordStr: [...this.state.searchRecordStr, name]
                });
            }
        } else {
            localStorage.setItem('searchRecordStr', [...this.state.searchRecordStr, name]);
            this.setState({
                searchRecordStr: [...this.state.searchRecordStr, name]
            });
        }
    }

    buttonSearch() {

        // const strExp = new RegExp(/^[\u4E00-\u9FA5]+$/);
        // if (!strExp.test(this.refs.name.value)) {
        //     console.log('不是中文')
        // } else {
        //     console.log('中文')
        // }

        axios.post('/publish/i_www/resource/lovev/miguMovie/data/searchResultData.jsp',
            `searchVal=+${encodeURIComponent(this.refs.name.value)}`
        ).then(res => {
            console.log(res.data);
        });
        if (localStorage.getItem('searchRecordStr')) {
            if (localStorage.getItem('searchRecordStr').indexOf(this.refs.name.value) == -1) {
                localStorage.setItem('searchRecordStr', [...this.state.searchRecordStr, this.refs.name.value]);
                this.setState({
                    searchRecordStr: [...this.state.searchRecordStr, this.refs.name.value]
                });
            }
        } else {
            localStorage.setItem('searchRecordStr', [...this.state.searchRecordStr, this.refs.name.value]);
            this.setState({
                searchRecordStr: [...this.state.searchRecordStr, this.refs.name.value]
            });
        }
        this.setState({
            show: false
        });
        this.refs.name.value = '';
    }

    clearStorage() {
        localStorage.clear();
        this.setState({
            searchRecordStr: []
        });
    }

    clear() {
        this.refs.name.value = '';
        this.setState({
            show: false
        })
    }
}

export default Search;