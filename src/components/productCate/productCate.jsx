import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './productCate.css'

function ProductCate() {

    const api_url = "https://fakestoreapi.com/products/categories"
    const [Category, setCategory] = useState([])

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setCategory(data))
    }, [])

    
    return (
        <ul className="ProductCate">
            <h5>Assortment</h5>
            {Category.map((product) => {
                                    return (
                                        <li key={product.id}>
                                            <Link to={`productList/${product}`}>{product}</Link>
                                        </li>
                                    )
                                })}
            {/* <Link to={`productList/name`}>Value of the Day</Link>
            <Link to={`productList/name`}>Top 100 Offers</Link>
            <Link to={`productList/name`}>New Arrivals</Link>
            <Link to={`productList/name`}>Computers & Accessories</Link>
            <Link to={`productList/name`}>Cameras, Audio & Video</Link>
            <Link to={`productList/name`}>Mobiles & Tablets</Link>
            <Link to={`productList/name`}>Movies, Music & Video Games</Link>
            <Link to={`productList/name`}>Watches & Eyewear</Link>
            <Link to={`productList/name`}>Car, Motorbike & Industrial</Link>
            <Link to={`productList/name`}>TV & Audio</Link> */}
        </ul>
    )
}

export default ProductCate;