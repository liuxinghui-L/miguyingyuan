import React, {Component} from "react";
import "./index.scss";
import SeeFilmNav from '@/Components/SeeFilm/SeeFilmNav';
import Recommended from '@/Components/SeeFilm/Recommended';
import "@/assets/iconfont/iconfont.css";
import ReactSwipe from 'react-swipe';

class SeeFilm extends Component {
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

    render() {
        return <div id='SeeFilm'>
            <SeeFilmNav></SeeFilmNav>
            {this.props.children}
        </div>
    }

}

export default SeeFilm;