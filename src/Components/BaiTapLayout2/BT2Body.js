import React, { Component } from 'react'
import BT2Banner from './BT2Banner'
import BT2Item from './BT2Item'

export default class BT2Body extends Component {
    render() {
        return (
            <div className="container">
                <BT2Banner />
                <div className="row">
                    <div className="col-3">
                        <BT2Item />
                    </div>
                    <div className="col-3">
                        <BT2Item />
                    </div>
                    <div className="col-3">
                        <BT2Item />
                    </div>
                    <div className="col-3">
                        <BT2Item />
                    </div>
                </div>
            </div>
        )
    }
}
