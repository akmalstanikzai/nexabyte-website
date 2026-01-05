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
    <div className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-center mb-12 text-white">
          What can I help with?
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative bg-[#2b2b2b] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <input
              type="text"
              className="w-full bg-transparent text-white px-6 py-5 pr-14 outline-none placeholder-gray-400 text-base"
              placeholder="Teach me Mahjong for beginners"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Submit"
            >
              <svg 
                width="20" 
                height="20" 
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
        
        <div className="flex flex-wrap justify-center gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="px-5 py-2.5 bg-transparent border border-white/20 hover:bg-white/5 rounded-full text-sm text-white transition-colors"
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