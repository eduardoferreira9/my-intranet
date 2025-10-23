'use client'

import Link from 'next/link'

export default function KpiCard() {
    // Função para determinar a cor do progresso baseado no valor
    const getProgressColor = (value) => {
        if (value >= 90) return 'success'; // Verde: Meta quase atingida ou superada
        if (value >= 60) return 'warning'; // Amarelo: Progresso OK, mas precisa de atenção
        return 'error'; // Vermelho: Alerta, baixo progresso
    };
    
    // 1. Centralização dos dados com a Meta Real
    const kpis = [
        { label: 'Faturamento (Mensal)', value: 75, target: 'R$ 1.5M', link: '/financeiro/faturamento' },
        { label: 'Novos Clientes', value: 92, target: '120 Clientes', link: '/comercial/clientes' },
        { label: 'Produção de Máquinas', value: 38, target: '80 Máquinas', link: '/producao/dashboard' }, 
    ];

    return (
        // O card inteiro é clicável para ir ao Dashboard de KPIs (UX)
        <Link href="/dashboard" className="card card-bordered bg-base-100 hover:bg-base-200 transition-all rounded-2xl shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-lg text-base-content justify-start">Metas e KPI</h2>
                <div>
                    {kpis.map((kpi, index) => {
                        const progressColor = getProgressColor(kpi.value);

                        return (
                            // Use um link interno para o KPI específico (substitua por <div> se preferir não clicar)
                            <Link href={kpi.link} key={index} className="block hover:bg-base-300/50 rounded-lg transition-colors">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm text-base-content font-medium">{kpi.label}</span>
                                    {/* Exibe o Percentual e a Meta */}
                                    <div className="text-right">
                                        <span className={`text-lg font-bold text-${progressColor}`}>{kpi.value}%</span>
                                        <p className="text-xs text-base-content/70">Meta: {kpi.target}</p>
                                    </div>
                                </div>
                                <progress
                                    className={`progress progress-${progressColor} w-full`} // h-2 para ser mais visível
                                    value={kpi.value}
                                    max={100}
                                    aria-label={`Progresso de ${kpi.label}: ${kpi.value}%`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
}