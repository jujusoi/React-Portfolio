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
        <header style={{width: '100%'}}>
          <Header />
        </header>
        <main style={{width: '100%', display: 'flex', justifyContent: 'center'}} >
          <Outlet />
        </main>
        <footer style={{width: '100%'}}>
          <Footer />
        </footer>
    </>
  )
}

export default App
