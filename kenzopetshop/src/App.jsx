import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import Ofertas from './assets/components/Ofertas'
import Carousel from './assets/components/Carousel'
import Banner from './assets/components/Banner'
import Footer from './assets/components/Footer'
import ItemListContainer from './assets/components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <Ofertas/>
      <Carousel/>
      <ItemListContainer texto={"Sin Stock"}/>
      <Banner/>
      <Footer/>
      
    </>
  )
}

export default App
