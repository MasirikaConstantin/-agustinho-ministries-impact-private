import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Building, 
  Scissors, 
  Sparkles, 
  TrendingUp,
  School,
  Heart,
  Home,
  ArrowLeft,
  HandCoins,
  HandHeart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@inertiajs/react";

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
          text: "Programmes d’accompagnement vers l’autonomie financière et sociale, afin de briser le cycle de la dépendance et de la vulnérabilité."
        }
      ],
      stats: { beneficiaires: "150+", centres: "3", taux: "85%" }
    },
    {
      icon: GraduationCap,
      title: "Encadrement de la jeunesse",
      subtitle: "Investir dans l'avenir",
      description: "La jeunesse est le socle de l'avenir. Nous investissons dans son encadrement pour la rendre compétente et responsable.",
      actions: [
        {
          icon: Building,
          text: "Mise en place de formations professionnelles dans divers métiers adaptés au marché du travail"
        },
        {
          icon: GraduationCap,
          text: "Création de centres de formation et d’orientation pour développer les talents et encourager l’innovation"
        },
        {
          icon: Users,
          text: "Développement de programmes de leadership et d’éducation civique pour former une jeunesse consciente et engagée."
        }
      ],
      stats: { beneficiaires: "200+", centres: "5", taux: "90%" }
    },
    {
      icon: Building,
      title: "Infrastructures communautaires",
      subtitle: "Bâtir pour l'avenir",
      description: "Le développement durable passe par des infrastructures solides et accessibles à tous.",
      actions: [
        {
          icon: School,
          text: "Éducation : construction d’écoles modernes pour garantir une éducation de qualité."
        },
        {
          icon: Heart,
          text: "Santé : mise en place d’hôpitaux et de centres de santé afin d’améliorer l’accès aux soins."
        },
        {
          icon: HandHeart,
          text: "Solidarité : création de foyers pour personnes âgées, pour leur assurer dignité, sécurité et accompagnement."
        }
      ],
      stats: { beneficiaires: "5000+", centres: "8", taux: "100%" }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-background mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </div>

            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Nos Services</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trois piliers fondamentaux pour un développement humain intégral et durable
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-500">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                          <service.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-primary font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-muted/20 rounded-lg border border-border/50">
                          <div className="text-lg font-bold text-gradient">{service.stats.beneficiaires}</div>
                          <div className="text-xs text-muted-foreground">Bénéficiaires</div>
                        </div>
                        <div className="text-center p-3 bg-muted/20 rounded-lg border border-border/50">
                          <div className="text-lg font-bold text-gradient">{service.stats.centres}</div>
                          <div className="text-xs text-muted-foreground">Centres</div>
                        </div>
                        <div className="text-center p-3 bg-muted/20 rounded-lg border border-border/50">
                          <div className="text-lg font-bold text-gradient">{service.stats.taux}</div>
                          <div className="text-xs text-muted-foreground">Succès</div>
                        </div>
                      </div>
                      
                      <Link href="/contact">
                        <Button variant="hero" className="w-full group mt-3">
                          S'inscrire maintenant
                          <service.icon className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-xl font-bold text-gradient">Nos Actions Concrètes</h3>
                      {service.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg border border-border/50 hover:shadow-gold transition-all duration-300">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <action.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground leading-relaxed font-medium">{action.text}</p>
                            <div className="mt-2 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">Programme actif</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Process Section */}
            <div className="mt-20 mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Comment nous procédons
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Identification</h3>
                  <p className="text-sm text-muted-foreground">Nous identifions les besoins spécifiques de chaque communauté</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Planification</h3>
                  <p className="text-sm text-muted-foreground">Nous élaborons des programmes adaptés et durables</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Mise en œuvre</h3>
                  <p className="text-sm text-muted-foreground">Nous exécutons les projets avec rigueur et transparence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground">4</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Suivi</h3>
                  <p className="text-sm text-muted-foreground">Nous accompagnons et évaluons l'impact de nos actions</p>
                </div>
              </div>
            </div>

            {/* Call href Action */}
            <div className="text-center">
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Rejoignez nos programmes
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Que vous soyez une femme en quête d'autonomie, un jeune désireux d'apprendre, 
                  ou une communauté en besoin d'infrastructure, nous avons un programme pour vous.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="hero" size="lg">
                      Nous contacter
                    </Button>
                  </Link>
                  <Link href="/achievements">
                    <Button variant="outline" size="lg">
                      Voir nos réalisations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;