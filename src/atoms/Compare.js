import { atom } from "recoil";

var compareList = []

if (localStorage.getItem("compareList")) {
    compareList = JSON.parse(localStorage.getItem("compareList"))
} 



const compare = atom({
    key: 'compareList',
    default: compareList
})

export default compare