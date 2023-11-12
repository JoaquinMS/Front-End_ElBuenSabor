import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom'

function Header() {

const Navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>ElBuenSabor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
           
            <Nav.Link onClick={() => Navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => Navigate('/sobrenosotros')}>Sobre nosotros</Nav.Link>
            <Nav.Link onClick={() => Navigate('/iniciarsesion')}>Iniciar sesion</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;