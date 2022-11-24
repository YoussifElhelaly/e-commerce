import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import light from "../../atoms/light"
import loadingList from "../../atoms/loadingList"
import ProductCate from "../productCate/productCate"
import ProductItem from "../product_Item/Product_Item"
import ProductItemSe from "../product_Item/Product_item_se"
import "./productList.css"


function ProdectList(props) {
    const lightmode = useRecoilValue(light)
    const params = useParams()
    const [isLoading, setIsLoading] = useRecoilState(loadingList)
    const [show ,setShow] = useState(false)

    var api_url =""
    // const api_url = `https://fakestoreapi.com/products/category/${params.title}`
    const [hotProduct, setHotProduct] = useState([])
    var title = ""
    
    // useEffect(() => {
     
    //     },[params])

   


    if (params.title === undefined) {
        title = "All Products"
    } else {
        title = params.title
    }


    const data_api = async () => {
        setIsLoading(false)
        await fetch(api_url)
            .then((res) => res.json())
            .then((data) => setHotProduct(data))
        setIsLoading(true)
    }


    useEffect(() => {
        if (props.api_url === undefined) {
        api_url = `https://fakestoreapi.com/products/category/${params.title}`
        // setShow(true)
        
    } else if (params.title) {
        api_url = `https://fakestoreapi.com/products/`

    } else {
        api_url = props.api_url
    }
        data_api()
        
    }, [params])
    
return (
        <div className="productList" lightMode = {`${lightmode}`}>
        <div className="container_fluid px-md-5 px-3">
            <div className="row no-gutters justify-content-between">
                <div className="col-md-2">
                    {
                        // show ? <ProductCate loading={isLoading} /> : <></>
                        <ProductCate loading = {isLoading} />
                    }
                </div>
                <div className="col-md-9">
                    <h4 className="title">{title}</h4>
                <div className="row no-gutters">
                    
                        { isLoading ?
                            hotProduct.map((product) => {
                        
                                    return (
                                        <div className="col-xl-3 col-lg-4 col-md-6 border-box p-0" key={product.id}>
                                            <ProductItem product = {product}/>
                                        </div>
                                    )
                            }) :
                            <>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 border-box p-3">
                                    <ProductItemSe/>
                                </div>
                               
                                
                            </>
                        }
                    
                        
                </div>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default ProdectList