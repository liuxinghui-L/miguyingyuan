import React, {Component} from "react";
import "./index.scss";


class Ranking extends Component {
    constructor() {
        super();
        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        //http://movie.miguvideo.com/lovev/miguMovie/data/HourGet_data.jsp
        axios.post('/lovev/miguMovie/data/HourGet_data.jsp',
            `type=1`
        ).then(response => {
            this.setState({
                dataList: response.data,
            });
        });
    }

    render() {
        return <div id='Ranking'>

            <h2><i className="icon iconfont icon-back" onClick={this.returnClick.bind(this)}></i>排行榜</h2>
            <ul>
                {
                    this.state.dataList.map((item, index) => <li key={item.contId}
                                                                 onClick={this.headleClick.bind(this, item.contId)}>
                        <img src={item.imgSrc}/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>影片评分：<span>{item.contentScore ? item.contentScore : '暂无'}</span></p>
                            <p>{item.mediaType}</p>
                        </div>
                        {
                            index < 3 ? <h4>{index+1}</h4> : ''
                        }

                    </li>)
                }
            </ul>
        </div>
    }

    headleClick(id) {
        this.props.history.push(`/detail/${id}`);
    }

    returnClick(){
        this.props.history.goBack();
    }
}

export default Ranking;