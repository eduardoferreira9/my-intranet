'use client'

import Link from 'next/link'

export default function BirthdayCard() {
  const birthdays = [
    { name: 'Eduardo Santos', birthday: '11-10-2025' },
    { name: 'Carlos Montanari', birthday: '03-25-2025' },
  ];

  return (
    <div className="card bg-base-100 hover:bg-base-200 transition-all rounded-2xl shadow-sm">
      <div className="card-body p-0 flex flex-col">
        <h2 className="card-title justify-center text-base-content px-6 pt-6 pb-4">
          Aniversários do Mês
        </h2>
        <ul className="flex-grow flex flex-col overflow-y-auto px-6 pb-6 scrollbar-thin">
          {birthdays.length > 0 ? (
            birthdays.map((user, index) => (
              <li key={index} className="py-2 first:pt-0">
                <div className="font-medium text-base-content">{user.name}</div>
                <div className="text-sm uppercase font-semibold text-base-content/70">
                  {new Date(user.birthday).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                  })}
                </div>
              </li>
            ))
          ) : (
            <li className="text-center py-6 text-base-content/70">
              Nenhum aniversário este mês.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
