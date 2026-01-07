"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation"; // Tambahkan ini

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navSearch, setNavSearch] = useState(""); // State untuk teks pencarian
    const router = useRouter(); // Tool untuk pindah halaman

    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(status);
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
        <nav className="flex items-center justify-between px-12 py-4 bg-white sticky top-0 z-50 shadow-sm">
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

                <div className="flex items-center gap-4">
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
            </div>
        </nav>
    );
}
