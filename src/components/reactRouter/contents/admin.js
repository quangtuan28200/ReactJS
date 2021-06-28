import React, { Component } from 'react'
import FormBtn from './admins/formBtn';
import FormAdd from './admins/formAdd';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : false,
        }
    }

    onChangeStatus = () => {
        this.setState({
            status: !this.state.status
        })
    }

    renderFormAdd = () => (
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

    renderBtnFormAdd = () => (
        <button className="btn btn-outline-primary shadow-none" onClick={() => this.onChangeStatus(true)}>Add new user</button>
    )
    renderBtnFormClose = () => (
        <button className="btn btn-outline-danger shadow-none" onClick={() => this.onChangeStatus(false)}>Close</button>       
    )

    checkFormBtn = () => {
        let formBtn = this.renderBtnFormAdd();
        if(this.state.status){
            formBtn =  this.renderBtnFormClose();
        }
        return formBtn
    }
    checkFormAdd = () => {
        if(this.state.status){
            return this.renderFormAdd();
        }
    }
    
    render() {                     
        return (
            <div className="mt-4">
                <div className="row">
                    <div className="col-6">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-9">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button type="button" className="btn btn-primary shadow-none">Edit</button>
                                        <button type="button" className="btn btn-danger ms-1 shadow-none">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <button type="button" className="btn btn-primary shadow-none">Edit</button>
                                        <button type="button" className="btn btn-danger ms-1 shadow-none">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <button type="button" className="btn btn-primary shadow-none">Edit</button>
                                        <button type="button" className="btn btn-danger ms-1 shadow-none">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-3">
                        <div className="d-grid">
                            <FormBtn 
                                onChangeStatus = {() => this.onChangeStatus()}
                                status = {this.state.status}
                            />
                        </div>
                        <FormAdd 
                            status = {this.state.status}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
