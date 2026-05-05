import { Phone } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-gold font-display text-2xl tracking-wide">Golden Flower</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Marbisu</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#story" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-gold transition-colors">Signatures</a>
          <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
        </nav>
        <a
          href="tel:+918974666414"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          <Phone className="h-3.5 w-3.5" /> <span className="hidden sm:inline">089746 66414</span>
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;