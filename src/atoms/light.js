import { atom } from "recoil";

var light_mode = true

if(JSON.parse(localStorage.getItem("light_mode"))){
    light_mode = JSON.parse(localStorage.getItem("light_mode"))
}


const light = atom({
    key: 'light',
    default: light_mode
})

export default light