import React, { useState } from 'react';
import './DisplayQuiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}


        </>
    );
}
const DisplayQuiz = ({ no, q }) => {

    const { correctAnswer, options, question } = q;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='each-quiz container text-bg-light p-5 rounded-2 shadow mb-5'>
            <div className=' d-flex justify-content-between align-items-center'>
                <h2 className='bg-info bg-opacity-10 border border-info p-2 rounded-1 w-75 mb-3'>
                    Quiz No: {no + 1}
                </h2>
                <FontAwesomeIcon icon={faEye} className='font-icon' onClick={handleShow}></FontAwesomeIcon>
            </div>

            <p>{question}</p>
            <div>
                {
                    options.map((option, idx) => {
                        return (

                            <div key={idx + 10}>
                                <label className="opt" id="ans" >
                                    {option}
                                    <input type="radio" checked={true} name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        )

                    }
                    )}
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Quiz no: { no+1}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The correct answer is: </p>
                    <b>{ correctAnswer}</b>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="outline-info" onClick={handleClose}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DisplayQuiz;