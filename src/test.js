/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Product from './components/product';

export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Header</h1>
                    <div className="row mt-2">
                        <Product 
                            name="product 1"
                            price="1.000.000 đ"
                        />
                        <Product 
                            name="product 2"
                            price="2.000.000 đ"
                        />
                        <Product 
                            name="product 3"
                            price="3.000.000 đ"
                        />              
                    </div>
                </div>
            </div>
        )
    }
}
