'use client'

import Link from 'next/link'

// 1. Centralização dos dados de eventos
const UPCOMING_EVENTS = [
    { date: '25 de Outubro', description: 'Reunião Geral - Resultados T4', link: '/reuniao-geral' },
    { date: '02 de Novembro', description: 'Feriado (Finados)', link: '/feriados' },
    { date: '10 de Novembro', description: 'Treinamento de Cibersegurança', link: '/treinamentos/ciber' },
];

export default function Calendar() {
    return (
<div className="card card-bordered bg-base-100 transition-all rounded-2xl shadow-sm h-full"> 
            <div className="card-body p-6 h-full flex flex-col"> 
                
                {/* Cabeçalhos */}
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-lg text-base-content font-semibold justify-end">Calendário</h2>
                </div>
                
                {/* Seu Componente de Calendário (Simulação de Widget) */}
                <div className="flex justify-center items-center mb-6 flex-grow">
                     {/* Mantenha seu código aqui. Se 'calendar-date' for um Web Component, ele será renderizado. */}
                     <calendar-date class="cally text-base-content">
                        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                        <calendar-month></calendar-month>
                    </calendar-date>
                </div>

                {/* Lista dos Próximos Eventos (Nova Feature) */}
                <div className="mt-4 shrink-0">
                    <h3 className="text-base font-semibold mb-2 text-base-content/80">Próximos Eventos</h3>
                    <ul className="space-y-3">
                        {UPCOMING_EVENTS.map((event, index) => (
                            <li key={index}>
                                <Link href={event.link} className="flex items-start gap-3 hover:text-primary transition-colors">
                                    <span className="text-xs font-bold w-1/4 text-primary shrink-0 pt-0.5">{event.date}</span>
                                    <span className="text-sm w-3/4 text-base-content/90">{event.description}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}