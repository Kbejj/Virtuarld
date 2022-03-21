import React from 'react'
import './Header.css'
import Logo from '../logo/Logo'
import HeaderSocials from './HeaderSocials'
import Hero from '../../assets/Hero.png'
import { ImTwitter } from 'react-icons/im'
import { SiDiscord } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Logo />
        <div className='hero'>
          <div className='left__col'>
            <h1>Welcome to </h1>
            <h1 className='virtuarld'>VIRTUALRD</h1>
            <h4>Virtuarld is a VR/AR/PC based game on the Ethereum Blockchain. This revolutionary game will bring the whole world to the comfort of your room through its tools.</h4>
            <div className="socials">
              <h3>Join us now</h3>
              <div className="icons__socials">
                <a title='Twitter' href="https://twitter.com/virtuarld" target="_blank"><ImTwitter size="30px" /></a>
                <a title='Discord ' href="" target="_blank"><SiDiscord size="30px" /></a>
                <a title='Instagram' href="" target="_blank"><RiInstagramFill size="30px" /></a>
              </div>
            </div>
          </div>
          <div className='rightt__col'>
            <img src={Hero} alt="" />
          </div>
        </div>
        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header