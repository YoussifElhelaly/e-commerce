import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import adIMG from '../img/footer-widget-img-01.jpg'
import phoneIMG from '../img/redPhone-300x300.png'
import ProductItem from '../product_Item/Product_Item'
import './productFilter.css'


function ProductFilter(props) {

    var api_url_filter1 = `https://fakestoreapi.com/products/category/${props.filter1}?limit=3`
    var api_url_filter2 = `https://fakestoreapi.com/products/category/${props.filter2}?limit=3`
    var api_url_filter3 = `https://fakestoreapi.com/products/category/${props.filter3}?limit=3`

    const [filter1, setFilter1] = useState([])
    const [filter2, setFilter2] = useState([])
    const [filter3, setFilter3] = useState([])
    
    useEffect(() => {
        fetch(api_url_filter1)
            .then((res) => res.json())
            .then((data) => setFilter1(data))
        
        fetch(api_url_filter2)
            .then((res) => res.json())
            .then((data) => setFilter2(data))
        
        fetch(api_url_filter3)
            .then((res) => res.json())
            .then((data) => setFilter3(data))
    }, [props])

    return (
        <section className="productFilter">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="title">
                            <h4>{props.filter1}</h4>
                        </div>
                        {filter1.map((product) => {
                                    return (
                                        <div className="card-product d-flex" key={product.id}>
                                            <div className="img">
                                                <img src={product.image} alt="" srcSet="" />
                                            </div>
                                            <div className="text">
                                                <Link to={`product/${product.id}`}>{product.title.split(" ").splice(0, 3).join(" ")}</Link>
                                                <div className="price">
                                                    <span className="oldPrice">${Math.round(product.price / 2 + product.price)}</span>
                                                    <h6 className='price'>${product.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="title">
                            <h4>{props.filter2}</h4>
                        </div>
                        {filter2.map((product) => {
                                    return (
                                        <div className="card-product d-flex" key={product.id}>
                                            <div className="img">
                                                <img src={product.image} alt="" srcSet="" />
                                            </div>
                                            <div className="text">
                                                <Link to={`product/${product.id}`}>{product.title.split(" ").splice(0, 3).join(" ")}</Link>
                                                <div className="price">
                                                    <span className="oldPrice">${Math.round(product.price / 2 + product.price)}</span>
                                                    <h6 className='price'>${product.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="title">
                            <h4>{props.filter3}</h4>
                        </div>
                        {filter3.map((product) => {
                                    return (
                                        <div className="card-product d-flex" key={product.id}>
                                            <div className="img">
                                                <img src={product.image} alt="" srcSet="" />
                                            </div>
                                            <div className="text">
                                                <Link to={`product/${product.id}`}>{product.title.split(" ").splice(0, 3).join(" ")}</Link>
                                                <div className="price">
                                                    <span className="oldPrice">${Math.round(product.price / 2 + product.price)}</span>
                                                    <h6 className='price'>${product.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductFilter