import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import { Carousel } from "@/components/carousel";
import { Head } from "@inertiajs/react";
import ClientLayout from "@/layouts/ClientLayout";

const Index = () => {


const carouselItems = [
  {
    id: 1,
    title: "Bienvenue à la Fondation Agustinho Meschak M.",
    description: "Découvrez notre mission et nos actions pour construire un avenir meilleur.",
    image: "/logo-foundation.jpeg",
    ctaText: "En savoir plus",
    ctaLink: "/about"
  },
  {
    id: 2,
    title: "Soutenez notre cause",
    description: "Votre don fait la différence dans la vie de nombreuses personnes.",
    image: "/logo/logo-background.ico",
    ctaText: "Faire un don",
    ctaLink: "/donate"
  },
  {
    id: 3,
    title: "Nos programmes communautaires",
    description: "Découvrez nos initiatives pour le développement des communautés.",
    image: "/logo/logo.ico",
    ctaText: "Voir nos programmes",
    ctaLink: "/programs"
  }
]

  return (
    <ClientLayout>
     
      <Carousel items={carouselItems} autoPlay={true} interval={6000} />

      <Hero />
      <About />
      {/* <Services /> */}
      <SponsorsCarousel />
      {/* <Achievements /> */}
      <Vision />
      <Contact />
    </ClientLayout>
  );
};

export default Index;
