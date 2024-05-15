import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className='main-footer'>
        <div className='float-right d-none d-sm-block'>
        <b>Version 1.0</b>
        </div>
        <div className='float-none d-none d-sm-block'>
        <strong>Copyright 2024 <Link to={"#"}></Link></strong> All rights reserved
        </div>
    </footer>
  )
}


export default Footer