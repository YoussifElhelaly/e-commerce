import { useEffect } from "react";
import { atom } from "recoil";

let currentUser 

if (localStorage.getItem("currentUser")) {
    currentUser = JSON.parse(localStorage.getItem("currentUser")) 
} else {
    currentUser = {}
}


const userInfo = atom({
    key: 'userInfo',
    default: currentUser
})

export default userInfo