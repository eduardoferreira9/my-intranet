'use client'

import Link from 'next/link'

export default function KpiCard() {
  const kpis = [
    { label: 'Faturamento', value: 75, color: 'text-base-content' },
    { label: 'Novos Clientes', value: 92, color: 'text-base-content' },
    { label: 'Produção de máquinas', value: 64, color: 'text-base-content' },
  ];

  return (
    <div className="card card-bordered bg-base-100 hover:bg-base-200 transition-all rounded-2xl shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-lg mb-4 text-base-content justify-center">Metas e KPI</h2>
        <div className="space-y-4">
          {kpis.map((kpi, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-base-content">{kpi.label}</span>
                <span className={`text-sm font-semibold ${kpi.color}`}>{kpi.value}%</span>
              </div>
              <progress
                className={`progress progress-${kpi.color} w-full`}
                value={kpi.value}
                max={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
