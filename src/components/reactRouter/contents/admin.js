/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import FormBtn from './admins/formBtn';
import FormAdd from './admins/formAdd';
import Search from './admins/search';
import DataTable from './admins/dataTable';

import dataUser from '../../../data/dataUser.json';
export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : false,
            edit : false,
            data: dataUser,
            searchValue: '',
            editValue: {},
        }
    }

    onChangeStatus = () => {
        this.setState({
            status: !this.state.status,
            edit: false,
            editValue: {}
        })
    }

    getSearchValue = (value) => {
        this.setState({
            searchValue: value
        })
    }

    getFormValue = (value, e) => {
        e.preventDefault()
        console.log(value)
        var a = this.state.data;
        a.push(value)
        
        this.setState({
            data: a
        })
    }

    getEditvalue = (value) => {
        this.setState({
            status: true,
            edit: true,
            editValue: value
        })
    }

    saveHandle = (e) => {
        e.preventDefault()
        this.setState({
            status: false,
            edit: false,
        })
    }

    renderDataTable = (data) => (    
        data.map((dt, index) => (    
            <DataTable 
                getEditvalue = {(value) => this.getEditvalue(value)}
                key = {index}
                data = {dt}
                no = {index}
            />
        ))           
    )
    

    render() {    
        var searchResults = [];
        this.state.data.forEach(element => {
            if(element.name.indexOf(this.state.searchValue) !== -1){
                searchResults.push(element)
            }
        });
        
        return (
            <div className="mt-4">
                <div className="row">
                    <div className="col-6">
                        <Search 
                            getSearchValue = {(value) => this.getSearchValue(value)}
                        />
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
                                {this.renderDataTable(searchResults)}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-3">
                        <div className="d-grid">
                            <FormBtn 
                                onChangeStatus = {() => this.onChangeStatus()}
                                status = {this.state.status}
                                edit = {this.state.edit}
                            />
                        </div>
                        <FormAdd 
                            saveHandle = {(e) => this.saveHandle(e)}
                            getFormValue = {(value,e) => this.getFormValue(value,e)}
                            status = {this.state.status}
                            edit = {this.state.edit}
                            editValue = {this.state.editValue}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
