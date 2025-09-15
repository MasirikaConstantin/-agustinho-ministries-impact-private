import useFancybox from '@/hooks/useFancybox';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [fancyboxRef] = useFancybox();

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Présentation */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Construction d'un <span className="text-gradient">Centre de centé et une école</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Nous sommes fiers d'annoncer le lancement d'un projet ambitieux : la construction 
                d'une école moderne et d'un centre hospitalier de pointe au cœur de notre communauté.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Ce projet combiné offrira des infrastructures éducatives de qualité et des soins 
                médicaux accessibles à tous, créant ainsi un environnement complet pour le 
                développement de notre société.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/gallery/ecole"
                  className="bg-primary hover:bg-gold-dark text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-smooth shadow-gold hover:shadow-glow"
                >
                  Voir le Projet
                </Link>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-primary text-primary font-semibold py-3 px-8 rounded-lg transition-smooth hover:bg-primary hover:text-primary-foreground"
                >
                  Voir la Vidéo
                </button>
              </div>
            </div>

            {/* Statistiques ou points clés */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-card rounded-lg shadow-lg transition-smooth hover:shadow-gold">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Élèves Capacité</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg transition-smooth hover:shadow-gold">
                <div className="text-3xl font-bold text-primary mb-2">24+</div>
                <div className="text-muted-foreground">Lits Hospitaliers</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg transition-smooth hover:shadow-gold">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">Chambres </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Vidéo */}
          <div className="relative" ref={fancyboxRef}>
            <div className="bg-card rounded-2xl p-8 shadow-2xl transition-smooth hover:shadow-glow">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Présentation du Projet
              </h2>
              
              <a
                href="storage/ecole/videos/1.mp4"
                data-fancybox="video-gallery"
                data-caption="Présentation du projet de construction"
                className="block relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="storage/ecole/presentation.png"
                    alt="Présentation vidéo du projet"
                    className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
                  />
                  
                  
                </div>
              </a>

              <p className="text-center text-muted-foreground mt-4">
                Cliquez pour visionner la présentation complète du projet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video (simplifié) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Présentation du Projet</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-w-8 aspect-h-3 dark:bg-gray-700 rounded-lg">
              <iframe
                src="/storage/ecole/videos/1.mp4"
                title="Présentation du projet"
                className="w-full h-96 rounded-lg bg-black "
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;