import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Transformer des vies,</span>
            <br />
            <span className="text-foreground">bâtir des générations</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Une organisation engagée pour le développement humain à travers l'éducation, 
            la santé, l'autonomisation et la solidarité.
          </p>

          {/* Mission Statement */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-10 border border-border shadow-gold">
            <p className="text-lg md:text-xl text-foreground font-medium mb-4">
              "L'humain au cœur de notre mission"
            </p>
            <p className="text-muted-foreground">
              Nous croyons qu'investir dans l'homme, c'est bâtir des générations 
              capables de relever les défis d'aujourd'hui et de demain.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <Button variant="hero" size="lg" className="group">
                Découvrir nos actions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" size="lg" className="group">
                <Heart className="mr-2 h-5 w-5 text-primary" />
                Nous soutenir
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-muted-foreground">Domaines d'intervention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-muted-foreground">Vies transformées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">1</div>
              <div className="text-muted-foreground">Mission commune</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;