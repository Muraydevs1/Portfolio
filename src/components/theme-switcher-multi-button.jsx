import { useEffect, useState } from 'react'

import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

export function ThemeSwitcherMultiButton({ className, ...props }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'relative isolate inline-flex h-8 items-center rounded-full border border-dotted border-neutral-200 px-1 dark:border-white/10',
          className
        )}
        {...props}
      >
        <div className="flex space-x-0">
          <div className="size-6 animate-pulse rounded-full bg-neutral-200 dark:bg-white/15" />
          <div className="size-6 animate-pulse rounded-full bg-neutral-200 dark:bg-white/15" />
          <div className="size-6 animate-pulse rounded-full bg-neutral-200 dark:bg-white/15" />
        </div>
      </div>
    )
  }

  const themes = [
    { value: 'system', icon: MonitorIcon, label: 'Switch to system theme' },
    { value: 'light', icon: SunIcon, label: 'Switch to light theme' },
    { value: 'dark', icon: MoonIcon, label: 'Switch to dark theme' },
  ]

  return (
    <div
      className={cn(
        'relative isolate inline-flex h-8 items-center rounded-full border border-dotted border-neutral-200 px-1 dark:border-white/10',
        className
      )}
      {...props}
    >
      {themes.map(({ value, icon, label }) => {
        const Icon = icon
        return (
        <button
          key={value}
          aria-label={label}
          title={label}
          type="button"
          onClick={() => setTheme(value)}
          className="group relative size-6 rounded-full transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
        >
          {theme === value && (
            <div className="absolute inset-0 -z-10 rounded-full bg-neutral-100 dark:bg-neutral-800" />
          )}
          <Icon
            className={`relative m-auto size-3.5 transition duration-200 ease-out ${
              theme === value
                ? 'text-neutral-950 dark:text-neutral-50'
                : 'text-neutral-500 group-hover:text-neutral-950 group-focus-visible:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-50 dark:group-focus-visible:text-neutral-50'
            }`}
            aria-hidden="true"
          />
        </button>
        )
      })}
    </div>
  )
}
