import { atom } from "recoil";

let state 

if (localStorage.getItem("loginState") === "false") { 
    if (sessionStorage.getItem("loginState") === "true") {
        state = true
    } else if (sessionStorage.getItem("loginState") === "false") {
        state = false
    } else {
        state = false
    }
} else if (localStorage.getItem("loginState") === "true") {
    state = true
} else {
    if (sessionStorage.getItem("loginState") === "true") {
        state = true
    } else if (sessionStorage.getItem("loginState") === "false") {
        state = false
    } else {
        state = false
    }
}


const loginState = atom({
    key: 'login',
    default: state
})

export default loginState