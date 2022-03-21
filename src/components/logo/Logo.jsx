import React from 'react'
import './Logo.css'
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className="logo">
      <img className='logo__img' src={logo} alt="" />
    </div>
  )
}

export default Logo