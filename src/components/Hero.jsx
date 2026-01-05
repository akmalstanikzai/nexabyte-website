import React, { useState } from 'react'

function Hero() {
  const [inputValue, setInputValue] = useState('')

  const quickActions = [
    'Search with ChatGPT',
    'Talk with ChatGPT',
    'Research',
    'Sora',
    'More'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted:', inputValue)
    // Add your submit logic here
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 mt-20 transition-all duration-500 ease-in-out">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-center mb-10 text-white">
          What can I help with?
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative bg-gradient-to-br from-[#2f2f2f] to-[#252525] rounded-[1.75rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
            <input
              type="text"
              className="w-full bg-transparent text-white px-6 py-4 pr-14 outline-none placeholder-gray-400 text-base"
              placeholder="Teach me Mahjong for beginners"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover: scale-105"
              aria-label="Submit"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                className="text-white"
              >
                <path 
                  d="M5 12h14M12 5l7 7-7 7" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-2. 5">
          {quickActions. map((action, index) => (
            <button
              key={index}
              className="px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full text-sm text-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero