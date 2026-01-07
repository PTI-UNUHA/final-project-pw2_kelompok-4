"use client";
import React from "react";
import Link from "next/link";

export default function BerandaPage() {
    const popularEvents = [
        {
            id: "1",
            type: "Workshop",
            title: "Workshop: Digital Marketing",
            date: "25 Mei 2024",
            univ: "Universitas Nurul Huda",
            price: "Gratis",
            color: "bg-[#00a651]",
        },
        {
            id: "2",
            type: "Webinar",
            title: "Webinar: Startup Mahasiswa",
            date: "31 Mei 2026",
            univ: "Online",
            price: "Gratis",
            color: "bg-[#008d7d]",
        },
        {
            id: "3",
            type: "Seminar",
            title: "Seminar Kewirausahaan",
            date: "7 Juni 2026",
            univ: "Universitas Nurul Huda",
            price: "Gratis",
            color: "bg-[#005a32]",
        },
        {
            id: "4",
            type: "Talkshow",
            title: "Talkshow Karir Sukses",
            date: "18 Jun 2026",
            univ: "Online",
            price: "Gratis",
            color: "bg-[#00a651]",
        },
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-800">
            {/* 1. HERO SECTION (Tanpa Filter) */}
            <section className="relative pt-20 pb-24 px-6 bg-gradient-to-b from-green-50/50 to-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-6xl font-black text-[#1a3a2a] leading-tight">
                            Satu Platform, <br /> Semua Event Kampus UNUHA
                        </h1>
                        <p className="text-gray-600 text-xl max-w-lg">
                            Temukan, Ikuti, Publikasikan Event Kampus dengan Mudah & Cepat
                        </p>
                    </div>

                    <div className="md:w-1/2 relative flex justify-end">
                        <div className="w-full max-w-[550px] h-[380px] bg-green-100 rounded-[60px] overflow-hidden relative shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
                                alt="Students"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFO CARDS (Tiga Banner Tengah) */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-16 relative z-10">
                {/* Card 1: Publikasikan */}
                <div className="bg-[#00c853] p-10 rounded-[40px] text-white shadow-xl flex flex-col justify-between min-h-[220px]">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Publikasikan Event Kampusmu Sekarang!</h3>
                        <Link href="/event/upload">
                            <button className="bg-white text-[#00c853] px-8 py-3 rounded-2xl font-black hover:scale-105 transition shadow-md">
                                Upload Event
                            </button>
                        </Link>
                    </div>
                    <p className="mt-4 text-sm font-medium opacity-90">• Mudah & Gratis!</p>
                </div>
            </section>

            {/* 3. EVENT POPULER */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-black text-[#1a3a2a]">Event Populer</h2>
                    <Link href="/event" className="text-green-700 font-bold hover:underline flex items-center gap-2">
                        Lihat Semua Event <span className="text-xl">›</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-[35px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div
                                className={`${event.color} h-44 p-6 relative text-white flex flex-col justify-between`}
                            >
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] w-fit font-bold border border-white/20 uppercase">
                                    Offline
                                </span>
                                <h4 className="text-lg font-black leading-tight group-hover:scale-105 transition">
                                    {event.title}
                                </h4>
                            </div>
                            <div className="p-6">
                                <div className="space-y-3">
                                    <p className="text-sm font-bold text-gray-800">{event.date}</p>
                                    <p className="text-xs text-gray-500 font-medium italic">📍 {event.univ}</p>
                                </div>
                                <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-50">
                                    <span className="text-green-600 font-black text-lg">{event.price}</span>
                                    <Link href={`/event/${event.id}`}>
                                        <button className="bg-[#00a651] text-white px-6 py-2 rounded-xl text-xs font-black hover:bg-[#008d46] transition">
                                            Detail Event
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. FOOTER */}
            <footer className="bg-[#0b1b11] text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 pb-16 border-b border-white/5">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black italic tracking-tighter text-white">UNUHA Events</h2>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            Platform informasi event kampus untuk kemudahan akses info, pendaftaran, dan publikasi event
                            mahasiswa Universitas Nurul Huda.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-green-500 font-bold">
                            Navigasi
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-bold">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/event" className="hover:text-white transition">
                                    Event
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-green-500 font-bold">
                            Layanan
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-bold">
                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    Info Kampus
                                </Link>
                            </li>
                            <li>
                                <Link href="/event" className="hover:text-white transition">
                                    Upload Event
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-green-500 font-bold">
                            Kontak
                        </h4>
                        <p className="text-sm text-gray-400 font-bold">📧 unuha.ac.id</p>
                    </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-8">© 2024 Unuha Events. All rights reserved.</p>
            </footer>
        </main>
    );
}
