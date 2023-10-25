import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return ( 
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App
