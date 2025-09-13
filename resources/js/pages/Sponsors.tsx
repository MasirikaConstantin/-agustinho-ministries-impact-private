import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Users, 
  Star, 
  Award, 
  Heart,
  ArrowLeft,
  Handshake,
  Globe,
  CheckCircle
} from "lucide-react";
import { Link } from "@inertiajs/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsors = () => {
  const sponsorCategories = [
    {
      description: "Nos partenaires stratégiques majeurs",
      sponsors: [
        {
          name: "Groupe Bancaire International",
          logo: "GBI",
          contribution: "Financement de 3 écoles",
          since: "2021",
          impact: "1,200+ élèves bénéficiaires"
        },
        {
          name: "Fondation Santé Globale",
          logo: "FSG",
          contribution: "Équipement médical",
          since: "2022", 
          impact: "2 centres de santé équipés"
        },
        {
          name: "Entreprise Textile Moderne",
          logo: "ETM",
          contribution: "Formation en couture",
          since: "2022",
          impact: "100+ femmes formées"
        },
        {
          name: "Coopérative Agricole du Congo",
          logo: "CAC",
          contribution: "Formation agricole",
          since: "2023",
          impact: "50+ jeunes agriculteurs"
        },
        {
          name: "Institut Technologique",
          logo: "IT",
          contribution: "Formation numérique",
          since: "2023",
          impact: "75+ jeunes en informatique"
        },  
        {
          name: "Pharmacie Centrale",
          logo: "PC",
          contribution: "Médicaments",
          since: "2022",
          impact: "Soins pour 500+ personnes"
        },
        {
          name: "Librairie Éducative",
          logo: "LE",
          contribution: "Fournitures scolaires",
          since: "2021",
          impact: "300+ élèves équipés"
        },
        {
          name: "Transport Solidaire",
          logo: "TS",
          contribution: "Logistique",
          since: "2023",
          impact: "Support logistique quotidien"
        },
        {
          name: "Boulangerie du Quartier",
          logo: "BQ",
          contribution: "Alimentation événements",
          since: "2023",
          impact: "50+ événements soutenus"
        },
        {
          name: "Atelier Mécanique Local",
          logo: "AML",
          contribution: "Maintenance équipements",
          since: "2022",
          impact: "Maintenance préventive"
        }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: Star,
      title: "Visibilité",
      description: "Logo sur nos supports de communication et site web"
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Certificat de partenariat et mentions officielles"
    },
    {
      icon: Users,
      title: "Réseau",
      description: "Accès à notre réseau de partenaires et bénéficiaires"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Rapports détaillés sur l'impact de votre contribution"
    }
  ];

  const partnershipLevels = [
    {
      name: "Bronze",
      amount: "500€ - 2,000€",
      color: "from-orange-400 href-orange-600",
      benefits: [
        "Logo sur notre site web",
        "Mention dans le rapport annuel",
        "Certificat de partenariat"
      ]
    },
    {
      name: "Argent", 
      amount: "2,000€ - 5,000€",
      color: "from-gray-300 href-gray-500",
      benefits: [
        "Tous les avantages Bronze",
        "Logo sur nos supports de communication",
        "Invitation aux événements",
        "Rapport trimestriel personnalisé"
      ]
    },
    {
      name: "Or",
      amount: "5,000€ - 15,000€", 
      color: "from-yellow-400 href-yellow-600",
      benefits: [
        "Tous les avantages Argent",
        "Parrainage d'un projet spécifique",
        "Visite des projets financés",
        "Communication conjointe"
      ]
    },
    {
      name: "Platine",
      amount: "15,000€+",
      color: "from-gray-400 href-gray-600",
      benefits: [
        "Tous les avantages Or",
        "Partenariat stratégique personnalisé",
        "Siège au conseil consultatif",
        "Collaboration sur nouveaux projets"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary mt-16">
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
                <span className="text-gradient">Nos Partenaires & Sponsors</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ensemble, nous bâtissons un avenir meilleur. Découvrez nos partenaires qui rendent nos missions possibles.
              </p>
            </div>

            {/* Thank You Message */}
            <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm border-border shadow-gold">
              <div className="text-center">
                <Handshake className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gradient mb-4">Merci à nos partenaires</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Grâce à leur soutien indéfectible, nous avons pu transformer des milliers de vies 
                  et construire un avenir plus prometteur pour nos communautés. Leur engagement 
                  nous permet de poursuivre notre mission avec détermination et efficacité.
                </p>
              </div>
            </Card>

            {/* Sponsor Categories */}
            {sponsorCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.sponsors.map((sponsor, index) => (
                    <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-500">
                      <div className="text-center mb-4">
                        <div className={`w-20 h-20 bg-gradient-href-r  rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                          <span className="text-white font-bold text-lg">{sponsor.logo}</span>
                        </div>
                        <h3 className="font-bold text-foreground text-lg">{sponsor.name}</h3>
                        <p className="text-primary text-sm font-medium">Partenaire depuis {sponsor.since}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-muted/20 rounded-lg p-3 border border-border/50">
                          <p className="text-sm font-medium text-foreground mb-1">Contribution:</p>
                          <p className="text-sm text-muted-foreground">{sponsor.contribution}</p>
                        </div>
                        
                        <div className="bg-muted/20 rounded-lg p-3 border border-border/50">
                          <p className="text-sm font-medium text-foreground mb-1">Impact:</p>
                          <p className="text-sm text-muted-foreground">{sponsor.impact}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Partnership Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Avantages du partenariat
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

           

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Histoires de réussite
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Partenariat GBI - Éducation</h3>
                  <p className="text-muted-foreground mb-4">
                    Grâce au partenariat avec le Groupe Bancaire International, nous avons construit 
                    3 écoles modernes qui accueillent aujourd'hui plus de 1,200 élèves. Ce projet 
                    a transformé l'accès à l'éducation dans nos communautés rurales.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">Impact: 1,200+ élèves</span>
                    <span className="text-muted-foreground">2021-2024</span>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">Partenariat FSG - Santé</h3>
                  <p className="text-muted-foreground mb-4">
                    La Fondation Santé Globale nous a permis d'équiper 2 centres de santé 
                    avec du matériel médical moderne. Aujourd'hui, plus de 5,000 personnes 
                    bénéficient annuellement de soins de qualité.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">Impact: 5,000+ soignés/an</span>
                    <span className="text-muted-foreground">2022-2024</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Call href Action */}
            <div className="text-center">
              <div className="bg-gradient-hero rounded-lg p-8 border border-border">
                <Building className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gradient mb-4">
                  Devenez notre partenaire
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Rejoignez notre famille de partenaires engagés et participez activement 
                  à la transformation sociale. Ensemble, construisons un avenir durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/support">
                    <Button variant="hero" size="lg">
                      Devenir partenaire
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg">
                      Nous contacter
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

export default Sponsors;