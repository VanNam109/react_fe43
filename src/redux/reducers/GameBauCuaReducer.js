const initialState = {
  tongTien: 100,
  danhSachCuoc: [
    {
      ma: "bau",
      hinhAnh: "../img/bau.png",
      giaCuoc: 0,
    },
    {
      ma: "cua",
      hinhAnh: "../img/cua.png",
      giaCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "../img/tom.png",
      giaCuoc: 0,
    },
    {
      ma: "ca",
      hinhAnh: "../img/ca.png",
      giaCuoc: 0,
    },
    {
      ma: "nai",
      hinhAnh: "../img/nai.png",
      giaCuoc: 0,
    },
    {
      ma: "ga",
      hinhAnh: "../img/ga.png",
      giaCuoc: 0,
    },
  ],
  xucXac: [
    {
      ma: "bau",
      hinhAnh: "../img/bau.png",
      giaCuoc: 0,
    },
    {
      ma: "cua",
      hinhAnh: "../img/cua.png",
      giaCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "../img/tom.png",
      giaCuoc: 0,
    },
  ],
};

const GameBauCuaReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "TANG_GIAM":
      console.log(actions);
      let { tongTien } = state;
      let danhSachCuoc = [...state.danhSachCuoc];
      let index = danhSachCuoc.findIndex((ele) => ele.ma === actions.ma);
      if (index !== -1) {
        if (actions.tangGiam) {
          //+
          if (tongTien > 0) {
            danhSachCuoc[index].giaCuoc += 10;
            tongTien -= 10;
          }
        } else {
          //-
          if (danhSachCuoc[index].giaCuoc > 0) {
            danhSachCuoc[index].giaCuoc -= 10;
            tongTien += 10;
          }
        }
      }

      // state.danhSachCuoc = danhSachCuoc;
      // state.tongTien = tongTien;
      // return state; //Không bị thay đổi địa chỉ -> không render lại

      return { ...state, danhSachCuoc, tongTien }; //bị thay đổi địa chỉ

    default:
      break;
  }
  return { ...state };
};

export default GameBauCuaReducer;
