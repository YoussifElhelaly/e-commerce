import { atom } from "recoil";

var GlobalCart_product = []

if(JSON.parse(localStorage.getItem("loginState")) === true){
    GlobalCart_product = []
} else {   
    if (JSON.parse(localStorage.getItem("globalCart"))) {
        GlobalCart_product = JSON.parse(localStorage.getItem("globalCart"))
    }
}


const GlobalCart = atom({
    key: 'GlobalCart',
    default: GlobalCart_product
})

export default GlobalCart