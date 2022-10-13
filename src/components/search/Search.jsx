import './search.css'

function Search() {
    return (
        <form id="search">
            <input type="search" placeholder='Search Product...' className="form-control"></input>
            <button className='btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default Search;