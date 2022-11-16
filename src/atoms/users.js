import { atom } from "recoil";

    var users = []

    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    } 
    

const usersData = atom({
    key: 'usersData',
    default: users
})


export default usersData