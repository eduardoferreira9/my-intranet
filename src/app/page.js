'use client';

import Carousel from '../components/Carousel';
import Calendar from '../components/CalendarCard';
import BirthdayCard from '../components/BirthdayCard';
import KpiCard from '../components/KpiCard';

import React from 'react';

export default function Home() {

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col gap-6">
        {/* Carrossel */}
        <Carousel />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Aniversários */}
          <BirthdayCard />

          {/* Calendário (placeholder) */}
          <Calendar />

          {/* Metas e KPI */}
          <KpiCard />
        </div>
      </div>
    </div>
  );
}
