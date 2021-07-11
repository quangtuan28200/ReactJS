import React, { Component } from 'react'

export default class DataNote extends Component {

    renderDataNote = () => {
        if (this.props.dataNote !== undefined) {      
            var renderDataNote = this.props.dataNote.map((element, key) => (
                <div className="accordion-item" key={key}>
                    <h2 className="accordion-header" id="headingOne">
                        <div style={{ backgroundColor: '#eee' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + key} aria-expanded="true" aria-controls={"collapse" + key}>
                            {element.title}
                        </div>
                    </h2>
                    <div id={"collapse" + key} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center" }} className="accordion-body">
                            <div>{element.content}</div>
                            <div>
                                <button type="button" className="btn btn-success" onClick={() => this.props.getDataUpdate(element.id)}>Edit</button>
                                <button style={{ marginLeft: 10 }} type="button" className="btn btn-danger" onClick={() => this.props.deleteNote(element.id)} >Delete</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            ));
        }
        return renderDataNote
    }

    render() {
        
        return (
            <div className="accordion" id="accordionExample">
                {this.renderDataNote()}
            </div>
        )
    }
}
