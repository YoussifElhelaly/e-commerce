import { Link, useNavigate } from "react-router-dom";
import './Product_item.css';


function ProductItem(product) {

        const nav = useNavigate()

    return (
        <div  className="productItem">
            <span className="cate">{product.product.category}</span>
            <h4 className="productName">{product.product.title.split(" ").splice(0, 3).join(" ")}</h4>
            <Link to={`product/${product.product.id}`} className="img">
                    <img src={product.product.image} alt="Product" className="img-fluid productImg"></img>
            </Link>
            <div className="info-product d-flex justify-content-between align-items-end px-3">
                <div className="price">
                    <span className="oldPrice"><span>$</span>{Math.round(product.product.price / 2 + product.product.price)}</span>
                    <h3 className="productPrice"><span>$</span>{product.product.price}</h3>
                </div>
                <button className="btn toCart rounded-circle"><i className="fa-solid fa-cart-plus"></i></button>
            </div>
            <div className="productItemHover">
                <div className="icons d-flex justify-content-around">
                    <a href="#" className="whishlist"><i className="fa-regular fa-heart"></i> Whishlist</a>
                    <a href="#" className="compare"><i className="fa-solid fa-arrow-right-arrow-left"></i> Whishlist</a>
                </div>
            </div>
        </div>
    )
}
export default ProductItem;
