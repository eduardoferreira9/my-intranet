// components/Navbar.js
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserMenu from './Navbar/UserMenu';    // Componente auxiliar
import ThemeSelector from './Navbar/ThemeSelector'; // Componente auxiliar

// --- Dados de Navegação da Intranet ---
const NAV_LINKS = [
    { name: 'Página Inicial', href: '/' },
    { 
        name: 'Departamentos', 
        dropdown: [
            { name: 'Recrusos humanos', href: '/rh' },
            { name: 'Financeiro', href: '/financeiro' },
            { name: 'Tecnologia', href: '/suporte' },
        ]
    },
];

export default function Navbar() {
    // Lista completa dos temas (adicionando alguns populares)
    const THEMES = ['light', 'dark', 'valentine', 'caramellatte'];
    const [theme, setTheme] = useState('caramellatte');

    // Efeito para aplicar o tema ao elemento <html>
    useEffect(() => {
        // Tenta carregar o tema salvo no localStorage na montagem inicial
        const savedTheme = localStorage.getItem('app-theme') || 'caramellatte';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('app-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="navbar bg-base-100 shadow-lg px-4 sticky top-0 z-40 border-b border-base-content/10">
            {/* Left: Logo */}
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost normal-case text-base-content text-xl font-extrabold">
                     Intranet
                </Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-normal">
                    {NAV_LINKS.map((item, index) => (
                        <li key={index} tabIndex={item.dropdown ? 0 : -1} className="text-base-content hover:bg-base-200 rounded-lg transition-colors">
                            {item.dropdown ? (
                                <details>
                                    <summary>{item.name}</summary>
                                    <ul className="p-2 bg-base-100 shadow-md min-w-[12rem] z-[1]">
                                        {item.dropdown.map((subItem) => (
                                            <li key={subItem.href}>
                                                <Link href={subItem.href}>{subItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link href={item.href}>{item.name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* End: Theme Selector */}
           <div className="navbar-end flex items-center gap-2">
                <ThemeSelector currentTheme={theme} themes={THEMES} onThemeChange={handleThemeChange} />
                <UserMenu />
            </div>
        </div>
    );
}