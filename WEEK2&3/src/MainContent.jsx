import React, { useState } from "react";
import "./MainContent.css";
import FotoMuka from "./assets/fotomuka.png";
const MainContent = () => {
    const [darkMode, setDarkMode] = useState(false); // State untuk mode gelap

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Beralih antara mode terang dan gelap
    };

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <section>
                <h2>Tentang Saya</h2>

                <img 
                  src={FotoMuka} 
                  alt="Foto Profil" 
                  style={{ width: "200px", margin: "20px 0" }} 
                />

                <p>Saya adalah seorang mahasiswa yang saat ini sedang menempuh pendidikan S1. Saya memiliki minat pada bidang programming. Oleh karena itu, saya saat ini sedang meningkatkan skill dan kapasitas saya agar skill dan kapasitas yang sebelumnya sebesar butiran debu dapat membesar menjadi butiran debu yang lebih besar ;).</p>
            </section>

            <section>
                <h2>Proyek Saya</h2>
                <p>Saat ini saya sedang berusaha membuat beberapa proyek bersama tim maupun secara individu untuk menyelesaikan tugas pada beberapa mata kuliah, kegiatan di perkuliahan, maupun untuk pribadi.</p>
                <ul>
                    <li>Proyek 1 - Website ini (bila website kecil rapuh apa adanya ini dihitung)</li> 
                    <li>Proyek 2 - Coming soon</li>
                </ul>
            </section>

            <section>
                <h2>Kontak</h2>
                <p>Email: <a href="mailto:arya.wibawa@office.ui.ac.id">arya.wibawa@office.ui.ac.id</a></p>
            </section>

            
            <button onClick={toggleDarkMode}>
                {darkMode ? "Ubah ke Mode Terang" : "Ubah ke Mode Gelap"}
            </button>
        </div>
    );
};

export default MainContent;
