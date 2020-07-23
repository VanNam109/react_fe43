import React, { Component } from "react";
import { connect } from "react-redux";

import SanPham from "./SanPham";

class DanhSachSanPham extends Component {
  renderSanPham = () => {
    //Lấy props từ compoment cha là mangSanPham render ra cắt compoment card
    return this.props.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    console.log(this.props.spChiTiet);
    return (
      <div>
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src={this.props.spChiTiet.hinhAnh}
              alt="hinh"
            />
          </div>
          <div className="col-sm-7">
            <h3 className="mt-5 text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.props.spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.props.spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.props.spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.props.spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.props.spChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.props.spChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

//Đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = (state) => {
  //state là rootReducer
  return {
    spChiTiet: state.stateBaiTapGioHang.spChiTiet,
  };
};

export default connect(mapStateToProps)(DanhSachSanPham);
