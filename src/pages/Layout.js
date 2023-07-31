import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav} from 'react-bootstrap'; 
import { Outlet } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../images/ogol.png'
import Footer from './Footer';


const Layout = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'rgb(41,40,112)'}} variant="dark">  
        <Container fluid>  
            <Navbar.Brand href="#home">
            <div className='logotitle'>
            <Image src={logo} width="50"/>
            Canto<i>Vario</i> ®
            </div>
            </Navbar.Brand>  


            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 


            <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
            </Nav>  

            <Nav>  
                <Nav.Link href="/" className="navitem"> Home</Nav.Link>  
                <Nav.Link eventKey={2} href="/About" className="navitem">  
                About 
                </Nav.Link>
                <Nav.Link eventKey={2} href="/Contact" className="navitem">  
                Contact  
                </Nav.Link>  
                <Nav.Link eventKey={2} href="/Mashup" className="navitem">  
                Mashup 
                </Nav.Link>  
                <Nav.Link eventKey={2} href="/Exhibit" className="navitem">  
                Exhibit
                </Nav.Link>   
            </Nav>  

            </Navbar.Collapse>  
        </Container>  
      </Navbar>

    <Outlet/>

    <Footer/>
    </>
  )
};

export default Layout;