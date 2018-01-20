import React, {Component} from "react";
import "./index.scss";


class ASmallVideo extends Component {
    constructor() {
        super();
        this.state={
            dataList:[]
        }
    }
    componentDidMount() {
        //http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
        axios.post('/lovev/miguMovie/data/seeFilmData.jsp',
            `nodeId=70027030&pagesize=3&pageidx=1`
        ).then(response => {
            this.setState({
                dataList: response.data[0].list
            });
        });
    }
    render() {
        return <div id='ASmallVideo'>
            <ul>
                {
                    this.state.dataList.map(item=><li key={item.REDREICT_ID}>
                        <img src={'http://movie.miguvideo.com/publish/i_www' + item.picList[0].imgSrc}/>
                        <p>{item.name}</p>
                    </li>)
                }
            </ul>
        </div>
    }
}

export default ASmallVideo;