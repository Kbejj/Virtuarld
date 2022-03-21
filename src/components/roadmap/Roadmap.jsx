import React from 'react'
import './Roadmap.css'
import roadmap from '../../assets/roadmap.png'
import roadmapphonee from '../../assets/roadmapphonee.png'


const Roadmap = () => {
  return (
    <section className='section__roadmap' id='roadmap'>
      <div className="container roadmap__container">
        <h1>Roadmap</h1>
        <img src={roadmap} alt="" className='desktopimg' />
        <img src={roadmapphonee} alt="" className='phoneimg' />
        <h3>Virtuarld will revolutionize the Virtual Real Estate Sector</h3>
      </div>
    </section>
  )
}

export default Roadmap