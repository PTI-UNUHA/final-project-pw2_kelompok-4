"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function DetailEventPage() {
  const params = useParams();
  const id = params.id;

  // Data simulasi berdasarkan ID dari list di halaman utama
  const eventData: { [key: string]: any } = {
    "1": {
      category: "Workshop",
      title: "Workshop 1: Digital Marketing",
      date: "Kamis, 23 Mei 2024",
      location: "Offline - Universitas Nurul Huda",
      price_early: "Gratis",
      price_reg: "Gratis",
      desc: "Belajar strategi fundamental Digital Marketing 2024 untuk mahasiswa.",
      gradient: "from-green-400 to-green-600"
    },
    "2": {
      category: "Webinar",
      title: "Webinar 2: Startup Mahasiswa",
      date: "Kamis, 30 Mei 2024",
      location: "Online - Zoom Meeting",
      price_early: "Gratis",
      price_reg: "Gratis",
      desc: "Membangun mindset entrepreneur dari bangku kuliah bersama praktisi startup.",
      gradient: "from-teal-400 to-teal-600"
    },
    "3": {
      category: "Seminar",
      title: "Seminar Kewirausahaan",
      date: "Rabu, 5 Juni 2024",
      location: "Offline - Universitas Diponegoro",
      price_early: "Gratis",
      price_reg: "Gratis",
      desc: "Strategi jitu mengelola bisnis kecil agar tumbuh menjadi skala nasional.",
      gradient: "from-emerald-600 to-emerald-800"
    },
    "4": {
      category: "Talkshow",
      title: "Talkshow Karir Sukses",
      date: "Kamis, 20 Juni 2024",
      location: "Online - YouTube Live",
      price_early: "Gratis",
      price_reg: "Gratis",
      desc: "Diskusi santai mengenai persiapan karir di industri kreatif bagi fresh graduate.",
      gradient: "from-green-500 to-emerald-700"
    }
  };

  // Ambil data berdasarkan ID, jika tidak ada gunakan default Workshop
  const currentEvent = eventData[id as string] || eventData["1"];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
        <Link href="/event" className="hover:text-green-600 transition">Event</Link> &gt; 
        <span className="text-green-700 font-semibold ml-2">{currentEvent.title}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Banner Dinamis berdasarkan warna event */}
            <div className={`relative h-[350px] rounded-[40px] overflow-hidden border border-green-100 shadow-xl bg-gradient-to-br ${currentEvent.gradient} flex items-center justify-center p-12 text-white`}>
               <div className="text-center relative z-10">
                 <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold w-fit mx-auto mb-4 italic">
                    {currentEvent.category} Campus
                 </div>
                 <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase leading-tight">
                    {currentEvent.title}
                 </h1>
                 <p className="text-lg font-semibold bg-white/10 inline-block px-4 py-1 rounded-lg">
                    {currentEvent.date}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
              <div className="flex bg-[#f0f9f1]">
                <button className="px-10 py-5 bg-white text-green-700 font-bold border-t-4 border-green-600">Deskripsi</button>

              </div>
              
              <div className="p-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#1a3a2a]">{currentEvent.title}</h2>
                    <p className="text-green-600 font-bold mt-1">📅 {currentEvent.date}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">📍 {currentEvent.location}</span>
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">🏫 Campus Event</span>
                    </div>
                  </div>
                  <Link href="/event/register">
                   <button className="bg-[#16a34a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#15803d] transition shadow-lg">
                   Daftar Sekarang
                  </button>
                 </Link>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <h3 className="font-bold text-xl text-gray-800 border-b-2 border-green-100 w-fit pb-1">Tentang Event</h3>
                  <p>{currentEvent.desc}</p>
                  <p>Event ini bertujuan untuk meningkatkan kompetensi mahasiswa dalam menghadapi tantangan era digital melalui pemaparan materi dari narasumber ahli di bidangnya.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}