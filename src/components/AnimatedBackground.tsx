'use client'

import { useState, useEffect } from 'react'

export default function AnimatedBackground() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, transition: 'transform 0.5s ease-out' }}
      />
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '2s', transform: `translate(${-pos.x}px, ${-pos.y}px)`, transition: 'transform 0.5s ease-out' }}
      />
      <div
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
        style={{ animationDelay: '4s', transform: `translate(${pos.y}px, ${pos.x}px)`, transition: 'transform 0.5s ease-out' }}
      />
    </div>
  )
}
