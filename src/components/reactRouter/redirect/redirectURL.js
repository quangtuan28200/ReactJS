import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from "../contents/home";
import News from "../contents/news";
import Football from "../contents/football";
import World from "../contents/world";

export default class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/football" component={Football} />
                <Route path="/world" component={World} />
            </div>
        )
    }
}
