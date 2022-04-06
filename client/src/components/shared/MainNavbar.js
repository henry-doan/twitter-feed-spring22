import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to='/'>
          Apis
        </Link>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <Link to='/'>
            PokeApi
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/twitter'>
            TwitterApi
          </Link>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default MainNavbar;