import React from 'react'
import Nav from '../pages/Common/Nav'
import Hero from '../pages/Home/Hero'
import Section1 from '../pages/Home/Section1'
import TalentManagers from '../pages/Home/TalentManagers'
import Connect from '../pages/Home/Connect'

const Home = () => {
  return (
    <div>
     <Nav/> 
     <Hero/>
     <Section1/>
     <TalentManagers/>
    <Connect/>
    </div>
  )
}

export default Home