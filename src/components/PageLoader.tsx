'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const startFade = () => setFadingOut(true)

    if (document.readyState === 'complete') {
      const t = setTimeout(startFade, 400)
      return () => clearTimeout(t)
    }

    window.addEventListener('load', startFade)
    const fallback = setTimeout(startFade, 2500)
    return () => {
      window.removeEventListener('load', startFade)
      clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    if (!fadingOut) return
    const t = setTimeout(() => setVisible(false), 500)
    return () => clearTimeout(t)
  }, [fadingOut])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 transition-opacity duration-500 ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-16 h-16">
          <div className="absolute -inset-2 rounded-2xl border-2 border-dashed border-blue-300 animate-spin-slow" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 shadow-lg flex items-center justify-center">
            <span className="text-white text-xl font-black">YF</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" />
        </div>
      </div>
    </div>
  )
}
