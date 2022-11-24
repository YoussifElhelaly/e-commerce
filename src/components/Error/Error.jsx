import { useRecoilValue } from "recoil"
import light from "../../atoms/light"
import Search from "../search/Search"
import './Error.css'


function Error() {
    const lightmode = useRecoilValue(light)
    return (
        <div className="error404 text-center" lightMode={`${lightmode}`}>
            <div className="container">
            <div className="text">
                <h2>404!</h2>
                <p>Nothing was found at this location. Try searching, or check out the links below.</p>
            </div>
            <Search/>
            </div>
        </div>
    )
}

export default Error