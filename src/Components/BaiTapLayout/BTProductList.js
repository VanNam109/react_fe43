import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  state = {
    spList: [
      {
        image: "./img/sp_iphoneX.png",
        
        name: "iPhone X",
      },

      {
        image: "./img/sp_note7.png",

        name: "Note 7",
      },

      {
        image: "./img/sp_blackberry.png",

        name: "Blackberry",
      },

      {
        image: "./img/sp_vivo850.png",

        name: "Vivo850",
      },
    ],
  };

  renderSPList = () => {
    return this.state.spList.map((sp, index) => {
      return (
        <div className="col-3" key={index}>
          <BTProductItem item={sp} />
        </div>
      );
    });
  };
  
  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-center">BEST SMART PHONE</h3>
        <div className="row">{this.renderSPList()}</div>
      </div>
    );
  }
}
