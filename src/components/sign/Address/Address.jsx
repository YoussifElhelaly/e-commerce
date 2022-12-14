import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import light from '../../../atoms/light'
import userInfo from '../../../atoms/userInfo'
import usersData from '../../../atoms/users'
import './Address.css'

function Address() {
    const [mode , setMode] = useState(false)
    const [currentUser, setCurrentUser] = useRecoilState(userInfo)
    const [users, setUsers] = useRecoilState(usersData)
    const id = currentUser.userID
    const lightMode = useRecoilValue(light)
    let AddEdit
    let addressDate = <h5>You have not set up this type of address yet.</h5>
    let addAddress = (address) => {
        setCurrentUser({
            addressData: address,
            cart: currentUser.cart,
            email: currentUser.email,
            orders: currentUser.orders,
            password: currentUser.password,
            userName: currentUser.userName,
            wishList: currentUser.wishList,
            userID: currentUser.userID
        })
    }
    
    useEffect(() => {
        localStorage.setItem("currentUser" , JSON.stringify(currentUser))
        
    }, [currentUser])

    const editItemText = (value) => {
        const newList = replaceItemAtIndex(users, (id - 1), {
        ...currentUser,
        addressData: value,
        });
     setUsers(newList)
     localStorage.setItem("users" , JSON.stringify(newList))
    };

    function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }       

    if (currentUser.addressData?.length !== 0) {
        AddEdit = "Edit"
        addressDate =
        <>
            <ul>
                <li>Your Name : {currentUser.addressData?.firstName} {currentUser.addressData?.lastName}</li>
                <li>Your ZIP Code : {currentUser.addressData?.ZIP}</li>
                <li>Your City : {currentUser.addressData?.city}</li>
                <li>Your Country : {currentUser.addressData?.country}</li>
                <li>Your State : {currentUser.addressData?.state}</li>
                <li>Your Street : {currentUser.addressData?.street}</li>
            </ul>
            </> 
    } else {
        AddEdit = "Add"
    }

    if (mode === true) {
        AddEdit ="Cancel"
        addressDate =
            <div className="form">
                <form>
                    <label>First Name *</label>
                    <input defaultValue={currentUser.addressData.firstName} type="text" className="form-control" id="first_name" required/>
                    <label>Last Name *</label>
                    <input defaultValue={currentUser.addressData.lastName} type="text" className="form-control" id="last_name" required/>
                    <label>Company Name (optional)</label>
                    <input defaultValue={currentUser.addressData.company} type="text" className="form-control" id="company" />
                    <label>Country / Region *</label>    
                    <input defaultValue={currentUser.addressData.country} type="text" className="form-control" id='country' required />
                    <label>street address *</label>    
                    <input defaultValue={currentUser.addressData.street} type="text" className="form-control" id='street' required />
                    <label>Town / City *</label>    
                    <input defaultValue={currentUser.addressData.city} type="text" className="form-control" id='city' required />
                    <label>State / Country *</label>    
                    <input defaultValue={currentUser.addressData.state} type="text" className="form-control" id='state' required />
                    <label>PostCode / ZIP *</label>    
                    <input defaultValue={currentUser.addressData.ZIP} type="num" className="form-control" max={5} id="ZIP" required />
                    <div className='button d-block' onClick={() => {
                        let first_name = document.getElementById("first_name").value
                        let last_name = document.getElementById("last_name").value
                        let company = document.getElementById("company").value
                        let country = document.getElementById("country").value
                        let street = document.getElementById("street").value
                        let city = document.getElementById("city").value
                        let state = document.getElementById("state").value
                        let ZIP = document.getElementById("ZIP").value
                        let newAddress = {
                            firstName: first_name,
                            lastName: last_name,
                            company: company,
                            country: country,
                            street: street,
                            city: city,
                            state: state,
                            ZIP: ZIP,
                        }
                        setMode(false)
                        addAddress(newAddress)
                        editItemText(newAddress)
                    }}>Save</div>
                </form>
        </div>
    }

    return (
        <div className="address" lightMode = {`${lightMode}`}>
            <div className="header d-flex justify-content-between align-items-center">
                <h2>Shipping Address</h2>
                <Link onClick={() => {
                    setMode(current => !current);
                    
                }}>{ AddEdit }</Link>
            </div>
            {addressDate}
        </div>
    )
}

export default Address