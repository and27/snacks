import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../logo_snacks.png'


const NavBar = ({

}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        return () => {
        };
    }, []);

    if (!show) {
        return null;
    }

    return (<>
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home" className="logo pl-4" style={{ paddingBottom: "10px" }}><img src={logo} width="100px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Button variant="warning" className="mr-4">Contact Expert</Button>
            </Navbar.Collapse>
        </Navbar>
    </>);
};

export default NavBar;
