import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import light from '../../atoms/light'
import ButtonCart from '../buttonCart/buttonCart'
import CompareButton from '../CompareButton/CompareButton'
import WishlistButton from '../WishlistButton/WishtlistButton'
import './product_details.css'


function Product_details() {
    const params = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const api_url = `https://fakestoreapi.com/products/${params.id}`
    const call_api = async () => {
        await fetch(api_url)
        .then((res) => res.json())
        .then((data) => setSingleProduct(data))
        setIsLoading(true)
    }
    const lightmode = useRecoilValue(light)

    useEffect(() => {
        call_api()
    }, [params])
    var data;
    return (
        
            isLoading ?
            <div className = "productDetails" lightMode = {`${lightmode}`}>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img" onMouseLeave={() => {
                                document.getElementById("zoom").style = "" 
                            }} onMouseMove={(e) => {
                                
                                document.getElementById("zoom").style.position = "absolute" 
                                document.getElementById("zoom").style.transform = "scale(2)" 
                                document.getElementById("zoom").style.right = `${75 - e.pageX / 500 * 100+"%"}` 
                                document.getElementById("zoom").style.bottom = `${150 - e.pageY / 300 * 100+"%"}` 
                            }} >
                            <img src={singleProduct.image} id="zoom" style={data} alt=""  />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="details">
                            <div className="info">
                                <p>{singleProduct.category}</p>
                                <h3 className='text-light'>{singleProduct.title}</h3>
                                <span className='rate'>
                                    <div className="stars-outer">
                                        <div className="stars-inner" id='star' style={{ width : singleProduct?.rating?.rate / 5 * 100 + "%"}}>
                                        </div>
                                    </div>
                                </span>
                                <p>Availability: <span>24 in stock</span></p>
                            </div>
                            <div className="description">
                                <WishlistButton product={singleProduct} />
                                <CompareButton product={singleProduct} />

                                <p>{singleProduct.description}</p>
                                <h2 className='price'>${singleProduct.price}</h2>
                                <div className="form">
                                    <input defaultValue="1" type="number" className='form-control' min={1} max={ 24 } id="Quantity"/>
                                    <ButtonCart product = {singleProduct} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div > :
         <div className="productDetails">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img loading" >
                            <Skeleton sx={{ bgcolor: 'grey.900' }} width="100%" height="100%"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="details">
                            <div className="info">
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px" height="50px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="150px"/>
                            </div>
                            <div className="description">
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px" height="200px"/>
                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                <div className="form">
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Product_details;