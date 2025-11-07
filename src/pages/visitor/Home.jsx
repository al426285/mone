import React from 'react'

import { NavBar } from './NavBar'
import { Portada } from './Portada'
import { Aboutus } from './Aboutus'
import { Services } from './Services'
import { Contact } from './Contact'

import '../../App.css'

export const Home = () => {
  return (
    < div className='home_principal'>
      <NavBar />

      <section id='home'>
        <Portada />
      </section>

      <section id='aboutus'>
        <Aboutus />
      </section>

      <section id='services'>
        <Services />
      </section>

      <section id='contact'>
        <Contact />
      </section>  

    </ div>)
}

export default Home;