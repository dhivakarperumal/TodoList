import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbars = () => {
  return (

    <>
   
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className='logo'><h1>ToDo List</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='to' />
        <Navbar.Collapse id="basic-navbar-nav" className='wel1'>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/' className='wel' >Create</Nav.Link>
            <Nav.Link as={Link} to='/read' className='wel'>Read</Nav.Link>  
            <Nav.Link as={Link} to='/update' className='wel'>Update</Nav.Link>  
            <Nav.Link as={Link} to='' className='wel'>SingUp</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Navbars