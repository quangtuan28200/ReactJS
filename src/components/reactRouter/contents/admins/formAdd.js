/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            fphone: '',
            fpermission: '1',
        }      
    }

    onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    saveValue = (a, b, c) => (
        {
            id: this.props.editValue.id,
            name: a,
            phone: b,
            permission: parseInt(c),            
        }
    )

    renderFormBtn = (formValue) => {
        if(this.props.edit){
            return (
                <div className="d-grid">
                    <button className="asd btn btn-success shadow-none" onClick={(e) => this.props.saveHandle(this.saveValue(this.refname.value, this.refphone.value, this.refpermission.value),e)}>Save</button>
                </div>   
            )
        }else{
            return (
                <>
                    <div className="d-grid">
                        <button type="reset" className="asd btn btn-primary shadow-none" >Reset</button>
                    </div>              
                    <div className="d-grid">
                        <button className="btn btn-success shadow-none mt-1" onClick={(e) => this.props.getFormValue(formValue, e)}>Add</button>
                    </div>    
                </>
            )
        }   
    }
    
    renderFormAdd = () => {
        var formValue = {
            id: uuidv4(),
            name: this.state.fname,
            phone: this.state.fphone,
            permission: parseInt(this.state.fpermission),
        }

        if (this.props.status) {
            return (
                <div className="card mt-1">
                    <div className="card-header">
                        Add user
                    </div>
                    <div className="card-body">  
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input ref={(input) => {this.refname = input}} onChange={(e) => this.onChange(e)} defaultValue={this.props.editValue.name} name="fname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input ref={(input) => {this.refphone = input}} onChange={(e) => this.onChange(e)} defaultValue={this.props.editValue.phone} name="fphone" type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectGender" className="form-label">Author</label>
                                <select ref={(input) => {this.refpermission = input}} onChange={(e) => this.onChange(e)} defaultValue={this.props.editValue.permission} name="fpermission" className="form-select" aria-label="selectGender">
                                    <option value="1">Admin</option>
                                    <option value="2">Modrator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            {this.renderFormBtn(formValue)}
                        </form>       
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
    render() {
        return this.renderFormAdd()
    }
}
