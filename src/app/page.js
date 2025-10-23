'use client';

import Carousel from '../components/Carousel';
import Calendar from '../components/CalendarCard';
import BirthdayCard from '../components/BirthdayCard';
import KpiCard from '../components/KpiCard';

import React from 'react';

export default function Home() {

  return (
    // Reduz o padding vertical para otimizar espaço
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-15"> 
      
      {/* Container principal com espaçamento reduzido */}
      <div className="flex flex-col gap-4"> 
        
        {/* === LAYOUT SUPERIOR (Carrossel 2/3 + Calendário 1/3) === */}
        {/* Remove o min-h e deixa os componentes internos definirem a altura */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
            
            {/* Carrossel: Ocupa 2/3 do espaço. Adiciona a altura fixa h-96 */}
            <div className="lg:col-span-2 h-96"> 
                <Carousel /> 
            </div>

            {/* Calendário: Ocupa 1/3 do espaço. Adiciona a altura fixa h-96 */}
            <div className="lg:col-span-1 h-96"> 
                <Calendar /> 
            </div>
            
        </div>
        
        {/* === LAYOUT INFERIOR (Aniversário 1/2 + KPI 1/2) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          
          {/* O BirthdayCard (Aniversário) precisa ser compacto para funcionar bem aqui */}
          <BirthdayCard />

          {/* O KpiCard (Metas e KPI) precisa ser compacto para funcionar bem aqui */}
          <KpiCard />
        </div>
        
      </div>
    </div>
  );
}