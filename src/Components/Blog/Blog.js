import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';

function Blog() {
    return (
        <div>
            <Accordion className='container my-5 p-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of React Router?</Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router exports three major components that help us make routing possible — Route, Link, and BrowserRouter. Is is a powerful library for SPA(Single Page Application).

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does Context API works?</Accordion.Header>
                    <Accordion.Body>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. It is alternative to "props drilling".</p>
                        <p>
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Uses of useHref()</Accordion.Header>
                    <Accordion.Body>
                        <p>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
}

export default Blog;