import "./home.css"
import Search from "../search/Search";
import png1 from "../img/ban-1.webp"
import png2 from "../img/ban-2.webp"
import png3 from "../img/ban-3.webp"
import png4 from "../img/ban-4.webp"
import png5 from "../img/ban-5.webp"
import png6 from "../img/ban-6.webp"
import png7 from "../img/ban-7.webp"
import adImg from "../img/ad-banner-sidebar.webp"
import adImg1 from "../img/two-banner-1.webp"
import adImg2 from "../img/two-banner-2.webp"
import adImg3 from "../img/ad-banner-sidebar.webp"
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ProductItem from "../product_Item/Product_Item"; 
import ProductList from '../productList/ProductList'
import ProductCate from "../productCate/productCate";
import { useRecoilState, useRecoilValue } from "recoil";
import loginState from "../../atoms/loginAtom";
import light from "../../atoms/light";


function Home() {
    const lightmode = useRecoilValue(light)
    const [stateLogin , setStateLogin] = useRecoilState(loginState)

    return (
        <>
            <section className="home" lightMode={`${lightmode}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="search">
                                <h1>OVER <span>1 MILION</span></h1>
                                <p>OF COOL ELECTRONICS AND TECH GADGETS OUT THERE</p>
                                {/* <Search/> */}
                            </div>
                        </div>

                    </div>
                    <div className="category pt-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mt-4">
                                <Link>
                                <img src={png1} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png2} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png3} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png4} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png5} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png6} alt="product" />
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4">
                                <Link>
                                <img src={png7} alt="product" />
                                </Link>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="producList">
                <div className="container_fluid">
                    <div className="row no-gutters justify-content-center">
                        {/* <div className="col-lg-2 col-md-2">
                            <ProductCate />
                            <img src={adImg} alt="" srcset="" />
                        </div> */}
                        <div className="col-lg-12 col-md-12">
                            <ProductList api_url="https://fakestoreapi.com/products?limit=18" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="ads" lightMode = {`${lightmode}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-2">
                            <img src={adImg1} />
                        </div>
                        <div className="col-md-6 p-2">
                            <img src={adImg2} />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;