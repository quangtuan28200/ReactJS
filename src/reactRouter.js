import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/reactRouter/header'
import Main from './components/reactRouter/main'

export default class ReactRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Main />
                </div>
            </Router>
        )
    }
}
