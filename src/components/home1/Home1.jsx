import React from 'react'
import './Home1.css'
import home1 from '../../assets/home1.png'
import { FaHome } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'

const Home1 = () => {
  return (
    <section className='about__section' id='about'>
      <div className="container about__container">
        <div className="about__left">
          <h4><span> Virtuarld </span>will introduce you to a new gaming concept, the <span> Live 2 Earn.</span> <br /> </h4>
          <h4>In this world, you will be able to own a Land on which you will be able to build the house of your dream with the help of a Virtuarld Architect, own an apartment in the city, have a job, connect socially, have access to entertainment &#38; leisure areas including e-Commerce.</h4>
          <div className='icons'>
            <div className="real">
              <span className='social__icon' >
                <FaHome size="40px" />
              </span>
              <h4>Real Estate</h4>
            </div>
            <div className="commerce">
              <span className='social__icon' >
                <AiOutlineShoppingCart size="40px" />
              </span>
              <h4>e-Commerce</h4>
            </div>
            <div className="social">
              <div className='social__img'>
                <span className='social__icon' >
                  <BsPeopleFill size="40px" />
                </span>

              </div>
              <h4>Social</h4>
            </div>
          </div>

        </div>
        <div className="about__right">
          <img src={home1} alt="" />
        </div>
      </div>

    </section>
  )
}

export default Home1