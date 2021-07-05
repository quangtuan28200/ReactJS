import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from "../contents/home";
import News from "../contents/news";
import Football from "../contents/football";
import World from "../contents/world";
import Newsdetail from "../contents/newsdetail";
import Admin from '../contents/admin';
import Main from '../redux/main';

export default class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/news" component={News} />
                <Route path="/football" component={Football} />
                <Route path="/world" component={World} />
                <Route path="/admin" component={Admin} />
                <Route path="/redux" component={Main} />

                <Route path="/news/:slug.:id.html" component={Newsdetail} />
            </div>
        )
    }
}
