import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import updateResume from "../assets/UpdatedResume.pdf"

const TopNavbar = () => {
  return (
    <Navbar bg="transparent"  sticky="top" variant="dark" className='px-4 justify-content-between'>
          <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="">
            <a href={updateResume} download="saurav_deep_resume">

            <div className="btn btn-outline-primary px-4 py-2  custom-btn">Resume</div>
            </a>
          </Nav>
      </Navbar>
  )
}

export default TopNavbar