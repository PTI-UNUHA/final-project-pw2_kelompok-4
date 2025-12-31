import Link from 'next/link';

export default function EventPage() {
  const cards = [
    { id: "1", title: "Workshop 1: Digital Marketing", date: "23 Mei 2024", univ: "Universitas Nurul Huda", price: "Offline", color: "bg-green-600" },
    { id: "2", title: "Webinar 2: Startup Mahasiswa", date: "30 Mei 2024", univ: "Online", price: "Online", color: "bg-teal-600" },
    { id: "3", title: "Seminar Kewirausahaan", date: "5 Juni 2024", univ: "Universitas Nurul Huda", price: "Offline", color: "bg-green-800" },
    { id: "4", title: "Talkshow Karir Sukses", date: "20 Jun 2024", univ: "Online", price: "Online", color: "bg-emerald-600" },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      {/* ... Bagian Banner Tetap Sama ... */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`${item.color} h-40 p-4 relative`}>
               <span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md">Offline</span>
               <div className="absolute bottom-4 left-4 text-white font-bold leading-tight">{item.title}</div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              <p className="text-[10px] text-gray-400 mt-2">📍 {item.univ}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold text-sm">{item.price}</span>
                
                {/* TOMBOL NAVIGASI DISINI */}
                <Link href={`/event/${item.id}`}>
                  <button className="bg-[#00843D] text-white text-[10px] px-3 py-1.5 rounded-lg hover:bg-green-800 transition">
                    Detail Event
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}