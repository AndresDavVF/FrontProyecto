import React from 'react'
import Menu from './Menu'
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png'
import {Link} from 'react-router-dom'

const SidebarContainer = () => {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        <Link to={"/home"} className='brand-link'>
            <img src={Logo} alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{opacity:'.8'}}></img>
            <span className='brand-text font-weight-light'>Proyecto Final</span>
        </Link>
        <div className='sidebar'>
            <div className='user-panel mt-3 pb-3 mb-3'>
                <div className='info'>
                    &nbsp;
                </div>
                <div className='info'>
                    &nbsp;
                </div>
                <div className='info'>
                    <Link to={'/home'} className='d-block' >Menu Principal</Link>
                </div>
                <Menu></Menu>
            </div>
        </div>
    </aside>
  );
}

export default SidebarContainer