import momos from "@/assets/dish-momos.jpg";
import chili from "@/assets/dish-chili.jpg";
import noodles from "@/assets/dish-noodles.jpg";

const dishes = [
  {
    img: momos,
    name: "Steamed Momos",
    desc: "Hand-pleated parcels, fiery red chutney on the side.",
    price: "₹80",
    tag: "House favorite",
  },
  {
    img: chili,
    name: "Chilli Chicken",
    desc: "Glossy, smoky, with a slow-burning kick from fresh peppers.",
    price: "₹160",
    tag: "Most ordered",
  },
  {
    img: noodles,
    name: "Hakka Noodles",
    desc: "Wok-tossed with garden greens and a whisper of garlic.",
    price: "₹120",
    tag: "Comfort classic",
  },
];

const Signatures = () => {
  return (
    <section id="menu" className="py-24 md:py-36 bg-card/40 border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="eyebrow">The Menu</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
              Three plates we're <span className="italic text-gold">famous for.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A tiny taste of what's coming to your table. Ask about today's specials when you call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-sm bg-background border border-border hover:border-gold/50 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-gold-soft px-3 py-1.5 rounded-full">
                  {d.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span className="text-gold font-medium">{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signatures;