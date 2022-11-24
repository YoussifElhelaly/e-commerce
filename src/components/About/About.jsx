import './about.css'
import img1 from '../img/3column1.webp'
import img2 from '../img/3column2.webp'
import img3 from '../img/3column3.webp'
import team1 from '../img/people1.webp'
import team2 from '../img/people2.webp'
import team3 from '../img/people3.webp'
import team4 from '../img/people4.webp'
import team5 from '../img/people5.webp'
import light from '../../atoms/light'
import { useRecoilValue } from 'recoil'

function About() {

    const lightmode = useRecoilValue(light)

    return (
        <div className="about-us" lightMode={`${lightmode}`}>
            <div className="main">
                <div className="text">
                    <h2>About Us</h2>
                    <p>Passion may be a friendly or eager interest in or admiration for a proposal,
                    cause, discovery, or activity or love to a feeling of unusual excitement.
                    </p>
                </div>
            </div>
            <div className="vision">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="img">
                                    <img src={img1} alt="" />
                                </div>
                                <h5>What we really do?</h5>
                                <p>Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="img">
                                    <img src={img2} alt="" />
                                </div>
                                <h5>Our Vision</h5>
                                <p>Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <div className="img">
                                    <img src={img3} alt="" />
                                </div>
                                <h5>History of Beginning</h5>
                                <p>Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="container-fluid p-5">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-lg-2">
                            <div className="box">
                                <div className="img">
                                    <img src={team1} alt="" />
                                </div>
                                <h5>Thomas Snow</h5>
                                <p>CEO/Founder</p>
                                </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="box">
                                <div className="img">
                                    <img src={team2} alt="" />
                                </div>
                                <h5>Thomas Snow</h5>
                                <p>CEO/Founder</p>
                                </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="box">
                                <div className="img">
                                    <img src={team3} alt="" />
                                </div>
                                <h5>Thomas Snow</h5>
                                <p>CEO/Founder</p>
                                </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="box">
                                <div className="img">
                                    <img src={team4} alt="" />
                                </div>
                                <h5>Thomas Snow</h5>
                                <p>CEO/Founder</p>
                                </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="box">
                                <div className="img">
                                    <img src={team5} alt="" />
                                </div>
                                <h5>Thomas Snow</h5>
                                <p>CEO/Founder</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <div className="left">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className='text-light my-4'>What we really do?</h5>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className='text-light my-4'>What we really do?</h5>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className='text-light my-4'>What we really do?</h5>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className='text-light my-4'>What we really do?</h5>
                                        <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="right">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                             <i className="fa-solid fa-plus"></i> Support 24/7
                                            </button>
                                        </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <i className="fa-solid fa-plus"></i> Best Quality
                                            </button>
                                        </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                           Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i className="fa-solid fa-plus"></i> Fastest Delivery
                                            </button>
                                        </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                           Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <i className="fa-solid fa-plus"></i> Customer Care
                                            </button>
                                        </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                           Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFive">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <i className="fa-solid fa-plus"></i> Over 200 Satisfied Customers
                                            </button>
                                        </h2>
                                        </div>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div className="card-body">
                                           Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;