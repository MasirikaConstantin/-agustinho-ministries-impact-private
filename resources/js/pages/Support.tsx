import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  DollarSign, 
  HandHeart, 
  Gift, 
  Users, 
  Building,
  ArrowLeft,
  CreditCard,
  Banknote,
  Phone,
  CheckCircle
} from "lucide-react";
import { Link } from "@inertiajs/react";
import Header from "@/components/Header";

const Support = () => {
  const supportTypes = [
    {
      icon: DollarSign,
      title: "Don financier",
      description: "Contribuez directement à nos projets avec un don financier sécurisé",
      benefits: [
        "Impact immédiat sur nos programmes",
        "Reçu fiscal pour déduction d'impôts",
        "Rapport annuel de nos activités",
        "Invitation aux événements de la fondation"
      ],
      amounts: ["25", "50", "100", "250", "500", "Autre montant"]
    },
    {
      icon: HandHeart,
      title: "Bénévolat",
      description: "Offrez votre temps et vos compétences pour soutenir nos missions",
      benefits: [
        "Formation et accompagnement personnalisé",
        "Certificat de bénévolat",
        "Expérience enrichissante",
        "Réseau de bénévoles engagés"
      ],
      skills: ["Éducation", "Santé", "Formation professionnelle", "Communication", "Administration", "Autre"]
    },
    {
      icon: Gift,
      title: "Don en nature",
      description: "Donnez du matériel, des équipements ou des ressources nécessaires",
      benefits: [
        "Utilisation directe dans nos centres",
        "Reconnaissance officielle",
        "Suivi de l'utilisation des dons",
        "Impact visible et mesurable"
      ],
      needs: ["Matériel médical", "Équipement scolaire", "Machines à coudre", "Matériel informatique", "Autre"]
    },
    {
      icon: Building,
      title: "Partenariat entreprise",
      description: "Devenez partenaire officiel et soutenez durablement nos actions",
      benefits: [
        "Visibilité sur nos supports de communication",
        "Responsabilité sociale d'entreprise",
        "Partenariat sur mesure",
        "Rapports d'impact réguliers"
      ],
      packages: ["Bronze", "Argent", "Or", "Platine", "Sur mesure"]
    }
  ];

  const paymentMethods = [
    {
      icon: CreditCard,
      name: "Carte bancaire",
      description: "Paiement sécurisé en ligne"
    },
    {
      icon: Banknote,
      name: "Virement bancaire",
      description: "Virement direct sur notre compte"
    },
    {
      icon: Phone,
      name: "Mobile Money",
      description: "Airtel Money, Orange Money, M-Pesa"
    }
  ];

  const impactAreas = [
    { area: "Éducation", percentage: 40, description: "Construction et équipement d'écoles" },
    { area: "Santé", percentage: 25, description: "Centres de santé et soins médicaux" },
    { area: "Formation", percentage: 25, description: "Programmes de formation professionnelle" },
    { area: "Infrastructure", percentage: 10, description: "Administration et fonctionnement" }
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
                <span className="text-gradient">Nous Soutenir</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Votre soutien transforme des vies. Ensemble, construisons un avenir meilleur pour tous.
              </p>
            </div>

            {/* Impact Statement */}
            <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm border-border shadow-gold">
              <div className="text-center">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gradient mb-4">Votre Impact en Chiffres</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Chaque contribution compte. Découvrez comment votre soutien transforme concrètement des vies.
                </p>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">25€</div>
                    <div className="text-sm text-muted-foreground">= 1 mois de formation pour une femme</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">50€</div>
                    <div className="text-sm text-muted-foreground">= Kit complet de couture</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">100€</div>
                    <div className="text-sm text-muted-foreground">= Soins médicaux pour 10 personnes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">250€</div>
                    <div className="text-sm text-muted-foreground">= Formation complète d'un jeune</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Support Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Comment nous soutenir
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <type.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-primary">Avantages :</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {type.amounts && (
                        <div className="mt-6">
                          <h4 className="font-bold text-primary mb-3">Montants suggérés :</h4>
                          <div className="grid grid-cols-3 gap-2">
                            {type.amounts.map((amount, i) => (
                              <Button 
                                key={i} 
                                variant="outline" 
                                size="sm"
                                className="text-xs"
                              >
                                {amount.includes('€') ? amount : `${amount}€`}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {type.skills && (
                        <div className="mt-6">
                          <h4 className="font-bold text-primary mb-3">Compétences recherchées :</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {type.needs && (
                        <div className="mt-6">
                          <h4 className="font-bold text-primary mb-3">Besoins prioritaires :</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.needs.map((need, i) => (
                              <span 
                                key={i}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                              >
                                {need}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {type.packages && (
                        <div className="mt-6">
                          <h4 className="font-bold text-primary mb-3">Formules disponibles :</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {type.packages.map((pkg, i) => (
                              <Button 
                                key={i} 
                                variant="outline" 
                                size="sm"
                                className="text-xs"
                              >
                                {pkg}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-6 pt-4 border-t border-border">
                        <Button variant="hero" className="w-full">
                          Choisir cette option
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Moyens de paiement
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {paymentMethods.map((method, index) => (
                  <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Budget Transparency */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Utilisation de vos dons
              </h2>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
                <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Nous nous engageons à une transparence totale sur l'utilisation de vos dons. 
                  Voici la répartition de nos dépenses :
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {impactAreas.map((area, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{area.area}</span>
                        <span className="text-primary font-bold">{area.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${area.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gradient mb-12">
                Témoignages de nos donateurs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <p className="text-foreground italic mb-4">
                    "Soutenir cette fondation a été l'une de mes meilleures décisions. 
                    Voir l'impact direct de mon don sur la formation des femmes me remplit de joie."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Donatrice depuis 2 ans</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <p className="text-foreground italic mb-4">
                    "En tant qu'entreprise, notre partenariat avec la fondation nous permet 
                    de contribuer réellement au développement de notre communauté."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Building className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Jean-Paul K.</p>
                      <p className="text-sm text-muted-foreground">Directeur, Entreprise Partenaire</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Final Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-hero rounded-lg p-8 border border-border">
                <h3 className="text-3xl font-bold text-gradient mb-4">
                  Transformez des vies aujourd'hui
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Chaque geste compte. Chaque don transforme une vie. 
                  Rejoignez notre communauté de bienfaiteurs engagés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    <Heart className="mr-2 h-5 w-5" />
                    Faire un don maintenant
                  </Button>
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
    </div>
  );
};

export default Support;