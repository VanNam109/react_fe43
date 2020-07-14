import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'
export default class BaiTapLayout extends Component {



    //Nội dung giao diện react class component chứa trong lệnh return của phương thức render
    render() {
        return (
            <div>
              <BTHeader />
              <BTSlider />
              <BTProductList />
              <BTFooter />
            </div>
        )
    }
}
