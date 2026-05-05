import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote: "I really enjoyed the cozy ambience and the tasty food served hot.",
    author: "Google Review",
  },
  {
    quote: "This place offers restaurant dining quality and taste with fast food prices.",
    author: "Google Review",
  },
  {
    quote: "Quality food, good quantity, and warm service.",
    author: "Google Review",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">What guests say</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Rated <span className="text-gold">4.4</span> by hundreds of <span className="italic">happy diners.</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative bg-card border border-border rounded-sm p-8 hover:border-gold/50 transition-colors"
            >
              <Quote className="h-6 w-6 text-gold/40 mb-4" />
              <blockquote className="font-display text-2xl leading-snug mb-6">
                "{r.quote}"
              </blockquote>
              <figcaption className="eyebrow">{r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;