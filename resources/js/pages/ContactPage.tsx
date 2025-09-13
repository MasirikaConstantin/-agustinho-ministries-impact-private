import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart,
  Send,
  ArrowLeft
} from "lucide-react";
import { Link } from "@inertiajs/react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import ClientLayout from "@/layouts/ClientLayout";
import { home } from "@/routes";

const ContactPage = () => {
  return (
    <ClientLayout>
      <Header />
      
      <section className="py-20 bg-gradient-secondary mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href={home()} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </div>

            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Nous Contacter</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ensemble, faisons du développement humain une réalité. Contactez-nous pour participer à nos initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use the existing Contact component but without header styling */}
      <div className="py-0">
        <Contact />
      </div>
    </ClientLayout>
  );
};

export default ContactPage;