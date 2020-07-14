import React, { Component } from 'react'

export default class RenderWithState extends Component {
    //this.state: Thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện .Đây là thuộc tính có sẵn của compoment
    state = {
        isLogin: false
    }

    //Thuộc tính
    // isLogin = false;
    userName = 'nam';
    //Phương thức checkLogin 
    renderContent = () => {
        if (this.state.isLogin) {
            return <p>Hello {this.userName}</p>
        }
        return <button onClick={() => {
            this.login();
        }} className="btn btn-primary">Đăng Nhập</button>
    }
    login = () => {
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin: true

        }
        //Phương thức this.setState là 1 phương thức có sẵn của component làm 2 nhiệm vụ ,1 là thay đổi giá trị state ,2 là gọi this.render lại giao diện
        //this.setState là 1 phương thức bất đồng bộ
        this.setState(newState, () => {
            console.log(this.setState);
        });
        this.render();

    }

    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button className="btn btn-primary">Đăng Nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}

