import React from 'react'
import './Faqs.css'
import faqs from "../../assets/faqs.png"
import Faq from '../faq/Faq'

const Faqs = () => {
  return (
    <section className='faqs__section' id='faqs'>
      <h1>FAQs</h1>
      <div className="container faqs__container" >
        <div className="faqs__left">
          <Faq />
        </div>
        <div className="faqs__right">
          <img src={faqs} alt="" />
        </div>
      </div>
      <h3>Did not find what you are looking for?</h3> <br />
      <a href="#contact"> <h3> Contact us now</h3></a>
    </section>
  )
}

export default Faqs