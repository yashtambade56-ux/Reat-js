import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo from './componets/header/logo.jsx'
import Searchbox from './componets/header/searchbox.jsx'

function App() {

  return (
    <>
      <div className="header flex flex-row bg-black p-0 items-center justify-between">
        <Logo />
        <Searchbox />
      </div>
    </>
  )
}

export default App