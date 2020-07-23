import React, { Component } from "react";
import data from "./data.json";
import Product from "./Product";
import ProductList from "./ProductList";
import Card from "./Card";
export default class ExampleCard extends Component {
  state = {
    proList: data,
    proSelected: null,
    cardList: [],
  };

  //Xử lý tăng giảm số lượng
  tangGiamSoLuong = (maSP, tangGiam) => {
    //Tăng là true , giảm là false
    // Tìm ra sản phẩm chứa maSP = với maSP tăng giảm số lượng click
    // console.log('maSP', maSP);
    // console.log('tangGiam' , tangGiam);

    let gioHangCapNhat = [...this.state.cardList];

    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index != -1) {
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        } else {
          alert("số lượng tối thiểu - 1");
        }
      }
    }

    // setSate làm tăng giảm số lượng
    this.setState({
      cardList: gioHangCapNhat,
    });
  };

  handleDelete = (card) => {
    /**
     * 1/tìm vị trí
     * 2/cắt ra khỏi mảng
     * 3/setState
     */
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
    if (index >= 0) {
      cardListUpdate.splice(index, 1);
      this.setState({
        cardList: cardListUpdate,
      });
    }
  };
  handleSelectPro = (pro) => {
    this.setState({
      proSelected: pro,
    });
  };
  handleBuy = (card) => {
    //tạo cardList mới
    // this.state.cardList.push(card);
    let cardListUpdate = [...this.state.cardList];

    //tìm vị trí phần tử trong mảng
    let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);

    if (index >= 0) {
      //tìm thấy
      cardListUpdate[index].soLuong += 1;
    } else {
      //Không tìm thấy
      card.soLuong = 1;
      cardListUpdate = [...cardListUpdate, card];
    }
    //set state
    this.setState({
      cardList: cardListUpdate,
    });
  };
  renderProList = () => {
    return this.state.proList.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product handleSelectPro={this.handleSelectPro} item={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Card
            tangGiamSoLuong={this.tangGiamSoLuong}
            handleDelete={this.handleDelete}
            cardList={this.state.cardList}
          />
          <ProductList
            handleSelectPro={this.handleSelectPro}
            proList={this.state.proList}
            handleBuy={this.handleBuy}
          />

          {this.state.proSelected ? (
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.proSelected.hinhAnh}
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.proSelected.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.proSelected.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.proSelected.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.proSelected.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.proSelected.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.proSelected.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
