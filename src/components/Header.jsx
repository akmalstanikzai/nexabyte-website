import React from 'react'

function Header() {
  return (
    <header className="border-b border-white/10 px-4 md:px-8 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-semibold tracking-tight md:hidden">
          Nexa-Byte
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
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