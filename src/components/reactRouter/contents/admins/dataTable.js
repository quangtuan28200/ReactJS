import React, { Component } from 'react'

export default class DataTable extends Component {

    showPermission = (permission) => {
        if(permission === 1) {
            return 'Admin';
        }else if(permission === 2){
            return 'Modrator';
        }else{
            return 'Normal';
        }
    }

    render() {
        var editValue = {
            id: this.props.data.id,
            name: this.props.data.name,
            phone: this.props.data.phone,
            permission: this.props.data.permission,
        }
        return (       
            <tr>
                <th scope="row">{this.props.no + 1}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.showPermission(this.props.data.permission)}</td>
                <td>
                    <button type="button" className="btn btn-primary shadow-none" onClick={() => this.props.getEditvalue(editValue)}>Edit</button>
                    <button type="button" className="btn btn-danger ms-1 shadow-none">Delete</button>
                </td>
            </tr>
        )
    }
}

