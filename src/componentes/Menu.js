import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='mt-2'>
        <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
            <li className='nav-item'>
                <Link to={"/home"} className='nav-link'>
                    <i className='nav-icon fa fa-play'/>
                    <p>INICIO</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={"/clientes"} className='nav-link'>
                    <i className='nav-icon fa fa-user'/>
                    <p>CLIENTES</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={"/productos"} className='nav-link'>
                    <i className='nav-icon fa fa-cube'/>
                    <p>PRODUCTOS</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={"/proveedores"} className='nav-link'>
                    <i className='nav-icon fa fa-truck'/>
                    <p>PROVEEDORES</p>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu