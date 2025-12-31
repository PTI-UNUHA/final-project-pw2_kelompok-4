"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterEventPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#f7faf8] flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[50px] shadow-xl text-center max-w-md border border-green-50">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
            ✓
          </div>
          <h2 className="text-3xl font-black text-[#1a3a2a] mb-4">Pendaftaran Berhasil!</h2>
          <p className="text-gray-500 mb-8 font-medium">Kamu telah terdaftar di event ini. Silakan cek email atau menu Profil untuk melihat tiketmu.</p>
          <Link href="/event">
            <button className="w-full bg-[#16a34a] text-white py-4 rounded-2xl font-black hover:bg-[#15803d] transition">
              Kembali ke Event
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7faf8] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/event" className="text-green-700 font-bold mb-8 inline-block hover:underline">
          ← Kembali ke Detail Event
        </Link>

        <div className="bg-white p-10 rounded-[50px] shadow-sm border border-gray-100">
          <h1 className="text-3xl font-black text-[#1a3a2a] mb-2">Formulir Pendaftaran</h1>
          <p className="text-gray-500 mb-8 font-medium italic">Workshop 1: Digital Marketing</p>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Nama Lengkap</label>
              <input required type="text" placeholder="Masukkan nama sesuai KTM" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500 transition" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400">NIM</label>
                <input required type="text" placeholder="Contoh: 2024001" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500 transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400">No. WhatsApp</label>
                <input required type="tel" placeholder="0812..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500 transition" />
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
              <p className="text-sm text-green-800 font-bold">Informasi Penting:</p>
              <p className="text-xs text-green-700 mt-1">Pastikan data yang kamu masukkan sudah benar. Link grup WhatsApp akan muncul setelah pendaftaran berhasil.</p>
            </div>

            <button type="submit" className="w-full bg-[#16a34a] text-white py-5 rounded-[25px] font-black text-lg hover:bg-[#15803d] transition shadow-lg mt-4">
              Konfirmasi Pendaftaran
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}