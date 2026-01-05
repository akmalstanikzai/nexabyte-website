import React from 'react'

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 px-4 md:px-8 py-4 bg-black z-30">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-semibold tracking-tight text-white">
            Nexa-Byte
          </div>
          
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-white/10 rounded-md transition-colors hidden md:block"
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/70"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className="text-white"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4. 35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header