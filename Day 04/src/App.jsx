import './App.css'
import Logo from './componets/header/logo.jsx'
import Searchbox from './componets/header/searchbox.jsx'
import RightHeader from './componets/header/rightheder.jsx'
import SidebarLibrary from './componets/body/left-panel.jsx'
import RightPanel from './componets/body/right-panel.jsx'

function App() {
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      
      <div className="header flex items-center justify-between bg-black px-6 py-3">
        
        <div className="flex items-center gap-4 flex-1">
          <Logo />
          <Searchbox />
        </div>

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