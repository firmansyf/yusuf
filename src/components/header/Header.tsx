export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-50 border-b border-gray-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-black">YF</span>
          </div>
          <span className="font-bold text-gray-800 text-sm tracking-tight">
            Yusuf Firmansyah
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-600 ml-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse" />
            Open to Work
          </span>
        </div>

        <div className="text-xs text-gray-400 font-medium hidden sm:block">
          Frontend Engineer
        </div>
      </div>
    </header>
  )
}
