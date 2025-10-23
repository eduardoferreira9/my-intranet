'use client'

import Link from 'next/link'

// 1. Centralização dos dados: Adicionando título e link para o conteúdo ser mais útil
const SLIDES_DATA = [
    { 
        id: 'item1', 
        title: 'Nova Política de RH', 
        description: 'Leia o novo regulamento interno de 2025 (obrigatório).',
        link: '/rh/politica-2025',
        src: 'https://placehold.co/600x400/222222/FFFFFF?text=Aviso+Geral', 
    },
    { 
        id: 'item2', 
        title: 'Confraternização Junina', 
        description: 'Confirme sua presença até o dia 15/05!',
        link: '/eventos/festa-junina',
        src: 'https://placehold.co/600x400/004488/FFFFFF?text=Evento+Destaque', 
    },
    { 
        id: 'item3', 
        title: 'Projeto de IA Vence Prêmio', 
        description: 'A equipe de Tecnologia é destaque mundial! Veja a matéria.',
        link: '/noticias/projeto-ia',
        src: 'https://placehold.co/600x400/6A0DAD/FFFFFF?text=Reconhecimento', 
    },
];

export default function Carousel() {
    return (
        // Garante que o carrossel preencha a altura do container h-96.
        <div className="flex flex-col items-center h-full relative"> 
            
            {/* ESTRUTURA DO CARROSSEL */}
            {/* h-full: Garante que ele ocupe 100% da altura do div pai (h-96) */}
            <div className="carousel w-full shadow-xl h-full rounded-2xl"> 
                {SLIDES_DATA.map((slide, index) => {
                    const prevIndex = (index === 0) ? SLIDES_DATA.length - 1 : index - 1;
                    const nextIndex = (index === SLIDES_DATA.length - 1) ? 0 : index + 1;
                    const prevId = SLIDES_DATA[prevIndex].id;
                    const nextId = SLIDES_DATA[nextIndex].id;

                    return (
                        // h-full para o item do carrossel preencher a altura total
                        <div key={slide.id} id={slide.id} className="carousel-item relative w-full h-full">
                            
                            {/* Imagem (ou background) - h-full para a imagem preencher o espaço vertical */}
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="w-full h-full object-cover" 
                            />
                            
                            {/* AJUSTE PRINCIPAL: justify-end move o conteúdo para o canto inferior */}
                            {/* p-6 ou p-8 para garantir um bom espaçamento interno */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start p-6 md:p-8 text-white">
                                
                                {/* Aumentamos o tamanho do título para preencher o espaço horizontal */}
                                <h3 className="text-xl md:text-2xl font-bold mb-1">{slide.title}</h3>
                                
                                <p className="text-sm md:text-base mb-3 opacity-90 max-w-lg">{slide.description}</p>
                                
                                <Link href={slide.link} className="btn btn-primary btn-sm md:btn-md w-fit">
                                    Ver Detalhes
                                </Link>
                            </div>

                            {/* Controles de Navegação Lateral (Setas) */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                                <a 
                                    href={`#${prevId}`} 
                                    className="btn btn-circle btn-primary/70 text-white hover:btn-primary" 
                                    aria-label="Slide anterior"
                                >
                                    ❮
                                </a>
                                <a 
                                    href={`#${nextId}`} 
                                    className="btn btn-circle btn-primary/70 text-white hover:btn-primary" 
                                    aria-label="Próximo slide"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Os Dots de navegação foram removidos para compactação */}

        </div>
    );
}