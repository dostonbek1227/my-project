import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Aromat from './Aromat'
import Keshbek from './Keshbek'
import Filter from './filter'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Aromat/>
      <Keshbek/>
      <Filter/>
      <Footer/>
    </div>
  )
}
