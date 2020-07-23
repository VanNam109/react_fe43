//Thay vì khai báo state ở component ta khai báo tại reducer

const stateDefaut = {
  spChiTiet: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: 'AMOLED, 6.2", Full HD+',
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
};

const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  console.log('actionBTGHReducer',action);
  switch (action.type) {
   
    case "XEM_CHI_TIET": {
      return { ...state, spChiTiet: action.sanPham };
    }
    default: return { ...state };
  }
 
};
export default BaiTapGioHangReducer;
