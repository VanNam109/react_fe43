import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

//store tổng hợp ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
  //Nơi khai báo các state theo từng nghiệp vụ
  stateBaiTapGioHang: BaiTapGioHangReducer,
});

export default rootReducer;
