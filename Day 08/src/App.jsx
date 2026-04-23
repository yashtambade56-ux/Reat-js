import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

import Home from './components/home'
import AboutUs from './components/about'
import ContactUs from './components/contactus'
import DashboardLayout from './components/dashboard'
import Profile from './components/profile'
import Settings from './components/setting'
import ErrorPage from './components/errorpages'

function App() {
  return (
    <>
      <nav className="topNav">
        <Link to="/">Home</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
