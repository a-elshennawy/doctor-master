import {Navbar ,Container,Nav,NavDropdown} from 'react-bootstrap';
import "./Nav.css";
import logo from"../../assets/image/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {Link} from"react-router-dom"
const Navbars = () => {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='active'>Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/about" className='active'>About Us</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/services" className='active'>Services</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/blog" className='active'>Blog</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/contact">Contact US </Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link href="#link">
            <FontAwesomeIcon icon={faPhone} />
              (+01) 999 888 777
              </Nav.Link>
            <Nav.Link href="#link">
              <button>contact us <span><FontAwesomeIcon icon={faRightFromBracket} /></span></button>
               </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbars
