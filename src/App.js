import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import BaiTapLayout2 from "./Components/BaiTapLayout2/BaiTapLayout2";
import DataBinding from "./DataBinding/DataBinding";
import EventBinding from "./EventBinding/EventBinding";
import RenderWithState from "./RenderWithState/RenderWithState";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps";
import ExampleCard from "./LiftingUpState/ExampleCard";
import BaiTapGioHang from "./BaiTapRedux/BaiTapGioHang/BaiTapGioHang";
import GameBauCua from "./GameBauCua";


function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding />
        <h1 className="header">hello fe43</h1> */}
      {/* <EventBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <DemoProps/> */}
      {/* <ExampleCard /> */}
      {/* <BaiTapGioHang /> */}
      <GameBauCua/>
    </div>
  );
}

export default App;
