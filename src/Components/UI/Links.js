import React from 'react'
import { NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Links.css'

const element = <FontAwesomeIcon icon={faUser} />
const cart = <FontAwesomeIcon icon={faCartArrowDown}/>

const Links = () => {

    let link = [ 
        {href: "home", title: "Home"}, 
        {href: "about", title: "About"}, 
        {href: "contact", title: "Contact Us"}, 
        {href: "shop", title: "Shop"} ]

    let links = link.map(link => <Nav.Link href={link.href}>{link.title}</Nav.Link> )

    return (
        <React.Fragment>

        <Nav className="mr-auto">
            {links}
        </Nav>

        <Nav>
            <NavDropdown title={cart} id="basic-nav-dropdown" inline>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={element} id="basic-nav-dropdown" inline>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </React.Fragment>
    )
}

export default Links