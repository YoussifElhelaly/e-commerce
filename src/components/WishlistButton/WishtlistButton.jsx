import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import Swal from 'sweetalert2'
import light from '../../atoms/light'
import loginState from '../../atoms/loginAtom'
import userInfo from '../../atoms/userInfo'
import usersData from '../../atoms/users'
import './WishlistButton.css'

function WishlistButton(props) {
    const isLoggin = useRecoilValue(loginState)
    const [users, setUsers] = useRecoilState(usersData)
    const [user , setUser] = useRecoilState(userInfo)
    const lightMode = useRecoilValue(light)


    function addToWishList(product) {
        let oldList = user?.wishList 
        let list = oldList.concat(product)
        let x = replaceItemAtIndex(users , (user.userID - 1) , {
            ...user,
            wishList: list
        })
        setUsers(x)
        localStorage.setItem("users",JSON.stringify(x))
        setUser(x[user?.userID - 1])
        localStorage.setItem("currentUser",JSON.stringify(x[user?.userID - 1]))
    }

    function deleteItem(index) {
        let whislistUpdate = removeItemAtIndex(user.wishList , index)
        let newUsers = replaceItemAtIndex(users , user.userID - 1 , {
            ...user ,
            wishList : whislistUpdate
        })
        setUsers(newUsers)
        localStorage.setItem("users",JSON.stringify(newUsers))
        setUser(newUsers[user?.userID - 1])
        localStorage.setItem("currentUser",JSON.stringify(newUsers[user?.userID - 1]))
    }

    function replaceItemAtIndex(arr, index, newValue) {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }

      function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

      let a8a = true
      let index 
        
      for(let i = 0 ; i <= user?.wishList?.length ; i++) {
                if(props.product?.id === user?.wishList[i]?.id && props.product?.id !== undefined) {
                    a8a = false
                    index = i
                }
            }

        let Backcolor
        let texrColor
      if (lightMode === true) {
            Backcolor = ""
            texrColor = ""

        } else {    
            Backcolor = "#212121"
            texrColor = "#fff"

      }
      
    return(
        a8a ?
        <span className="whishlist" onClick={()=>{
            if (!isLoggin) {
                Swal.fire({
                    title: 'Please Loggin !',
                    text: "To add item in Wishlist Loggin Please",
                    icon: 'warning',
                    showCancelButton: false,
                    background: Backcolor,
                    color: texrColor,
                    ButtonColor: '#d33',
                  })
            } else {
                addToWishList(props.product)
                Swal.fire({
                    icon: 'success',
                    title: 'Your Item Added in Wishlist',
                    showConfirmButton: false,
                    background: Backcolor,
                    color: texrColor,
                    timer: 1000
                  })
            }
        }}><i className="fa-regular fa-heart"></i> Whishlist</span>
        : <span id={index} className="whishlist" onClick={
            (e) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    background: Backcolor,
                    color: texrColor,
                    confirmButtonColor: "#f2d200",
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        let id = e.target.id
                    deleteItem(+id)
                    a8a = true
                      Swal.fire(
                        // 'Deleted!',
                        // 'Your file has been deleted.',
                        // 'success',
                        {
                            icon: 'success',
                            title: 'Your Item has been deleted.',
                            showConfirmButton: false,
                            background: Backcolor,
                            color: texrColor,
                            timer: 1000
                          }
                      )
                    }
                  })
            }
        }><i className="fa-solid fa-heart"></i> Remove</span>
    )
}

export default WishlistButton