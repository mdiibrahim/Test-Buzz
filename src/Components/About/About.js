import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBuildingColumns, faGraduationCap, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const About = () => {
    return (
        <div>
            <div className='my-5'>
                <div className='container d-flex align-items-center justify-content-center shadow-lg p-5 mb-5 rounded'>
                    <div>
                        <img className='w-75' src="profile.png" alt="" />
                    </div>
                    <div className='bg-dark rounded-5 p-4 text-secondary'>
                        <div>
                            <p>Mohammad Ibrahim</p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                <small> Chattogram, Bangladesh</small>
                            </p></div>


                        <div>
                            <h5>
                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                : ibrahim@programminghero.com</h5>
                            <h5><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                : 0123456789</h5>
                        </div>
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

    );
};


export default About;