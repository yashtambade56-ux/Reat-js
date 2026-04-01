import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo from './componets/header/logo.jsx'
import Searchbox from './componets/header/searchbox.jsx'
import RightHeader from './componets/header/rightheder.jsx'
import SidebarLibrary from './componets/body/left-panel.jsx'
import RightPanel from './componets/body/right-panel.jsx'

function App() {
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      
      <div className="header flex flex-row bg-black p-4 items-center justify-between gap-8">
        <Logo />
        <Searchbox />
        <RightHeader />
      </div>

      <div className="flex flex-1 overflow-hidden p-2 gap-2">
        <SidebarLibrary />
        <RightPanel />
      </div>

    </div>
  )
}

export default App