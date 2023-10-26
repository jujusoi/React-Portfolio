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
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default App
