import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Root from "@/Components/Root";
import SeeFilm from "@/Components/SeeFilm";
import BuyTicket from "@/Components/BuyTicket";
import Cinema from "@/Components/BuyTicket/Cinema";
import Film from "@/Components/BuyTicket/Film";
import NowPlaying from "@/Components/BuyTicket/Film/NowPlaying";
import ComingSoon from "@/Components/BuyTicket/Film/ComingSoon";
import Mine from "@/Components/Mine";
import Find from "@/Components/Find";
import Detail from "@/Components/Detail";
import Register from "@/Components/Register";
import Login from "@/Components/Login";
import City from "@/Components/City";

import Search from "@/Components/Search";
import Recommended from "@/Components/SeeFilm/Recommended";
import Watching from "@/Components/SeeFilm/Watching";
import Alone from "@/Components/SeeFilm/Alone";
import ASmallVideo from "@/Components/SeeFilm/ASmallVideo";
import Ranking from "@/Components/Ranking";
import Libraries from "@/Components/Libraries";


import {Provider} from "react-redux";
import store from "@/Redux/Store";


const router = (
    <Provider store={store}>
        <Router>
            <Root>
                <Switch>
                    <Route path="/seefilm" render={() =>
                        <SeeFilm>
                            <Switch>
                                <Route path="/seefilm/recommended" component={Recommended}/>
                                <Route path="/seefilm/watching" component={Watching}/>
                                <Route path="/seefilm/alone" component={Alone}/>
                                <Route path="/seefilm/asmallvideo" component={ASmallVideo}/>
                                <Redirect from="/seefilm" to="/seefilm/recommended"/>
                            </Switch>
                        </SeeFilm>
                    }/>
                    <Route path="/buyticket" render={() =>
                        <BuyTicket>
                            <Switch>
                                <Route path="/buyticket/cinema" component={Cinema}/>
                                <Route path="/buyticket/film" render={() =>
                                    <Film>
                                        <Switch>
                                            <Route path="/buyticket/film/nowplaying"
                                                   component={NowPlaying}/>
                                            <Route path="/buyticket/film/comingsoon"
                                                   component={ComingSoon}/>
                                            <Redirect from="/buyticket/film"
                                                      to="/buyticket/film/nowplaying"/>
                                        </Switch>
                                    </Film>
                                }/>
                                <Redirect from="/buyticket" to="/buyticket/film/nowplaying"/>
                            </Switch>
                        </BuyTicket>
                    }/>
                    <Route path="/find" component={Find}/>
                    <Route path="/libraries" component={Libraries}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/ranking" component={Ranking}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/city" component={City}/>
                    <Redirect from="/" to="/seeFilm"/>
                </Switch>
            </Root>
        </Router>
    </Provider>);


export default router;