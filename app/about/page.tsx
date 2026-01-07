"use client";
import Image from "next/image";
import HeaderSection from "../components/header-section";
import {IoEyeOffOutline, IoLocateOutline} from "react-icons/io5";

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="  Tentang Kami" subTitle="  Satu Platform Semua Event Kampus Universitas Nurul Huda " />
            <div className="max-w-full mx-auto py-20 px-4 ">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/kampus.jpg" alt="about image" width={650} height={579} />
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Mengapa Harus Kami?</h1>
                        <p className="text-gray-700 py-5 ">
                            Kami hadir sebagai institusi pendidikan yang berkomitmen mencetak generasi unggul secara
                            intelektual, spiritual, dan sosial. Dengan lingkungan belajar yang kondusif, tenaga pendidik
                            profesional, serta tata kelola kelembagaan yang berorientasi mutu, kami menjadi ruang tumbuh
                            bagi peserta didik untuk mengembangkan potensi secara optimal dan berkelanjutan.
                        </p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoEyeOffOutline className="size-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Visi :</h4>
                                    <p className="text-gray-600">
                                        Menjadi lembaga pendidikan yang berdaya saing, berkarakter, dan berlandaskan
                                        nilai-nilai keilmuan serta moralitas, guna melahirkan insan akademik yang
                                        adaptif terhadap perkembangan zaman.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                                    <p className="text-gray-600">
                                        Menyelenggarakan pendidikan dan pembelajaran yang bermutu, inovatif, dan
                                        relevan dengan kebutuhan masyarakat; membina karakter peserta didik melalui
                                        penguatan nilai keagamaan dan kebangsaan; serta mendorong terciptanya budaya
                                        akademik yang kritis, kolaboratif, dan berintegritas.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
