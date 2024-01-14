import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigator() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='fs-3 '>
                        <Link to="/metar-app" className="text-decoration-none text-white" >
                            METAR
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link className='fs-6'>
                            <Link to="/metar-app" className="text-decoration-none text-white" >
                                Search Metar
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fs-6'>
                            <Link to="/What-is-the-metar" className="text-decoration-none text-white" >
                                What is METAR ?
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;