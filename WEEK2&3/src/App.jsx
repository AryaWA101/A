import React, { useState, useEffect } from "react";
import './App.css'; // CSS utama aplikasi
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        // Tambahkan atau hapus kelas di elemen body berdasarkan mode
        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    }, [isDarkMode]);
    return (
        <div className="app">
            <Header />
            <main>
                <MainContent />
                <button onClick={toggleTheme}>
                    {isDarkMode ? "Ubah ke Mode Terang" : "Ubah ke Mode Gelap"}
                </button>
            </main>               
            <Footer />
        </div>
    );
};

export default App;
