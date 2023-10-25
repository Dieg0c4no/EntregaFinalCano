import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Tienda</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/products">Inicio</Link></li>
            <li><Link className="menu-link" to="/category/perros">Perros</Link></li>
            <li><Link className="menu-link" to="/category/gatos">Gatos</Link></li>
            <li><Link className="menu-link" to="/category/accesorios">Accesorios</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}


export default Navbar