import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBuildingColumns, faGraduationCap, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const About = () => {
    return (
        <div className='my-5 container '>
            {/* <div className='my-5 container '>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center shadow-lg p-5 mb-5 rounded '>
                    <div>
                        <img className='w-75' src="profile.png" alt="" />
                    </div>
                    <div className='bg-dark rounded-5 p-4 text-secondary'>
                        <div>
                            <p></p>
                            </div>


                        <div>
                            
                        </div>
                        
                    </div>
                </div>
            </div> */}
            <div className="card mb-3 shadow-lg p-5 mb-5 rounded-3" max-width= {540}>
                <div className="row g-0">
                    <div className="col-md-4 my-auto">
                        <img src='profile.png' className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-dark rounded-5 m-4 p-3 text-secondary">
                            <h5 className="card-title">Mohammad Ibrahim</h5>
                            <p className="card-text">
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <small> Chattogram, Bangladesh</small>

                            </p>
                            <h5>
                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                : ibrahim@programminghero.com</h5>
                            <h5><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                : 0123456789</h5>
                                <div>
                            <h3 className='mt-4'>Study:</h3>
                            <p> <FontAwesomeIcon icon={faBuildingColumns} className='me-1'></FontAwesomeIcon>
                                : East Delta University</p>
                            <p>
                                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                                : Computer Science and Engineering
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default About;