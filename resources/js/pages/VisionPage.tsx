import { Card } from "@/components/ui/card";
import { Eye, Target, Heart, Globe, ArrowLeft } from "lucide-react";
import Vision from "@/components/Vision";
import { Link } from "@inertiajs/react";
import ClientLayout from "@/layouts/ClientLayout";
import { home } from "@/routes";

const VisionPage = () => {
  return (
    <ClientLayout>
      
      <section className="py-20 bg-background mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href={home()} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
              <div className="py-0">
              <Vision />
            </div>
            </div>
            
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};

export default VisionPage;