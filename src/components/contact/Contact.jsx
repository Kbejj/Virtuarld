import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i5b6hwo', 'template_odjmuw8', form.current, 'bqvryXbVkk0bmpAB0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset(); alert("Email sent successfully!");
  };

  return (
    <section id='contact' className='contact__section'>

      <div className="container contact__container">
        <div className="contact__left">
          <div className="contactus">
            <h1>Contact us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required /> <br />
              <input type="email" name='email' placeholder='Your Email' required /> <br />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea> <br />
              <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="contact__right">
          <img src={contact} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Contact