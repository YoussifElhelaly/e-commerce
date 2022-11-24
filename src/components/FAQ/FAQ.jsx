import { useRecoilValue } from 'recoil'
import light from '../../atoms/light'
import './FAQ.css'

function FAQ() {

    const lightMode = useRecoilValue(light)

    return (
        <div className="faq" light={`${lightMode}`}>
            <div className="container-fluid px-5">
                <div className="text text-center py-5">
                    <h2>Frequently Asked Questions</h2>
                    <p>This Agreement was last modified on 18th february 2016</p>
                </div>
                    <div className="head">
                        <h2>Shipping Information</h2>
                    </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h5>What Shipping Methods Are Available?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h5>What Shipping Methods Are Available?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h5>What Shipping Methods Are Available?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h5>What Shipping Methods Are Available?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ