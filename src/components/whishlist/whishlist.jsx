import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import userInfo from '../../atoms/userInfo'
import usersData from '../../atoms/users'
import ButtonCart from '../buttonCart/buttonCart'
import './wishlist.css'

function Whishlist() {

    const [users, setUsers] = useRecoilState(usersData)
    const [user , setUser] = useRecoilState(userInfo)
    let carttt = user?.wishList
    console.log(carttt)
    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

    function deleteItem(index) {
        let whislistUpdate = removeItemAtIndex(user.wishList , index)
        let newUsers = replaceItemAtIndex(users , user.userID - 1 , {
            ...user ,
            wishList : whislistUpdate
        })
        // console.log(x)
        setUsers(newUsers)
        localStorage.setItem("users",JSON.stringify(newUsers))
        setUser(newUsers[user?.userID - 1])
        localStorage.setItem("currentUser",JSON.stringify(newUsers[user?.userID - 1]))
    }
    return (
        <div className="wishlist">
            <div className="container-fluid px-5">

                <h2 className='text-center text-light py-5'>Wishlist</h2>
                <div className="list container">
                <table className="table">
                    <thead>
                        <tr>
                        <th colSpan={4} scope="col">Product</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                         {carttt?.map((single, index) => {
                            return  <tr key={index}>
                                <td className='d-flex align-items-center '>
                                    <button className='delete' onClick={() => {deleteItem(index)}}>x</button>
                                 <div className="img mr-5">
                                        <img src={`${single?.image}`} alt="" srcset="" />
                                 </div>
                                 <div className="style d-flex justify-content-between w-100">

                                    <Link to={`../product/${single.id}`}>{ single.title }</Link>
                                    <ButtonCart product = {single.product}/>
                                </div>
                            </td>
                             <td colSpan={4}>
                                 <p>${single.price }</p>
                             </td>
                        </tr> 

                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Whishlist