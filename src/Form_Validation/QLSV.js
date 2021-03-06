import React, { Component } from "react";
import Form_Validation from "./Form_Validation";
import { connect } from "react-redux";

class QLSV extends Component {
  renderTable = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <th>{nguoiDung.taiKhoan}</th>
          <th>{nguoiDung.matKhau}</th>
          <th>{nguoiDung.email}</th>
          <th>{nguoiDung.hoTen}</th>
          <th>{nguoiDung.soDt}</th>
          <th>{nguoiDung.maNhom}</th>
          <th>
              <button className ="btn btn-success mr-2">Sửa</button>
              <button className="btn btn-danger">Xóa</button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <Form_Validation />
        <table className="table">
          <thead>
            <tr>
              <th>Tài Khoản</th>
              <th>Mật Khẩu</th>
              <th>Email</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Mã Nhóm</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mangNguoiDung: state.QLSVReducer.mangNguoiDung,
  };
}
export default connect(mapStateToProps)(QLSV);
