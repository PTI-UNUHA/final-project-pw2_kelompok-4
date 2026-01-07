"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [myEvents, setMyEvents] = useState<any[]>([]);

  useEffect(() => {
    // 1. Ambil data User
    const userData = localStorage.getItem('userProfile');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      window.location.href = "/login";
    }

    // 2. Ambil data Event yang diikuti
    const eventData = localStorage.getItem('myEvents');
    if (eventData) {
      setMyEvents(JSON.parse(eventData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userProfile');
    // localStorage.removeItem('myEvents'); // Opsional: hapus jika ingin reset total
    window.location.href = "/";
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center font-bold">Memuat...</div>;

  return (
    <div className="min-h-screen bg-[#f0fdf4] py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* CARD UTAMA: HEADER PROFIL */}
        <div className="bg-white rounded-[40px] shadow-sm border border-green-100 overflow-hidden">
          <div className="bg-[#1a3a2a] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            {/* Dekorasi Latar Belakang */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <div className="w-32 h-32 bg-gradient-to-tr from-green-400 to-green-600 rounded-full border-4 border-white flex items-center justify-center text-5xl font-black text-white shadow-xl">
              {user.name[0]}
            </div>
            
            <div className="text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <h1 className="text-4xl font-black text-white">{user.name}</h1>
              </div>
              <p className="text-green-300 font-medium text-lg mt-1">{user.email}</p>
              <p className="text-white/60 text-sm mt-2 font-mono tracking-widest">NIM: {user.nim}</p>
            </div>

            <div className="md:ml-auto flex gap-3">
               <button onClick={handleLogout} className="bg-white/10 hover:bg-red-500 text-white px-6 py-3 rounded-2xl font-bold text-sm transition border border-white/20">
                 Logout
               </button>
            </div>
          </div>

          {/* GRID INFO & STATISTIK */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-50">
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-50">
              <p className="text-gray-400 text-xs font-black uppercase mb-1">Program Studi</p>
              <p className="text-lg font-bold text-gray-800">{user.prodi}</p>
            </div>
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-gray-50">
              <p className="text-gray-400 text-xs font-black uppercase mb-1">Event Diikuti</p>
              <p className="text-3xl font-black text-green-600">{myEvents.length}</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-400 text-xs font-black uppercase mb-1">Status Keanggotaan</p>
              <p className="text-lg font-bold text-gray-800">Mahasiswa Aktif</p>
            </div>
          </div>
        </div>

        {/* SECTION: DAFTAR EVENT SAYA */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-[#1a3a2a] flex items-center gap-3">
            Event Saya 
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-lg">{myEvents.length}</span>
          </h2>

          {myEvents.length === 0 ? (
            <div className="bg-white p-12 rounded-[40px] text-center border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-bold">Kamu belum mendaftar di event manapun.</p>
              <Link href="/event">
                <button className="mt-4 text-green-600 font-black hover:underline">Cari Event Sekarang →</button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myEvents.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-green-300 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-black">
                      E
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-green-700 transition">{event.title}</h4>
                      <p className="text-xs text-gray-400 font-medium">{event.date}</p>
                    </div>
                  </div>
                  <button className="bg-gray-50 text-gray-400 px-4 py-2 rounded-xl text-xs font-bold group-hover:bg-green-600 group-hover:text-white transition">
                    Lihat Tiket
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}