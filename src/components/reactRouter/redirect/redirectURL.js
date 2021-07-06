import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from "../contents/home";
import News from "../contents/news";
import Football from "../contents/football";
import World from "../contents/world";
import Newsdetail from "../contents/newsdetail";
import Admin from '../contents/admin';
import Firebase from '../firebase/firebase';
import Redux from '../redux/redux';

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
                <Route path="/redux" component={Redux} />
                <Route path="/firebase" component={Firebase} />

                <Route path="/news/:slug.:id.html" component={Newsdetail} />
            </div>
        )
    }
}
