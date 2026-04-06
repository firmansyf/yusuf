/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          wave: {
            '0%': { transform: 'rotate(0deg)' },
            '10%': { transform: 'rotate(14deg)' },
            '20%': { transform: 'rotate(-8deg)' },
            '30%': { transform: 'rotate(14deg)' },
            '40%': { transform: 'rotate(-4deg)' },
            '50%': { transform: 'rotate(10deg)' },
            '60%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { 
              opacity: '0',
              transform: 'translateY(30px)'
            },
            '100%': { 
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
         },
        
        animation: {
          wave: 'wave 2s infinite',
          'fadeIn': 'fadeIn 0.8s ease-out forwards',
          'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },

        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        boxShadow: {
          'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
          'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        },
      },
    },
    plugins: [],
  }