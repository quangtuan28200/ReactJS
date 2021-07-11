/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Redux extends Component {
    constructor(props) {
        super(props);
        
    }
    
    getStateFromStore = () => {
        console.log(this.props.data)
        console.log(this.props.status)
    }

    //Cach 1
    getFuncFromStore = () => {
        console.log(this.props)
        this.props.dispatch({
            type: "changeStatus"
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getStateFromStore()}>getStateFromStore</button>
                <button onClick={() => this.getFuncFromStore()}>getFuncFromStore</button>
                <button onClick={() => this.props.changeStatus()}>getFuncFromStore</button>
                <button onClick={() => this.props.add('c')}>addArr</button>
                <button onClick={() => this.props.delete(1)}>deleteArr</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.arr,
        status: state.status
    }
}

//Cach 2- neu dung cach nay thi cach 1 k dung dc nua
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: () => {
            dispatch({type: "changeStatus"})
        },
        add: (element) => {
            dispatch({
                type: "add",
                element
            })
        },
        delete: (index) => {
            dispatch({
                type: "delete",
                index
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
