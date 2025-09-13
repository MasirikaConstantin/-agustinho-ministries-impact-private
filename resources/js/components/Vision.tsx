import { Card } from "./ui/card";
import { Eye, Target, Heart, Globe } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Notre Vision & Mission</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez la vision qui nous guide et la mission qui nous anime chaque jour
              </p>
            </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Notre Vision</h3>
                  <p className="text-primary font-medium">L'avenir que nous construisons</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nous aspirons à bâtir une société où chaque personne, sans distinction d'origine, 
                de sexe ou de condition sociale, peut accéder aux ressources essentielles de la vie : 
                éducation, santé, encadrement et opportunités de développement.
              </p>
              
              <div className="bg-muted/20 rounded-lg p-4 border border-border/50">
                <p className="text-foreground font-medium italic">
                  "Une société juste et inclusive, où les talents s'épanouissent et où la solidarité 
                  devient le moteur du progrès collectif."
                </p>
              </div>
            </Card>

            {/* Mission */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Notre Mission</h3>
                  <p className="text-primary font-medium">Ce que nous faisons aujourd'hui</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Former, encadrer et accompagner les femmes, les jeunes et les communautés à travers 
                des projets concrets, durables et porteurs d'espoir.
              </p>
              
              <div className="bg-muted/20 rounded-lg p-4 border border-border/50">
                <p className="text-foreground font-medium italic">
                  "Favoriser un développement humain intégral, qui touche non seulement les aspects 
                  matériels et sociaux de la vie, mais aussi la dignité, la confiance et l'espérance 
                  de chacun."
                </p>
              </div>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gradient mb-12">
              Nos Valeurs Fondamentales
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border hover:shadow-gold transition-all duration-300">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Compassion</h4>
                <p className="text-sm text-muted-foreground">L'amour et l'empathie guident nos actions</p>
              </div>
              
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border hover:shadow-gold transition-all duration-300">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Inclusion</h4>
                <p className="text-sm text-muted-foreground">Aucune discrimination, tous égaux</p>
              </div>
              
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border hover:shadow-gold transition-all duration-300">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">La qualité dans tout ce que nous faisons</p>
              </div>
              
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border hover:shadow-gold transition-all duration-300">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Transparence</h4>
                <p className="text-sm text-muted-foreground">Honnêteté et responsabilité totales</p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-hero rounded-lg p-8 md:p-12 text-center border border-border">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              Ensemble pour un Avenir Meilleur
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Chaque vie transformée est une victoire. Chaque communauté développée est un pas vers 
              un monde plus juste. Rejoignez-nous dans cette mission de transformation sociale et 
              contribuez à bâtir un avenir où chacun peut s'épanouir pleinement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Former</div>
                <p className="text-muted-foreground">Développer les compétences et talents</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Encadrer</div>
                <p className="text-muted-foreground">Accompagner vers l'autonomie</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Transformer</div>
                <p className="text-muted-foreground">Créer un impact durable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;