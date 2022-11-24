import { useRecoilState, useRecoilValue } from "recoil"
import Swal from "sweetalert2";
import compare from "../../atoms/Compare"
import light from "../../atoms/light";
import "./CompareButton.css"

function CompareButton(props) {

    const [compareList , setCompareList] = useRecoilState(compare)
    const lightMode = useRecoilValue(light)

    let Backcolor
    let texrColor
    if (lightMode === true) {
            Backcolor = ""
            texrColor = ""

        } else {    
            Backcolor = "#212121"
            texrColor = "#fff"

    }
  
    function addItem() {
        const newList = (() => {
            return [
                ...compareList,
                props
            ]
        }
        );
        setCompareList(newList())
        localStorage.setItem("compareList" , JSON.stringify((newList())))
        }

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }

      let a8a = true
      let index 
        
      for(let i = 0 ; i <= compareList?.length ; i++) {
                if(props.product?.id === compareList[i]?.product.id && props.product?.id !== undefined) {

                    a8a = false
                    index = i
                }
            }

    return (
        a8a?
        <span className="compare-btn" onClick={() => {
            if (compareList.length >= 2) {
                Swal.fire({
                    title: 'Are You Want to Add this?',
                    text: "your Compare list is full",
                    icon: 'warning',
                    showCancelButton: true,
                    background: Backcolor,
                    color: texrColor,
                    confirmButtonColor: "#f2d200",
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Add it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        let newList = removeItemAtIndex(compareList, 0)
                        localStorage.setItem("compareList" , JSON.stringify((newList)))
                        setCompareList(newList)
                        const update = (() => {
                            return [
                                ...newList,
                                props
                            ]
                        }
                        );
                        setCompareList(update())
                        localStorage.setItem("compareList" , JSON.stringify((update())))

                    a8a = true
                      Swal.fire(
                        {
                            icon: 'success',
                            title: 'Your Item has been Added.',
                            showConfirmButton: false,
                            background: Backcolor,
                            color: texrColor,
                            timer: 1000
                          }
                      )
                    }
                  })
            } else {

                addItem()
                Swal.fire({
                    icon: 'success',
                    title: 'Your Item Added in Compare List',
                    showConfirmButton: false,
                    background: Backcolor,
                    color: texrColor,
                    timer: 1000
                })
            }
        }}>
            <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare 
        </span> 
        :
        <span id={index} className="compare-btn" onClick={
            (e) => {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You Want to delete this!",
                    icon: 'warning',
                    showCancelButton: true,
                    background: Backcolor,
                    color: texrColor,
                    confirmButtonColor: "#f2d200",
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        let id = e.target.id
                        let newList = removeItemAtIndex(compareList, +id)
                        localStorage.setItem("compareList" , JSON.stringify((newList)))
                        setCompareList(newList)
                    a8a = true
                      Swal.fire(
                        {
                            icon: 'success',
                            title: 'Your Item has been deleted.',
                            showConfirmButton: false,
                            background: Backcolor,
                            color: texrColor,
                            timer: 1000
                          }
                      )
                    }
                  })
        }}>
            <i className="fa-solid fa-arrow-right-arrow-left"></i> UNCompare 
        </span> 
    )
}

export default CompareButton