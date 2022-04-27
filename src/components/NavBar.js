

 import Navbar from 'react-bootstrap/Navbar'
 import Container from 'react-bootstrap/Container'
 import Nav from 'react-bootstrap/Nav'
import CartWidget from "./CartWidget"

 //CamelCase
const NavBar = () => {
    return (

      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> <CartWidget/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 

</>
       
   
    )
}
export default NavBar