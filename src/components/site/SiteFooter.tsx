const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-2xl text-gold">Golden Flower</div>
        <p>© {new Date().getFullYear()} Golden Flower Restaurant · Marbisu, Meghalaya</p>
        <a href="tel:+918974666414" className="hover:text-gold transition-colors">089746 66414</a>
      </div>
    </footer>
  );
};

export default SiteFooter;