import React from 'react'
import './Nav.css'
import { HiHome } from 'react-icons/hi'
import { RiRoadMapFill } from 'react-icons/ri'
import { FaQuestion } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { RiContactsFill } from 'react-icons/ri'
import { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a title='Home' href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome /></a>
      <a title='About' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaInfoCircle /></a>
      <a title='Roadmap' href="#roadmap" onClick={() => setActiveNav('#roadmap')} className={activeNav === '#roadmap' ? 'active' : ''}><RiRoadMapFill /></a>
      <a title='FAQs' href="#faqs" onClick={() => setActiveNav('#faqs')} className={activeNav === '#faqs' ? 'active' : ''}><FaQuestion /></a>
      <a title='Team' href="#team" onClick={() => setActiveNav('#team')} className={activeNav === '#team' ? 'active' : ''}><RiTeamFill /></a>
      <a title='Contact us' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill /></a>
    </nav>
  )
}

export default Nav