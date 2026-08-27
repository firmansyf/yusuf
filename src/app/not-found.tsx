import Link from "next/link";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import { AnimatedBackground } from "@/components";

export default function NotFound() {
	return (
		<section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-16">
			<AnimatedBackground />

			<div className="relative z-10 mx-auto w-full max-w-xl text-center">
				<p className="animate-slideUp text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
					Error 404
				</p>
				<h1 className="animate-slideUp delay-100 mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-7xl font-black leading-none text-transparent sm:text-8xl">
					Oops!
				</h1>
				<h2 className="animate-slideUp delay-200 mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
					Halaman tidak ditemukan.
				</h2>
				<p className="animate-slideUp delay-300 mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
					Sepertinya alamat yang kamu buka sudah berpindah atau tidak tersedia.
					Mari kembali dan lanjut menjelajahi portfolio Yusuf.
				</p>

				<div className="animate-slideUp delay-400 mt-8 flex flex-wrap justify-center gap-3">
					<Link
						href="/"
						className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
					>
						<HiHome className="text-lg" />
						Kembali ke Beranda
					</Link>
					<Link
						href="/portfolio"
						className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg"
					>
						<HiArrowLeft className="text-lg" />
						Lihat Portfolio
					</Link>
				</div>
			</div>
		</section>
	);
}
