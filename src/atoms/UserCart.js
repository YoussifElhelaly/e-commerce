import { atom, useRecoilState } from "recoil";

var cart_product = []

const cart = atom({
    key: 'cart',
    default: cart_product
})

export default cart