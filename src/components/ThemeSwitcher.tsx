import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="inline-block">
      <label className="relative block w-[3.5em] h-[2em]">
        <input 
          type="checkbox" 
          className="hidden" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className={cn(
          "absolute cursor-pointer inset-0 rounded-[30px] transition-colors duration-400",
          "before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em]",
          "before:rounded-[20px] before:left-[0.3em] before:top-1/2 before:-translate-y-1/2",
          "before:transition-all before:duration-400",
          theme === 'light' 
            ? "bg-[#f4f4f5] before:bg-gradient-to-r before:from-[#ff0080] before:to-[#ff8c00]" 
            : "bg-[#303136] before:translate-x-[calc(100%+0.3em)] before:bg-[#303136] before:shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb]"
        )}/>
      </label>
    </div>
  )
}

export default ThemeSwitcher