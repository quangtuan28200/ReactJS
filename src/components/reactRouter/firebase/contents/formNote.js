/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class FormNote extends Component {
    constructor(props) {
        super(props);
    }

    dataForm = () => ({
        title: this.refTitle.value,
        content: this.refContent.value,
    })

    renderFormBtn = () => {
        var btn = <button type="reset" className="btn btn-primary" onClick={() => this.props.addNote(this.dataForm())}>ADD</button>
        
        if(this.props.isEdit){
            btn = <button type="reset" className="btn btn-primary" onClick={() => this.props.updateNote(this.dataForm(), this.props.dataUpdate.id)}>SAVE</button>
        }
        return btn
    }
    
    render() {
        return (
            <div className="card mt-1">
                <form>
                    <div className="card-header">
                        Add note
                    </div>
                    <div className="card-body">  
                        
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input defaultValue={this.props.dataUpdate.title} ref={(input) => {this.refTitle = input}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">         
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                                <textarea defaultValue={this.props.dataUpdate.content} ref={(textarea) => {this.refContent = textarea}} className="form-control" id="exampleFormControlTextarea1" rows={3} />
                        </div>
                        {this.renderFormBtn()}
                    </div>
                </form>
            </div>
        )
    }
}
