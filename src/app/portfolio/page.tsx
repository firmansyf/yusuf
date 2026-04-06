'use client'

import { AnimatedBackground } from '@/components'
import { usePortfolioVM } from '@/viewModel/portfolioVM/usePortfolioVM'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiSparkles } from "react-icons/hi"
import { BiLinkExternal, BiCode } from "react-icons/bi"
import { AiOutlineCalendar } from "react-icons/ai"
import { MdWorkOutline } from "react-icons/md"

export default function Portfolio() {
  const { project } = usePortfolioVM()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AnimatedBackground />

      <div className={`relative z-10 max-w-6xl mx-auto pb-28 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        {/* ===== HEADER ===== */}
        <div className="text-center pt-16 pb-12 px-6 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-5">
            <BiCode className="text-blue-500" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">My Work</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-800 mb-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            A selection of real-world projects I&apos;ve built and contributed to across various companies.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="px-5 md:px-10">
          {project.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-gray-100 text-center max-w-md">
                <HiSparkles className="text-5xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Projects Yet</h3>
                <p className="text-gray-500 text-sm">Projects will appear here soon. Stay tuned!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.map((item, i) => (
                <div
                  key={i}
                  className="animate-slideUp group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden flex-shrink-0">
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                        <BiLinkExternal className="text-5xl mb-2" />
                        <span className="text-sm font-medium">No Preview</span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <div className="flex items-center gap-2 text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        <BiLinkExternal />
                        View Project
                      </div>
                    </div>

                    {/* Role badge */}
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-sm border border-gray-100">
                        <MdWorkOutline className="text-blue-500" />
                        {item.as}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div>
                      <h2 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1.5 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <AiOutlineCalendar />
                        <span>{item.start_date} – {item.end_date}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="px-2 py-0.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">React</span>
                        <span className="px-2 py-0.5 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full">Next.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
