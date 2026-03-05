import { Star } from "lucide-react";

const reviews = [
  {
    text: "Réka segített a kalkulációban, így pontosan tudtuk, megéri-e a felújítás. Megérte!",
    author: "K. Tamás",
    role: "befektető"
  },
  {
    text: "Végre egy ingatlanos, aki nem csak beszélt, hanem valódi megoldásokat mutatott.",
    author: "S. Anikó",
    role: "vásárló"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">
            Több mint 1000 elégedett ügyfél a GDN hálózatában
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-brand-gold mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-6 flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-dark">{review.author}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
