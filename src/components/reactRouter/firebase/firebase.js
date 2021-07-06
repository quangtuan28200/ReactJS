import React, { Component } from 'react'
import firebaseConnect from './connect'
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');

export default class Firebase extends Component {

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

    render() {
        return (
            <div>
                <hr/>
                <h1>CRUD</h1>
                <hr/>
                <button onClick={() => this.createData()}>CREATE</button>
                <button onClick={() => this.readData()}>READ</button>
                <button onClick={() => this.updateData()}>UPDATE</button>
                <button onClick={() => this.deleteData("-MdwcJe6lm3TqBnX04Z9")}>DELETE</button>
            </div>
        )
    }
}
