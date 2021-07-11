import React, { Component } from 'react'
import FormNote from './contents/formNote';
import DataNote from './contents/dataNote';
import firebaseConnect from './connect'
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');


export default class Firebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            dataUpdate: {},
        }
    }
    
    // CRUD

    createData = () => {
        //tro? vao table note
        const data = firebase.database().ref('note')

        //CREATE: tu dong tao ra id cho 1 row
        data.push({
            title: 'asd',
            content: 'dsa'
        })
        this.readData()
    }

    updateData = () => {
        //tro? vao table note
        const data = firebase.database().ref('note/note3')

        //UPDATE/ CREATE(it dung vi moi lan create phai tao id ref('note/ id cua data '))
        data.set({
            title: "nothing 31",
            content: "ghi chu 31"
        })
        this.readData()
    }

    readData = () => {
        //tro? vao table note
        const data = firebase.database().ref('note')

        //READ: Push data vao snapShot
        data.once("value").then((snapShot) => {
            //val() to get data
            console.log(snapShot.val())
        })
    }

    deleteData = (id) => {
        //tro? vao table note
        const data = firebase.database().ref('note')
        data.child(id).remove()
        this.readData()
    }

    //NOTE COMPONENT

    addNote = (value) => {
        
        //tro? vao table note
        const data = firebase.database().ref('note')

        //CREATE: tu dong tao ra id cho 1 row
        data.push({
            title: value.title,
            content: value.content,
        })
    }

    updateNote = (value,id) => {
        console.log(value, id)
        this.setState({
            isEdit: false,
        }) 
        
        //tro? vao table note
        const data = firebase.database().ref('note/' + id)
        //UPDATE/ CREATE(it dung vi moi lan create phai tao id ref('note/ id cua data '))
        data.set({
            title: value.title,
            content: value.content,
        })
    }

    deleteNote = (id) => {
        //tro? vao table note
        const data = firebase.database().ref('note')
        data.child(id).remove()
    }

    getDataUpdate = (id) => {
        const data = firebase.database().ref('note')

        data.on("value", notes => {
            this.dataHandle(notes).forEach(element => {
                if(element.id === id){
                    this.setState({
                        isEdit: true,
                        dataUpdate: element,
                    }) 
                }
            });
        })
    }

    getDataNote = () => {
        //tro? vao table note
        const data = firebase.database().ref('note')

        //READ: Push data vao snapShot

        //Cach 1
        // data.once("value").then((snapShot) => {
        //     this.setState({
        //         dataNote: snapShot.val()
        //     })
        // })

        // Cach 2
        data.on("value", notes => {
            this.setState({
                dataNote: this.dataHandle(notes) 
            }) 
        })
    }

    dataHandle = (notes) => {
        var dataNotes = []
        notes.forEach(element => {
            dataNotes.push({
                id: element.key,
                title: element.val().title,
                content: element.val().content,
            })
        });
        return dataNotes
    }

    componentDidMount(){
        this.getDataNote();
    }

    render() {
        console.log('a')
        return (
            <div>
                <hr />
                <h1>CRUD</h1>
                <hr />
                <button onClick={() => this.createData()}>CREATE</button>
                <button onClick={() => this.readData()}>READ</button>
                <button onClick={() => this.updateData()}>UPDATE</button>
                <button onClick={() => this.deleteData("-MdwcJe6lm3TqBnX04Z9")}>DELETE</button>
                <hr />
                <div className="row">
                    <div className="col-9">
                        <DataNote 
                            dataNote = {this.state.dataNote}
                            getDataUpdate = {(id) => this.getDataUpdate(id)}
                            deleteNote = {(id) => this.deleteNote(id)}
                        />
                    </div>
                    <div className="col-3">
                        <FormNote  
                            addNote = {(value) => this.addNote(value)}
                            updateNote = {(value,id) => this.updateNote(value,id)}
                            dataUpdate = {this.state.dataUpdate}
                            isEdit = {this.state.isEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
