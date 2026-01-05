import React from 'react'

function SidebarToggle({ isOpen, toggleSidebar }) {
  return (
    <button
      onClick={toggleSidebar}
      className={`fixed top-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-all duration-300 z-30 hidden md:block ${isOpen ? 'left-[232px]' : 'left-4'}`}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
      >
        <path 
          d="M15 18l-6-6 6-6" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default SidebarToggle