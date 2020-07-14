import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick = () => {
        alert('hello fe 43');
    }
    showMessage = (mess) => {
        alert("Hello " + mess);
    }

    render() {
        return (
            <div>
                {/* Cách 1 : Truyền callback function xử lý sự kiện */}
                <h3>Cách 1 : Truyền callback function xử lý sự kiện </h3>
                <button onClick={this.handleClick} className="btn btn-danger"> Click me !!</button>
                <br/>
                <hr/>
                <button onClick={this.showMessage.bind(this, 'cybersoft')} className = "btn btn-primary"> Show Message</button>
                <br />
                <hr />
                {/* Cách 2 : dùng arrowfunction */}
                <h3>Cách 2 : dùng arrowfunction</h3>
                <button onClick={() => {
                    this.handleClick();
                }} className="btn btn-success"> Click me !</button>
                <br />
                <hr />
                <button onClick={() => {
                    this.showMessage('cybersoft');
                }} className="btn btn-warning">Click me </button>
            </div >
        )
    }
}
