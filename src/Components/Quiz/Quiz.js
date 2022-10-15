import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function Quiz({ quiz }) {
    const { logo, name,id} = quiz;
    return (
        <div>

            <Col>
                <Card className=' bg-dark'>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <div className='d-flex justify-content-around'>
                            <h1 className='text-white d-inline'>{name}</h1>
                            <button className='btn btn-outline-info'>
                                <Link to={`/quiz/${id}`} className='text-decoration-none'> Let's Go
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2'></FontAwesomeIcon></Link>
                           </button>

                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}


export default Quiz;