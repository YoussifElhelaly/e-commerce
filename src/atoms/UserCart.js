import { atom, useRecoilState } from "recoil";
import GlobalCart from "./GlobalCart";
import loginState from "./loginAtom";

var cart_product = []

// if(JSON.parse(localStorage.getItem("globalCart")).length !== 0) {
//     cart_product = JSON.parse(localStorage.getItem("globalCart"))
// }

const cart = atom({
    key: 'cart',
    default: cart_product
})

export default cart