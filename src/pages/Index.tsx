import Hero from "@/components/site/Hero";
import Story from "@/components/site/Story";
import Signatures from "@/components/site/Signatures";
import Reviews from "@/components/site/Reviews";
import Visit from "@/components/site/Visit";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const Index = () => {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Golden Flower Restaurant",
    image: "https://lovable.dev/opengraph-image-p98pqg.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "FQMC+VC2, NH106",
      addressLocality: "Marbisu",
      addressRegion: "Meghalaya",
      postalCode: "793121",
      addressCountry: "IN",
    },
    telephone: "+918974666414",
    servesCuisine: ["Indo-Chinese", "Indian"],
    priceRange: "₹1–200",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "182" },
    openingHours: "Mo-Su 10:00-22:00",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Signatures />
        <Reviews />
        <Visit />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
