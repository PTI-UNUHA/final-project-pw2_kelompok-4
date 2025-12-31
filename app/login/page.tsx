"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Kita bungkus dengan Suspense karena menggunakan useSearchParams
function LoginContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode'); // Mengambil tulisan 'login' atau 'signup' dari URL
  
  // Jika mode adalah 'signup', maka isLogin jadi false (menampilkan form daftar)
  const [isLogin, setIsLogin] = useState(mode !== 'signup');

  // Update state jika user klik tombol daftar/masuk di header saat sudah di halaman login
  useEffect(() => {
    setIsLogin(mode !== 'signup');
  }, [mode]);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Simulasi data user
  const userData = {
    name: "Mahasiswa Unuha",
    email: "mahasiswa@student.unuha.ac.id",
    nim: "202400123",
    prodi: "Teknik Informatika"
  };

  // Simpan ke LocalStorage
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userProfile', JSON.stringify(userData));

  alert(isLogin ? "Berhasil Masuk!" : "Pendaftaran Berhasil!");
  window.location.href = "/profile"; // Langsung arahkan ke profil
};

  return (
    <div className="min-h-screen bg-[#f7faf8] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-[50px] shadow-2xl overflow-hidden border border-green-50">
        <div className="bg-[#1a3a2a] p-10 text-center text-white">
          <h2 className="text-3xl font-black italic mb-2">Unuha Events</h2>
          <p className="text-green-400 text-sm font-medium">
            {isLogin ? "Selamat datang kembali!" : "Gabung bersama kami sekarang"}
          </p>
        </div>

        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-1">Nama Lengkap</label>
                <input required type="text" placeholder="Masukkan nama" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 ml-1">Email Mahasiswa</label>
              <input required type="email" placeholder="nama@student.unuha.ac.id" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 ml-1">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
            </div>

            <button type="submit" className="w-full bg-[#16a34a] text-white py-4 rounded-2xl font-black text-lg hover:bg-[#15803d] transition shadow-lg mt-4">
              {isLogin ? "Masuk" : "Buat Akun"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-gray-500 font-medium hover:text-green-700">
              {isLogin ? "Belum punya akun? Daftar di sini" : "Sudah punya akun? Masuk di sini"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen Utama
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Memuat...</div>}>
      <LoginContent />
    </Suspense>
  );
}