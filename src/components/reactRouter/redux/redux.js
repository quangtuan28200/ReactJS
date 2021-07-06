/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Redux extends Component {
    constructor(props) {
        super(props);
        
    }
    
    getStateFromStore = () => {
        console.log(this.props.status)
        console.log(this.props.data)
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
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)
