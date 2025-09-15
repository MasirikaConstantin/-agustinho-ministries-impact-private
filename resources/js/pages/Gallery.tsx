import Gallery from "@/components/gallery"
import ClientLayout from "@/layouts/ClientLayout"

const galleryItems = [
  {
    id: 1,
    src: "/storage/ecole/14.jpeg",
    title: "Construction d'un centre hospitalier et d'une école",
    description: "La Fondation Agustinho Meschack construit des centres hospitaliers et des écoles pour offrir des soins de santé et de l'éducation de qualité aux populations défavorisées des pays en développement.",
    category: "Projets",
    date: "15 Janvier 2025"
  },
  {
    id: 2,
    src: "/storage/ecole/1.jpeg",
    title: "Construction d'un centre hospitalier et d'une école",
    description: "Travail avec la communauté locale pour construire des infrastructures durables.",
    category: "Projets",
    date: "22 Mars 2023"
  },
  {
    id: 3,
    src: "/logo/logo.ico",
    title: "Programme éducatif",
    description: "Distribution de fournitures scolaires aux enfants défavorisés de la région.",
    category: "Éducation",
    date: "5 Septembre 2023"
  },
  {
    id: 4,
    src: "/logo/logo.ico",
    title: "Camp médical",
    description: "Campagne de santé offrant des soins médicaux gratuits aux communautés rurales.",
    category: "Santé",
    date: "18 Juillet 2023"
  },
  {
    id: 5,
    src: "/logo/logo.ico",
    title: "Gala de bienfaisance",
    description: "Notre événement annuel de collecte de fonds avec nos généreux donateurs.",
    category: "Événements",
    date: "12 Novembre 2023"
  },
  {
    id: 6,
    src: "/logo/logo-background.ico",
    title: "Formation agricole",
    description: "Programme de formation aux techniques agricoles durables pour les fermiers locaux.",
    category: "Développement",
    date: "30 Avril 2023"
  },
  {
    id: 7,
    src: "/logo/logo.ico",
    title: "Bibliothèque mobile",
    description: "Notre bibliothèque mobile visitant les villages éloignés chaque mois.",
    category: "Éducation",
    date: "8 Juin 2023"
  },
  {
    id: 8,
    src: "/logo/logo-background.ico",
    title: "Sensibilisation santé",
    description: "Session d'éducation sur les pratiques sanitaires essentielles.",
    category: "Santé",
    date: "25 Août 2023"
  }
]

export default function GalleryPage() {
  return (
    <ClientLayout>
    <div className="py-20 bg-gradient-secondary mt-16 px-4 sm:px-6 lg:px-8">
      

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galerie Photos</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos activités, événements et projets à travers ces moments capturés.
        </p>
      </div>

      <Gallery items={galleryItems} columns={4} />
      
    </div>
    </ClientLayout>
  )
}