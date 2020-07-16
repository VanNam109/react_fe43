import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    render() {
        const randomOne = {
            image: "https://picsum.photos/300/200",
            name: "Random Image",
            title: "Ảnh được random ngẫu nhiên của Statefull component"
        };
        const randomTwo = {
            image: "https://picsum.photos/300/200",
            name: "Random Image",
            title: "Ảnh được random ngẫu nhiên của Stateless component"
        };
        return (
            <div className="text-center">
                <h1>Demo Props</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ClassProps One={randomOne} />
                        </div>
                        <div className="col-lg-6">
                            <FunctionProps Two={randomTwo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
