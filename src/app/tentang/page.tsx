'use client'

import { AnimatedBackground } from '@/components'
import { useAboutVM } from '@/viewModel/aboutVM/useAboutVM'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { BiSolidMap } from "react-icons/bi"
import { HiSparkles, HiBriefcase } from "react-icons/hi"
import {
  SiJavascript, SiTypescript, SiJquery, SiReact,
  SiNextdotjs, SiCypress, SiJest, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiPostgresql
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const SKILL_ICONS: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  Javascript:  { icon: <SiJavascript />,  color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' },
  Typescript:  { icon: <SiTypescript />,  color: 'text-blue-600',   bg: 'bg-blue-50 border-blue-200' },
  Jquery:      { icon: <SiJquery />,      color: 'text-sky-600',    bg: 'bg-sky-50 border-sky-200' },
  ReactJs:     { icon: <SiReact />,       color: 'text-cyan-500',   bg: 'bg-cyan-50 border-cyan-200' },
  NextJs:      { icon: <SiNextdotjs />,   color: 'text-gray-800',   bg: 'bg-gray-50 border-gray-200' },
  RestAPI:     { icon: <TbApi />,         color: 'text-teal-600',   bg: 'bg-teal-50 border-teal-200' },
  AngularJs:   { icon: <SiAngular />,     color: 'text-red-600',    bg: 'bg-red-50 border-red-200' },
  VueJs:       { icon: <SiVuedotjs />,   color: 'text-green-600',  bg: 'bg-green-50 border-green-200' },
  NodeJs:      { icon: <SiNodedotjs />,  color: 'text-green-700',  bg: 'bg-green-50 border-green-200' },
  ExpressJs:   { icon: <SiExpress />,   color: 'text-gray-700',   bg: 'bg-gray-50 border-gray-200' },
  Postgres:    { icon: <SiPostgresql />,color: 'text-blue-800',   bg: 'bg-blue-50 border-blue-200' },
  Cypress:     { icon: <SiCypress />,   color: 'text-emerald-600',bg: 'bg-emerald-50 border-emerald-200' },
  Jest:        { icon: <SiJest />,       color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' },
}

export default function Tentang() {
  const { experience, skill } = useAboutVM()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AnimatedBackground />

      <div className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pb-28 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        {/* ===== PROFILE HEADER ===== */}
        <div className="flex flex-col items-center pt-16 pb-12 gap-5 animate-slideUp">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/me.jpg"
                alt="Yusuf Firmansyah"
                fill
                className="object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            {/* Online dot */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow">
              <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
          </div>

          {/* Name & title */}
          <div className="text-center">
            <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Yusuf Firmansyah
            </h1>
            <p className="text-gray-500 font-medium mt-1">Frontend Engineer</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-700">Open to Work</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
              <HiBriefcase className="text-blue-500 text-xs" />
              <span className="text-xs font-semibold text-blue-700">Hepytech</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full">
              <BiSolidMap className="text-red-400 text-xs" />
              <span className="text-xs font-semibold text-gray-600">Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        {/* ===== ABOUT ME ===== */}
        <div className="animate-slideUp delay-100 mb-12">
          <SectionTitle icon={<HiSparkles />} title="About Me" />
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500 text-gray-700 leading-relaxed space-y-4 text-[15px]">
            <p>
              👋 Hi! I&apos;m <span className="font-bold text-blue-600">Yusuf Firmansyah</span>, a Frontend Developer Specialist passionate about building fast, modern, and responsive web interfaces.
            </p>
            <p>
              I specialize in <span className="font-semibold text-purple-600">React.js</span> and{' '}
              <span className="font-semibold text-blue-600">Next.js</span>, focusing on clean architecture and efficient user experiences. For me, great products are built on top of maintainable code and intuitive design.
            </p>
            <p>
              I&apos;m experienced in developing scalable frontend applications with emphasis on{' '}
              <span className="font-semibold text-pink-600">performance</span>,{' '}
              <span className="font-semibold text-green-600">accessibility</span>, and cross-platform responsiveness.
            </p>
            <p>
              Beyond coding, I love optimizing complex components and continuously exploring ways to make web interactions feel smoother and more natural.
            </p>
          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div className="animate-slideUp delay-200 mb-12">
          <SectionTitle icon={<HiBriefcase />} title="Experience" />
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

              <div className="space-y-8">
                {experience.map((item, i) => (
                  <div key={i} className="relative pl-12 group">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white transition-transform duration-300 group-hover:scale-110 ${
                      item.work_status
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <HiBriefcase className="text-white text-sm" />
                    </div>

                    <div className="bg-gray-50/80 rounded-xl p-4 border border-gray-100 group-hover:border-blue-200 group-hover:bg-blue-50/40 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {item.position}
                          </h3>
                          <p className="text-gray-500 text-sm font-medium mt-0.5">{item.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {item.work_status && (
                            <span className="px-2.5 py-1 text-xs font-bold text-green-700 bg-green-100 border border-green-200 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              Current
                            </span>
                          )}
                          <time className="text-xs text-gray-400 font-medium">
                            {item.start_date} — {item.work_status ? 'Present' : item.end_date}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== SKILLS ===== */}
        <div className="animate-slideUp delay-300">
          <SectionTitle icon={<HiSparkles />} title="Skills" />
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skill.map((item) => {
                const meta = SKILL_ICONS[item.label] ?? { icon: <HiSparkles />, color: 'text-gray-600', bg: 'bg-gray-50 border-gray-200' }
                return (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border ${meta.bg} hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default`}
                  >
                    <span className={`text-3xl ${meta.color}`}>{meta.icon}</span>
                    <span className="text-xs font-bold text-gray-700 text-center leading-tight">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white text-base shadow-md">
        {icon}
      </div>
      <h2 className="text-xl font-black text-gray-800">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
    </div>
  )
}
