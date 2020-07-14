import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        { id: 1, name: 'Iphone 2G', price: 100000 },
        { id: 2, name: 'Iphone 2G', price: 200000 },
        { id: 3, name: 'Iphone 3G', price: 300000 },
        { id: 4, name: 'Iphone 4G', price: 400000 },
    ]
    renderProductList = () => {
        let arrayProductJSX = [];
        //Cách 1 : 
        // for (let index = 0; index < this.productList.length; index++) {
        //     //Duyệt mảng lấy ra từng phần tử
        //     let product = this.productList[index];

        //     //Từ product tạo thẻ tr
        //     let trProduct =
        //         <table>
        //             <tr key={index}>
        //                 <td>{product.id}</td>
        //                 <td>{product.name}</td>
        //                 <td>{product.price}</td>
        //                 <td><button className="btn btn-danger">Xóa</button></td>
        //             </tr >
        //         </table>

        //     //Push vào mảng kết quả
        //     arrayProductJSX.push(trProduct);

        // }
        // return arrayProductJSX; // [<tr>....</tr> , <tr>...</tr>]

        // Cách 2 và Cách 3  giống nhau cách 2 thêm return arrayProduct ở ngoài

        return arrayProductJSX = this.productList.map((productItem, index) => {
            return <tr key={index}>
                <td>{productItem.id}</td>
                <td>{productItem.name}</td>
                <td>{productItem.price}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr >
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Product List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()};
                     </tbody>
                </table>
            </div>
        )
    }
}
