/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : 0
        }
    }

    status = (x) => {
        this.setState({
            status: x
        })

        if(x === 0){
            console.log(this.name.value);
        }
    }

    renderButton = () => (
        <>
            <button type="button" className="btn btn-success mr-2" onClick={() => {this.status(1)}}>Edit</button>
            <button type="button" className="btn btn-danger">Remove</button>
        </>
    )

    renderForm = () => (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name product:</label>
                <input ref={(input) => {this.name = input}} defaultValue={this.props.name} type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <button className="btn btn-primary" onClick={() => {this.status(0)}}>Save</button>
        </div>
    )

    displayCheck = () => {
        var displayComp = this.renderForm();
        if(this.state.status === 0){
            displayComp = this.renderButton();
        }
        return displayComp;
    }

    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.TAz4V2ZKZctUaWXAfegIywAAAA&pid=Api&P=0&w=300&h=300" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.price}</p>
                        { this.displayCheck() }
                    </div>
                </div>
            </div>
        )
    }
}
