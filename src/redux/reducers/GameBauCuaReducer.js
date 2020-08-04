import { getRandomInt } from "../../utils/randomint";
import { TANG_GIAM } from "../constants/GameBauCuaConst";

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
    case TANG_GIAM:
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

    case "CHOI_GAME": {
      let danhSachCuoc = [...state.danhSachCuoc];
      let { tongTien } = state;

      //tạo xúc xắc ngẫu niên
      let xucXac = [
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
      ];

      //Lấy những con cược
      danhSachCuoc = danhSachCuoc.filter((ele) => ele.giaCuoc > 0);
      //xử lý trả lại tiền
      for (let ele of danhSachCuoc) {
        let traLaiTien = xucXac.find((item) => item.ma === ele.ma);
        if (traLaiTien) {
          tongTien += ele.giaCuoc;
        }
      }
      //xử ly trúng thưởng
      for (let ele of xucXac) {
        let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
        if (trungThuong) {
          tongTien += trungThuong.giaCuoc;
        }
      }
      //reset giá cược về không
      let updateDanhSachCuoc = [...state.danhSachCuoc];
      updateDanhSachCuoc = updateDanhSachCuoc.map((ele) => ({
        ...ele,
        giaCuoc: 0,
      }));

      return { ...state, xucXac, tongTien, danhSachCuoc: updateDanhSachCuoc };
    }
    default:
      break;
  }
  return { ...state };
};

export default GameBauCuaReducer;
