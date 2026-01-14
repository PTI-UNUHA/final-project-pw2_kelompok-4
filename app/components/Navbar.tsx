"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation"; // Tambahkan ini

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navSearch, setNavSearch] = useState(""); // State untuk teks pencarian
    const [isMobileOpen, setIsMobileOpen] = useState(false); // State untuk menu mobile
    const router = useRouter(); // Tool untuk pindah halaman

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);
    }, []);

    // Tutup menu mobile saat layar melebar (mis. pindah ke desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fungsi saat tombol Enter ditekan di kolom cari
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (navSearch.trim()) {
            // Pindah ke halaman event sambil membawa kata kunci di URL
            router.push(`/event?search=${encodeURIComponent(navSearch)}`);
        }
    };

    return (
        <nav className="relative flex items-center justify-between px-6 md:px-12 py-4 bg-white sticky top-0 z-50 shadow-sm">
            <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/Logo-Unuha.png"
                        alt="Logo Unuha"
                        width={149}
                        height={64}
                        className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <div className="hidden md:flex gap-6 text-sm font-bold text-gray-500">
                    <Link href="/" className="hover:text-green-600 transition">
                        Beranda
                    </Link>
                    <Link href="/event" className="hover:text-green-600 transition">
                        Event
                    </Link>
                    <Link href="/about" className="hover:text-green-600 transition">
                        Info Kampus
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* KOLOM PENCARIAN YANG SUDAH BERFUNGSI */}
                <form onSubmit={handleSearch} className="relative hidden lg:block">
                    <input
                        type="text"
                        placeholder="Cari event seru..."
                        value={navSearch}
                        onChange={(e) => setNavSearch(e.target.value)}
                        className="bg-gray-50 px-5 py-2.5 rounded-2xl text-sm outline-none w-64 border border-gray-100 focus:border-green-500 focus:bg-white transition-all"
                    />
                </form>

                {/* Desktop auth button */}
                <div className="hidden md:flex items-center gap-4">
                    {isLoggedIn ? (
                        <Link href="/profile">
                            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-green-100 transition-all active:scale-95">
                                Profil Saya
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login?mode=login">
                            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-green-100 transition-all active:scale-95">
                                Masuk
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile menu toggle */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2 rounded-md border border-gray-100"
                >
                    {isMobileOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {isMobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
                    <div className="px-4 py-4 space-y-3">
                        <Link href="/" onClick={() => setIsMobileOpen(false)} className="block text-gray-700 font-bold">
                            Beranda
                        </Link>
                        <Link
                            href="/event"
                            onClick={() => setIsMobileOpen(false)}
                            className="block text-gray-700 font-bold"
                        >
                            Event
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMobileOpen(false)}
                            className="block text-gray-700 font-bold"
                        >
                            Info Kampus
                        </Link>

                        <form
                            onSubmit={(e) => {
                                handleSearch(e);
                                setIsMobileOpen(false);
                            }}
                            className="mt-2"
                        >
                            <input
                                type="text"
                                placeholder="Cari event seru..."
                                value={navSearch}
                                onChange={(e) => setNavSearch(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-100 rounded-2xl text-sm focus:border-green-500"
                            />
                        </form>

                        {isLoggedIn ? (
                            <Link href="/profile" onClick={() => setIsMobileOpen(false)}>
                                <button className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg transition-all">
                                    Profil Saya
                                </button>
                            </Link>
                        ) : (
                            <Link href="/login?mode=login" onClick={() => setIsMobileOpen(false)}>
                                <button className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg transition-all">
                                    Masuk
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
