import React, { Component } from 'react'

export default class FormBtn extends Component {
    formBtnAdd = () => (
        <button className="btn btn-outline-primary shadow-none" onClick={() => this.props.onChangeStatus()}>Add new user</button>
    )

    formBtnClose = () => (
        <button className="btn btn-outline-danger shadow-none" onClick={() => this.props.onChangeStatus()}>Close</button>           
    )

    renderFormBtn = () => {
        var formBtn = this.formBtnAdd(); 
        if(this.props.status){
            formBtn = this.formBtnClose();
        }
        return formBtn;
    }
    render() {
        return this.renderFormBtn()
    }
}
