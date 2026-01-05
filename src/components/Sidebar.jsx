import React from 'react'

function Sidebar({ isOpen }) {
  const menuItems = [
    'Home',
    'Research',
    'Stories',
    'Pricing',
    'About'
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen bg-black flex-col py-8 z-10 transition-all duration-500 ease-in-out hidden md:flex ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <div className="flex-1 w-64 pt-16">
          <nav className="mt-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-8 py-3 text-white/90 hover:bg-white/5 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="px-8">
          <button className="w-full bg-white text-black hover:bg-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-colors">
            Sign Up
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`fixed left-0 top-0 w-64 h-screen bg-black flex flex-col justify-between py-8 z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div>
          <div className="px-8 mb-12 pt-16">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Nexa-Byte
            </h1>
          </div>
          
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-8 py-3 text-white/90 hover: bg-white/5 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="px-8">
          <button className="w-full bg-white text-black hover:bg-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-colors">
            Sign Up
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Sidebar