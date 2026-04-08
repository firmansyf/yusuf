'use client'

import Image from "next/image"
import { AnimatedBackground } from "@/components"
import { SiLinkedin, SiGithub, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiJest, SiCypress } from "react-icons/si"
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai"
import { BiSolidMap } from "react-icons/bi"
import { HiSparkles, HiBriefcase } from "react-icons/hi"
import { TbApi } from "react-icons/tb"
import Link from "next/link"
import { useState, useEffect } from "react"

const ROLES = ['Frontend Engineer', 'React Specialist', 'Next.js Developer', 'UI/UX Enthusiast']

const TECH_STACK = [
  { label: 'JavaScript', icon: <SiJavascript />, color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { label: 'TypeScript', icon: <SiTypescript />, color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'React.js', icon: <SiReact />, color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { label: 'Next.js', icon: <SiNextdotjs />, color: 'bg-gray-50 text-gray-800 border-gray-200' },
  { label: 'REST API', icon: <TbApi />, color: 'bg-green-50 text-green-700 border-green-200' },
  { label: 'Jest', icon: <SiJest />, color: 'bg-red-50 text-red-700 border-red-200' },
  { label: 'Cypress', icon: <SiCypress />, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
]

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const atEnd = charIdx === current.length
    const delay = deleting ? 40 : atEnd ? 1800 : 80

    const t = setTimeout(() => {
      if (!deleting) {
        if (!atEnd) {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words])

  return display
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const typedRole = useTypewriter(ROLES)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AnimatedBackground />

      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex items-center pb-4">
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ---- Text Content ---- */}
            <div className="order-2 lg:order-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">

              {/* Greeting */}
              <div className="animate-slideUp flex items-center gap-2 text-gray-500 text-sm font-medium tracking-wide uppercase">
                <span className="w-8 h-px bg-blue-400" />
                <span>Portfolio</span>
                <span className="w-8 h-px bg-blue-400" />
              </div>

              {/* Name */}
              <h1 className="animate-slideUp delay-100 text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Yusuf
                <br />
                Firmansyah
              </h1>

              {/* Typewriter */}
              <div className="animate-slideUp delay-200 flex items-center gap-1 text-xl lg:text-2xl font-semibold text-gray-600 h-8">
                <span>{typedRole}</span>
                <span className="animate-blink text-blue-500 font-thin">|</span>
              </div>

              {/* Badges row */}
              <div className="animate-slideUp delay-300 flex flex-wrap justify-center lg:justify-start gap-3">
                {/* Open to work */}
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold text-green-700">Open to Work</span>
                </div>

                {/* Current company */}
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
                  <HiBriefcase className="text-blue-600 text-sm" />
                  <span className="text-xs font-semibold text-blue-700">Currently at Newgen Development</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                  <BiSolidMap className="text-red-400 text-sm" />
                  <span className="text-xs font-semibold text-gray-600">Bandung, Indonesia 🇮🇩</span>
                </div>
              </div>

              {/* Bio */}
              <p className="animate-slideUp delay-400 text-gray-600 leading-relaxed max-w-lg text-base">
                Frontend Developer with <span className="font-semibold text-blue-600">3+ years</span> of experience
                building scalable, high-performance web apps using{' '}
                <span className="font-semibold text-purple-600">React.js</span> &{' '}
                <span className="font-semibold text-gray-800">Next.js</span>. Focused on clean
                architecture, smooth UX, and delivering real business value.
              </p>

              {/* CTA Buttons */}
              <div className="animate-slideUp delay-500 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="https://www.linkedin.com/in/yusuf-firmansyah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <SiLinkedin className="text-lg" />
                  LinkedIn
                </Link>

                <button className="group flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <AiOutlineDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
                  Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="animate-slideUp delay-600 flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-400 hover:bg-gray-900 hover:text-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <SiGithub className="text-lg" />
                </a>
                <a
                  href="mailto:yusuffirmansyamh@gmail.com"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-300 hover:bg-red-500 hover:text-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <AiOutlineMail className="text-lg" />
                </a>
              </div>

              {/* Stats */}
              <div className="animate-slideUp delay-700 flex gap-8 pt-2">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-blue-600">5+</div>
                  <div className="text-xs text-gray-500 font-medium">Companies</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-purple-600">7+</div>
                  <div className="text-xs text-gray-500 font-medium">Projects</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-black text-pink-600">3+</div>
                  <div className="text-xs text-gray-500 font-medium">Years Exp</div>
                </div>
              </div>
            </div>

            {/* ---- Profile Image ---- */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative spinning ring */}
                <div className="absolute inset-0 rounded-full scale-110">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-blue-200 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 rounded-full scale-125">
                  <div className="w-full h-full rounded-full border border-purple-100 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 blur-3xl opacity-20 scale-110" />

                {/* Image */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group">
                  <Image
                    src="/me.jpg"
                    alt="Yusuf Firmansyah - Frontend Engineer"
                    fill
                    className="object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                    unoptimized
                    priority
                  />
                </div>

                {/* Floating card — Open to Work */}
                <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 animate-float">
                  <div className="flex items-center gap-2">
                    <HiSparkles className="text-yellow-500 text-base" />
                    <span className="text-xs font-bold text-gray-800 whitespace-nowrap">Available Now</span>
                  </div>
                </div>

                {/* Floating card — experience */}
                <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <div className="text-lg font-black text-blue-600 leading-none">3+</div>
                    <div className="text-xs text-gray-400 font-medium mt-0.5">Yrs Exp</div>
                  </div>
                </div>

                {/* Floating card — projects */}
                <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="text-center">
                    <div className="text-lg font-black text-purple-600 leading-none">7+</div>
                    <div className="text-xs text-gray-400 font-medium mt-0.5">Projects</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== TECH STACK SECTION ===== */}
        <section className="pb-28 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.label}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border ${tech.color} hover:scale-105 transition-transform duration-200`}
                >
                  {tech.icon}
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
