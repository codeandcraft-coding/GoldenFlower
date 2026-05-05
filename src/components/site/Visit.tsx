import { MapPin, Phone, Clock } from "lucide-react";

const Visit = () => {
  return (
    <section id="visit" className="py-24 md:py-36 bg-card/40 border-t border-border">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Find us</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-8 leading-tight">
            Pull over on <span className="italic text-gold">NH106.</span>
          </h2>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Address</div>
                <p className="text-foreground">FQMC+VC2, NH106, Marbisu, Meghalaya 793121</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Reserve</div>
                <a href="tel:+918974666414" className="text-foreground hover:text-gold transition-colors">089746 66414</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Hours</div>
                <p className="text-foreground">Daily · 10:00 am — 10:00 pm</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Golden+Flower+Restaurant+Marbisu+Meghalaya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-primary-foreground font-medium shadow-gold hover:shadow-warm transition-all"
          >
            Get Directions →
          </a>
        </div>

        <div className="relative aspect-square rounded-sm overflow-hidden border border-border shadow-warm">
          <iframe
            title="Golden Flower Restaurant location"
            src="https://www.google.com/maps?q=Marbisu,Meghalaya+793121&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-[1.1]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Visit;