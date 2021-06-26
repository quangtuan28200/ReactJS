import React, { Component } from 'react'

export default class World extends Component {
    render() {
        return (
            <div className="row">
                <h1>World</h1>
                <div className="col-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/700x600" className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">product 1</h5>
                            <p className="card-text">1.000.000 d</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/700x600" className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">product 2</h5>
                            <p className="card-text">2.000.000 d</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/700x600" className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">product 3</h5>
                            <p className="card-text">3.000.000 d</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
