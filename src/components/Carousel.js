'use client'

import Link from 'next/link'

// 1. Centralização dos dados
const SLIDES_DATA = [
    { id: 'item1', src: 'https://placehold.co/600x400', alt: 'Imagem 1' },
    { id: 'item2', src: 'https://placehold.co/600x400', alt: 'Imagem 2' },
    { id: 'item3', src: 'https://placehold.co/600x400', alt: 'Imagem 3' },
    { id: 'item4', src: 'https://placehold.co/600x400', alt: 'Imagem 4' },
];

export default function Carousel() {
    return (
        // O container principal não precisa de padding lateral se ele for envolto em um container na página
        <div className="flex flex-col items-center">
            
            {/* ESTRUTURA DO CARROSSEL */}
            {/* h-96 define a altura para evitar que fique muito pequeno/grande */}
            <div className="carousel w-full shadow-xl h-80"> 
                {SLIDES_DATA.map((slide, index) => {
                    const prevIndex = (index === 0) ? SLIDES_DATA.length - 1 : index - 1;
                    const nextIndex = (index === SLIDES_DATA.length - 1) ? 0 : index + 1;
                    const prevId = SLIDES_DATA[prevIndex].id;
                    const nextId = SLIDES_DATA[nextIndex].id;

                    return (
                        <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                // Garante que a imagem preencha a altura
                                className="w-full h-full object-cover rounded-box" 
                            />
                            
                            {/* Controles de Navegação Lateral (Setas) */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                                <a 
                                    href={`#${prevId}`} 
                                    className="btn btn-circle btn-ghost btn-lg md:btn-md bg-base-100/30 text-base-content/80 hover:bg-base-100/70"
                                >
                                    ❮
                                </a>
                                <a 
                                    href={`#${nextId}`} 
                                    className="btn btn-circle btn-ghost btn-lg md:btn-md bg-base-100/30 text-base-content/80 hover:bg-base-100/70"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* 🚨 SUBSTITUIÇÃO: CONTROLES INFERIORES COM BOLINHAS (DOTS) 🚨 */}
            <div className="flex w-full justify-center gap-2 py-4">
                {SLIDES_DATA.map((slide, index) => (
                    <a
                        key={`dot-${slide.id}`}
                        href={`#${slide.id}`}
                        className="w-3 h-3 rounded-full bg-base-content/30 hover:bg-primary transition-colors duration-300"
                        aria-label={`Ir para slide ${index + 1}`}
                    >
                    </a>
                ))}
            </div>

        </div>
    );
}