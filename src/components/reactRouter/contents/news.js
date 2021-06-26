/* eslint-disable no-undef */
import React, { Component } from 'react'
import NewsItem from './Items/newsItem'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: []
        }
    }


    componentWillMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {
        return (
            <div className="row">
                <h1>News</h1>
                {
                    this.state.products.map((newsItem, index) => (
                        <NewsItem
                            key={index}
                            title={newsItem.title}
                            price={newsItem.body}
                        />
                    ))
                }
            </div>
        )
    }
}
