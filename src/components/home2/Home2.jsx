import React from 'react'
import './Home2.css'
import home2 from "../../assets/home2.png"

const Home2 = () => {
  return (
    <section className='about2__section'>

      <div className="container about2__container">

        <div className='about2__left'>
          <img src={home2} alt="" />
        </div>

        <div className='about2__right'>
          <h3> <span> Virtuarld </span>aims to solve 3 main problems, </h3>
          <ul>
            <h4>
              <li> • World Hunger: users will earn money by taking care of themselves in both The Real World and in Virtuarld;</li>
              <li>• Distanced Relations: Virtuarld will enhance the online interaction experience with your friends from all over the world; </li>
              <li>• Remote Jobs and Education: Virtuarld is aiming to solve the major problems the world faced in remote jobs and education during the pandemic. </li>
              <li>Virtuarld will not only solve these problems, but will change the way we interact with social media, websites and movie streaming, taking the customer's experience to the next level.</li>
            </h4>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Home2