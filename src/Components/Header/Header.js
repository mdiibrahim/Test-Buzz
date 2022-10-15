import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href=""><Link to='/'>Test Buzz</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='/quiz'>Quiz</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/blog'>Blog</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to='/analysis'>Analysis</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={3}>
                            <Link to='/about'>About</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
