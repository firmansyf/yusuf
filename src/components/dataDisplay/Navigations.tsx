'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiInfo } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiHomeAlt, BiBriefcase } from 'react-icons/bi'

export default function Navigations() {
  const pathname = usePathname()

  const links = [
    { href: '/', icon: <BiHomeAlt className="text-xl" />, label: 'Home' },
    { href: '/tentang', icon: <FiInfo className="text-xl" />, label: 'Tentang' },
    { href: '/portfolio', icon: <BiBriefcase className="text-xl" />, label: 'Portfolio' },
    { href: '/kontak', icon: <AiOutlineMail className="text-xl" />, label: 'Kontak' },
  ]

  return (
    <div className="w-full flex justify-center items-center py-3">
      <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center px-6 py-2 rounded-2xl transition-all duration-300 min-w-[80px] ${
                isActive
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                {link.icon}
              </span>
              <span className="text-xs mt-1 font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}