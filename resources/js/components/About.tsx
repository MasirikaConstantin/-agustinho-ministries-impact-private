import { Card } from "./ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

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
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Qui sommes-nous ?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Une organisation engagée pour la transformation sociale
              </h3>
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
              <div className="bg-card/30 border-l-4 border-primary pl-6 py-4 rounded">
                <p className="text-primary font-semibold mb-2">Notre conviction profonde :</p>
                <p className="text-foreground italic">
                  "Chaque vie a une valeur inestimable et mérite d'être soutenue, 
                  orientée et valorisée."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border shadow-gold">
                <h4 className="text-xl font-bold text-gradient mb-4">Notre Philosophie</h4>
                <p className="text-muted-foreground mb-4">
                  Nous croyons qu'investir dans l'homme, c'est bâtir des générations 
                  capables de relever les défis d'aujourd'hui et de demain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span className="text-foreground">Développement humain intégral</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span className="text-foreground">Transformation sociale durable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span className="text-foreground">Accompagnement personnalisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
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
      </div>
    </section>
  );
};

export default About;