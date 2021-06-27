import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class World extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false,
            fimg: '',
            fname: '',
            faddress: '',
            fgender: 'male',
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    onImgChange = (event) => {
        let name = event.target.files[0].name
        this.setState({
            fimg : name
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isSubmit: true
        })
    }

    render() {
        if (this.state.isSubmit) {
            console.log(this.state.fimg, this.state.fname, this.state.faddress, this.state.fgender)
            return <Redirect to="/home" />
        }
        return (
            <div className="row">
                <h1>World</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="imgInput" className="form-label">Image</label>
                        <input onChange={(event) => this.onImgChange(event)} name="fimg" type="file" className="form-control" id="imgInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input onChange={(event) => this.onChange(event)} name="fname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input onChange={(event) => this.onChange(event)} name="faddress" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectGender" className="form-label">Gender</label>
                        <select onChange={(event) => this.onChange(event)} name="fgender" className="form-select" aria-label="selectGender">
                            <option defaultValue value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(event) => this.submitForm(event)}>Submit</button>
                </form>

            </div>
        )
    }
}
