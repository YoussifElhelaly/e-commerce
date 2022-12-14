import { useRecoilState, useRecoilValue } from 'recoil'
import GlobalCart from '../../atoms/GlobalCart'
import light from '../../atoms/light'
import loginState from '../../atoms/loginAtom'
import userInfo from '../../atoms/userInfo'
import usersData from '../../atoms/users'
import './cart.css'

function Cart() {


    const [Global, setGlobal] = useRecoilState(GlobalCart)
    const stateLogin = useRecoilValue(loginState)
    const [User , setUser] = useRecoilState(userInfo)
    const [users, setUsers] = useRecoilState(usersData)
    const lightmode = useRecoilValue(light)

    let carttt = Global
    
    localStorage.setItem("globalCart" , JSON.stringify(Global))

    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }    
        
    function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }


    if(stateLogin) {
        carttt = User.cart
    } else {
        carttt = Global
    }

     return (
        <div className="cart" lightMode = {`${lightmode}`}>
            <div className="container">
                <h2 className='text-center p-5'>Cart</h2>
                <table className="table">
                    <thead>
                        <tr>
                        <th colSpan={4} scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                         {carttt?.map((single, index) => {
                            
                            return  <tr key={index}>
                                <td className='d-flex align-items-center first'>
                                    <button className='delete' onClick={(e) => {
                                        if(!stateLogin) {
                                            setGlobal(removeItemAtIndex(Global , index))
                                        } else {
                                            let updateCart = removeItemAtIndex(User.cart , index)

                                            let newUsers = replaceItemAtIndex(users, User.userID - 1, {
                                                ...User,
                                                cart: updateCart
                                            })
                                            setUsers(newUsers)
                                            localStorage.setItem("users", JSON.stringify(newUsers))
                                            setUser(newUsers[User.userID - 1])
                                            localStorage.setItem("currentUser", JSON.stringify(newUsers[User.userID - 1]))
                                        }
                                    }}>x</button>
                                 <div className="img mr-5">
                                        <img src={`${single.product.image}`} alt="" srcset="" />
                                      
                                 </div>
                                <p>{ single.product.title }</p>
                            </td>
                             <td colSpan={4}>
                                 <p>${single.product.price }</p>
                             </td>
                             <td>
                                    <input type="number" min={1} max={10} id={index} defaultValue={single.quantity} onChange={() => {
                                        
                                        if (!stateLogin){
                                            setGlobal(replaceItemAtIndex(Global, index, {
                                                ...Global[index],
                                                quantity: (document.getElementById(index).value)
                                            }))
                                        } else {
                                            let updateCart = replaceItemAtIndex(User?.cart, index, {
                                                ...User?.cart[index],
                                                quantity: (document.getElementById(index).value)
                                            })

                                            let newUsers = replaceItemAtIndex(users, User.userID - 1, {
                                                ...User,
                                                cart: updateCart
                                            })
                                            setUsers(newUsers)
                                            localStorage.setItem("users", JSON.stringify(newUsers))
                                            setUser(newUsers[User.userID - 1])
                                            localStorage.setItem("currentUser", JSON.stringify(newUsers[User.userID - 1]))
                                        }
                                        

                                 }} />
                             </td>
                             <td>
                                 <p>${Math.round (single.product.price * single.quantity) }</p>
                             </td>
                        </tr> 

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Cart