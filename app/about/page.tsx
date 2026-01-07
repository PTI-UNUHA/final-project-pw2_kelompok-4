"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Profile */}
      <div className="bg-[#1a3a2a] text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-black mb-4">Tentang Unuha Events</h1>
        <p className="text-green-400 max-w-2xl mx-auto text-lg">Platform informasi event kampus untuk memudahkan mahasiswa Universitas Nurul Huda berkembang.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <section>
          <h2 className="text-3xl font-black text-[#1a3a2a] mb-4">Visi Kami</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Menjadi jembatan utama bagi seluruh mahasiswa Universitas Nurul Huda dalam mengakses informasi pengembangan diri, mulai dari workshop, seminar, secara valid dan terpercaya.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-[40px]">
            <h4 className="font-bold text-green-800 text-xl mb-2">1.500+ Event</h4>
            <p className="text-green-700 text-sm italic">Telah dipublikasikan melalui platform kami sejak tahun 2020.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-[40px]">
            <h4 className="font-bold text-green-800 text-xl mb-2">80+ Kampus</h4>
            <p className="text-green-700 text-sm italic">Bekerja sama dengan berbagai organisasi mahasiswa yang ada di Universitas Nurul Huda.</p>
          </div>
        </div> 
      </div>
    </div>
  );
}