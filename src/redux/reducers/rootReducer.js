import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import GameBauCuaReducer from "./GameBauCuaReducer";

import QLSVReducer from './QLSVReducer'

//store tổng hợp ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
  //Nơi khai báo các state theo từng nghiệp vụ

  // stateBaiTapGioHang: BaiTapGioHangReducer,

  //2 cách
  //GameBauCuaReducer
  GameBauCuaReducer: GameBauCuaReducer,
  QLSVReducer


});

export default rootReducer;
