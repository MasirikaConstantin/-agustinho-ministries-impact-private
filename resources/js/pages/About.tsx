import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@inertiajs/react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Solidarité",
      description: "Nous croyons en la force de l'union pour transformer les communautés."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos projets et initiatives."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous innovons pour trouver des solutions durables aux défis sociaux."
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
                <span className="text-gradient">Qui sommes-nous ?</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez l'histoire, la mission et les valeurs qui guident notre action quotidienne
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une organisation engagée pour la transformation sociale
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  La Fondation Agustinho Meschak M. MINISTRIES est une organisation à but non lucratif 
                  engagée dans le développement humain, la promotion de l'éducation, l'amélioration de 
                  la santé et l'action philanthropique.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Elle se veut un instrument de transformation sociale, spirituelle et économique, 
                  visant à offrir à chaque individu les moyens d'épanouir pleinement son potentiel 
                  et de devenir un acteur du changement dans sa communauté.
                </p>
                <div className="bg-card/30 border-l-4 border-primary pl-6 py-4 rounded mb-6">
                  <p className="text-primary font-semibold mb-2">Notre conviction profonde :</p>
                  <p className="text-foreground italic text-lg">
                    "Chaque vie a une valeur inestimable et mérite d'être soutenue, 
                    orientée et valorisée."
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button variant="hero" size="lg">
                      Découvrir nos services
                    </Button>
                  </Link>
                  <Link href="/support">
                    <Button variant="outline" size="lg">
                      Nous soutenir
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border shadow-gold">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Notre Histoire</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Née d'une vision partagée de justice sociale et de développement humain, 
                      notre fondation a vu le jour avec l'ambition de transformer durablement 
                      la vie des communautés les plus vulnérables.
                    </p>
                    <p>
                      Depuis nos débuts, nous avons développé une approche holistique qui 
                      combine formation professionnelle, accompagnement social et construction 
                      d'infrastructures essentielles.
                    </p>
                    <p>
                      Aujourd'hui, nous sommes fiers d'être reconnus comme un acteur majeur 
                      du développement social en République Démocratique du Congo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
                <h3 className="text-2xl font-bold text-gradient mb-6 text-center">Notre Philosophie</h3>
                <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
                  Nous croyons qu'investir dans l'homme, c'est bâtir des générations 
                  capables de relever les défis d'aujourd'hui et de demain.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mx-auto mb-3"></div>
                    <span className="text-foreground font-medium">Développement humain intégral</span>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mx-auto mb-3"></div>
                    <span className="text-foreground font-medium">Transformation sociale durable</span>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mx-auto mb-3"></div>
                    <span className="text-foreground font-medium">Accompagnement personnalisé</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gradient mb-12">Nos Valeurs</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-gold transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                        <value.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gradient mb-12">Notre Équipe</h3>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
                    Notre équipe est composée de professionnels passionnés et engagés, 
                    venus d'horizons divers mais unis par une même vision : 
                    transformer des vies et bâtir un avenir meilleur pour tous.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">25+</div>
                      <div className="text-muted-foreground">Collaborateurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                      <div className="text-muted-foreground">Bénévoles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                      <div className="text-muted-foreground">Partenaires</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-hero rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Rejoignez Notre Mission
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Vous partagez nos valeurs ? Vous voulez contribuer à transformer des vies ? 
                  Rejoignez-nous dans cette belle aventure humaine.
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

export default About;