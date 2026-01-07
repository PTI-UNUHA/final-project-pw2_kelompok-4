"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function UploadEventPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data Event Berhasil Disimpan!");
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/event" className="text-green-700 font-bold mb-8 inline-block hover:underline">
          ← Kembali ke Event
        </Link>
        
        <div className="bg-white p-10 rounded-[50px] shadow-sm border border-gray-100">
          <h1 className="text-4xl font-black text-[#1a3a2a] mb-2">Upload Event</h1>
          <p className="text-gray-500 mb-10 font-medium text-sm">Lengkapi data di bawah untuk mempublikasikan event kamu.</p>

          <form onSubmit={handleDirectSubmit} className="space-y-6">
            {/* Bagian Upload Gambar */}
            <div className="space-y-2">
              <label className="text-sm font-black text-[#1a3a2a]">Upload Poster Event</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-[30px] cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="h-full w-full object-contain rounded-[30px] p-2" />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500 font-bold">Klik untuk upload poster</p>
                      <p className="text-xs text-gray-400">PNG, JPG atau JPEG (Maks. 2MB)</p>
                    </div>
                  )}
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-[#1a3a2a]">Nama Event</label>
                <input required type="text" placeholder="Judul Event" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-[#1a3a2a]">Penyelenggara</label>
                <input required type="text" placeholder="Nama Kampus/Organisasi" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-[#1a3a2a]">Tanggal Pelaksanaan</label>
                <input required type="date" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-[#1a3a2a]">Kategori</label>
                <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500">
                  <option>Workshop</option>
                  <option>Webinar</option>
                  <option>Seminar</option>
                  <option>Talkshow</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#16a34a] text-white py-5 rounded-[25px] font-black text-lg hover:bg-[#15803d] transition shadow-lg mt-6">
              Simpan & Publikasikan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}