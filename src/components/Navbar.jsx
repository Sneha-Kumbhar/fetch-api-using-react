import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

const Navbarmain =()=>{
  return (
    <div>
         <Navbar style={{height:'5rem'}} className="bg-primary ">
            <NavbarBrand className="text-white fw-bold fs-1 me-auto ">Online Store</NavbarBrand>
            <Nav className="fs-5 fw-bold me-auto">
                <NavLink className="m-5 "><Link to="/" style={{color:"white"}}>Jewellery</Link></NavLink>
               
                <NavLink className="m-5"><Link to="games" style={{color:"white"}}>Games</Link></NavLink>
            </Nav>
        </Navbar>
      
    </div>
  )
}

export default Navbarmain
