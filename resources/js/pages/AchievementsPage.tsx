import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  Star,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "@inertiajs/react";
import Achievements from "@/components/Achievements";
import ClientLayout from "@/layouts/ClientLayout";
import { home } from "@/routes";

const AchievementsPage = () => {
  return (
    <ClientLayout>
      
      <section className="py-20 bg-gradient-secondary mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href={home()} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </div>

            <div className="py-0">
              <Achievements />
            </div>
          </div>            
        </div>            

      </section>
      
     
    </ClientLayout>
  );
};

export default AchievementsPage;