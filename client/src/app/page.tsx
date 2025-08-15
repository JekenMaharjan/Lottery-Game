'use client'

import React from 'react'

const LotteryGame = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-black min-h-screen flex flex-col items-center justify-center">
        {/* Game message navbar */}
        <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-700 to-purple-600 p-8 text-2xl text-white text-center font-semibold shadow-lg z-50">
            game message
        </div>

        {/* Lottery box */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,1)] flex flex-col items-center gap-6 w-[340px] mt-20">
            
            {/* Life hearts */}
            <div className="flex gap-2 text-3xl">
                hearts
            </div>

            {/* Slots */}
            <div className="flex gap-4 bg-gradient-to-b from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-inner">
                slot of items 
            </div>

            {/* Lever button */}
            <button>
                Lever
            </button>

            {/* Restart button */}
            <button>
                Restart
            </button>
        </div>
    </div>
  )
}

export default LotteryGame