import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import light from '../../atoms/light'
import adIMG from '../img/footer-widget-img-01.webp'
import './productFilter.css'


function ProductFilter(props) {
    const lightmode = useRecoilValue(light)
    var api_url_filter1 = `https://fakestoreapi.com/products/category/${props.filter1}?limit=3`
    var api_url_filter2 = `https://fakestoreapi.com/products/category/${props.filter2}?limit=3`
    var api_url_filter3 = `https://fakestoreapi.com/products/category/${props.filter3}?limit=3`

    const [filter1, setFilter1] = useState([])
    const [filter2, setFilter2] = useState([])
    const [filter3, setFilter3] = useState([])
    const [isLoading1,setIsLoading1] = useState(false)
    const [isLoading2,setIsLoading2] = useState(false)
    const [isLoading3,setIsLoading3] = useState(false)
    
    const call_api = async () => {
        await fetch(api_url_filter1)
            .then((res) => res.json())
            .then((data) => setFilter1(data))
         setIsLoading1(true)
        
        await fetch(api_url_filter2)
        .then((res) => res.json())
        .then((data) => setFilter2(data))
         setIsLoading2(true)
        
        await fetch(api_url_filter3)
            .then((res) => res.json())
            .then((data) => setFilter3(data))
         setIsLoading3(true)
        
    }

    useEffect(() => {
        call_api()
    }, [props])

    return (
        <section className="productFilter" lightMode = {`${lightmode}`}>
            <div className="container_fluid px-md-5 px-3 py-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="title">
                            <h4>{props.filter1}</h4>
                        </div>
                        {
                            isLoading1 ?
                            filter1.map((product) => {
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
                            })
                                :
                             <>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                        </div>
                                </>    
                        }
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="title">
                            <h4>{props.filter2}</h4>
                        </div>
                        {
                        isLoading2 ?
                            filter2.map((product) => {
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
                            })
                        :  <>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                        </div>
                                </>    
                        }
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="title">
                            <h4>{props.filter3}</h4>
                        </div>
                        {
                            isLoading3 ?
                                filter3.map((product) => {
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
                                })
                                :
                                <>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                    </div>
                                    <div className="card-product d-flex">
                                            <div className="img loading">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="80px" height="80px"/>
                                            </div>
                                            <div className="text">
                                                <Skeleton sx={{ bgcolor: 'grey.900' }} width="250px"/>
                                            <div className="price">
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="50px"/>
                                                    <Skeleton sx={{ bgcolor: 'grey.900' }} width="100px"/>

                                                </div>
                                            </div>
                                        </div>
                                </>
                            }
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={adIMG} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductFilter