import React from 'react'

export default function FunctionProps(props) {
    return (
        <div>
            <h2>StateLess Component </h2>
            <div className="card text-left w-100">
                <img className="card-img-top" src={props.Two.image} alt />
                <div className="card-body">
                    <h4 className="card-title">{props.Two.name}</h4>
                    <p className="card-text">{props.Two.title}</p>
                </div>
            </div>
        </div>
    )
}
