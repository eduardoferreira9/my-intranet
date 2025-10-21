// components/Navbar/UserMenu.js
import React from 'react';
import Link from 'next/link';

export default function UserMenu() {
    // Dados do menu de usuário
    const menuItems = [
        { name: 'Administração', href: '/admin' },
        { name: 'Meu Perfil', href: '/profile' },
        { name: 'Configurações', href: '/settings' },
        { name: 'Sair', href: '/auth/logout' }, // Rota de logout
    ];

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar cursor-pointer">
                {/* Avatar simples com anel */}
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                        alt="User avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52 z-[1]"
            >
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className={item.name === 'Sair' ? 'text-error font-semibold' : 'text-base-content'}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}