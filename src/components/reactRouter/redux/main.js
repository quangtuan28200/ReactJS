import React, { Component } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                redux
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        data: state.arr
    }
}

export default connect(mapStateToProps)(Main)
