import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import loadingList from '../../atoms/loadingList';
import './productCate.css'
import adImg from "../img/ad-banner-sidebar.webp"
import light from '../../atoms/light';


function ProductCate(props) {

    const api_url = "https://fakestoreapi.com/products/categories"
    const [Category, setCategory] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const lightmode = useRecoilValue(light)
    const [isloadingList ,stIsLoadingList] = useRecoilState(loadingList)

    const call_api = async  () => {
        await fetch(api_url)
            .then((res) => res.json())
            .then((data) => setCategory(data))
        setIsLoading(true)
    }

    useEffect(() => {
        call_api()
    }, [])

    
    return (
        <ul className="ProductCate" lightMode = {`${lightmode}`}>
            <h5>Assortment</h5>
            {isLoading ?
                <>
                {Category.map((product) => {
                    return (
                        <li key={product.id}>
                            <Link to={`../productList/${product}`} onClick={() => {
                                stIsLoadingList(false)
                            }}>{product}</Link>
                        </li>
                    )
                })}
                <img src={adImg} alt="" srcset="" />
                </>
                
                :
                <>
                <li>
                    <Skeleton sx={{ bgcolor: 'grey.900' }}/>
                </li>
                <li>
                    <Skeleton sx={{ bgcolor: 'grey.900' }}/>
                </li>
                <li>
                    <Skeleton sx={{ bgcolor: 'grey.900' }}/>
                </li>
                <li>
                    <Skeleton sx={{ bgcolor: 'grey.900' }}/>
                </li>
                    <Skeleton sx={{ bgcolor: 'grey.900' }} height="400px"/>
                </>
            }
        </ul>
    )
}

export default ProductCate;