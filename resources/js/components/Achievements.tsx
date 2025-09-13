import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Trophy, 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Footer from "./Footer";

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      title: "150+ Femmes Formées",
      description: "Formation en coupe-couture et esthétique",
      details: "Nos programmes d'autonomisation ont permis à plus de 150 femmes d'acquérir des compétences professionnelles et de lancer leurs propres entreprises.",
      impact: "85% des participantes ont créé leur propre activité génératrice de revenus",
      year: "2023-2024"
    },
    {
      icon: GraduationCap,
      title: "5 Centres de Formation",
      description: "Équipement et formation professionnelle",
      details: "Mise en place de centres de formation moderne équipés pour offrir des formations de qualité dans différents métiers d'avenir.",
      impact: "500+ jeunes bénéficiaires par an",
      year: "2022-2024"
    },
    {
      icon: Building2,
      title: "3 Écoles Construites",
      description: "Infrastructure éducative moderne",
      details: "Construction d'écoles modernes dans des zones rurales pour améliorer l'accès à une éducation de qualité pour tous les enfants.",
      impact: "1,200+ élèves scolarisés",
      year: "2021-2023"
    },
    {
      icon: Heart,
      title: "2 Centres de Santé",
      description: "Amélioration de l'accès aux soins",
      details: "Mise en place de centres de santé communautaires pour améliorer l'accès aux soins de santé primaires dans les zones défavorisées.",
      impact: "5,000+ personnes soignées annuellement",
      year: "2022-2024"
    },
    {
      icon: Users,
      title: "200+ Jeunes Encadrés",
      description: "Programme de leadership et entrepreneuriat",
      details: "Accompagnement de jeunes leaders à travers des programmes de formation en leadership, gestion et entrepreneuriat social.",
      impact: "60% ont lancé des initiatives communautaires",
      year: "2023-2024"
    },
    {
      icon: Building2,
      title: "1 Foyer pour Personnes Âgées",
      description: "Dignité et accompagnement des aînés",
      details: "Création d'un foyer moderne pour personnes âgées offrant soins, accompagnement et activités adaptées pour leur bien-être.",
      impact: "50+ aînés accueillis avec dignité",
      year: "2023"
    }
  ];

  const stats = [
    { number: "2000+", label: "Bénéficiaires directs", icon: Users },
    { number: "8", label: "Projets réalisés", icon: CheckCircle },
    { number: "15+", label: "Communautés touchées", icon: Building2 },
    { number: "100%", label: "Engagement social", icon: Heart }
  ];

  return (
    <section id="achievements" className="py-0 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Nos Réalisations</span>
              </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'impact concret de nos actions et les projets qui transforment des vies
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-500 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">{achievement.title}</h3>
                    <p className="text-primary text-sm font-medium">{achievement.description}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.details}
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground text-sm">Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.impact}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                    <Trophy className="h-4 w-4 text-gold" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Stories */}
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
              Témoignages de Réussite
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <p className="text-foreground italic mb-4">
                  "Grâce à la formation en coupe-couture, j'ai pu créer mon atelier et aujourd'hui, 
                  je forme à mon tour d'autres femmes. Cette fondation a changé ma vie."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Marie K.</p>
                    <p className="text-sm text-muted-foreground">Bénéficiaire - Programme Femmes</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <p className="text-foreground italic mb-4">
                  "Le centre de formation m'a donné les compétences nécessaires pour devenir 
                  électricien. Aujourd'hui, j'ai mon entreprise et j'emploie 3 personnes."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Jean-Paul M.</p>
                    <p className="text-sm text-muted-foreground">Bénéficiaire - Programme Jeunesse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="group">
              Voir tous nos projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Achievements;