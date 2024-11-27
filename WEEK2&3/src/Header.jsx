import React from 'react';
import './Header.css'; // Jika ada style khusus untuk header

const Header = () => {
    return (
        <header className="header">
            <h1>Arya Wibawa Atmanegara</h1>
            <nav>
                <ul>
                    <li><a href="#about">Tentang</a></li>
                    <li><a href="#projects">Proyek</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
