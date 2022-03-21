import React from 'react'
import "./Team.css"
import karl__team from '../../assets/karl__team.png'
import nabil__team from '../../assets/nabil__team.png'
import rita__team from '../../assets/rita__team.png'

const Team = () => {
  return (
    <section className='team__section' id='team'>
      <div className='container team__container'>
        <h1>TEAM</h1>
        <div className="members">
          <div className="karl">
            <img src={karl__team} alt="" />
            <h3>Karl</h3>
            <h4><span> Entrepreneur </span><br />
              Architect experienced in both Exterior and Interior fields.</h4>
          </div>
          <div className="nabil">
            <img src={nabil__team} alt="" />
            <h3>Nabil</h3>
            <h4><span> Manager </span><br />
              25+ years of management experience in big tech companies.</h4>
          </div>
          <div className="rita">
            <img src={rita__team} alt="" />
            <h3>Rita</h3>
            <h4><span> Designer </span><br />
              Visual communication expert, years of experience in bringing visions to life.</h4>
          </div>
        </div>
        <h4 className='team__line'>The Founding team gathered and is gathering senior team members in multiple disciplines, giving birth to the next step of the virtual world interaction, the <span>Virtuarld.</span> </h4>
      </div>
    </section>
  )
}

export default Team