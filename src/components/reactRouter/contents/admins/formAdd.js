/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class FormAdd extends Component {
    renderFormAdd = () => {
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
                                <input name="fname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input name="faddress" type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectGender" className="form-label">Author</label>
                                <select name="fgender" className="form-select" aria-label="selectGender">
                                    <option defaultValue value="1">Admin</option>
                                    <option value="2">Modrator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success shadow-none" >Add</button>
                            </div>
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
