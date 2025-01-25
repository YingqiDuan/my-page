// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const [time, setTime] = useState({
    sanJose: '',
    shanghai: '',
    montreal: '',
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime({
        sanJose: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' }),
        shanghai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' }),
        montreal: now.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' }),
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center p-4 animate-fade-in">
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Current Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-bold">San Jose</h4>
            <p className="text-lg mt-2">{time.sanJose}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Shanghai</h4>
            <p className="text-lg mt-2">{time.shanghai}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Montreal</h4>
            <p className="text-lg mt-2">{time.montreal}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
