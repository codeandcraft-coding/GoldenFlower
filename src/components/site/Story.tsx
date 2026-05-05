import interior from "@/assets/interior.jpg";

const Story = () => {
  return (
    <section id="story" className="py-24 md:py-36">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <img
            src={interior}
            alt="Warm interior of Golden Flower Restaurant at dusk"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-sm shadow-warm"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-sm p-6 max-w-[220px] shadow-gold">
            <div className="font-display text-4xl text-gold">4.4</div>
            <div className="eyebrow mt-2">Google · Justdial</div>
            <p className="text-xs text-muted-foreground mt-2">Loved by locals & travelers along NH106.</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 leading-tight">
            A small kitchen with a <span className="italic text-gold">big heart.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Tucked into the green folds of Marbisu, Golden Flower began as a roadside stop for travelers on the highway. Today it's a place where families linger, plates arrive sizzling, and no one leaves without a story.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our cooks fire up the wok before dawn, hand-pleat every momo, and treat the chili sauce like an heirloom. Restaurant quality. Highway-side prices.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <div className="font-display text-3xl text-gold">₹200</div>
              <div className="text-xs text-muted-foreground mt-1">Per person · approx</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">12h</div>
              <div className="text-xs text-muted-foreground mt-1">Open daily 10–10</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Hand tossed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;