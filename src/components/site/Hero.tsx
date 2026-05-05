import hero from "@/assets/hero.jpg";
import { Star, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Steaming Indo-Chinese feast at Golden Flower Restaurant"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="container relative z-10 pb-20 pt-32 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">Marbisu · Meghalaya · Est. on the hills</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] mb-6">
            Where the hills <br />
            meet the <span className="italic text-gold">wok.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            A cozy hillside table on NH106, serving hand-tossed Indo-Chinese classics, hot momos, and slow-stirred curries — all at fast-food prices.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="tel:+918974666414"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-primary-foreground font-medium shadow-gold hover:shadow-warm transition-all"
            >
              Reserve a Table
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              See Signatures
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span><span className="text-foreground font-medium">4.4</span> · 182+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span>Open today till 10:00 pm</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span>NH106, Marbisu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;