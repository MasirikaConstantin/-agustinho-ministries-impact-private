import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Users, 
  GraduationCap, 
  Building, 
  Scissors, 
  Sparkles, 
  TrendingUp,
  School,
  Heart,
  Home
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Autonomisation de la femme",
      subtitle: "Favoriser l'indépendance féminine",
      description: "Parce que la femme est un pilier de la société, nous mettons en place des initiatives concrètes pour favoriser son indépendance.",
      actions: [
        {
          icon: Scissors,
          text: "Formation des filles-mères en coupe et couture pour leur offrir une seconde chance"
        },
        {
          icon: Sparkles,
          text: "Ateliers en esthétique et métiers de beauté pour stimuler l'entrepreneuriat féminin"
        },
        {
          icon: TrendingUp,
          text: "Programmes d'accompagnement vers l'autonomie financière et sociale"
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Encadrement de la jeunesse",
      subtitle: "Investir dans l'avenir",
      description: "La jeunesse est le socle de l'avenir. Nous investissons dans son encadrement pour la rendre compétente et responsable.",
      actions: [
        {
          icon: Building,
          text: "Formations professionnelles dans divers métiers adaptés au marché du travail"
        },
        {
          icon: GraduationCap,
          text: "Centres de formation et d'orientation pour développer les talents"
        },
        {
          icon: Users,
          text: "Programmes de leadership et d'éducation civique pour une jeunesse engagée"
        }
      ]
    },
    {
      icon: Building,
      title: "Infrastructures communautaires",
      subtitle: "Bâtir pour l'avenir",
      description: "Le développement durable passe par des infrastructures solides et accessibles à tous.",
      actions: [
        {
          icon: School,
          text: "Construction d'écoles modernes pour garantir une éducation de qualité"
        },
        {
          icon: Heart,
          text: "Mise en place d'hôpitaux et centres de santé pour améliorer l'accès aux soins"
        },
        {
          icon: Home,
          text: "Création de foyers pour personnes âgées pour leur assurer dignité et sécurité"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Nos domaines d'intervention</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois piliers fondamentaux pour un développement humain intégral et durable
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Button variant="hero" className="group">
                      En savoir plus
                      <service.icon className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>

                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {service.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <action.icon className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-foreground leading-relaxed">{action.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Rejoignez notre mission
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ensemble, nous pouvons faire la différence dans la vie de milliers de personnes. 
                Chaque contribution compte pour transformer des vies et bâtir un avenir meilleur.
              </p>
              <Button variant="hero" size="lg">
                Participer à nos programmes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;