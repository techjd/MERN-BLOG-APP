import React, { Component } from 'react'

import { Navbar , Nav ,  Form, FormControl, Button } from 'react-bootstrap'

import '../header/header.css'

export default class Header extends Component {

  

    render() {

        

        return (
            <Navbar className="nav-main" fixed="top" bg="primary" variant="dark">
                <Navbar.Brand className="main-text" href="http://192.168.2.4:3000/">Blogs</Navbar.Brand>
                <Nav className="mr-auto">
               <Nav.Link  href="http://192.168.2.4:3000/home"><a className="text">Home</a></Nav.Link>
                <Nav.Link href="http://192.168.2.4:3000/notifications"><a className="text">Notifications</a></Nav.Link> 
                 <Nav.Link href="http://192.168.2.4:3000/profile"><a className="text">Profile</a></Nav.Link> 
                </Nav>
                <Form className='search' inline>
                <FormControl 
                name="query"
                id="search-input" 
               
                type="text" placeholder="Search" 
                className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
                
            </Navbar>
    
        )
    }
}
