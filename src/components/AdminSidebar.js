'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Para destacar o link ativo

// --- Dados de Navegação do Painel TI ---
const SIDEBAR_ITEMS = [
    { name: 'Dashboard', href: '/admin', icon: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' }, // Ícone Home
    { 
        name: 'Gerência', 
        icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-2c0-2 4-3 6-3s6 1 6 3v2', // Ícone Usuário/Pessoa
        dropdownKey: 'gerencia',
        submenu: [
            { name: 'Usuários', href: '/admin/gerencia/users' },
            { name: 'Departamentos', href: '/admin/gerencia/departments' },
        ]
    },
    { name: 'Publicações', href: '/admin/publications', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }, // Ícone Arquivo
    { 
        name: 'Ferramentas', 
        icon: 'M14.7 6.3a7 7 0 0 1 2 2l-5 5-2-2 5-5zM4.5 19.5a3 3 0 0 0 4.242-4.242L6 13M7.5 16.5l4.5 4.5', // Ícone Ferramenta/Chave
        dropdownKey: 'tools',
        submenu: [
            { name: 'Faturas geradas', href: '/admin/tools/invoices' },
            { name: 'Logs do Sistema', href: '/admin/tools/logs' },
        ]
    },
];

// O link base para todas as rotas do painel é '/admin'
const TI_BASE_PATH = '/admin';

// Componente para renderizar o ícone SVG com path
const SVGIcon = ({ d }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
        className="inline-block size-4 my-1.5 w-6 h-6 shrink-0"
    >
        {d.split('|').map((pathD, index) => (
            <path key={index} d={pathD} />
        ))}
    </svg>
);


export default function AdminSidebar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    const toggleDropdown = (menuKey) => {
        // Dropdown só funciona se a sidebar estiver expandida
        if (expanded) {
            setOpenDropdown(openDropdown === menuKey ? null : menuKey);
        }
    }
    
    // Função para checar se o link está ativo ou se a sub-rota está ativa
    const getIsActive = (href, dropdownKey) => {
        if (href) {
            // Verifica se a rota atual é exatamente o link
            return pathname === href;
        } else if (dropdownKey) {
            // Verifica se qualquer sub-rota do dropdown está ativa
            const menu = SIDEBAR_ITEMS.find(item => item.dropdownKey === dropdownKey);
            return menu.submenu.some(subItem => pathname.startsWith(subItem.href));
        }
        return false;
    };
    
    // Define se o link principal deve ser destacado (se for a rota exata OU se for a rota base e nenhum submenu estiver ativo)
    const isLinkActive = (href) => {
        if (href === TI_BASE_PATH) {
            // Dashboard está ativo se for exatamente /admin
            return pathname === TI_BASE_PATH; 
        }
        // Para links sem dropdown: ativo se a rota começar com o href
        return pathname.startsWith(href)
    }

    return (
        <div className="flex">
            <nav
                className="
                    bg-base-200
                    h-screen
                    w-16                     /* Ajustei de w-15 para w-16 (padrão de tamanho em tailwind) */
                    hover:w-64
                    transition-[width]
                    duration-300
                    ease-in-out
                    flex
                    flex-col
                    items-start
                    overflow-hidden
                    relative
                    group
                "
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => {
                    setExpanded(false)
                    setOpenDropdown(null) // Fecha dropdown quando minimiza
                }}
            >
                <div className="p-4 w-full h-20 flex items-center justify-start border-b border-base-content/10">
                    <h1 className={`font-extrabold text-xl text-primary whitespace-nowrap ${expanded ? '' : 'hidden'}`}>Painel TI</h1>
                    {!expanded && (
                         <span className="text-xl font-extrabold text-primary w-full text-center">TI</span>
                    )}
                </div>

                <ul className="menu p-2 w-full space-y-1 flex-1">
                    
                    {SIDEBAR_ITEMS.map((item, index) => {
                        const hasDropdown = !!item.submenu;
                        
                        // Determina se o item (principal ou de dropdown) está ativo para destacar
                        const isActive = hasDropdown 
                            ? getIsActive(null, item.dropdownKey) 
                            : isLinkActive(item.href);

                        const activeClass = isActive 
                            ? 'bg-primary text-primary-content hover:bg-primary/90' 
                            : 'hover:bg-base-300';

                        // 1. Item Simples (Link)
                        if (!hasDropdown) {
                            return (
                                <li key={item.href} className="w-full">
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center gap-3 px-2 py-2 rounded w-full ${activeClass}`}
                                    >
                                        <SVGIcon d={item.icon} />
                                        <span className={`
                                            font-medium
                                            whitespace-nowrap 
                                            transition-opacity duration-300
                                            ${expanded ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 pointer-events-none'}
                                        `}>
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        }
                        
                        // 2. Item com Dropdown (Botão)
                        return (
                            <li key={item.dropdownKey} className="w-full">
                                <button
                                    onClick={() => toggleDropdown(item.dropdownKey)}
                                    className={`flex items-center justify-between gap-3 px-2 py-2 rounded w-full ${activeClass}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <SVGIcon d={item.icon} />
                                        <span className={`
                                            font-medium
                                            whitespace-nowrap 
                                            transition-opacity duration-300
                                            ${expanded ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 pointer-events-none'}
                                        `}>
                                            {item.name}
                                        </span>
                                    </span>

                                    {/* Ícone seta (só aparece quando expandido) */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.dropdownKey ? 'rotate-90' : ''} ${expanded ? 'opacity-100' : 'opacity-0'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Submenu */}
                                {/* Renderiza SOMENTE se o dropdown estiver aberto E a sidebar estiver expandida */}
                                {openDropdown === item.dropdownKey && expanded && (
                                    <ul className="pl-8 mt-1 space-y-1">
                                        {item.submenu.map(subItem => {
                                            const isSubActive = pathname === subItem.href;
                                            const subActiveClass = isSubActive ? 'font-bold' : '';

                                            return (
                                                <li key={subItem.href}>
                                                    <Link 
                                                        href={subItem.href} 
                                                        className={`flex items-center gap-3 px-2 py-1 rounded hover:bg-base-300 w-full text-sm ${subActiveClass}`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}