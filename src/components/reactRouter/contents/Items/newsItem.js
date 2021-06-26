/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(props){
        super(props);     
        
    }

    render() {  
        return (
            <div className="col-4">
                <div className="card">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.TZN5MTKoXbj10eQNQFPsSAHaEK&pid=Api&P=0&w=286&h=162" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.price}</p>

                    </div>
                </div>
            </div>
        )
    }
}
