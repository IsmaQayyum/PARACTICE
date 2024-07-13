import React from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import '../Style/Navbar.css'
import PropTypes from 'prop-types'
const Navbar = (props) => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active ab" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active  ab" aria-current="page" to="/women">{props.womenText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active  ab" to="/men">{props.men}</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active  ab" to="/kids" >KIDS</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active  ab" to="/frangrance" >FRANGRANCE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/frangrance" ><img src="/logo.png" alt="" className='img'/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active abc" to="/frangrance" >ACCOUNT<CiUser  style={{width:"35", height:"23"}}/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ba" to="/frangrance" >CART<PiShoppingCartBold style={{width:"35", height:"25"}}/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ba" to="/frangrance" >    <IoSearch style={{width:"30", height:"25"}}/></Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
<div className=' nev' style={{height:"30px"}}>
<p >Home  > Home-Page</p></div>








    </div>
  )
}


export default Navbar