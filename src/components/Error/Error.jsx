import Search from "../search/Search"
import './Error.css'


function Error() {
    return (
        <div className="error404 text-center">
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