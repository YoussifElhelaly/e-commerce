import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import light from "../../atoms/light";
import ButtonCart from "../buttonCart/buttonCart";
import CompareButton from "../CompareButton/CompareButton";
import Whishlist from "../whishlist/whishlist";
import WishlistButton from "../WishlistButton/WishtlistButton";
import './Product_item.css';


function ProductItem(product) {

    const lightmode = useRecoilValue(light)

    return (
        <div className="productItem" lightMode = {`${lightmode}`}>            
            <span className="cate">{product.product.category}</span>
            <h4 className="productName">{product.product.title.split(" ").splice(0, 3).join(" ")}</h4>
            <Link to={`../product/${product.product.id}`} className="img">
                    <img src={product.product.image} alt="Product" className="img-fluid productImg"></img>
            </Link>
            <div className="info-product d-flex justify-content-between align-items-end px-3">
                <div className="price">
                    <span className="oldPrice"><span>$</span>{Math.round(product.product.price / 2 + product.product.price)}</span>
                    <h3 className="productPrice"><span>$</span>{product.product.price} </h3>
                </div>
                <ButtonCart product={product.product} state = "home"/>
            </div>
            <div className="productItemHover">
                <div className="icons d-flex justify-content-around">
                    <WishlistButton product={product.product} />
                    <CompareButton product={product.product} />
                    
                </div>
            </div>
        </div>
    )
}
export default ProductItem;
