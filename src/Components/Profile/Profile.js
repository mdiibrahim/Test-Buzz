import React from 'react';
import './Profile.css'
import Carousel from 'react-bootstrap/Carousel';

function Profile() {
    return (
        <div>
            <Carousel fade >
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="header-background 1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hey!!! Test Buzz</h3>
                    <p>"Knowledge becomes power only when we put it into some use". So, let's honour our knowledge by answering some simple GK questions.........</p>
                    <button type="button" className="btn btn-outline-info">Sign up</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  img-fluid"
                    src="header-background 2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Hey!!! Test Buzz</h3>
                    <p>"Knowledge becomes power only when we put it into some use". So, let's honour our knowledge by answering some simple GK questions.........</p>
                    <button type="button" className="btn btn-outline-info">Sign up</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="header-background 3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Hey!!! Test Buzz</h3>
                    <p>"Knowledge becomes power only when we put it into some use". So, let's honour our knowledge by answering some simple GK questions.........</p>
                    <button type="button" className="btn btn-outline-info">Sign up</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Profile;