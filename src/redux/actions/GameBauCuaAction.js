import { TANG_GIAM } from "../constants/GameBauCuaConst"; // cụ thể

// import * as actionsConst from "../constants/GameBauCuaConst"; // lấy hết biến
// actionsConst.TANG_GIAM

export function tangGiamAction(ma, tangGiam) {
  return {
    type: TANG_GIAM,
    ma: ma,
    tangGiam: tangGiam,
  };
}
