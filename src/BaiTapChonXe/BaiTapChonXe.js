import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './img/black-car.jpg'
    }
    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`;

        //setState cho src tấm hình thay đổi để giao diện render lại 

        this.setState({
            srcImg: imgColor
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h3>Please chosse your favorite about car's color</h3>
                        <img className="w-100" src={this.state.srcImg} alt="img"></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mt-5">
                            <div className="col-lg-3">
                                <button className="btn btn-danger" onClick={() => {
                                    this.changeColor('red');
                                    //Trực tiếp thay đổi state
                                    // this.setState({
                                    //     srcImg: './img/red-car.jpg'
                                    // })
                                }}>Red color</button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn btn-secondary" onClick={() => {
                                    this.changeColor('silver');
                                    // this.setState({
                                    //     srcImg: './img/silver-car.jpg'
                                    // })
                                }}>Sliver color</button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn btn-dark" onClick={() => {
                                    // this.changeColor('black');
                                    // this.setState({
                                    //     srcImg: './img/black-car.jpg'
                                    // })
                                }}>Dark color</button>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn btn-light" onClick={() => {
                                    this.changeColor('steel');
                                    // this.setState({
                                    //     srcImg: './img/steel-car.jpg'
                                    // })
                                }}>Steel color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
