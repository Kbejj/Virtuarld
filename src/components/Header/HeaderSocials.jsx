import React from 'react'
import { ImTwitter } from 'react-icons/im'
import { SiDiscord } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="" target="_blank"><ImTwitter /></a>
      <a href="" target="_blank"><SiDiscord /></a>
      <a href="" target="_blank"><RiInstagramFill /></a>
    </div>
  )
}

export default HeaderSocials