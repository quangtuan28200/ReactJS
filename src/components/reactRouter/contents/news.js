/* eslint-disable no-lone-blocks */
/* eslint-disable eqeqeq */
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
    componentDidMount() {
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
    newsitem = (x) => {
        if(x != ''){
            return(
                x.map((newsItem, index) => (
                    <NewsItem
                        key={index}
                        newsId={newsItem.id}
                        title={newsItem.title}
                        body={newsItem.body}
                    />             
                ))
            )
        }
    }
    
    render() {
        // console.log(this.state.products)
        
        return (
            <div className="row">
                <h1>News</h1>
                {this.newsitem(this.state.products)}
            </div>
        )
    }
}
