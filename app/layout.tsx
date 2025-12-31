import "./globals.css";
import Navbar from "./components/Navbar"; // Kita akan buat file ini

export const metadata = {
  title: "Unuha Events",
  description: "Platform Event Kampus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#F8FFF9]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}