'use client'

import { AnimatedBackground } from '@/components'
import { useContactVM } from '@/viewModel/contactVM/useContactVM'
import { useState, useEffect } from 'react'
import { HiSparkles } from "react-icons/hi"
import { AiOutlineMail, AiOutlineUser, AiOutlineCheckCircle } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"
import { FiSend, FiClock } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"

export default function Kontak() {
  const { form, handleChange, handleSubmit, isSending, status } = useContactVM()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const isSuccess = status.includes('berhasil')
  const isError   = status.includes('gagal') || status.includes('kesalahan')

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AnimatedBackground />

      <div className={`relative z-10 max-w-5xl mx-auto pb-28 px-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

        {/* ===== HEADER ===== */}
        <div className="text-center pt-16 pb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-5">
            <AiOutlineMail className="text-purple-500" />
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-800 mb-3">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Have a project in mind or a role to discuss? I&apos;d love to hear from you. I usually respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ===== FORM ===== */}
          <div className="lg:col-span-3 animate-slideUp delay-100">
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <AiOutlineUser className="text-blue-500" />
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <AiOutlineMail className="text-purple-500" />
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all duration-300 placeholder:text-gray-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <BiMessageDetail className="text-pink-500" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell me about the project or opportunity..."
                  className="w-full border-2 border-gray-100 bg-gray-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all duration-300 resize-none placeholder:text-gray-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-200 hover:shadow-xl overflow-hidden hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2 text-sm">
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
              </button>

              {/* Status */}
              {status && (
                <div className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium border ${
                  isSuccess
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : isError
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}>
                  <AiOutlineCheckCircle className={`text-lg flex-shrink-0 ${isSuccess ? 'text-green-500' : isError ? 'text-red-500' : 'text-blue-500'}`} />
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="lg:col-span-2 flex flex-col gap-4 animate-slideUp delay-200">

            {/* Info cards */}
            {[
              {
                icon: <AiOutlineMail className="text-2xl text-blue-500" />,
                bg: 'bg-blue-50 border-blue-100',
                title: 'Email',
                value: 'yusuffirmansyamh@gmail.com',
                small: true,
              },
              {
                icon: <FiClock className="text-2xl text-purple-500" />,
                bg: 'bg-purple-50 border-purple-100',
                title: 'Response Time',
                value: 'Within 24 hours',
              },
              {
                icon: <MdOutlineWorkOutline className="text-2xl text-pink-500" />,
                bg: 'bg-pink-50 border-pink-100',
                title: 'Availability',
                value: 'Open for full-time & freelance',
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`flex items-start gap-4 p-5 rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-300 ${card.bg}`}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{card.title}</p>
                  <p className={`font-semibold text-gray-800 mt-0.5 ${card.small ? 'text-sm break-all' : 'text-sm'}`}>{card.value}</p>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="mt-auto p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 shadow-sm">
              <HiSparkles className="text-yellow-500 text-xl mb-2" />
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &ldquo;I&apos;m passionate about building products that make a difference. Let&apos;s create something great together.&rdquo;
              </p>
              <p className="text-xs font-bold text-gray-700 mt-3">— Yusuf Firmansyah</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
