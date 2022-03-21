import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import Home1 from './components/home1/Home1'
import Home2 from './components/home2/Home2'
import Roadmap from './components/roadmap/Roadmap'
import Faqs from './components/faqs/Faqs'

import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {



  return (
    <>

      <Header />
      <Nav />
      <Home1 />
      <Home2 />
      <Roadmap />
      <Faqs />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App