import { useRecoilValue } from 'recoil';
import light from '../../atoms/light';
import './terms.css'

function Terms() {

    const lightMode = useRecoilValue(light)

    return (
        <div className="terms" light = {`${lightMode}`}>
            <div className="container-fluid px-5">
                <div className="text text-center py-5">
                    <h2 className=' '>Terms and Conditions</h2>
                    <p>This Agreement was last modified on 18th february 2016</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <h3 className=' '>Intellectual Propertly</h3>
                            <ol className='  m-5'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.</li>
                                <li>Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</li>
                                <li>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.</li>
                                <li>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.</li>
                                <li>Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</li>
                                <li>Pellentesque vitae eros eget enim mollis placerat</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box">
                            <h3 className=' '>Termination</h3>
                            <ol className='  m-5'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.</li>
                                <li>Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</li>
                                <li>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.</li>
                                <li>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.</li>
                                <li>Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</li>
                                <li>Pellentesque vitae eros eget enim mollis placerat</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box  ">
                            <h3 className=' '>Changes To This Agreement</h3>
                            <p className='  my-5'>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box">
                            <h3 className=' '>Contact Us</h3>
                            <p className='  my-5'>If you have any questions about this Agreement, please contact us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms;