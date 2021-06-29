import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    onChange = (e) => {
        let kw = e.target.value
        this.setState({
            searchValue: kw,
        })    
        this.props.getSearchValue(kw)
    }
    
    render() {
        return (
            <div>
                <div className="d-flex">
                    <input name="keyword" onChange={(e) => {this.onChange(e)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={() => this.props.getSearchValue(this.state.searchValue)}>Search</button>
                </div>
            </div>
        )
    }
}
