import React, { useState, useEffect } from "react";
import './Footer.css'; // Jika ada style khusus untuk footer

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date()); // Perbarui waktu setiap detik
        }, 1000);

        return () => clearInterval(timer); // Membersihkan interval saat komponen dilepas
    }, []);

    return (
        <footer className="footer">
            <p>© 2024 Portofolio Saya. Dibuat dengan sengaja oleh Arya Wibawa Atmanegara ft.AI.</p>
            <p>Waktu sekarang: {currentTime.toLocaleTimeString()}</p>
        </footer>
    );
};

export default Footer;
