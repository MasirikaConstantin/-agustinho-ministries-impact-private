import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart,
  Send
} from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@fondation-agustinho.org",
      action: "mailto:contact@fondation-agustinho.org"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+243 XXX XXX XXX",
      action: "tel:+243XXXXXXX"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Kinshasa, République Démocratique du Congo",
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
  ];

  const slogans = [
    "Transformer des vies, bâtir des générations.",
    "Espoir, dignité et développement pour tous.",
    "Former aujourd'hui, inspirer demain.",
    "L'humain au cœur de notre mission.",
    "Ensemble pour un avenir meilleur.",
    "Donner des chances, changer des destins.",
    "Éduquer, soigner, accompagner, transformer."
  ];

  return (
    <>
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Rejoignez Notre Mission</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensemble, faisons du développement humain une réalité. Contactez-nous pour participer à nos initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
              <h3 className="text-2xl font-bold text-gradient mb-6">Nous Contacter</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground">
                    <option>Partenariat</option>
                    <option>Bénévolat</option>
                    <option>Don</option>
                    <option>Information générale</option>
                    <option>Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Mission */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-gold">
                <h3 className="text-2xl font-bold text-gradient mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action}
                      className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg border border-border/50 hover:shadow-gold transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                      >
                        <social.icon className="h-5 w-5 text-primary-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Mission Reminder */}
              <Card className="p-6 bg-gradient-hero border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={"/logo/logo-foundation.jpeg"} 
                    alt="Logo Fondation" 
                    className="h-12 w-12 rounded-full object-cover shadow-gold"
                  />
                  <div>
                    <h4 className="font-bold text-gradient">Fondation Agustinho Meschak M.</h4>
                    <p className="text-primary text-sm">MINISTRIES</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {slogans.slice(0, 3).map((slogan, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{slogan}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Faire la Différence Ensemble
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Votre soutien, qu'il soit financier, matériel ou par le bénévolat, 
                contribue directement à transformer des vies et à bâtir un avenir meilleur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Faire un don
                </Button>
                <Button variant="outline" size="lg">
                  Devenir bénévole
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;