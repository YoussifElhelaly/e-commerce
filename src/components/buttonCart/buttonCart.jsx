import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import GlobalCart from '../../atoms/GlobalCart'
import loginState from '../../atoms/loginAtom'
import userInfo from '../../atoms/userInfo'
import usersData from '../../atoms/users'
import './buttonCart.css'

function ButtonCart(props) {

    let addItem 
    const login = useRecoilValue(loginState)
    const [Global , setGlobal] = useRecoilState(GlobalCart)
    let buttonContent
    let check = 0
    const [User , setUser] = useRecoilState(userInfo)
    const [usersInfo ,setusersInfo] = useRecoilState(usersData)

 
    if (props.state === "home") {
        buttonContent = <i className="fa-solid fa-cart-plus"></i>
    } else {
        buttonContent = "Add to Cart"
    }
    var numOfQuantity


    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }

    if (login === false) {
        addItem = () => {
            if (document.getElementById("Quantity") === null) {
                numOfQuantity = "1"
            } else {
                numOfQuantity = document.getElementById("Quantity").value
            }
            
            for (let product of Global) {
                if (product.product.id === props.product.id) {
                    setGlobal( replaceItemAtIndex(Global, Global.indexOf(product), {
                        ...product,
                        quantity: +product.quantity + +numOfQuantity
                    }))
                    console.log(Global.indexOf(product))
                    console.log("mogod")
                    check = 1
                    break
                    // console.log(Global)
                } 
            } 
            if  (check === 0) {
                    setGlobal((oldGlobal) => [
                        ...oldGlobal,
                        {
                            product: props.product,
                            quantity: numOfQuantity
                        },
            ]);
                } 
            // 
            // console.log(Global)
        }
    } else {
        addItem = () => {
            if (document.getElementById("Quantity") === null) {
                numOfQuantity = "1"
            } else {
                numOfQuantity = document.getElementById("Quantity").value
            }
            // console.log(props.product)
            for (let product of User?.cart) {
                // console.log(props.product)
                if (product.product.id === props.product.id) {
                    let newCart =  replaceItemAtIndex(User?.cart, User?.cart.indexOf(product), {
                        ...product,
                        quantity: +product.quantity + +numOfQuantity
                    })
                    let newUsers = replaceItemAtIndex(usersInfo, User?.userID - 1, {
                        ...User,
                        cart: newCart
                    })
                    setusersInfo(newUsers)
                    localStorage.setItem("users",JSON.stringify(newUsers))
                    setUser(newUsers[User?.userID - 1])
                    localStorage.setItem("currentUser",JSON.stringify(newUsers[User?.userID - 1]))
                    console.log(newCart)
                    console.log(User?.cart.indexOf(product))
                    console.log("mogod")
                    check = 1
                    break
                } 
            } 
            if  (check === 0) {
                let updateCart = User?.cart.concat({
                    product: props.product,
                    quantity: numOfQuantity
                })
                let newUsers = replaceItemAtIndex(usersInfo, User?.userID - 1, {
                    ...User,
                    cart: updateCart
                })
                setusersInfo(newUsers)
                localStorage.setItem("users",JSON.stringify(newUsers))
                setUser(newUsers[User?.userID - 1])
                localStorage.setItem("currentUser",JSON.stringify(newUsers[User?.userID - 1]))
                }
        }
    }

         useEffect(() => {
        localStorage.setItem("globalCart", JSON.stringify(Global))
    }, [Global])
    
    return (
        <button className="btn toCart rounded-circle " onClick={
            addItem
        }>{ buttonContent }</button>
    )
}

export default ButtonCart