import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SidebarToggle from './components/SidebarToggle'
import Hero from './components/Hero'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <SidebarToggle isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App