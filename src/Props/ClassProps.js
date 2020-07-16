import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        // statefullcomponent (class)
        // statelesscomponent (function)
        const { image, name, title } = this.props.One;
        return (
            <div>
                 <h2>StateFull Component </h2>
                <div className="card text-left w-100 ">
                    {/* Nhận props image từ component DemoProps */}
                    <img className="card-img-top img-" src={image} alt />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{title}</p>
                    </div>
                </div>
            </div>

        )
    }
}
