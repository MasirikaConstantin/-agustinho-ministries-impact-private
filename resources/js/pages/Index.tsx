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
    <div className="min-h-screen bg-background">
      <Head>
        <title>Fondation Agustinho Meschak M.</title>
        <meta name="description" content="Fondation Agustinho Meschak M." />
        <meta name="keywords" content="Fondation Agustinho Meschak M." />
        <meta name="author" content="Fondation Agustinho Meschak M." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <Header />
      <Carousel items={carouselItems} autoPlay={true} interval={6000} />

      <Hero />
      <About />
      {/* <Services /> */}
      <SponsorsCarousel />
      {/* <Achievements /> */}
      <Vision />
      <Contact />
    </div>
  );
};

export default Index;
