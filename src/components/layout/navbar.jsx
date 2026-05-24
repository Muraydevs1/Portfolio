import React from 'react'
import Darkmode from '../ui/darkmode'
import FlipClock from '../ui/flip-clock'

function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow">
        <h1 className="text-3xl font-bold dark:text-white" style={{ fontFamily: '"Caveat", cursive' }}>
          ACR
        </h1>

        <div className="flex items-center gap-4">
          <FlipClock size="sm" variant="muted" />
          <Darkmode dark={dark} setDark={setDark} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
