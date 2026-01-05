import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex flex-col flex-1 transition-all duration-500 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Hero />
      </div>
    </div>
  )
}

export default App