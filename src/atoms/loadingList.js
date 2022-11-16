import { atom } from "recoil";


const loadingList = atom({
    key: 'loadingList',
    default: false
})

export default loadingList