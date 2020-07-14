import React, { Component } from 'react'
import styleDatabinding from './DataBinding.module.css';
export default class DataBinding extends Component {

    //Thuộc tính sanPham
    sanPham = {
        ma: 1,
        tenSP: 'Iphone X',
        gia: 1000,
        hinhAnh: 'https://picsum.photos/200/100'
    }
    //Phương thức
    renderThongTin = () => {
        return <div className="w-25">
            <div className="card">
                <img className="card-img-top" src={this.sanPham.hinhAnh} alt={this.sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className={`${styleDatabinding.header} card-title` }>{this.sanPham.tenSP}</h4>
                    <p className="card-text">{this.sanPham.gia} $</p>
                </div>
            </div>
        </div>
    }


    //Phương thức render là phương thức có sẵn của component để hiển thị giao diện 
    render() {
        //Binding dữ liệu là biến
        let title = "CYBERSOFT";
        let srcImg = `https://picsum.photos/200/300`
        let hocVien = {
            ma: 1,
            ten: 'Nguyễn văn a',
            tuoi: 18
        }
        //binding dữ liệu là hàm
        const renderImg = () => {
            //return về component (jsx); Nội dung hàm phải trả về 1 số, chuỗi, hoặc thẻ html, hoặc component có duy nhất 1 thẻ bao phủ
            return (
                <div>
                    <img src="https://picsum.photos/300/200" />
                </div>
            )
        }

        let objectStyle = {background:'#000',color:'#fff'}
        
        return (
            <div className="container">
                {this.renderThongTin()}
                <h1 style={objectStyle} className="titleDemo" id="title">{title}</h1>
                <img src={srcImg} alt={srcImg} />
                <div className="card w-25">
                    <img className="card-img-top" src={'https://picsum.photos/180/50'} alt />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: {hocVien.ten}</h4>
                        <p className="card-text">Tuổi: {hocVien.tuoi}</p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>

            </div>
        )
    }
}
