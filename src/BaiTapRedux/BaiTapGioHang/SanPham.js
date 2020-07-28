import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            style={{ height: 350 }}
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt="hinh"
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.gia}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xemChiTiet(sanPham);
              }}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger">
              Mua Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sanPham) => {
      // Định nghĩa 1 props cho component này là 1 hàm
      //Dùng 1 hàm dispatch của redux đưa sản phẩm lên tất  cả reducer
      console.log("sanPhamDuocClick", sanPham);
      //Dùng hàm dispatch từ redux trả ra  => Đưa dữ liệu lên reducer xử lý
      const action = {
        type: "XEM_CHI_TIET", // Gửi lên ruducer
        sanPham,
      }
      dispatch(action); //Gửi lên ruducer
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
