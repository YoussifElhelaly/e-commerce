import { useRecoilState, useRecoilValue } from "recoil"
import compare from "../../atoms/Compare"
import light from "../../atoms/light"
import ButtonCart from "../buttonCart/buttonCart"
import "./compare.css"

function Compare() {
    const lightmode = useRecoilValue(light)
    const [compareList , setCompareList] = useRecoilState(compare)

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

    function deleteItem(index) {
        let newList = removeItemAtIndex(compareList , index)
        localStorage.setItem("compareList" , JSON.stringify((newList)))
        setCompareList(newList)
    }

    return (
        <div className="compare" lightMode = {`${lightmode}`}>
            <div className="container-fluid">
                <h1 className='text-center py-5'>Compare</h1>
                <div className="compareList ">
                <table className="table table-striped table-dark text-white">
                    <thead>
                        <tr>
                        <th>Product Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discription</th>
                        <th>Rate</th>
                        <th>Category</th>
                        <th>Add to Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compareList.map((item , index)=>{
                            return (
                                <tr key={index}>
                                <td>
                                    <div  className="img d-flex align-items-center">
                                <button className='delete' onClick={() => {deleteItem(index)}}>x</button>
                                        <img src={item.product.image} alt="" />
                                    </div>
                                </td>
                                <td>{item.product.title}</td>
                                <td>${item.product.price}</td>
                                <td className="desc">{item.product.description}</td>
                                <td>{item.product.rating.rate} of 5</td>
                                <td>{item.product.category}</td>
                                <td><ButtonCart product = {item.product}/></td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Compare