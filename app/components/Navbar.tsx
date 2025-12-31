"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek status login saat komponen muncul di browser
    const status = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);
  }, []);

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
          <h1 className="text-xl font-bold text-green-800">Unuha Events</h1>
        </Link>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-green-600">Beranda</Link>
          <Link href="/event" className="hover:text-green-600">Event</Link>
          <Link href="/about" className="hover:text-green-600">Info Kampus</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Cari event..." 
          className="bg-gray-100 px-4 py-2 rounded-full text-sm outline-none w-64 border focus:border-green-500" 
        />
        
        {isLoggedIn ? (
          <Link href="/profile">
            <button className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition">
              Profil Saya
            </button>
          </Link>
        ) : (
          <>
            <Link href="/login?mode=signup">
              <button className="text-green-700 font-semibold text-sm hover:underline">Daftar</button>
            </Link>
            <Link href="/login?mode=login">
              <button className="bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition">
                Masuk / Daftar
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}