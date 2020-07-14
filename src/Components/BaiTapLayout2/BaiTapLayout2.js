import React, { Component } from 'react'
import BT2Header from './BT2Header'
import BT2Body from './BT2Body'
import BT2Footer from './BT2Footer'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <BT2Header />
                <BT2Body />
                <BT2Footer />
            </div>
        )
    }
}
