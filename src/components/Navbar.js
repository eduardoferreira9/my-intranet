'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const THEMES = ['light', 'dark', 'aqua', 'cupcake', 'retro']; // alguns temas daisyUI

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 hover:bg-base-200 shadow-sm px-4">
      {/* Left: Logo */}
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-base-content text-xl">daisyUI</a>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-base-content">
            <Link href="/">Item 1</Link>
          </li>
          <li tabIndex={0} className="text-base-content">
            <details>
              <summary>Item 2</summary>
              <ul className="p-2 bg-base-100">
                <li><Link href="/submenu1">Submenu 1</Link></li>
                <li><Link href="/submenu2">Submenu 2</Link></li>
              </ul>
            </details>
          </li>
          <li className="text-base-content">
            <Link href="/item3">Item 3</Link>
          </li>
        </ul>
      </div>

      {/* Right: Search, User Avatar and Theme Selector */}
      <div className="navbar-end flex items-center gap-4">
        {/* Theme Selector */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-base-content">
            {/* Ícone de paleta (tema) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707m15.556 0l-.707.707M4.222 4.222l-.707-.707M21 12h-1M4 12H3"
              />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36"
          >
            {THEMES.map((t) => (
              <li key={t}>
                <button
                  onClick={() => setTheme(t)}
                  className={t === theme ? 'font-bold text-base-content' : ''}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* User Avatar */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar cursor-pointer">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
