import React from 'react'
import Nav from '../pages/Common/Nav'
import Hero from '../pages/CreaterPage/Hero'
import Working from '../pages/CreaterPage/Working'
import Faq from '../pages/CreaterPage/Faq'
import Join from '../pages/CreaterPage/Join'
import Why from '../pages/CreaterPage/why'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Why/>
      <Working/>
      <Faq/>
      <Join/>
    </div>
  )
}

export default Home