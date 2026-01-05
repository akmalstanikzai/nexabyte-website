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
      <aside className={`fixed left-0 top-0 h-screen bg-black border-r border-white/10 flex-col justify-between py-8 z-20 transition-all duration-300 hidden md:flex ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex-1 overflow-hidden">
          <div className={`px-4 mb-16 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
            {isOpen && (
              <h1 className="text-2xl font-semibold tracking-tight text-white whitespace-nowrap">
                Nexa-Byte
              </h1>
            )}
          </div>
          
          {isOpen && (
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-8 py-3 text-white hover:bg-white/5 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        
        {isOpen && (
          <div className="px-8">
            <button className="w-full bg-white text-black hover:bg-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-colors">
              Sign Up
            </button>
          </div>
        )}
      </aside>

      {/* Mobile Sidebar - Overlay style */}
      <aside className={`fixed left-0 top-0 w-64 h-screen bg-black border-r border-white/10 flex flex-col justify-between py-8 z-20 transition-transform duration-300 ${isOpen ?  'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div>
          <div className="px-8 mb-16">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Nexa-Byte
            </h1>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-8 py-3 text-white hover:bg-white/5 transition-colors text-sm"
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
    </>
  )
}

export default Sidebar