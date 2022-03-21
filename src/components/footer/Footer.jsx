import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='container words'>
        <h5 className='footer__left'>Copyright © 2022-2023</h5>
        <img src={logo} alt="" />
        <h5 className='footer__right'>Virtuarld All Right Reserved</h5>
      </div>
    </footer>
  )
}

export default Footer