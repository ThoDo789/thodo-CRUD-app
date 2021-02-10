import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Heading = () => {
    return (

            <Navbar color="dark">

                <Container>
                    <NavbarBrand href="/">My team</NavbarBrand>
                     <Nav>
                         <NavItem>
                             <Link to='/add' className="btn btn-primary">Add User</Link>
                         </NavItem>
                     </Nav>
                </Container>
            </Navbar>

    );
};

export default Heading;