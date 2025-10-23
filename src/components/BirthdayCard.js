'use client'

import Link from 'next/link'

// Exemplo de como eu ajustaria o BirthdayCard.js
const BIRTHDAYS_DATA = [
    { name: 'Eduardo Santos', date: '10 de Novembro', avatar: '/avatar-eduardo.jpg' },
    { name: 'Carlos Montanari', date: '25 de Março', avatar: '/avatar-carlos.jpg' },
    // Adicionar mais dados aqui para preencher o espaço
    { name: 'Aline Ferreira', date: '01 de Dezembro', avatar: '/avatar-aline.jpg' },
    { name: 'Pedro Alves', date: '15 de Janeiro', avatar: '/avatar-pedro.jpg' },
];

export default function BirthdayCard() {
    return (
        <div className="card card-bordered bg-base-100 transition-all hover:bg-base-200 rounded-2xl shadow-sm">
            <div className="card-body p-6">
                <h2 className="card-title text-lg text-base-content justify-between mb-4">
                    Aniversários do Mês
                </h2>
                
                <div className="space-y-3">
                    {BIRTHDAYS_DATA.map((person, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Avatar (Nova Feature) */}
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={person.avatar} alt={person.name} />
                                    </div>
                                </div>
                                {/* Nome e Data */}
                                <div>
                                    <p className="text-sm text-base-content font-semibold">{person.name}</p>
                                    <p className="text-xs text-base-content/70">{person.date}</p>
                                </div>
                            </div>
                            
                            {/* Botão de Ação */}
                            <button className="btn btn-ghost btn-xs text-primary/80 hover:text-primary">
                                Parabéns!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}