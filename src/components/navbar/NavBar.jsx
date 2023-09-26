import React from 'react'
const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="logo"><h1>Tienda</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="#">Inicio</a></li>
            <li><a className="menu-link" href="#">Perros</a></li>
            <li><a className="menu-link" href="#">Gatos</a></li>
            <li><a className="menu-link" href="#">Accesorios</a></li>
            
        </ul>
    </nav>
  )
}

export default Navbar