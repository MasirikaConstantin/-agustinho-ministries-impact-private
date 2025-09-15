import ClientLayout from '@/layouts/ClientLayout';
import React from 'react';
import useFancybox from '../../hooks/useFancybox';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  caption: string;
}

const GalleryPage: React.FC = () => {
  const [fancyboxRef] = useFancybox({
    infinite: true,
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },
  });

  const mediaItems: MediaItem[] = [
    {
      type: 'image',
      src: '/storage/ecole/14.jpeg',
      thumbnail: '/storage/ecole/14.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/1.jpeg',
      thumbnail: '/storage/ecole/1.jpeg',
      caption: 'Début des travaux de fondation'
    },
    {
      type: 'image',
      src: '/storage/ecole/2.PNG',
      thumbnail: '/storage/ecole/2.PNG',
      caption: 'Structure de l\'école en construction'
    },
    {
      type: 'image',
      src: '/storage/ecole/10.jpeg',
      thumbnail: '/storage/ecole/10.jpeg',
      caption: 'Structure de l\'école en construction'
    },
    {
      type: 'video',
      src: '/storage/ecole/videos/1.mp4',
      thumbnail: '/storage/ecole/3.PNG',
      caption: 'Tour de chantier - Semaine 1'
    },
    {
      type: 'image',
      src: '/storage/ecole/4.PNG',
      thumbnail: '/storage/ecole/4.PNG',
      caption: 'Installation des équipements médicaux'
    },
    {
      type: 'video',
      src: '/storage/ecole/videos/4.mp4',
      thumbnail: '/storage/ecole/5.PNG',
      caption: 'Remerciements des bénéficiaires'
    },
    {
      type: 'image',
      src: '/storage/ecole/6.PNG',
      thumbnail: '/storage/ecole/6.PNG',
      caption: 'Façade du centre hospitalier'
    },
    {
      type: 'image',
      src: '/storage/ecole/7.PNG',
      thumbnail: '/storage/ecole/7.PNG',
      caption: 'Début des travaux '
    },
    {
      type: 'video',
      src: '/storage/ecole/videos/5.mp4',
      thumbnail: '/storage/ecole/8.PNG',
      caption: 'Remerciements des bénéficiaires'
    },
    {
      type: 'image',
      src: '/storage/ecole/9.PNG',
      thumbnail: '/storage/ecole/9.PNG',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/12.jpeg',
      thumbnail: '/storage/ecole/12.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'video',
      src: '/storage/ecole/videos/6.mp4',
      thumbnail: '/storage/ecole/11.PNG',
      caption: 'Remerciements des bénéficiaires'
    },
    {
      type: 'image',
      src: '/storage/ecole/15.jpeg',
      thumbnail: '/storage/ecole/15.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/16.jpeg',
      thumbnail: '/storage/ecole/16.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/17.jpeg',
      thumbnail: '/storage/ecole/17.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/18.jpeg',
      thumbnail: '/storage/ecole/18.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/19.jpeg',
      thumbnail: '/storage/ecole/19.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/20.jpeg',
      thumbnail: '/storage/ecole/20.jpeg',
      caption: 'Début des travaux '
    },
    {
      type: 'image',
      src: '/storage/ecole/21.jpeg',
      thumbnail: '/storage/ecole/21.jpeg',
      caption: 'Début des travaux '
    }
    
  ];

  return (
    <ClientLayout>
    <div className="py-20 bg-gradient-secondary mt-16">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galerie du <span className="text-gradient">Projet</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'avancement de nos travaux à travers cette galerie photos et vidéos
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Nous sommes fiers d'annoncer le lancement d'un projet ambitieux : la construction 
                d'une école moderne et d'un centre hospitalier de pointe au cœur de notre communauté.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Ce projet combiné offrira des infrastructures éducatives de qualité et des soins 
                médicaux accessibles à tous, créant ainsi un environnement complet pour le 
                développement de notre société.
              </p>


              
        </div>

        {/* Galerie */}
        <div ref={fancyboxRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mediaItems.map((item, index) => (
              <div key={index} className="group relative">
                {item.type === 'image' ? (
                  <a
                    data-src={item.src}
                    data-fancybox
                    data-caption={item.caption}
                    className="block overflow-hidden rounded-lg shadow-lg transition-smooth group-hover:shadow-gold"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.caption}
                      className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                    />
                   
                  </a>
                ) : (
                  <a
                      href={item.src}
                      data-fancybox="video-gallery"
                      data-caption={item.caption}
                      className="block overflow-hidden rounded-lg shadow-lg transition-smooth hover:shadow-gold relative group"
                    >
                      
                      
                      {/* Overlay léger avec l'icône de lecture */}
                      <div className="absolute inset-0 bg-primary bg-opacity-100 group-hover:bg-opacity-100 flex items-center justify-center transition-smooth">
                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-smooth group-hover:scale-110 shadow-lg">
                          <svg className="w-6 h-6 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>{/* Image de base */}
                      <img
                        src={item.thumbnail}
                        alt={item.caption}
                        className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                      />
                      
                      {/* Caption qui apparaît au hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-smooth">
                        <p className="text-sm font-medium text-white">{item.caption}</p>
                      </div>
                    </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-12">
        <div className="text-center p-6 bg-card rounded-lg shadow-lg transition-smooth hover:shadow-gold">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Salles de classe </div>
              </div>
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
        {/* Statistiques de progression */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Avancement du Projet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">65%</div>
              <div className="text-muted-foreground">École Terminée</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Hôpital Terminé</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Mois de Travaux</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ClientLayout>
  );
};

export default GalleryPage;