import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav} from 'react-bootstrap'; 
import Image from 'react-bootstrap/Image';
import logo from '../images/ogol.png'


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
                <Nav.Link href="/MUcv.com" className="navitem"> Home</Nav.Link>  
                <Nav.Link eventKey={2} href="/MUcv.com/About" className="navitem">  
                About 
                </Nav.Link>
                <Nav.Link eventKey={2} href="/MUcv.com/Contact" className="navitem">  
                Contact  
                </Nav.Link>  
                <Nav.Link eventKey={2} href="/MUcv.com/Mashup" className="navitem">  
                Mashup 
                </Nav.Link>  
                <Nav.Link eventKey={2} href="/MUcv.com/Exhibit" className="navitem">  
                Exhibit
                </Nav.Link>   
            </Nav>  

            </Navbar.Collapse>  
        </Container>  
      </Navbar>


    </>
  )
};

export default Layout;