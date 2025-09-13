import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
    <section id="footer" className="py-2 bg-card/50">

      <footer className="mt-16 pt-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Fondation Agustinho Meschak M. MINISTRIES. Tous droits réservés.
          </p>
          <p className="text-sm text-primary font-medium">
            "Ensemble, faisons du développement humain une réalité."
          </p>
          <p className="text-sm  font-medium">
            Par : <Link href="https://niwygroup.com" className="text-primary hover:text-primary/80 transition-colors" target="_blank">Niwy Group</Link>
          </p>
        </div>
      </div>
    </footer>
    </section>
    );
}