import { useEffect, useState } from "react"
import { useParams , useNavigate } from "react-router-dom"
import ProductCate from "../productCate/productCate"
import ProductItem from "../product_Item/Product_Item"
import "./productList.css"


function ProdectList(props) {
    console.log(props)
    const params = useParams()

    console.log(params.title)
    var api_url =""
    // const api_url = `https://fakestoreapi.com/products/category/${params.title}`
    const [hotProduct, setHotProduct] = useState([])
    var title = ""
    if (props.api_url === undefined) {
        api_url = `https://fakestoreapi.com/products/category/${params.title}`
    } else {
         api_url = props.api_url
    }

    if (params.title === undefined) {
        title = "All Products"
    } else {
        title = params.title
    }

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setHotProduct(data))
    }, [])
    
return (
        <div className="productList">
        <div className="container_fluid px-5">
            <div className="row no-gutters">
                {/* <div className="col-md-3">
                    <ProductCate/>
                </div> */}
                <div className="col-md-12">
                    <h4 className="title">{title}</h4>
                <div className="row no-gutters">
                    
                    {hotProduct.map((product) => {
                                    return (
                                        <div className="col-lg-3 col-md-6 border-box p-0" key={product.id}>
                                            <ProductItem product = {product}/>
                                        </div>
                                    )
                                })}
                </div>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default ProdectList