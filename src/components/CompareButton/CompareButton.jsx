import { useRecoilState } from "recoil"
import Swal from "sweetalert2";
import compare from "../../atoms/Compare"

function CompareButton(props) {

    const [compareList , setCompareList] = useRecoilState(compare)

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
                    console.log(props.product?.id)
                    console.log(compareList[i]?.product.id)
                    a8a = false
                    index = i
                }
            }

    return (
        a8a?
        <span className="compare" onClick={() => {
            console.log(props)
            addItem()
            console.log(compareList)
        }}>
            <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare 
        </span> 
        :
        <span id={index} className="compare" onClick={
            (e) => {
                console.log(e.target.id)
                // console.log(user.wishList.indexOF({}))
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
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
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
        }}>
            <i className="fa-solid fa-arrow-right-arrow-left"></i> UNCompare 
        </span> 
    )
}

export default CompareButton