const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "1",
      matKhau: "123",
      email: "123",
      soDt: "123",
      hoTen: "123",
      maNhom: "GP01",
    },
    {
      taiKhoan: "2",
      matKhau: "123",
      email: "123",
      soDt: "123",
      hoTen: "123",
      maNhom: "GP02",
    },
    {
      taiKhoan: "3",
      matKhau: "123",
      email: "123",
      soDt: "123",
      hoTen: "123",
      maNhom: "GP03",
    },
  ],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case "THEM_NGUOI_DUNG": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, actions.nguoiDung  ];
      return { ...state, mangNguoiDung: mangNguoiDungUpdate };
    }
    default:
      return state;
  }
};
