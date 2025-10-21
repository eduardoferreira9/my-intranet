'use client'

import React, { useState } from 'react'

export default function AdminSidebar() {
    const [openDropdown, setOpenDropdown] = useState(null)
    const [expanded, setExpanded] = useState(false)

    const toggleDropdown = (menu) => {
        if (expanded) {
            setOpenDropdown(openDropdown === menu ? null : menu)
        }
    }

    return (
        <div className="flex">
            <nav
                className="
          bg-base-200
          h-screen
          w-15
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
                <ul className="menu p-2 w-full space-y-2">

                    {/* Usuários */}
                    <li>
                        <button className="flex items-center gap-3 px-2 py-2 rounded hover:bg-base-300 w-full">
                            {/* Ícone */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                                className="inline-block size-4 my-1.5 w-6 h-6"
                            >
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-[max-width] duration-300 ease-in-out">
                                Dashboard
                            </span>
                        </button>
                    </li>

                    {/* Dropdown Exemplo */}
                    <li>
                        <button
                            onClick={() => toggleDropdown('config')}
                            className="flex items-center justify-between gap-3 px-2 py-2 rounded hover:bg-base-300 w-full"
                        >
                            <span className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                    <path d="M6 20v-2c0-2 4-3 6-3s6 1 6 3v2" />
                                </svg>

                                <span className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-[max-width] duration-300 ease-in-out">
                                    Gerência
                                </span>
                            </span>

                            {/* Ícone seta */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'config' ? 'rotate-90' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Submenu */}
                        {openDropdown === 'config' && expanded && (
                            <ul className="pl-8 mt-1 space-y-1">
                                <li>
                                    <button className="flex items-center gap-3 px-2 py-1 rounded hover:bg-base-300 w-full text-sm">
                                        Usuários
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center gap-3 px-2 py-1 rounded hover:bg-base-300 w-full text-sm">
                                        Departamentos
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Outros itens */}
                    <li>
                        <button className="flex items-center gap-3 px-2 py-2 rounded hover:bg-base-300 w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                                className="inline-block size-4 my-1.5 w-6 h-6"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <line x1="10" y1="9" x2="8" y2="9" />
                            </svg>
                            <span className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-[max-width] duration-300 ease-in-out">
                                Publicações
                            </span>
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => toggleDropdown('tools')}
                            className="flex items-center justify-between gap-3 px-2 py-2 rounded hover:bg-base-300 w-full"
                        >
                            <span className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="inline-block size-4 my-1.5 w-6 h-6"
                                >
                                    <path d="M14.7 6.3a7 7 0 0 1 2 2l-5 5-2-2 5-5z" />
                                    <path d="M4.5 19.5a3 3 0 0 0 4.242-4.242L6 13" />
                                    <path d="M7.5 16.5l4.5 4.5" />
                                </svg>


                                <span className="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-[max-width] duration-300 ease-in-out">
                                    Ferramentas
                                </span>
                            </span>

                            {/* Ícone seta */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'config' ? 'rotate-90' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Submenu */}
                        {openDropdown === 'tools' && expanded && (
                            <ul className="pl-8 mt-1 space-y-1">
                                <li>
                                    <button className="flex items-center gap-3 px-2 py-1 rounded hover:bg-base-300 w-full text-sm">
                                        Faturas geradas
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}
