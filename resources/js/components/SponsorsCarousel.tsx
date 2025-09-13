import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
type Sponsor = {
    id: number;
    name: string;
    logo: string;
    url: string;
    description: string;
}
// Composant pour le défilement horizontal des sponsors
const SponsorsCarousel = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Données simulées pour les sponsors (à remplacer par vos données réelles)
  useEffect(() => {
    // Simulation de chargement de données
    const fakeSponsors : Sponsor[] = [
      { id: 1, name: "Sponsor 1", logo: "/logo/logo-foundation.jpeg", url: "#", description: "Description du sponsor 1" },
      { id: 2, name: "Sponsor 2", logo: "/logo/logo-background.ico", url: "#", description: "Description du sponsor 2" },
      { id: 3, name: "Sponsor 3", logo: "/logo/logo.ico", url: "#", description: "Description du sponsor 3" },
      { id: 4, name: "Sponsor 4", logo: "/logo/logo-foundation.jpeg", url: "#", description: "Description du sponsor 4" },
      { id: 5, name: "Sponsor 5", logo: "/logo/logo-background.ico", url: "#", description: "Description du sponsor 5" },
      { id: 6, name: "Sponsor 6", logo: "/logo/logo.ico", url: "#", description: "Description du sponsor 6" },
      { id: 7, name: "Sponsor 7", logo: "/logo/logo-foundation.jpeg", url: "#", description: "Description du sponsor 7" },
      { id: 8, name: "Sponsor 8", logo: "/logo/logo-background.ico", url: "#", description: "Description du sponsor 8" },
    ];

    setSponsors(fakeSponsors);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            Nos Sponsors
          </h2>
          <div className="flex justify-center">
            <div className="animate-pulse h-8 w-32 bg-muted rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
          Nos Sponsors
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-horizontal space-x-8 py-4">
              {sponsors.concat(sponsors).map((sponsor, index) => (
                <Tooltip key={`${sponsor.id}-${index}`}>
                    <TooltipTrigger asChild>
                <a
                  key={`${sponsor.id}-${index}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-100 border border-border hover:border-primary/30"
                  style={{ minWidth: "180px", maxWidth: "180px", height: "100px" }}
                >
                    
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-100"
                  />
                </a>
                </TooltipTrigger>
                <TooltipContent side="right" align="center" className="bg-card text-foreground">
                    <p>{sponsor.description}</p>
                </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays pour un effet de dégradé aux extrémités */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8">
          Merci à tous nos partenaires pour leur soutien précieux
        </p>
      </div>
      
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SponsorsCarousel;