import React from 'react'
import { ThemeSwitcherMultiButton } from '@/components/theme-switcher-multi-button'
import FlipClock from '../ui/flip-clock'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-md shadow-sm border-b border-neutral-200/60 dark:border-white/10">
        <h1 className="font-handwriting text-3xl font-bold">
          ACR
        </h1>

        <div className="flex items-center gap-4">
          <FlipClock size="sm" variant="muted" />
          <ThemeSwitcherMultiButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
