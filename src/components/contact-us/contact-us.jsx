import './contact-us.css'


function Contact_us() {
    return (
        <div className="contact-us">
            <div className="container-fluid">
                    <h1 className='text-center py-5'>Contact us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="left ml-md-5">
                            <div className="head mb-5">
                                <h2>Leave us a Message</h2>
                                <p>Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur luctus interdum eleifend. Ut tempor lorem a turpis fermentum,.</p>
                            </div>
                            <div className="form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="First name"/>
                                        </div>
                                        <div className="col">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last name"/>
                                        </div>
                                    </div>
                                    <label>Email</label>
                                    <input type="emai" className="form-control" placeholder="Enter your email address"/>
                                    <label>Comment or Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                                    <input type="button" value="Send Message" className='button'/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right mr-md-5">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55306.63110987561!2d31.305708699999997!3d29.960329100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2sMaadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1664652136646!5m2!1sen!2seg" width="100%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="address">
                                <div className="head">
                                    <h2>Our Address</h2>
                                </div>
                                <div className="location">
                                    <p>17 Princess Road London, Greater London NW1 8JR, UK</p>
                                    <p>Support(+800)856 800 604</p>
                                    <p>Email:  <a href='mailto:info@electro.com'>info@electro.com</a></p>
                                </div>
                                <div className="time">
                                    <h6>Opening Hours</h6>
                                    <p>Monday to Friday: 9am-9pm</p>
                                    <p>Saturday to Sunday: 9am-11pm</p>
                                </div>
                                <div className="career">
                                    <h6>Careers</h6>
                                    <p>If you’re interested in employment opportunities at Electro, please email us: contact@yourstore.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_us;