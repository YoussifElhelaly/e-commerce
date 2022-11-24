import "./News.css"

function News() {
    return (
        <div className="news">
            <div className="container-fluid px-2 px-md-5">
                <div className="letter d-flex align-items-center flex-wrap justify-content-around">
                    <h3><i className="fa-regular fa-paper-plane"></i>Sign up to Newsletter</h3>
                    <p>recive <span>$20coupon for first shopping</span></p>
                    <form action="#">
                        <input type="Email" placeholder="Enter your emial address" className="form-control"/>
                        <button>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default News