import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './product_details.css'


function Product_details() {
    const params = useParams()
    console.log(params)

    const [singleProduct, setSingleProduct] = useState([])

    

    const api_url = `https://fakestoreapi.com/products/${params.id}`

    useEffect(() => {
        fetch(api_url)
        .then((res) => res.json())
            .then((data) => setSingleProduct(data))
        
    }, [params])
    var data;
    return (
        
        <div className="productDetails">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img" onMouseLeave={() => {
                                document.getElementById("zoom").style = "" 
                            }} onMouseMove={(e) => {
                                
                                document.getElementById("zoom").style.position = "absolute" 
                                document.getElementById("zoom").style.transform = "scale(2)" 
                                document.getElementById("zoom").style.right = `${50 - e.pageX / 500 * 100+"%"}` 
                                document.getElementById("zoom").style.bottom = `${100 - e.pageY / 300 * 100+"%"}` 
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
                                <a href="#">Whishlist</a>
                                <a href="#">Compare</a>
                                <p>{singleProduct.description}</p>
                                <h2 className='price'>${singleProduct.price}</h2>
                                <div className="form">
                                    <input type="number" className='form-control' min={1} max={ 24 } />
                                    <button className="cart">Add to cart</button>
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