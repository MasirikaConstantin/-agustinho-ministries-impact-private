import Header from "@/components/Header";
import ClientTamplate from "./app/ClientTamplate";
import Footer from "@/components/Footer";
import { Head } from "@inertiajs/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClientTamplate>
             <Head>
                <title>Fondation Agustinho Meschak M.</title>
                <meta name="description" content="Fondation Agustinho Meschak M." />
                <meta name="keywords" content="Fondation Agustinho Meschak M." />
                <meta name="author" content="Fondation Agustinho Meschak M." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
            </Head>
            <Header />
            <div className="min-h-screen bg-background">

            {children}
            </div>
            <Footer/>
        </ClientTamplate>
    );
}