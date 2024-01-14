import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigator() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='fs-3' href='/'>METAR</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link className='fs-6' href='/'>Search Airport</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fs-6' href='/What-is-the-metar'>What is METAR ?</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;