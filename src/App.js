import React, { Component } from 'react';
import Topbar from './components/topbar';
import Header from './components/header';
import Hero from './components/hero';
import Main from './components/main';
import Footer from './components/footer';
export default class App extends Component {
    render() {
        return (
            <div>
                <Topbar />
                <Header />
                <Hero />
                <Main />
                <Footer />
            </div>
        )
    }
}
