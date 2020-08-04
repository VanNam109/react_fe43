import React, { Component } from "react";

import { connect } from "react-redux";
import { THEM_NGUOI_DUNG } from "../redux/constants/QLSVConst";

class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
  };
  handleChange = (event) => {
    // let value = event.target.value; // event.targer là thẻ (component) xảy ra xự kiện onChange
    let { name, value } = event.target;
    console.log("taiKhoan", value);

    //Các thuộc tính nằm trên thẻ gọi là Attribute
    //Các thuộc tính của đối tượng thẻ sau khi dom là property
    let label = event.target.getAttribute("label");
    let type = event.target.getAttribute("type");

    //Tách giá trị values và errors của state ra xử lý riêng
    //Xử lý gán value
    let newValues = { ...this.state.values, [name]: value };

    //Xử lý error
    //Kiểm tra rỗng
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = label + " không được để trống !!!";
    } else {
      //Kiểm tra nhập số điện thoại
      if (type === "number") {
        let regexNumber = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (!regexNumber.test(value)) {
          errorMess = ` ${label} số điện thoại chưa đúng !`;
        }
      }
      //Kiểm tra email
      if (type === "email") {
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexEmail.test(value)) {
          errorMess = ` ${label} chưa hợp lệ !`;
        }
      }
    }

    let newErrors = { ...this.state.errors, [name]: errorMess };

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log("state", this.state);
      }
    );
  };

  handleSubmit = (event) => {
    //Ngăn sự kiện reload lại form
    event.preventDefault();
    let { values, errors } = this.state;

    //Duyệt các trường values của state
    for (let key in values) {
      if (values[key].trim() === "") {
        alert("Dữ liệu không hợp lệ !");
        return;
      }
    }
    //Duyệt các trường errors cả state
    for (let key in errors) {
      if (errors[key].trim() !== "") {
        alert("Dữ liệu không hợp lệ !");
        return;
      }
    }

    //Submit lên reducer thêm người dùng vào mảng người dùng
    this.props.dispatch({
      type: THEM_NGUOI_DUNG,
      nguoiDung: this.state.values,
    });
  };
  render() {
    return (
      <div className="card text-dark bg-light text-light">
        <div className="card-header">Form Đăng ký</div>
        <div className="card-body">
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    name="taiKhoan"
                    label="Tài Khoản"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    type="password"
                    className="form-control"
                    name="matKhau"
                    label="Mật Khẩu"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Số Điện Thoại</p>
                  <input
                    type="number"
                    className="form-control"
                    name="soDt"
                    label="Số Điện Thoại"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.soDt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    label="Họ Tên"
                    name="hoTen"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    className="form-control"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <p>Mã nhóm</p>
                  <input
                    className="form-control"
                    label="Mã Nhóm"
                    name="maNhom"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.maNhom}</p>
                </div>
                <div className="form-group">
                  <button className="btn btn-success">Đăng ký</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null)(Form_Validation);
