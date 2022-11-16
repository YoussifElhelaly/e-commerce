import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sign.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useRecoilState } from 'recoil'
import loginState from '../../atoms/loginAtom'
import usersData from '../../atoms/users'
import userInfo from '../../atoms/userInfo'
import Address from './Address/Address'
import cart from '../../atoms/UserCart'
import GlobalCart from '../../atoms/GlobalCart'
import { Global } from '@emotion/react'

function Sign() {
    const [stateLogin , setStateLogin] = useRecoilState(loginState)
    const [usersInfo ,setusersInfo] = useRecoilState(usersData)
    const [currentUser, setCurrentUser] = useRecoilState(userInfo)
    const [cartGlobal, setCartGlobal] = useRecoilState(GlobalCart)
    const [cartUser, setCartUser] = useRecoilState(cart)
    const id = currentUser?.userID

    
    let element
    let users = usersInfo
    let check = 0
    let addUser = (user) => {
        setusersInfo((prev) => [
        ...prev,    
        user 
        ]
        )
    }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(usersInfo))
        
    }, [usersInfo,stateLogin])

    function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }  

    function editItemText(value ,user){
        let idA7a = user.userID - 1
        let bta3 = user?.cart
        console.log(bta3)
        bta3.concat(value) 
        let newList = replaceItemAtIndex(users, idA7a, {
            ...user,
            cart: bta3.concat(value) ,
        });
        setusersInfo(newList)
        localStorage.setItem("users" , JSON.stringify(newList))
        setCurrentUser(newList[idA7a])
        localStorage.setItem("currentUser" ,JSON.stringify(newList[idA7a]))
};

    

    function signUp(userName, email, password, cartCurrent) {
        let userUP = {
            userID: (users.length+1),
            userName: userName,
            email: email,
            password: password,
            wishList: [],
            cart: cartCurrent,
            addressData: [],
            orders:[]
        }
        if (users.length > 0) {
            
            for (let user of users) {
                if (user.email === email || user.userName === userName) {
                    check += 1                     
                }
            } 
            if (check !== 0 ) {
                    Swal.fire({
                        icon: 'error',
                        text: 'UserName or Email is already exist',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor: "#fed200"
                    },)
                check = 0
            } else {
                 Swal.fire({
                        icon: 'success',
                        text: 'Register Success',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor: "#fed200"
                },)
                addUser(userUP)
                localStorage.setItem("users", JSON.stringify(usersInfo))
            }
        } else {
            Swal.fire({
                icon: 'success',
                text: 'Register Success',
                background: "#212121",
                color: "#fff",
                confirmButtonColor: "#fed200"
            },)
                addUser(userUP)
                localStorage.setItem("users", JSON.stringify(users))
            }        
        }

     function login(userName, pass) {
        if (userName.includes("@")) {
            for (let userLogin of users) {
                if (userLogin.email === userName && userLogin.password === pass) {
                     Swal.fire({
                        icon: 'success',
                        text: 'Loggin Success',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor : "#fed200"
                     },)
                    setStateLogin(true)
                    setCurrentUser(userLogin)
                    // localStorage.setItem("currentUser" , JSON.stringify(userLogin) )
                    editItemText(cartGlobal,userLogin)
                    setCartGlobal([])
                    // console.log(editItemText(cartGlobal,userLogin))

                    break;
                } else {
                    
                     Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Your Password or Email is Wrong',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor : "#fed200"
                            
                        
                     },)

                }
                
            }
        } else {
             for (let user of users) {
                if (user.userName === userName && user.password === pass) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Loggin Success',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor : "#fed200"
                        
                        
                    },)
                    setStateLogin(true)
                    setCurrentUser(user)
                    editItemText(cartGlobal,user)
                    setCartGlobal([])
                    localStorage.setItem("globalCart",JSON.stringify([]))


                    break;

                } else {
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Your Password or UserName is Wrong',
                        background: "#212121",
                        color: "#fff",
                        confirmButtonColor : "#fed200"
                        
                        
                    },)
                }   
            }
        }   
    }

    if (stateLogin) {
        element =
            <>
            <div className="logged">
                <h2 className='text-center text-light'>My Account</h2>

                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active text-left" id="v-pills-Dashboard-tab" data-toggle="pill" data-target="#v-pills-Dashboard" type="button" role="tab" aria-controls="v-pills-Dashboard" aria-selected="true">Dashboard<i className="fa-solid fa-gauge-simple-high"></i></button>
                        <button className="nav-link text-left" id="v-pills-Orders-tab" data-toggle="pill" data-target="#v-pills-Orders" type="button" role="tab" aria-controls="v-pills-Orders" aria-selected="false">Orders<i className="fa-solid fa-basket-shopping"></i></button>
                        <button className="nav-link text-left" id="v-pills-Downloads-tab" data-toggle="pill" data-target="#v-pills-Downloads" type="button" role="tab" aria-controls="v-pills-Downloads" aria-selected="false">Downloads<i className="fa-solid fa-file"></i></button>
                        <button className="nav-link text-left" id="v-pills-Addresses-tab" data-toggle="pill" data-target="#v-pills-Addresses" type="button" role="tab" aria-controls="v-pills-Addresses" aria-selected="false">Addresses<i className="fa-solid fa-house-chimney"></i></button>
                        <button className="nav-link text-left" id="v-pills-Account-tab" data-toggle="pill" data-target="#v-pills-Account" type="button" role="tab" aria-controls="v-pills-Account" aria-selected="false">Account Details<i class="fa-solid fa-user"></i></button>
                        <button className="nav-link logOut text-left"onClick={() => {
                            localStorage.setItem("loginState" , false)
                            sessionStorage.setItem("loginState", false)
                            setStateLogin(false)
                            localStorage.setItem("currentUser", JSON.stringify({}))
                            setCurrentUser({})
                            }} >Logout<i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-Dashboard" role="tabpanel" aria-labelledby="v-pills-Dashboard-tab">
                                Hello {currentUser.userName}
                        </div>
                            <div className="tab-pane fade" id="v-pills-Orders" role="tabpanel" aria-labelledby="v-pills-Orders-tab">
                                <div className="notFound">
                                    No order has been made yet
                                    <Link to="../productList" className='ml-auto'>Browse Products</Link>
                                </div>
                        </div>
                            <div className="tab-pane fade" id="v-pills-Downloads" role="tabpanel" aria-labelledby="v-pills-Downloads-tab">
                                <div className="notFound">
                                    No downloads available yet
                                    <Link to="../productList" className='ml-auto'>Browse Products</Link>
                                </div>
                        </div>
                            <div className="tab-pane fade" id="v-pills-Addresses" role="tabpanel" aria-labelledby="v-pills-Addresses-tab">
                                <Address/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-Account" role="tabpanel" aria-labelledby="v-pills-Account-tab">Account Details</div>
                        </div>
                    </div>
                    </div>    
            </div>
            </>
    } else {
         element = <div className="account">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="sign-in px-1 px-md-5">
                                <div className="head">
                                    <h2>Login</h2>
                                    <p>Welcome back! Sign in to your account.</p>
                                </div>
                                <div className="form">
                                    <form>
                                        <label>Username or email address</label>
                                        <input type="text" className="form-control" required id="user-in"/>
                                        <label>Password</label>
                                        <input type="password" className="form-control" required id="pass-in" />
                                        <div className="form-group">
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Remeber me
                                            </label>
                                            </div>
                                        </div>
                                        <div className="button d-block" onClick={() => {
                                            let user = document.getElementById("user-in").value
                                            let pass = document.getElementById("pass-in").value
                                            let gridCheck = document.getElementById("gridCheck").checked
                                            if (pass !== "" && user !== "") {
                                                login(user, pass)
                                                user = ""
                                                pass = ""
                                            }
                                            if (gridCheck) {
                                                localStorage.setItem("loginState" , true)
                                            } else (
                                                sessionStorage.setItem("loginState" , true)
                                                )
                                            }}>Log in</div>
                                        <Link>Lost Your Password?</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sign-up px-1 px-md-5">
                                <div className="head">
                                    <h2>Register</h2>
                                    <p>Create new account today to reap the benefits of a personalized shopping experience.</p>
                                </div>
                                <div className="form">
                                    <form>
                                        <label>Username</label>
                                        <input type="text" className="form-control" min={8} placeholder="User name" required id='userUp'/>
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="email" required id='emailUp'/>
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" required id='passUp'/>
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                        <div className="button d-block" onClick={() => {   
                                            let userName = document.getElementById("userUp").value
                                            let email = document.getElementById("emailUp").value
                                            let pass = document.getElementById("passUp").value
                                            if (userName !== "" && email !== "" && pass !== "" ) {
                                                signUp(userName, email, pass ,cartUser )
                                            }
                                        }
                                        }
                                        >Register</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        }

    return (
        <div className="sign py-5">
            <div className="contaienr-fluid px-5">
                {element}
            </div>
            </div>
        
    )
}

export default Sign