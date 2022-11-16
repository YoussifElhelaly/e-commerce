import { Skeleton } from "@mui/material";
import './Product_item.css';


function ProductItemSe() {
    return (
        <div className="ProductItemSe">            
            <span className="cate"><Skeleton sx={{ bgcolor: 'grey.900' }}/></span>
            <h4 className="productName"><Skeleton sx={{ bgcolor: 'grey.900' }}/></h4>
            <div className="img">
                    <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" height="200px"/>
            </div>
            <div className="info-product d-flex justify-content-between align-items-end px-3">
                <div className="price">
                    <span className="oldPrice">
                        <Skeleton sx={{ bgcolor: 'grey.900' }}
                        />
                    </span>
                    <h3 className="productPrice"><Skeleton sx={{ bgcolor: 'grey.900' }} height="20px" width="100px"/></h3>
                </div>
                <button className="btn toCart rounded-circle " > <Skeleton sx={{ bgcolor: 'grey.900' }} variant="circular" width={40} height={40}/> </button>
            </div>
        </div>
    )
}
export default ProductItemSe;
