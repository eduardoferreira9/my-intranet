// components/Navbar.js
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import UserMenu from './Navbar/UserMenu';    // Componente auxiliar
import ThemeSelector from './Navbar/ThemeSelector'; // Componente auxiliar

// --- Dados de Navegação da Intranet ---
const NAV_LINKS = [
    { name: 'Página Inicial', href: '/' },
    {
        name: 'Departamentos',
        dropdown: [
            { name: 'Recursos humanos', href: '/rh' },
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

            {/* Left: Logo and Mobile Menu (Dropdown/Hamburger) */}
            <div className="navbar-start">

                {/* 1. Mobile Menu (Dropdown/Hamburger) - Visível apenas em telas pequenas */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* Ícone de Hamburguer (ex: DaisyUI ou Heroicons) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Reutilize o loop de links aqui */}
                        {NAV_LINKS.map((item, index) => (
                            <li key={`mobile-${index}`}>
                                {item.dropdown ? (
                                    <details>
                                        {/* AJUSTE MOBILE: Adiciona hover:font-semibold ao summary */}
                                        <summary className="font-normal hover:font-semibold transition-all duration-100">{item.name}</summary>
                                        <ul className="p-2 bg-base-200">
                                            {item.dropdown.map((subItem) => (
                                                <li key={subItem.href}>
                                                    {/* AJUSTE MOBILE: Adiciona hover:font-semibold ao Link */}
                                                    <Link href={subItem.href} className="font-normal hover:font-semibold transition-all duration-100">{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    // AJUSTE MOBILE: Adiciona hover:font-semibold ao Link
                                    <Link href={item.href} className="font-normal hover:font-semibold transition-all duration-100">{item.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Logo */}
                <Link href="/" className="btn btn-ghost normal-case text-base-content text-xl font-extrabold">
                    IntraMemo
                </Link>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                {/* 3. AJUSTE DESKTOP: Adiciona font-normal à lista para definir o estado inicial */}
                <ul className="menu menu-horizontal p-0 font-normal">
                    {NAV_LINKS.map((item, index) => (
                        <li key={index} tabIndex={item.dropdown ? 0 : -1} className="text-base-content hover:bg-base-200">
                            {item.dropdown ? (
                                <details>
                                    {/* AJUSTE DESKTOP: Adiciona hover:font-semibold ao summary */}
                                    <summary className="font-medium hover:font-bold transition-all duration-100">{item.name}</summary>
                                    <ul className="text-base-content p-2 shadow-md min-w-[12rem] z-[1]">
                                        {item.dropdown.map((subItem) => (
                                            <li key={subItem.href}>
                                                {/* AJUSTE DESKTOP: Adiciona hover:font-semibold ao Link */}
                                                <Link href={subItem.href} className="font-medium hover:font-bold transition-all duration-100">{subItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                // AJUSTE DESKTOP: Adiciona hover:font-semibold ao Link
                                <Link href={item.href} className="font-medium hover:font-bold transition-all duration-100">{item.name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* End: Theme Selector and User Menu */}
            <div className="navbar-end flex items-center gap-2">
                <ThemeSelector currentTheme={theme} themes={THEMES} onThemeChange={handleThemeChange} />
                <UserMenu />
            </div>
        </div>
    );
}