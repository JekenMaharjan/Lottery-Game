'use client'

import React, { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'

const LotteryGame = () => {
    const [lifeCount, setLifeCount] = useState(3)
    const [gameMsg, setGameMsg] = useState(
        "🎰 Welcome to the Lottery Game! You have 3 lives. Match all three to win!"
    )

    const items = [
        { icon: "🍒" },
        { icon: "💎" },
        { icon: "🍀" },
        { icon: "🍋" },
        { icon: "⭐" }
    ]

    useEffect(() => {
        if (lifeCount === 0) {
        setGameMsg("💀 Game Over! Click Restart to try again.")
        }
    }, [lifeCount])

    return (
        <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-black min-h-screen flex flex-col items-center justify-center">
            {/* Game message navbar */}
            <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-700 to-purple-600 p-8 text-2xl text-white text-center font-semibold shadow-lg z-50">
                {gameMsg}
            </div>

            {/* Lottery box */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,1)] flex flex-col items-center gap-6 w-[340px] mt-20">
                
                {/* Life hearts */}
                <div className="flex gap-2 text-3xl">
                    {Array.from({ length: lifeCount }, (_, i) => (
                        <BiHeart key={i} color="red" />
                    ))}
                </div>

                {/* Slots */}
                <div className="flex gap-4 bg-gradient-to-b from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-inner">
                    slot of items 
                </div>

                {/* Lever button */}
                <button className="px-6 py-2 rounded-xl text-lg font-semibold shadow-lg transition-transform bg-green-500 hover:bg-green-600 hover:scale-105 cursor-pointer">
                    🎯 Pull Lever
                </button>

                {/* Restart button */}
                <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    🔄 Restart
                </button>
            </div>
        </div>
    )
}

export default LotteryGame